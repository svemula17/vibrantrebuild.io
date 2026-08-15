#!/usr/bin/env python3
"""Generate the Vibrant Inc company brochure PDF (brand system, 12 pages).
Output: public/Vibrant-Company-Brochure.pdf
Run from repo root: python3 scripts/generate-brochure.py

Reproducibility note: every image this script reads lives in the repo under
assets/. An earlier revision pulled cover and band artwork from a session
scratchpad under /tmp, which was deleted, so the brochure could not be
regenerated. Do not reintroduce paths outside the repo.
"""
import math
import re as _re
import os
import atexit
import shutil
import tempfile
from PIL import Image
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

HERO   = "assets/hero-team.jpg"
SURESH = "assets/team/suresh-reddy.jpg"
US_OFF = "assets/offices/us-office.jpg"
ANNIV  = "assets/anniversary.png"
IN_OFF = "assets/offices/india-office.jpg"

# Company age is derived, not hardcoded: founded 2000. assets/anniversary.png
# is the client-supplied poster and has the number baked in, so it must be
# re-exported whenever YEARS changes.
FOUNDED = 2000
YEARS = 2026 - FOUNDED  # 26

c = pdfcanvas.Canvas("public/Vibrant-Company-Brochure.pdf", pagesize=letter)
c.setTitle("Vibrant Inc Company Brochure")
c.setAuthor("Vibrant Inc")


# ── image prep ─────────────────────────────────────────────────────────
# ReportLab embeds source pixels as-is, and assets/services/*.jpg are up to
# 3600px wide, which pushed the PDF past 5 MB. Each image is center-cropped to
# the box it will occupy and resampled to 2x the print size first.
_TMP = tempfile.mkdtemp(prefix="vibrant-brochure-")
atexit.register(shutil.rmtree, _TMP, ignore_errors=True)
_cache = {}


def fit(path, box_w_pt, box_h_pt, dpi_scale=2, quality=82, grayscale=False):
    """Center-crop to the box aspect, resample to 2x print size, return a path."""
    key = (path, round(box_w_pt), round(box_h_pt), grayscale)
    if key in _cache:
        return _cache[key]
    tw, th = int(box_w_pt * dpi_scale), int(box_h_pt * dpi_scale)
    im = Image.open(path).convert("RGB")
    sw, sh = im.size
    target = tw / th
    if sw / sh > target:                      # source wider, crop sides
        nw = int(sh * target)
        im = im.crop(((sw - nw) // 2, 0, (sw - nw) // 2 + nw, sh))
    else:                                     # source taller, crop top/bottom
        nh = int(sw / target)
        im = im.crop((0, (sh - nh) // 2, sw, (sh - nh) // 2 + nh))
    im = im.resize((tw, th), Image.LANCZOS)
    if grayscale:
        im = im.convert("L").convert("RGB")
    out = os.path.join(_TMP, f"{len(_cache)}-{os.path.basename(path)}")
    im.save(out, "JPEG", quality=quality, optimize=True)
    _cache[key] = out
    return out


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


def gradient_tint(x, y, w, h_, alpha=0.80, colors=(B700, B600, B500)):
    """Brand gradient laid over artwork. Replaces the near-black wash that was
    used to win title legibility, which read as off-brand dark brown."""
    steps = 96
    for i in range(steps):
        t = i / (steps - 1)
        if t < 0.55:
            k, c0, c1 = t / 0.55, colors[0], colors[1]
        else:
            k, c0, c1 = (t - 0.55) / 0.45, colors[1], colors[2]
        r = c0.red + (c1.red - c0.red) * k
        g = c0.green + (c1.green - c0.green) * k
        b = c0.blue + (c1.blue - c0.blue) * k
        c.setFillColor(Color(r, g, b, alpha))
        c.rect(x + w * i / steps, y, w / steps + 1, h_, stroke=0, fill=1)


def scrim(x, y, w, h_, top_alpha=0.92, bottom_alpha=0.16, color=B800):
    """Vertical dark-to-clear wash. Photo bands carry white display type, and
    busy artwork (circuitry, monitors) was colliding with it, so the type sits
    on this rather than on the raw photo."""
    steps = 60
    for i in range(steps):
        t = i / (steps - 1)
        a = top_alpha + (bottom_alpha - top_alpha) * t
        c.setFillColor(Color(color.red, color.green, color.blue, a))
        c.rect(x, y + h_ - h_ * (i + 1) / steps, w, h_ / steps + 1, stroke=0, fill=1)


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


def fit_font(text, font, size, width, min_size=9):
    """Shrink until the string fits. Guards headings that would otherwise run
    past their container (the VIBRANT Method title used to overflow its card)."""
    while size > min_size and c.stringWidth(text, font, size) > width:
        size -= 0.5
    return size


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


# ── content loaded from the site, single source of truth ───────────────
_SITE = open("content/site-content.ts").read()


def _clean(t):
    return t.replace('\\"', '"').replace(" — ", ", ").replace("—", ", ").strip()


def load_service(slug):
    m = _re.search(r'slug: "' + slug + r'",(.*?)\n  \}', _SITE, _re.S)
    if not m:
        raise SystemExit(f"generate-brochure: no service block for slug '{slug}'. "
                         f"Service slugs in the brochure must match content/site-content.ts.")
    block = m.group(1)

    def field(name):
        fm = _re.search(name + r':\s*\n?\s*"((?:[^"\\]|\\.)*)"', block)
        return _clean(fm.group(1)) if fm else ""

    def list_field(name):
        fm = _re.search(name + r': \[(.*?)\]', block, _re.S)
        return [_clean(x) for x in _re.findall(r'"((?:[^"\\]|\\.)*)"', fm.group(1))] if fm else []

    return dict(title=field("title"), long=field("longDescription"),
                outcomes=list_field("outcomes"), caps=list_field("capabilities")[:8],
                best=field("bestFit"))


# The seven the site actually sells (footerSlugs in site-content.ts). The old
# brochure shipped an "Automation" page for a slug that no longer exists, and
# omitted SAP Solutions entirely.
SERVICES = [
    ("erp-optimization",    "assets/services/erp.jpg"),
    ("sap-solutions",       None),  # no SAP photo in assets/, gradient band instead
    ("cloud-modernization", "assets/services/cloud.jpg"),
    ("cybersecurity",       "assets/services/cybersecurity.jpg"),
    ("data-analytics",      "assets/services/data-analytics.jpg"),
    ("ai-readiness",        "assets/services/ai.jpg"),
    ("managed-it",          "assets/services/managed-it.jpg"),
]


def service_page(idx, slug, band_img, page_no):
    s = load_service(slug)
    c.setFillColor(WHITE)
    c.rect(0, 0, W, H, stroke=0, fill=1)

    BAND = 176
    if band_img and os.path.exists(band_img):
        c.drawImage(fit(band_img, W, BAND, grayscale=True), 0, H - BAND, width=W, height=BAND)
        gradient_tint(0, H - BAND, W, BAND, alpha=0.82)
        # Left-weighted deepening only where the display type sits.
        scrim(0, H - BAND, W * 0.62, BAND, top_alpha=0.34, bottom_alpha=0.06, color=B800)
    else:
        gradient(0, H - BAND, W, BAND)
        halftone(W - 90, H - 52, rings=5, base_r=16, color=WHITE, alpha=0.15, max_dot=3.6)
    gradient(0, H - BAND - 4, W, 4)

    tracked(M, H - 58, f"OUR SERVICES  ·  {idx:02d} / {len(SERVICES):02d}", FB, 8.5,
            Color(1, 1, 1, 0.92), 2.2)
    c.setFillColor(WHITE)
    tsize = fit_font(s["title"], FB, 25, W - 2 * M, min_size=17)
    c.setFont(FB, tsize)
    c.drawString(M, H - 92, s["title"])

    # intro
    y = H - BAND - 44
    y = para(M, y, s["long"], W - 2 * M, size=10, leading=15)

    # outcomes
    y -= 20
    eyebrow(M, y, "What you get")
    y -= 24
    for o in s["outcomes"]:
        c.setFillColor(B600)
        c.circle(M + 4, y + 3, 2.4, stroke=0, fill=1)
        c.setFillColor(INK)
        c.setFont(F, 10)
        c.drawString(M + 16, y, o)
        y -= 19

    # capabilities, 2 columns, wrapped rather than truncated
    y -= 18
    eyebrow(M, y, "Capabilities")
    y -= 24
    col_w = (W - 2 * M) / 2
    top_y = y
    row_h = 22
    rows = 0
    for i, cap in enumerate(s["caps"]):
        col, row = i % 2, i // 2
        rows = max(rows, row + 1)
        x = M + col * col_w
        yy = top_y - row * row_h
        c.setFillColor(B400)
        c.circle(x + 4, yy + 3, 2.1, stroke=0, fill=1)
        c.setFillColor(MUTED)
        c.setFont(F, 9.3)
        # Previously truncated with an ellipsis ("RPA (UiPath, Automation Anywhere, Power…").
        lines = wrap(cap, F, 9.3, col_w - 34)[:2]
        for j, ln in enumerate(lines):
            c.drawString(x + 15, yy - j * 10.5, ln)
    y = top_y - rows * row_h

    # best fit
    y -= 26
    bf_lines = wrap("Best fit: " + s["best"], FO, 9.8, W - 2 * M - 44)
    bh = len(bf_lines) * 14 + 24
    c.setFillColor(CREAM2)
    c.roundRect(M, y - bh, W - 2 * M, bh, 10, stroke=0, fill=1)
    c.setFillColor(B600)
    c.rect(M, y - bh + 10, 3, bh - 20, stroke=0, fill=1)
    c.setFont(FO, 9.8)
    c.setFillColor(INK)
    for i, ln in enumerate(bf_lines):
        c.drawString(M + 20, y - 26 - i * 14, ln)

    # Anchored CTA strip. Service pages used to trail off into half a page of
    # white; this closes the page and repeats the ask.
    cta_h = 54
    cta_y = 74
    gradient(M, cta_y, W - 2 * M, cta_h)
    c.setFillColor(WHITE)
    c.setFont(FB, 11)
    # "a ERP" / "a AI" read wrong; every service title here starts with a
    # letter whose article follows the plain vowel rule.
    art = "an" if s["title"][:1].upper() in "AEIOU" else "a"
    c.drawString(M + 18, cta_y + 31, f"Talk to {art} {s['title']} specialist.")
    c.setFont(F, 9)
    c.setFillColor(Color(1, 1, 1, 0.92))
    c.drawString(M + 18, cta_y + 15, "609-945-2244   ·   info@vibrantinc.com   ·   www.vibrantinc.com")

    footer(page_no, s["title"])
    c.showPage()


# ═══ PAGE 1 · COVER ════════════════════════════════════════════════════
c.setFillColor(CREAM)
c.rect(0, 0, W, H, stroke=0, fill=1)
c.drawImage(fit(HERO, W, 306), 0, H - 306, width=W, height=306)
gradient(0, H - 310, W, 4)

halftone(W - 70, 396, rings=7, base_r=24, alpha=0.28)
eyebrow(M, H - 356, f"Company Brochure  ·  Est. {FOUNDED}", size=9, track=2.6)

c.setFillColor(INK)
c.setFont(FB, 30)
c.drawString(M, H - 398, "Optimizing your efficiency.")
c.drawString(M, H - 436, "Strengthening your bottom line.")

c.setFont(F, 12.5)
c.setFillColor(MUTED)
c.drawString(M, H - 470, "ERP   ·   Cloud   ·   Cybersecurity   ·   Data   ·   AI")

pill_txt = f"CELEBRATING {YEARS} YEARS IN BUSINESS"
pill_w = c.stringWidth(pill_txt, FB, 9.5) + 1.6 * len(pill_txt) + 34
c.setStrokeColor(B600)
c.setLineWidth(1)
c.setFillColor(Color(B600.red, B600.green, B600.blue, 0.08))
c.roundRect(M, H - 528, pill_w, 30, 15, stroke=1, fill=1)
tracked(0, H - 518, pill_txt, FB, 9.5, B700, 1.6, center_at=M + pill_w / 2)

iy = 178
eyebrow(M, iy + 44, "Inside")
c.setFont(F, 9.5)
c.setFillColor(MUTED)
c.drawString(M, iy + 22, "Seven capabilities, one page each  ·  Deep SAP bench  ·  The VIBRANT Method")
c.drawString(M, iy + 6, "AI Shield platform  ·  Client outcomes  ·  Leadership and offices")

gradient(0, 0, W, 110)
halftone(70, 18, rings=6, base_r=18, color=WHITE, alpha=0.15, max_dot=4)
c.setFillColor(WHITE)
c.setFont(FB, 15)
c.drawString(M, 66, "Founder-led enterprise technology consulting.")
tracked(M, 38, "WWW.VIBRANTINC.COM", FB, 11.5, WHITE, 1.8)
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
c.drawString(M, H - 96, f"Built on integrity since {FOUNDED}.")

y = H - 170
y = para(M, y, f"Vibrant Inc opened its doors in {FOUNDED} with a simple model: put senior "
               f"practitioners on every engagement and finish what we start. Twenty-six "
               f"years on, clients across North America still call us when ERP, cloud, or "
               f"data work has to land on time and keep running.", W - 2 * M - 190)
y -= 6
y = para(M, y, "From ERP and cloud to data, cybersecurity, and AI, our architects and "
               "engagement managers own every engagement from discovery through steady "
               "state. We are NMSDC Certified, an E-Verify Partner, and Oracle and "
               "Microsoft partners. Those credentials show in how we build teams and "
               "how we deliver.", W - 2 * M - 190)

c.drawImage(ANNIV, W - M - 158, H - 372, width=158, height=193,
            preserveAspectRatio=True, anchor="c", mask="auto")

qy = y - 26
c.setFillColor(B600)
c.rect(M, qy - 66, 3, 70, stroke=0, fill=1)
c.setFont(FO, 11.5)
c.setFillColor(INK)
for i, ln in enumerate(wrap('"Be the partner of choice, empowering businesses to leverage cloud '
                            'technology and data analytics for competitive advantage, sustained '
                            'performance, and long-term growth."', FO, 11.5, W - 2 * M - 200)):
    c.drawString(M + 16, qy - 16 - i * 16, ln)

sb_y = 168
gradient(M, sb_y, W - 2 * M, 108)
stats = [(f"{YEARS}+", "Years of innovation"), ("200+", f"Engagements since {FOUNDED}"),
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

chips = ["NMSDC Certified MBE", "E-Verify Partner", "Oracle Partner",
         "Microsoft Partner Network", "Wrike Solution Partner"]
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

# ═══ PAGES 3-9 · ONE PAGE PER SERVICE ═════════════════════════════════
for _i, (_slug, _img) in enumerate(SERVICES):
    service_page(_i + 1, _slug, _img, _i + 3)

# ═══ PAGE 10 · SAP DEPTH + VIBRANT METHOD ══════════════════════════════
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

my = 268
card_x, card_w = M - 10, W - 2 * M + 20
c.setFillColor(CREAM2)
c.roundRect(card_x, 96, card_w, my - 34, 14, stroke=0, fill=1)
eyebrow(M + 6, my + 20, "Our delivery framework")
c.setFillColor(INK)
_mt = "The VIBRANT Method: agile delivery, enterprise accountability."
c.setFont(FB, fit_font(_mt, FB, 17, card_w - 32, min_size=12))
c.drawString(M + 6, my - 4, _mt)

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
footer(10, "SAP depth and method")
c.showPage()

# ═══ PAGE 11 · AI SHIELD + PROOF ═══════════════════════════════════════
c.setFillColor(CREAM)
c.rect(0, 0, W, H, stroke=0, fill=1)

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
footer(11, "AI Shield and outcomes")
c.showPage()

# ═══ PAGE 12 · LEADERSHIP + CONTACT (BACK) ═════════════════════════════
c.setFillColor(WHITE)
c.rect(0, 0, W, H, stroke=0, fill=1)
c.setFillColor(CREAM)
c.rect(0, H - 118, W, 118, stroke=0, fill=1)
gradient(0, H - 122, W, 4)

eyebrow(M, H - 66, "Leadership")
c.setFillColor(INK)
c.setFont(FB, 24)
c.drawString(M, H - 96, "Senior architects. Founder-led delivery.")

c.drawImage(fit(SURESH, 118, 122), M, H - 300, width=118, height=122)
c.setFillColor(INK)
c.setFont(FB, 13)
c.drawString(M + 136, H - 168, "Suresh Reddy")
c.setFillColor(B700)
c.setFont(FB, 9.5)
c.drawString(M + 136, H - 184, "Founder & President  ·  ITIL Foundation Certified")
# 27 here is Suresh's personal career length, not the company age, so it is
# deliberately not derived from YEARS.
para(M + 136, H - 202, "27 years leading enterprise transformation across cloud, enterprise "
     "applications, DevOps, and AI for Fortune 500 partners.", W - M - 200 - 136, size=9.2, leading=13)

leaders = [("Chaitanya Kumar Komatireddy", "Principal Enterprise Architect"),
           ("Sathish Donthula", "Principal SAP Solution Architect"),
           ("Dishanth", "Principal Cybersecurity Architect"),
           ("Sai Varma", "Principal AI Solutions Architect")]
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
    c.drawImage(fit(img, box_w - 24, 66), x + 12, oy - 90, width=box_w - 24, height=66)
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
print(f"brochure written: public/Vibrant-Company-Brochure.pdf ({YEARS} years, {len(SERVICES)} services)")
