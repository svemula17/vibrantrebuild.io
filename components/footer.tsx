import Link from "next/link";
import Image from "next/image";
import { contactDetails, navigationItems, serviceCards, siteSettings, withBasePath } from "@/content/site-content";
import { SocialLinks } from "@/components/social-links";
import logoSrc  from "@/vibrant-logo-header.png";
import amphenol   from "@/clients/amphenol.svg";
import teksystems from "@/clients/teksystems.svg";
import vaco       from "@/clients/vaco.svg";
import radiant    from "@/clients/radiant-systems.png";
import mouri      from "@/clients/mouri-tech.png";

const clientLogos = [
  { src: amphenol,   alt: "Amphenol"        },
  { src: teksystems, alt: "TEKsystems"      },
  { src: vaco,       alt: "Vaco"            },
  { src: radiant,    alt: "Radiant Systems" },
  { src: mouri,      alt: "MOURI Tech"      },
];

const footerNav = navigationItems.filter((n) => n.href !== "/");

// Footer shows only top-level services, not the full 18-item catalog.
// Exclude carousel-only umbrella entries and individual SAP detail pages.
const footerSlugs = [
  "erp-optimization",
  "sap-solutions",
  "cloud-modernization",
  "cybersecurity",
  "data-analytics",
  "ai-readiness",
  "managed-it"
];
const footerServices = footerSlugs
  .map((slug) => serviceCards.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

// Count of services shown on /services (everything except carousel-only umbrella entries)
const totalServices = serviceCards.filter((s) => !s.hideFromGrid).length;

export function Footer() {
  return (
    // Brand gradient, same treatment as ai-shield-band and stats-band. On this
    // ground the brand-400/600 accents vanish, so every accent runs on white.
    <footer className="relative text-white overflow-hidden bg-brand-gradient">
      {/* ── Brand radial glow, mirrors ai-shield-band ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            /* The 135deg brand gradient ends lightest at bottom-right (#E05A1F),
               where white text measures 3.7:1. The bottom-right wash pulls that
               corner back over 4.5:1 without shifting the brand hue. */
            "radial-gradient(circle at 85% 15%, rgba(255,255,255,0.08) 0%, transparent 45%), radial-gradient(circle at 5% 95%, rgba(60,10,0,0.28) 0%, transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(90,25,4,0.42) 0%, transparent 62%)"
        }}
      />

      {/* ── Top accent bar ── */}
      <div className="w-full h-1 bg-white/30" />

      {/* ── Main 4-col grid ── */}
      <div className="container relative py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand + tagline + social */}
        <div>
          <Image
            src={logoSrc}
            alt="Vibrant Inc"
            width={240}
            height={203}
            className="h-16 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            {siteSettings.tagline} Established in 2000,
            Vibrant delivers cloud, data, ERP, and managed IT solutions across North America.
          </p>

          {/* Address */}
          <p className="mt-4 text-xs text-white/85 flex items-start gap-1.5">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 mt-0.5 shrink-0 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            <span>
              {siteSettings.address}
              <span className="block mt-0.5">Delivery center: Gachibowli, Hyderabad, India</span>
            </span>
          </p>

          {/* Social icons, hidden if no real URLs configured */}
          <div className="mt-6">
            <SocialLinks variant="on-brand" />
          </div>
        </div>

        {/* Sitemap */}
        <div>
          <h4
            className="text-eyebrow uppercase text-white/85"
          >
            Sitemap
          </h4>
          <div className="mt-2 mb-4 h-px w-8 bg-white/45" />
          <ul className="text-sm">
            {footerNav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-white/85 hover:text-white transition-colors flex items-center gap-1.5 group py-1.5"
                >
                  <span
                    className="h-1 w-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
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
            className="text-eyebrow uppercase text-white/85"
          >
            Services
          </h4>
          <div className="mt-2 mb-4 h-px w-8 bg-white/45" />
          <ul className="text-sm">
            {footerServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-white/85 hover:text-white transition-colors flex items-center gap-1.5 group py-1.5"
                >
                  <span
                    className="h-1 w-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                  />
                  {s.title}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-white hover:text-white/80 text-xs font-semibold underline underline-offset-4 decoration-white/40 transition-colors"
              >
                View all {totalServices} services →
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-eyebrow uppercase text-white/85"
          >
            Contact Us
          </h4>
          <div className="mt-2 mb-4 h-px w-8 bg-white/45" />
          <ul className="space-y-4 text-sm">
            {contactDetails.map((c) => (
              <li key={c.label} className="flex flex-col gap-0.5">
                <span className="text-[11px] uppercase tracking-[0.14em] text-white/80">{c.label}</span>
                <span className="text-white">{c.value}</span>
              </li>
            ))}
          </ul>

          {/* Solid white CTA, the brand-gradient btn-primary would vanish here */}
          <Link
            href="/contact"
            className="mt-6 btn bg-white text-brand-700 shadow-card hover:bg-neutral-100 hover:-translate-y-0.5 hover:shadow-cardHover px-5 py-2.5"
          >
            Book a 30-minute call →
          </Link>
        </div>
      </div>

      {/* ── Client logos, solid white strip so logos are always visible ── */}
      <div className="relative bg-white">
        <div className="container py-8">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] mb-7 text-muted">
            Clients we&apos;ve served
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {clientLogos.map((c) => (
              <div
                key={c.alt}
                className="flex items-center justify-center rounded-xl border border-line px-4 py-3 transition-all hover:shadow-card hover:border-sky/30 hover:scale-105 basis-[calc(50%-0.375rem)] sm:basis-[calc(33.333%-0.5rem)] md:basis-[calc(20%-1.2rem)]"
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
      <div className="relative border-t border-white/15">
        <div className="container py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-white/85">© {new Date().getFullYear()} {siteSettings.brandName}. All rights reserved.</p>
            <a
              href={withBasePath("/Vibrant-Company-Brochure.pdf")}
              download
              className="btn border border-white/35 bg-white/10 text-white hover:bg-white hover:text-brand-700 gap-1.5 px-3 py-1.5 text-xs"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Brochure
            </a>
          </div>
          <p className="flex flex-wrap gap-x-3 gap-y-1 text-white/85">
            <span>E-Verify Partner</span>
            <span className="text-white/55" aria-hidden="true">·</span>
            <span>NMSDC Certified MBE</span>
            <span className="text-white/55" aria-hidden="true">·</span>
            <span>Oracle Partner</span>
            <span className="text-white/55" aria-hidden="true">·</span>
            <span>Wrike Solution Partner</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
