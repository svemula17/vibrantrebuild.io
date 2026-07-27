#!/usr/bin/env python3
"""Generate the Vibrant Inc company brochure PDF (brand system, 6 pages).
Output: public/Vibrant-Company-Brochure.pdf
Run from repo root: python3 scripts/generate-brochure.py
"""
import math
from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import Color, HexColor
from reportlab.pdfgen import canvas as pdfcanvas

W, H = letter  # 612 x 792
M = 54         # page margin

# ── Brand tokens (mirrors tailwind.config.ts) ──────────────────────────
CREAM   = HexColor("#FAF9F7")
CREAM2  = HexColor("#FFF6F2")
WHITE   = HexColor("#FFFFFF")
INK     = HexColor("#1A1512")
MUTED   = HexColor("#57534E")
FAINT   = HexColor("#78716C")
BORDER  = HexColor("#E7E3DE")
B300    = HexColor("#F5A623")
B400    = HexColor("#E8703A")
B500    = HexColor("#E05A1F")
B600    = HexColor("#C8401A")
B700    = HexColor("#A33315")
B800    = HexColor("#7D250E")

F    = "Helvetica"
FB   = "Helvetica-Bold"
FO   = "Helvetica-Oblique"

LOGO   = "vibrant-logo-full.png"
VICON  = "vibrant-v-icon.png"
HERO   = "assets/hero.jpg"
SURESH = "assets/team/suresh-reddy.jpg"
US_OFF = "assets/offices/us-office.jpg"
IN_OFF = "assets/offices/india-office.jpg"
ANNIV  = "assets/anniversary.png"

c = pdfcanvas.Canvas("public/Vibrant-Company-Brochure.pdf", pagesize=letter)
c.setTitle("Vibrant Inc Company Brochure")
c.setAuthor("Vibrant Inc")


# ── helpers ────────────────────────────────────────────────────────────
def gradient(x, y, w, h_, colors=(B700, B600, B500)):
    """Horizontal brand gradient via thin bands (portable)."""
    steps = 96
    for i in range(steps):
        t = i / (steps - 1)
        if t < 0.55:
            k = t / 0.55
            c0, c1 = colors[0], colors[1]
        else:
            k = (t - 0.55) / 0.45
            c0, c1 = colors[1], colors[2]
        r = c0.red + (c1.red - c0.red) * k
        g = c0.green + (c1.green - c0.green) * k
        b = c0.blue + (c1.blue - c0.blue) * k
        c.setFillColor(Color(r, g, b))
        c.rect(x + w * i / steps, y, w / steps + 1, h_, stroke=0, fill=1)


def halftone(cx, cy, rings=7, base_r=26, color=B300, alpha=0.35, max_dot=5.2):
    """Concentric halftone dot arcs, the brand's background motif."""
    for ring in range(rings):
        rad = base_r + ring * 16
        n = max(10, int(rad / 4.5))
        for i in range(n):
            a = (i / n) * 2 * math.pi
            dx, dy = cx + rad * math.cos(a), cy + rad * math.sin(a)
            if -20 < dx < W + 20 and -20 < dy < H + 20:
                size = max(0.8, max_dot - ring * 0.55)
                c.setFillColor(Color(color.red, color.green, color.blue, alpha))
                c.circle(dx, dy, size, stroke=0, fill=1)


def tracked(x, y, text, font, size, color, track=2.0, center_at=None):
    """Letter-spaced text via a text object (canvas.setCharSpace is gone in RL5)."""
    if center_at is not None:
        w_ = c.stringWidth(text, font, size) + track * max(0, len(text) - 1)
        x = center_at - w_ / 2
    t = c.beginText(x, y)
    t.setFont(font, size)
    t.setCharSpace(track)
    t.setFillColor(color)
    t.textOut(text)
    t.setCharSpace(0)  # reset text state; Tc persists across text objects
    t.textOut("")
    c.drawText(t)


def eyebrow(x, y, text, color=B700, size=8.5, track=2.2):
    tracked(x, y, text.upper(), FB, size, color, track)


def wrap(text, font, size, width):
    words, lines, cur = text.split(), [], ""
    for w_ in words:
        t = (cur + " " + w_).strip()
        if c.stringWidth(t, font, size) <= width:
            cur = t
        else:
            lines.append(cur)
            cur = w_
    if cur:
        lines.append(cur)
    return lines


def para(x, y, text, width, font=F, size=10.2, leading=15.5, color=MUTED):
    c.setFont(font, size)
    c.setFillColor(color)
    for ln in wrap(text, font, size, width):
        c.drawString(x, y, ln)
        y -= leading
    return y


def footer(page_no, label):
    tracked(M, 30, "VIBRANT INC", F, 7.5, FAINT, 1.4)
    lbl = f"{label}   ·   {page_no:02d}"
    w_ = c.stringWidth(lbl, F, 7.5) + 1.4 * max(0, len(lbl) - 1)
    tracked(W - M - w_, 30, lbl, F, 7.5, FAINT, 1.4)
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.6)
    c.line(M, 44, W - M, 44)


# ═══ PAGE 1 · COVER ════════════════════════════════════════════════════
c.setFillColor(CREAM)
c.rect(0, 0, W, H, stroke=0, fill=1)
halftone(W - 60, H - 90, rings=9, base_r=30, alpha=0.30)

c.drawImage(LOGO, M, H - 130, width=132, height=112, mask="auto", preserveAspectRatio=True)

eyebrow(M, H - 306, "Enterprise Technology Consulting  ·  Est. 2000", size=9, track=2.6)

c.setFillColor(INK)
c.setFont(FB, 26)
c.drawString(M, H - 348, "Optimizing your efficiency.")
c.drawString(M, H - 382, "Strengthening your bottom line.")

c.setFont(F, 13)
c.setFillColor(MUTED)
c.drawString(M, H - 428, "ERP   ·   Cloud   ·   Cybersecurity   ·   Data   ·   AI")

# 27-years pill
pill_w = 238
c.setStrokeColor(B600)
c.setLineWidth(1)
c.setFillColor(Color(B600.red, B600.green, B600.blue, 0.08))
c.roundRect(M, H - 486, pill_w, 30, 15, stroke=1, fill=1)
tracked(0, H - 476, "CELEBRATING 27 YEARS IN BUSINESS", FB, 9.5, B700, 1.6, center_at=M + pill_w / 2)

# bottom gradient band with halftone + wordmark
gradient(0, 0, W, 218)
halftone(90, 40, rings=8, base_r=22, color=WHITE, alpha=0.16, max_dot=4.4)
c.setFillColor(WHITE)
c.setFont(FB, 21)
c.drawString(M, 150, "Helping Mid-Market and Enterprise")
c.drawString(M, 122, "Companies Modernize Without Disruption")
c.setFont(F, 11)
c.setFillColor(Color(1, 1, 1, 0.85))
c.drawString(M, 88, "Founder-led senior teams. Princeton, NJ and Hyderabad, India.")
tracked(M, 56, "WWW.VIBRANTINC.COM", FB, 12, WHITE, 1.8)
c.showPage()

# ═══ PAGE 2 · WHO WE ARE ═══════════════════════════════════════════════
c.setFillColor(WHITE)
c.rect(0, 0, W, H, stroke=0, fill=1)
c.setFillColor(CREAM)
c.rect(0, H - 118, W, 118, stroke=0, fill=1)
gradient(0, H - 122, W, 4)

eyebrow(M, H - 66, "Who we are")
c.setFillColor(INK)
c.setFont(FB, 24)
c.drawString(M, H - 96, "Built on integrity since 2000.")

y = H - 170
y = para(M, y, "Vibrant Inc opened its doors in 2000 with a simple model: put senior "
               "practitioners on every engagement and finish what we start. Twenty-seven "
               "years on, clients across North America still call us when ERP, cloud, or "
               "data work has to land on time and keep running.", W - 2 * M - 190)
y -= 6
y = para(M, y, "From ERP and cloud to data, cybersecurity, and AI, our architects and "
               "engagement managers own every engagement from discovery through steady "
               "state. We are NMSDC Certified, an E-Verify Partner, and Oracle and "
               "Microsoft partners. Those credentials show in how we build teams and "
               "how we deliver.", W - 2 * M - 190)

# 27-years poster, right side
c.drawImage(ANNIV, W - M - 158, H - 372, width=158, height=193, mask="auto", preserveAspectRatio=True)

# vision quote
qy = y - 26
c.setFillColor(B600)
c.rect(M, qy - 66, 3, 70, stroke=0, fill=1)
c.setFont(FO, 11.5)
c.setFillColor(INK)
for i, ln in enumerate(wrap('"Be the partner of choice, empowering businesses to leverage cloud '
                            'technology and data analytics for competitive advantage, sustained '
                            'performance, and long-term growth."', FO, 11.5, W - 2 * M - 200)):
    c.drawString(M + 16, qy - 16 - i * 16, ln)

# stats band
sb_y = 168
gradient(M, sb_y, W - 2 * M, 108)
stats = [("27+", "Years of innovation"), ("200+", "Engagements since 2000"),
         ("50+", "Enterprise clients"), ("24x7", "Managed IT support")]
seg = (W - 2 * M) / 4
for i, (v, lbl) in enumerate(stats):
    cx = M + seg * i + seg / 2
    c.setFillColor(WHITE)
    c.setFont(FB, 26)
    c.drawCentredString(cx, sb_y + 58, v)
    c.setFont(F, 8.2)
    c.setFillColor(Color(1, 1, 1, 0.9))
    for j, ln in enumerate(wrap(lbl, F, 8.2, seg - 18)):
        c.drawCentredString(cx, sb_y + 40 - j * 11, ln)

# certification chips
chips = ["NMSDC Certified MBE", "E-Verify Partner", "Oracle Partner", "Microsoft Partner Network", "Wrike Solution Partner"]
cx, cy_ = M, 120
for ch in chips:
    wch = c.stringWidth(ch, FB, 7.5) + 20
    if cx + wch > W - M:
        cx, cy_ = M, cy_ - 30
    c.setStrokeColor(BORDER)
    c.setFillColor(CREAM)
    c.roundRect(cx, cy_, wch, 22, 11, stroke=1, fill=1)
    c.setFillColor(MUTED)
    c.setFont(FB, 7.5)
    c.drawString(cx + 10, cy_ + 7.5, ch)
    cx += wch + 8
footer(2, "Who we are")
c.showPage()

# ═══ PAGE 3 · SEVEN CAPABILITIES ═══════════════════════════════════════
c.setFillColor(CREAM)
c.rect(0, 0, W, H, stroke=0, fill=1)
halftone(W - 40, H - 40, rings=6, base_r=20, alpha=0.22)

eyebrow(M, H - 66, "What we do")
c.setFillColor(INK)
c.setFont(FB, 23)
c.drawString(M, H - 96, "Seven Capabilities. One Vibrant Partner.")

caps = [
    ("01", "ERP & Enterprise Applications",
     "One ERP practice, every major platform: SAP, JD Edwards CNC, PeopleSoft, Oracle EBS, Workday, and Dynamics 365."),
    ("02", "Cloud Modernization",
     "Azure, AWS, and GCP landing zones, migrations, and platform engineering without the rip-and-replace risk."),
    ("03", "Cybersecurity & Compliance",
     "Zero-trust architecture, hardened identity, always-on SOC coverage, and audit-ready SOC 2, HIPAA, PCI, and CMMC."),
    ("04", "Data & Analytics",
     "Modern data platforms on Snowflake and Databricks with decision-grade reporting in Power BI and Tableau."),
    ("05", "Automation",
     "Process discovery, RPA, and intelligent document processing that hand hours back to your teams."),
    ("06", "AI Readiness",
     "AI as an accelerator, not a science project: readiness assessments and pilots that show up in the P&L."),
    ("07", "Managed IT",
     "Round-the-clock depth for lean IT teams: applications, cloud operations, security, and service desk."),
]
col_w = (W - 2 * M - 20) / 2
card_h = 118
positions = []
for i in range(7):
    col = i % 2
    row = i // 2
    x = M + col * (col_w + 20)
    y0 = H - 140 - row * (card_h + 14) - card_h
    positions.append((x, y0))
for (num, title, body), (x, y0) in zip(caps, positions):
    c.setFillColor(WHITE)
    c.setStrokeColor(BORDER)
    c.roundRect(x, y0, col_w, card_h, 10, stroke=1, fill=1)
    c.setFillColor(B600)
    c.rect(x, y0 + 14, 3, card_h - 28, stroke=0, fill=1)
    c.setFillColor(B400)
    c.setFont(FB, 9)
    c.drawString(x + 16, y0 + card_h - 24, num)
    c.setFillColor(INK)
    c.setFont(FB, 11.5)
    c.drawString(x + 34, y0 + card_h - 25, title)
    yy = y0 + card_h - 46
    c.setFont(F, 9)
    c.setFillColor(MUTED)
    for ln in wrap(body, F, 9, col_w - 48):
        c.drawString(x + 16, yy, ln)
        yy -= 13
c.setFont(F, 9.5)
c.setFillColor(FAINT)
c.drawString(M, 66, "Full service catalog, guides, and the S/4HANA cost calculator: www.vibrantinc.com/services")
footer(3, "Seven capabilities")
c.showPage()

# ═══ PAGE 4 · SAP DEPTH + VIBRANT METHOD ═══════════════════════════════
c.setFillColor(WHITE)
c.rect(0, 0, W, H, stroke=0, fill=1)
c.setFillColor(CREAM)
c.rect(0, H - 118, W, 118, stroke=0, fill=1)
gradient(0, H - 122, W, 4)

eyebrow(M, H - 66, "ERP and SAP depth")
c.setFillColor(INK)
c.setFont(FB, 24)
c.drawString(M, H - 96, "Every SAP discipline under one roof.")

y = H - 156
y = para(M, y, "One SAP team, accountable for the whole lifecycle. We implement S/4HANA, keep "
               "production stable through AMS, modernize supply chain execution, extend cleanly "
               "on BTP, and design Fiori experiences users actually adopt. Because most estates "
               "are not SAP-only, the same practice carries JD Edwards CNC and PeopleSoft depth.",
         W - 2 * M)

sap_items = ["S/4HANA Implementation & Migration", "Application Management (AMS)",
             "Supply Chain: EWM · TM · IBP · PP", "Business Technology Platform (BTP)",
             "Integration: EDI, IDoc, APIs", "Fiori & UI5 User Experience",
             "Clean Core & Upgrades", "ABAP & Custom Development",
             "JD Edwards CNC Services", "PeopleSoft HCM / FSCM"]
iy = y - 18
for i, item in enumerate(sap_items):
    col = i % 2
    row = i // 2
    x = M + col * ((W - 2 * M) / 2)
    yy = iy - row * 24
    c.setFillColor(B600)
    c.circle(x + 4, yy + 3, 2.4, stroke=0, fill=1)
    c.setFillColor(INK)
    c.setFont(F, 10)
    c.drawString(x + 16, yy, item)

# VIBRANT Method
my = 268
c.setFillColor(CREAM2)
c.roundRect(M - 10, 96, W - 2 * M + 20, my - 34, 14, stroke=0, fill=1)
eyebrow(M + 6, my + 20, "Our delivery framework")
c.setFillColor(INK)
c.setFont(FB, 17)
c.drawString(M + 6, my - 4, "The VIBRANT Method: agile delivery, enterprise accountability.")

steps = [("V", "Value Discovery"), ("I", "Iterative Design"), ("B", "Build in Sprints"),
         ("R", "Refine & Validate"), ("A", "Activate & Adopt"), ("N", "Nurture & Optimize"),
         ("T", "Transform & Scale")]
seg = (W - 2 * M) / 7
for i, (letter_, name) in enumerate(steps):
    cx = M + seg * i + seg / 2
    tile = 34
    gradient(cx - tile / 2, my - 66, tile, tile)
    c.setFillColor(WHITE)
    c.setFont(FB, 16)
    c.drawCentredString(cx, my - 66 + 10, letter_)
    c.setFillColor(INK)
    c.setFont(FB, 6.8)
    for j, ln in enumerate(wrap(name, FB, 6.8, seg - 6)):
        c.drawCentredString(cx, my - 82 - j * 9, ln)
c.setFont(F, 9)
c.setFillColor(MUTED)
c.drawCentredString(W / 2, 116, "Seven letters, seven phases. Senior-led sprints, weekly demos, and outcomes you can measure.")
footer(4, "SAP depth and method")
c.showPage()

# ═══ PAGE 5 · AI SHIELD + PROOF ════════════════════════════════════════
c.setFillColor(CREAM)
c.rect(0, 0, W, H, stroke=0, fill=1)

# AI Shield gradient panel
py = H - 402
gradient(M - 10, py, W - 2 * M + 20, 330)
halftone(W - 110, H - 120, rings=6, base_r=18, color=WHITE, alpha=0.14, max_dot=4)
tracked(M + 14, py + 296, "FEATURED PLATFORM", FB, 8.5, Color(1, 1, 1, 0.9), 2.2)
c.setFillColor(WHITE)
c.setFont(FB, 21)
c.drawString(M + 14, py + 266, "AI Shield: security that thinks")
c.drawString(M + 14, py + 240, "faster than attackers.")
c.setFont(F, 10)
c.setFillColor(Color(1, 1, 1, 0.9))
for i, ln in enumerate(wrap("Our proprietary detection-and-response capability uses machine learning and "
                            "behavioral analytics to spot what rule-based tools miss and neutralize it in "
                            "minutes, not hours.", F, 10, W - 2 * M - 40)):
    c.drawString(M + 14, py + 216 - i * 14, ln)

features = [("ML-powered detection", "Models tuned to your environment cut false positives."),
            ("Behavioral analytics", "Baselines every user, flags the deviations that matter."),
            ("Automated response", "Pre-approved playbooks contain threats day or night."),
            ("Predictive intelligence", "Pattern analysis that warns before attacks land.")]
fw = (W - 2 * M - 20 - 14) / 2
for i, (t, b) in enumerate(features):
    col, row = i % 2, i // 2
    fx = M + 4 + col * (fw + 14)
    fy = py + 96 - row * 74
    c.setFillColor(Color(1, 1, 1, 0.13))
    c.roundRect(fx, fy, fw, 62, 9, stroke=0, fill=1)
    c.setFillColor(WHITE)
    c.setFont(FB, 10)
    c.drawString(fx + 12, fy + 40, t)
    c.setFont(F, 8.6)
    c.setFillColor(Color(1, 1, 1, 0.88))
    for j, ln in enumerate(wrap(b, F, 8.6, fw - 24)):
        c.drawString(fx + 12, fy + 24 - j * 11, ln)

# proof metrics
eyebrow(M, 330, "Client outcomes")
c.setFillColor(INK)
c.setFont(FB, 17)
c.drawString(M, 306, "Results that show up in the business.")
proofs = [("40%", "faster month-end close", "Global Manufacturer · SAP S/4HANA"),
          ("$3M+", "annual savings", "Retail Distributor · Supply Chain"),
          ("60%", "faster reporting", "Healthcare Network · Azure & Data")]
pw = (W - 2 * M - 28) / 3
for i, (metric, lbl, who) in enumerate(proofs):
    x = M + i * (pw + 14)
    c.setFillColor(WHITE)
    c.setStrokeColor(BORDER)
    c.roundRect(x, 170, pw, 118, 10, stroke=1, fill=1)
    c.setFillColor(B600)
    c.setFont(FB, 27)
    c.drawString(x + 14, 250, metric)
    c.setFillColor(INK)
    c.setFont(FB, 9.5)
    for j, ln in enumerate(wrap(lbl, FB, 9.5, pw - 28)):
        c.drawString(x + 14, 232 - j * 12, ln)
    c.setFont(F, 7.8)
    c.setFillColor(FAINT)
    for j, ln in enumerate(wrap(who, F, 7.8, pw - 28)):
        c.drawString(x + 14, 196 - j * 10, ln)

c.setFont(F, 8.6)
c.setFillColor(FAINT)
c.drawString(M, 132, "Trusted by companies across North America including Amphenol, TEKsystems, Vaco, Radiant Systems,")
c.drawString(M, 120, "V-Soft Consulting, MOURI Tech, Enavate, Infojini, iLink Digital, and more.")
footer(5, "AI Shield and outcomes")
c.showPage()

# ═══ PAGE 6 · LEADERSHIP + CONTACT (BACK) ══════════════════════════════
c.setFillColor(WHITE)
c.rect(0, 0, W, H, stroke=0, fill=1)
c.setFillColor(CREAM)
c.rect(0, H - 118, W, 118, stroke=0, fill=1)
gradient(0, H - 122, W, 4)

eyebrow(M, H - 66, "Leadership")
c.setFillColor(INK)
c.setFont(FB, 24)
c.drawString(M, H - 96, "Senior architects. Founder-led delivery.")

c.drawImage(SURESH, M, H - 300, width=118, height=122, mask="auto", preserveAspectRatio=True)
c.setFillColor(INK)
c.setFont(FB, 13)
c.drawString(M + 136, H - 168, "Suresh Reddy")
c.setFillColor(B700)
c.setFont(FB, 9.5)
c.drawString(M + 136, H - 184, "Founder & President  ·  ITIL Foundation Certified")
para(M + 136, H - 202, "27 years leading enterprise transformation across cloud, enterprise "
     "applications, DevOps, and AI for Fortune 500 partners.", W - M - 200 - 136, size=9.2, leading=13)

leaders = [("Chaitanya Kumar Komatireddy", "Principal Enterprise Architect"),
           ("Sathish Donthula", "Principal SAP Solution Architect"),
           ("Dishanth", "Principal Cybersecurity Architect"),
           ("AI Practice", "Principal AI Solutions Architect")]
ly = H - 330
for name, role in leaders:
    c.setFillColor(B600)
    c.circle(M + 4, ly + 3, 2.4, stroke=0, fill=1)
    c.setFillColor(INK)
    c.setFont(FB, 10)
    c.drawString(M + 16, ly, name)
    c.setFillColor(MUTED)
    c.setFont(F, 9)
    c.drawString(M + 16 + c.stringWidth(name, FB, 10) + 10, ly, role)
    ly -= 20

# Offices
oy = ly - 26
eyebrow(M, oy, "Two offices, one delivery model")
box_w = (W - 2 * M - 16) / 2
for i, (img, title, comp, lines) in enumerate([
    (US_OFF, "Princeton, New Jersey · Headquarters", "Vibrant Inc",
     ["5 Independence Way, Suite 300", "Princeton, NJ 08540, United States", "609-945-2244"]),
    (IN_OFF, "Hyderabad, India · Delivery Center", "PYS IT Services Private Limited",
     ["KNR Square, 3rd Floor, Opp. 'The Platina'", "Gachibowli, Kondapur, Hyderabad 500032"])]):
    x = M + i * (box_w + 16)
    c.setFillColor(WHITE)
    c.setStrokeColor(BORDER)
    c.roundRect(x, oy - 158, box_w, 146, 10, stroke=1, fill=1)
    c.drawImage(img, x + 12, oy - 90, width=box_w - 24, height=66, mask="auto",
                preserveAspectRatio=True, anchor="c")
    c.setFillColor(INK)
    c.setFont(FB, 9.5)
    c.drawString(x + 12, oy - 106, title)
    c.setFillColor(B700)
    c.setFont(FB, 8)
    c.drawString(x + 12, oy - 118, comp)
    c.setFillColor(MUTED)
    c.setFont(F, 8)
    for j, ln in enumerate(lines):
        c.drawString(x + 12, oy - 130 - j * 10, ln)

# bottom gradient contact band
gradient(0, 0, W, 96)
c.setFillColor(WHITE)
c.setFont(FB, 14)
c.drawString(M, 62, "Ready when you are. Schedule a call.")
c.setFont(F, 10)
c.setFillColor(Color(1, 1, 1, 0.92))
c.drawString(M, 40, "609-945-2244   ·   info@vibrantinc.com   ·   www.vibrantinc.com")
c.setFont(F, 8.5)
c.drawString(M, 22, "LinkedIn: /company/vibrant-inc   ·   Facebook: /VibrantIncNJ   ·   X: @VibrantInc")
c.showPage()

c.save()
print("brochure written: public/Vibrant-Company-Brochure.pdf")
