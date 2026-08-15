"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigationItems, siteSettings } from "@/content/site-content";
import logoSrc from "@/vibrant-logo-header.png";

/* Services mega-menu, grouped like the big-firm pattern, all Vibrant content.
   Seven services; SAP depth lives inside the SAP Solutions page. */
const SERVICES_MENU: { heading: string; links: [string, string][] }[] = [
  {
    heading: "ERP & SAP",
    links: [
      ["ERP & Enterprise Applications", "/services/erp-optimization"],
      ["SAP Solutions", "/services/sap-solutions"]
    ]
  },
  {
    heading: "Cloud & Security",
    links: [
      ["Cloud Modernization", "/services/cloud-modernization"],
      ["Cybersecurity & Compliance", "/services/cybersecurity"],
      ["Managed IT", "/services/managed-it"]
    ]
  },
  {
    heading: "Data & AI",
    links: [
      ["Data & Analytics", "/services/data-analytics"],
      ["AI Readiness", "/services/ai-readiness"]
    ]
  },
  {
    heading: "Explore",
    links: [
      ["All services", "/services"],
      ["S/4HANA Cost Calculator", "/resources/sap-cost-calculator"],
      ["Guides & insights", "/resources"],
      ["Book a Call", "/contact"]
    ]
  }
];

/* About dropdown, compact section menu (reference-style, our content) */
const ABOUT_MENU: [string, string][] = [
  ["Who We Are", "/about"],
  ["Vision", "/about#vision"],
  ["Core Values", "/about#values"],
  ["Service Delivery Model", "/services#vibrant-method"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
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
  const openAbout = () => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    setAboutOpen(true);
  };
  const scheduleAboutClose = () => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    aboutTimer.current = setTimeout(() => setAboutOpen(false), 150);
  };

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
      <div className="container flex h-14 md:h-16 lg:h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label={`${siteSettings.brandName} home`}>
          <Image
            src={logoSrc}
            alt="Vibrant Inc"
            width={240}
            height={203}
            priority
            className="h-9 md:h-10 lg:h-12 w-auto object-contain"
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
            return (
              <span
                key={item.href}
                className={isAbout ? "relative" : undefined}
                onMouseEnter={openFn}
                onMouseLeave={closeFn}
              >
                <Link
                  href={item.href}
                  onFocus={openFn}
                  aria-expanded={hasMenu ? menuOpen : undefined}
                  aria-haspopup={hasMenu ? "true" : undefined}
                  className={`relative inline-flex items-center gap-1 px-2 xl:px-2.5 py-2 text-[13px] font-medium rounded-full whitespace-nowrap transition-colors ${
                    active ? "text-navy-700" : "text-ink/70 hover:text-brand-700"
                  }`}
                >
                  {item.label}
                  {hasMenu && (
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-3 w-3 transition-transform duration-200 ${menuOpen ? "rotate-180 text-brand-600" : ""}`}
                      fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                  {active && (
                    <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-brand-600 rounded" />
                  )}
                </Link>

                {/* Compact About dropdown, anchored to the nav item */}
                {isAbout && (
                  <div
                    inert={!aboutOpen}
                    aria-hidden={!aboutOpen}
                    className={`absolute left-0 top-full z-50 w-60 pt-2 transition-all duration-200 ease-brand ${
                      aboutOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden rounded-xl border border-black/10 shadow-cardHover divide-y divide-white/15 bg-brand-gradient">
                      {ABOUT_MENU.map(([label, href]) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setAboutOpen(false)}
                          className="block px-4 py-2.5 text-sm text-white/90 hover:bg-white/15 hover:text-white transition-colors"
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
          style={{ background: "linear-gradient(to right, transparent 45%, rgba(90,25,4,0.38) 100%)" }}
        />
        <div className="container relative grid grid-cols-4 gap-8 py-10">
          {SERVICES_MENU.map((group, gi) => (
            <div key={group.heading} className={gi > 0 ? "border-l border-white/20 pl-8" : ""}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                {group.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setServicesOpen(false)}
                      className="block rounded-md px-2 py-1 -mx-2 text-sm text-white/90 hover:text-white hover:bg-white/15 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
            {navigationItems.map((item) => (
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
