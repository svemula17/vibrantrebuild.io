"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navigationItems, siteSettings } from "@/content/site-content";
import logoSrc from "@/vibrant-logo-header.png";

/* Services mega-menu, grouped like the big-firm pattern, all Vibrant content.
   Seven services; SAP depth lives inside the SAP Solutions page.

   Each row carries a one-line blurb, because a list of ten titles asks the
   reader to already know what "Zero Trust Architecture" buys them. The icon is
   the same 24px stroke set the service cards use, so a row here and a card on
   /services read as the same thing. */
type MenuLink = { label: string; href: string; blurb?: string; icon?: string };

const SERVICES_MENU: { heading: string; links: MenuLink[] }[] = [
  {
    heading: "Security",
    links: [
      {
        label: "Cybersecurity & Compliance",
        href: "/services/cybersecurity",
        blurb: "Detect, analyze, respond and predict on one spine",
        icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      },
      {
        label: "Zero Trust Architecture",
        href: "/services/zero-trust-architecture",
        blurb: "Identity-first access, segment by segment",
        icon: "M12 2a5 5 0 0 0-5 5v3H5v12h14V10h-2V7a5 5 0 0 0-5-5zm-3 8V7a3 3 0 0 1 6 0v3"
      },
      {
        label: "Managed Detection & Response",
        href: "/services/managed-detection-response",
        blurb: "24×7 SOC cover, containment in minutes",
        icon: "M2 12h4l3 8 4-16 3 8h6"
      },
      {
        label: "Compliance Readiness",
        href: "/services/compliance-readiness",
        blurb: "SOC 2, HIPAA, PCI and CMMC, evidence as you go",
        icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
      }
    ]
  },
  {
    heading: "AI",
    links: [
      {
        label: "Generative AI",
        href: "/services/ai-readiness",
        blurb: "Start with the workflow, not the model",
        icon: "M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
      },
      {
        label: "AI Digital Experience",
        href: "/services/ai-digital-experience",
        blurb: "Interfaces that adapt to the person using them",
        icon: "M3 3h18v13H3zM8 21h8M12 16v5"
      }
    ]
  },
  {
    heading: "ERP",
    links: [
      {
        label: "ERP & Enterprise Applications",
        href: "/services/erp-optimization",
        blurb: "SAP, Oracle and S/4HANA on a clean core",
        icon: "M3 7h18v4H3zm0 6h18v4H3zM7 7V3m10 4V3M7 21v-4m10 4v-4"
      }
    ]
  },
  {
    heading: "Cloud & Data",
    links: [
      {
        label: "Cloud & Platform Engineering",
        href: "/services/cloud-modernization",
        blurb: "Migration and platform work that survives audit",
        icon: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
      },
      {
        label: "Automation & Managed IT",
        href: "/services/managed-it",
        blurb: "Run the estate, automate the repetitive parts",
        icon: "M10.3 3.6a2 2 0 0 1 3.4 0l7 12.1a2 2 0 0 1-1.7 3H5a2 2 0 0 1-1.7-3zM12 9v4m0 4h.01"
      },
      {
        label: "Data & Analytics",
        href: "/services/data-analytics",
        blurb: "One governed number the business agrees on",
        icon: "M3 3v18h18M7 15l4-5 3 3 5-7"
      }
    ]
  },
  {
    heading: "Explore",
    links: [
      { label: "All services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "S/4HANA Cost Calculator", href: "/resources/sap-cost-calculator" },
      { label: "Guides & insights", href: "/resources" }
    ]
  }
];

/* Products are Vibrant's own tools, not a service line. They only make sense
   once the reader is already inside the security practice, so the entry
   appears there and nowhere else. */
const PRODUCTS_LINK: MenuLink = {
  label: "Products: kaveo · Vectasec · Aegis",
  href: "/services/cybersecurity#product-kaveo",
  blurb: "The three tools we build and run inside your estate",
  icon: "M12 2 3 7v10l9 5 9-5V7zM3 7l9 5 9-5M12 12v10"
};

/* The mobile drawer reads this rather than navigationItems directly: Industries
   lives inside the Services mega-menu on desktop, which never renders below lg. */
/* navigationItems now carries Industries, so the drawer just appends the
   Company sub-links, which have no top-level home on mobile. */
const MOBILE_NAV: { href: string; label: string }[] = [
  ...navigationItems.filter((n) => n.href !== "/about"),
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/partners", label: "Partners" },
  { href: "/social-responsibility", label: "Social Responsibility" }
];

/* About dropdown, compact section menu (reference-style, our content) */
const ABOUT_MENU: [string, string][] = [
  ["About Us", "/about"],
  ["Careers", "/careers"],
  ["Partners", "/partners"],
  ["Social Responsibility", "/social-responsibility"],
  ["Vision", "/about#vision"],
  ["Core Values", "/about#values"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  /* framer-motion writes an inline opacity onto a layoutId element on the
     client that the static export does not contain, so hydration fails with
     React #418. Render the plain span until mounted, then upgrade. */
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  /* Item 10: Products appears only inside the security practice. */
  const onSecurity = pathname.startsWith("/services/cybersecurity");
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aboutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleMegaClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };
  /* Hover alone strands touch users: tapping "Services" or "Company" just
     navigates, so the menu is unreachable on a phone or a trackpad tap. The
     chevron is a real button that toggles, which also makes both menus
     keyboard-operable. */
  const toggleMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setAboutOpen(false);
    setServicesOpen((v) => !v);
  };
  const toggleAbout = () => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    setServicesOpen(false);
    setAboutOpen((v) => !v);
  };

  const openAbout = () => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    setAboutOpen(true);
  };
  const scheduleAboutClose = () => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    aboutTimer.current = setTimeout(() => setAboutOpen(false), 150);
  };

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  /* Dropdowns: Escape and outside-click close them */
  useEffect(() => {
    if (!servicesOpen && !aboutOpen) return;
    const closeAll = () => {
      setServicesOpen(false);
      setAboutOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    const onDown = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) closeAll();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [servicesOpen, aboutOpen]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Mobile menu: focus in on open, trap Tab, Escape closes + restores focus */
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const items = panel.querySelectorAll<HTMLElement>("a, button");
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 w-full relative transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(15,31,51,0.06)]"
          : "bg-white"
      }`}
    >
      {/* Top announcement strip, home page only, hides on scroll */}
      {pathname === "/" && (
        <div
          className={`w-full bg-brand-800 text-white text-xs transition-all duration-300 overflow-hidden ${
            scrolled ? "max-h-0 py-0 opacity-0" : "max-h-10 py-2 opacity-100"
          }`}
        >
          <div className="container flex items-center justify-center gap-4 flex-wrap">
            <span className="hidden sm:inline text-white/90">Princeton, NJ · Hyderabad, IN</span>
            <span className="hidden sm:inline text-white/50" aria-hidden="true">|</span>
            <a href={`tel:${siteSettings.phonePrimary}`} className="font-semibold hover:underline underline-offset-2">
              {siteSettings.phonePrimary}
            </a>
            <span className="text-white/50" aria-hidden="true">|</span>
            <a href={`mailto:${siteSettings.email}`} className="text-white/90 hover:text-white hover:underline underline-offset-2 transition-colors">
              {siteSettings.email}
            </a>
          </div>
        </div>
      )}
      <div className="container flex h-[72px] md:h-20 lg:h-[92px] items-center justify-between gap-6">
        <Link href="/" aria-label={`${siteSettings.brandName} home`}>
          <Image
            src={logoSrc}
            alt="Vibrant Inc"
            width={240}
            height={203}
            priority
            className="h-12 md:h-14 lg:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav. Resources is pulled out of the list and rendered as the
            right-side utility button instead */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
          {navigationItems.filter((item) => item.href !== "/resources").map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(item.href + "/");
            const isServices = item.href === "/services";
            const isAbout = item.href === "/about";
            const hasMenu = isServices || isAbout;
            const menuOpen = isServices ? servicesOpen : isAbout ? aboutOpen : false;
            const openFn = isServices ? openMega : isAbout ? openAbout : undefined;
            const closeFn = isServices ? scheduleMegaClose : isAbout ? scheduleAboutClose : undefined;
            const toggleFn = isServices ? toggleMega : isAbout ? toggleAbout : undefined;
            return (
              <span
                key={item.href}
                className={`inline-flex items-center${isAbout ? " relative" : ""}`}
                onMouseEnter={openFn}
                onMouseLeave={closeFn}
              >
                <Link
                  href={item.href}
                  onFocus={openFn}
                  className={`relative inline-flex items-center gap-1 px-2 xl:px-2.5 py-2 text-[13px] font-medium rounded-full whitespace-nowrap transition-colors ${
                    active ? "text-navy-700" : "text-ink/70 hover:text-brand-700"
                  }`}
                >
                  {item.label}
                  {active &&
                    (mounted ? (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-brand-600 rounded"
                        transition={{ type: "spring", stiffness: 480, damping: 38 }}
                      />
                    ) : (
                      <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-brand-600 rounded" />
                    ))}
                </Link>

                {hasMenu && (
                  <button
                    type="button"
                    onClick={toggleFn}
                    aria-expanded={menuOpen}
                    aria-haspopup="true"
                    aria-label={`${item.label} menu`}
                    className="-ml-1 grid h-7 w-6 place-items-center rounded-full text-ink/70 hover:text-brand-700 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-3 w-3 transition-transform duration-200 ${menuOpen ? "rotate-180 text-brand-600" : ""}`}
                      fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                )}

                {/* Products sits next to Services while the reader is inside
                    the security practice, and disappears everywhere else. */}
                {isServices && onSecurity && (
                  <Link
                    href={PRODUCTS_LINK.href}
                    className="ml-1 inline-flex items-center px-2 xl:px-2.5 py-2 text-[13px] font-medium rounded-full whitespace-nowrap text-ink/70 hover:text-brand-700 transition-colors"
                  >
                    Products
                  </Link>
                )}

                {/* Compact About dropdown, anchored to the nav item */}
                {isAbout && (
                  <div
                    inert={!aboutOpen}
                    aria-hidden={!aboutOpen}
                    className={`absolute left-0 top-full z-50 w-64 pt-2 transition-all duration-200 ease-brand ${
                      aboutOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden rounded-xl border border-black/10 shadow-cardHover divide-y divide-white/15 bg-brand-gradient">
                      {ABOUT_MENU.map(([label, href]) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setAboutOpen(false)}
                          className="block px-4 py-2.5 text-sm text-white/90 hover:bg-black/15 hover:text-white transition-colors"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </span>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center shrink-0">
          <Link
            href="/resources"
            className={`btn text-sm px-5 py-2.5 border transition-colors ${
              pathname.startsWith("/resources")
                ? "border-brand-600 text-brand-700 bg-brand-600/5"
                : "border-neutral-200 text-neutral-900 hover:border-brand-600/50 hover:text-brand-700"
            }`}
          >
            Resources
          </Link>
        </div>

        <button
          type="button"
          ref={toggleRef}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy-700"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-full bg-current transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Services mega-menu, full-width panel under the header, desktop only */}
      <div
        onMouseEnter={openMega}
        onMouseLeave={scheduleMegaClose}
        onBlur={(e) => {
          if (!headerRef.current?.contains(e.relatedTarget as Node)) setServicesOpen(false);
        }}
        inert={!servicesOpen}
        aria-hidden={!servicesOpen}
        aria-label="Services menu"
        className={`hidden lg:block absolute inset-x-0 top-full overflow-hidden bg-brand-gradient text-white border-b border-black/10 shadow-cardHover transition-all duration-200 ease-brand ${
          servicesOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        {/* On a wide, short panel the 135deg gradient runs nearly horizontal, so
            the right-hand column lands on the light stop where white drops to
            3.7:1. This wash pulls that edge back over 4.5:1, same hue. */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), linear-gradient(to right, transparent 45%, rgba(90,25,4,0.38) 100%)"
          }}
        />
        {/* 1.15fr 1fr .9fr 1fr 1.15fr: Security and Explore carry the most
            rows, ERP the fewest, so equal columns left ERP mostly empty. */}
        <div
          className="container relative grid py-10"
          style={{ gridTemplateColumns: "1.15fr 1fr .9fr 1fr 1.15fr", gap: "28px" }}
        >
          {SERVICES_MENU.map((group, gi) => {
            const isExplore = group.heading === "Explore";
            const links = isExplore && onSecurity ? [PRODUCTS_LINK, ...group.links] : group.links;
            return (
              <div
                key={group.heading}
                style={gi > 0 ? { borderLeft: "1px solid rgba(255,255,255,.2)", paddingLeft: "28px" } : undefined}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                  {group.heading}
                </p>
                <ul className="mt-4 space-y-1">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-start gap-3 rounded-lg px-2 py-2 -mx-2 hover:bg-black/15 transition-colors group/row"
                      >
                        {l.icon && (
                          <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/12 border border-white/20 text-white group-hover/row:bg-white/20 transition-colors">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                              <path d={l.icon} />
                            </svg>
                          </span>
                        )}
                        <span className="min-w-0">
                          <span className="block text-sm font-medium text-white/95 leading-snug">{l.label}</span>
                          {l.blurb && (
                            <span className="mt-0.5 block text-[11px] leading-snug text-white/90">{l.blurb}</span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* The Explore column runs shortest, so it takes the featured
                    card. Inside the security practice that card is the three
                    products, each landing on its own section. */}
                {isExplore && (
                  onSecurity ? (
                    <div className="mt-5 rounded-xl border border-white/25 bg-black/15 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">
                        Built by Vibrant
                      </p>
                      <ul className="mt-2.5 space-y-1.5">
                        {[
                          ["kaveo", "Cloud security posture", "/services/cybersecurity#product-kaveo"],
                          ["Vectasec", "Middleware security", "/services/cybersecurity#product-vectasec"],
                          ["Aegis", "MCP gateway", "/services/cybersecurity#product-aegis"]
                        ].map(([name, kind, href]) => (
                          <li key={name}>
                            <Link
                              href={href}
                              onClick={() => setServicesOpen(false)}
                              className="flex items-baseline gap-2 rounded-md px-1.5 py-1 -mx-1.5 hover:bg-black/20 transition-colors"
                            >
                              <span className="text-sm font-semibold text-white">{name}</span>
                              <span className="text-[11px] leading-snug text-white/90">{kind}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href="/contact"
                      onClick={() => setServicesOpen(false)}
                      className="mt-5 block rounded-xl border border-white/25 bg-black/15 p-4 hover:bg-black/25 transition-colors"
                    >
                      <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">
                        Not sure where to start
                      </span>
                      <span className="mt-1.5 block text-sm font-semibold text-white leading-snug">
                        A 30-minute senior-led call.
                      </span>
                      <span className="mt-1.5 block text-[11px] leading-snug text-white/75">
                        We will tell you what we would do, whether or not you hire us.
                      </span>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white">
                        Request a call →
                      </span>
                    </Link>
                  )
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile menu. CSS grid-rows transition; kept mounted, inert when closed */}
      <div
        id="mobile-menu"
        ref={panelRef}
        inert={!open}
        aria-hidden={!open}
        className={`lg:hidden grid transition-[grid-template-rows,opacity] duration-200 ease-brand ${
          open ? "grid-rows-[1fr] opacity-100 border-t border-line bg-white" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="container flex flex-col py-4 max-h-[calc(100dvh-4rem)] overflow-y-auto" aria-label="Mobile">
            {onSecurity && (
              <Link
                href={PRODUCTS_LINK.href}
                /* Same page plus a hash, so the pathname effect that closes the
                   drawer for every other link never fires here. */
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-navy-700 border-b border-line"
              >
                Products: kaveo · Vectasec · Aegis
              </Link>
            )}
            {MOBILE_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium text-navy-700 border-b border-line last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
