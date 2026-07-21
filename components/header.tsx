"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigationItems, siteSettings } from "@/content/site-content";
import logoSrc from "@/vibrant-logo-header.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(15,31,51,0.06)]"
          : "bg-white"
      }`}
    >
      {/* Top announcement strip — home page only, hides on scroll */}
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
      <div className="container flex h-16 md:h-20 lg:h-24 items-center justify-between gap-6">
        <Link href="/" aria-label={`${siteSettings.brandName} home`}>
          <Image
            src={logoSrc}
            alt="Vibrant Inc"
            width={240}
            height={203}
            priority
            className="h-10 md:h-14 lg:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav — Resources is pulled out of the list and rendered as the
            right-side utility button instead */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
          {navigationItems.filter((item) => item.href !== "/resources").map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-2 xl:px-2.5 py-2 text-[13px] font-medium rounded-full whitespace-nowrap transition-colors ${
                  active ? "text-navy-700" : "text-ink/70 hover:text-navy-700"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-brand-600 rounded" />
                )}
              </Link>
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

      {/* Mobile menu — CSS grid-rows transition; kept mounted, inert when closed */}
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
