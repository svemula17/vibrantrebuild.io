import Link from "next/link";
import Image from "next/image";
import { contactDetails, navigationItems, serviceCards, siteSettings } from "@/content/site-content";
import logoSrc  from "@/Vibrant-Logo-1024x867.png";
import deloitte from "@/1.jpg";
import cosyn    from "@/2.jpg";
import rcn      from "@/3.jpg";
import acta     from "@/4.jpg";
import infojini from "@/7.jpg";

const socialLinks = [
  {
    label: "Facebook",
    href: siteSettings.social.facebook,
    icon: "M13 22v-8h3l1-4h-4V7.5c0-1.2.4-2 2.1-2H17V2h-3c-3 0-4 1.8-4 4.3V10H7v4h3v8h3z"
  },
  {
    label: "Twitter",
    href: siteSettings.social.twitter,
    icon: "M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1A4.1 4.1 0 0011.7 9c0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.4-4.3-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.4.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.7 2.1 2.9 3.9 2.9A8.3 8.3 0 012 18.6 11.7 11.7 0 008.3 20c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2z"
  },
  {
    label: "LinkedIn",
    href: siteSettings.social.linkedin,
    icon: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.36v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 7v7.44h-4.56v-6.6c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V22H7.62V8z"
  }
];

const clientLogos = [
  { src: deloitte, alt: "Deloitte" },
  { src: cosyn,    alt: "COSYN"    },
  { src: rcn,      alt: "RCN"      },
  { src: acta,     alt: "acta"     },
  { src: infojini, alt: "Infojini" },
];

const footerNav = navigationItems.filter((n) => n.href !== "/");

export function Footer() {
  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{ background: "#1A2E45" }}
    >
      {/* ── Brand gradient glow overlays ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(200,64,26,0.18) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(163,51,21,0.12) 0%, transparent 50%)"
        }}
      />

      {/* ── Brand-colour top accent bar ── */}
      <div
        className="w-full h-1"
        style={{ background: "linear-gradient(90deg, #7D250E 0%, #C8401A 40%, #E05A1F 70%, #A33315 100%)" }}
      />

      {/* ── Main 4-col grid ── */}
      <div className="container relative py-16 grid gap-12 lg:grid-cols-4">

        {/* Brand + tagline + social */}
        <div>
          <Image
            src={logoSrc}
            alt="Vibrant Inc"
            width={1024}
            height={867}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Your efficiency and bottom line is our business. Established in 2000,
            Vibrant delivers cloud, data, ERP, and managed IT solutions across North America.
          </p>

          {/* Address */}
          <p className="mt-4 text-xs text-white/45 flex items-start gap-1.5">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 mt-0.5 shrink-0 text-sky" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            Princeton, New Jersey, USA
          </p>

          {/* Social icons */}
          <div className="mt-6 flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 hover:bg-[#C8401A] hover:border-[#C8401A] hover:text-white transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Sitemap */}
        <div>
          <h4
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "#E05A1F" }}
          >
            Sitemap
          </h4>
          <div className="mt-2 mb-4 h-px w-8" style={{ background: "#C8401A" }} />
          <ul className="space-y-2.5 text-sm">
            {footerNav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-white/55 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span
                    className="h-1 w-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    style={{ background: "#C8401A" }}
                  />
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "#E05A1F" }}
          >
            Services
          </h4>
          <div className="mt-2 mb-4 h-px w-8" style={{ background: "#C8401A" }} />
          <ul className="space-y-2.5 text-sm">
            {serviceCards.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-white/55 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span
                    className="h-1 w-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    style={{ background: "#C8401A" }}
                  />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "#E05A1F" }}
          >
            Contact Us
          </h4>
          <div className="mt-2 mb-4 h-px w-8" style={{ background: "#C8401A" }} />
          <ul className="space-y-4 text-sm">
            {contactDetails.map((c) => (
              <li key={c.label} className="flex flex-col gap-0.5">
                <span className="text-[11px] uppercase tracking-[0.14em] text-white/35">{c.label}</span>
                <span className="text-white/75">{c.value}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #A33315 0%, #C8401A 60%, #E05A1F 100%)" }}
          >
            Get a Call Back →
          </Link>
        </div>
      </div>

      {/* ── Client logos — solid white strip so logos are always visible ── */}
      <div className="relative bg-white">
        <div className="container py-8">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] mb-7 text-muted">
            Clients we&apos;ve served
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-6">
            {clientLogos.map((c) => (
              <div
                key={c.alt}
                className="flex items-center justify-center rounded-xl border border-line px-4 py-3 transition-all hover:shadow-card hover:border-sky/30 hover:scale-105"
              >
                <Image
                  src={c.src}
                  alt={c.alt}
                  height={36}
                  width={110}
                  className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="container py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/35">
          <p>© {new Date().getFullYear()} {siteSettings.brandName}. All rights reserved.</p>
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            <span>E-Verify Partner</span>
            <span style={{ color: "#C8401A" }}>·</span>
            <span>NMSDC Certified MBE</span>
            <span style={{ color: "#C8401A" }}>·</span>
            <span>Oracle NetSuite Solution Partner</span>
            <span style={{ color: "#C8401A" }}>·</span>
            <span>Wrike Solution Partner</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
