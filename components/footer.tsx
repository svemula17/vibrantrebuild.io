import Link from "next/link";
import Image from "next/image";
import { contactDetails, navigationItems, serviceCards, siteSettings } from "@/content/site-content";
import logoSrc    from "@/Vibrant-Logo-1024x867.png";
import deloitte   from "@/1.jpg";
import cosyn      from "@/2.jpg";
import rcn        from "@/3.jpg";
import acta       from "@/4.jpg";
import infojini   from "@/7.jpg";

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
  { src: deloitte,  alt: "Deloitte" },
  { src: cosyn,     alt: "COSYN" },
  { src: rcn,       alt: "RCN" },
  { src: acta,      alt: "acta" },
  { src: infojini,  alt: "Infojini" },
];

/* Sitemap nav minus Home (already in logo) */
const footerNav = navigationItems.filter((n) => n.href !== "/");

export function Footer() {
  return (
    <footer className="bg-navy-700 text-white/85">

      {/* ── Main 4-col grid ── */}
      <div className="container py-16 grid gap-12 lg:grid-cols-4">

        {/* Brand + tagline + social */}
        <div>
          <Image
            src={logoSrc}
            alt="Vibrant Inc"
            width={1024}
            height={867}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Your efficiency and bottom line is our business. Established in 2000, Vibrant delivers
            cloud, data, ERP, and managed IT solutions across North America.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-sky transition-colors"
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
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Sitemap</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/65 hover:text-white transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceCards.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-white/65 hover:text-white transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Contact Us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {contactDetails.map((c) => (
              <li key={c.label} className="flex flex-col gap-0.5">
                <span className="text-white/45 text-[11px] uppercase tracking-[0.12em]">{c.label}</span>
                <span className="text-white/80">{c.value}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary text-xs px-5 py-2.5">
              Get a Call Back
            </Link>
          </div>
        </div>
      </div>

      {/* ── Client logos row (matches official site footer) ── */}
      <div className="border-t border-white/10">
        <div className="container py-8">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-6">
            Clients we&apos;ve served
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {clientLogos.map((c) => (
              <Image
                key={c.alt}
                src={c.src}
                alt={c.alt}
                height={28}
                width={100}
                className="h-7 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-80 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {siteSettings.brandName}. All rights reserved.</p>
          <p>E-Verify Partner · NMSDC Certified MBE · Oracle NetSuite Solution Partner · Wrike Solution Partner</p>
        </div>
      </div>
    </footer>
  );
}
