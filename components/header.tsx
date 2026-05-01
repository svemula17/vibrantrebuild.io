"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems, siteSettings } from "@/content/site-content";
import logoSrc from "@/Vibrant-Logo-1024x867.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(15,31,51,0.06)]"
          : "bg-white"
      }`}
    >
      {/* Top announcement strip — hides on scroll */}
      <div
        className={`w-full text-white text-xs transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 py-0 opacity-0" : "max-h-10 py-2 opacity-100"
        }`}
        style={{ background: "linear-gradient(90deg, #7D250E 0%, #C8401A 50%, #A33315 100%)" }}
      >
        <div className="container flex items-center justify-center gap-4 flex-wrap">
          <span className="hidden sm:inline opacity-80">📍 Princeton, New Jersey</span>
          <span className="hidden sm:inline opacity-40">|</span>
          <a href={`tel:${siteSettings.phonePrimary}`} className="font-semibold hover:opacity-80 transition-opacity">
            📞 {siteSettings.phonePrimary}
          </a>
          <span className="opacity-40">|</span>
          <a href={`mailto:${siteSettings.email}`} className="opacity-80 hover:opacity-100 transition-opacity">
            {siteSettings.email}
          </a>
        </div>
      </div>
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label={`${siteSettings.brandName} home`}>
          <Image
            src={logoSrc}
            alt="Vibrant Inc"
            width={1024}
            height={867}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav — xl breakpoint gives room for all 7 items */}
        <nav className="hidden xl:flex items-center gap-0.5" aria-label="Primary">
          {navigationItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-[13px] font-medium rounded-full whitespace-nowrap transition-colors ${
                  active ? "text-navy-700" : "text-ink/70 hover:text-navy-700"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-sky rounded"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <a href={`tel:${siteSettings.phonePrimary}`} className="text-sm font-medium text-navy-700 hover:text-sky">
            {siteSettings.phonePrimary}
          </a>
          <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
            Get a Call Back
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy-700"
          aria-expanded={open}
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

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden border-t border-line bg-white"
          >
            <nav className="container flex flex-col py-4" aria-label="Mobile">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-base font-medium text-navy-700 border-b border-line last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a href={`tel:${siteSettings.phonePrimary}`} className="btn-ghost w-full">
                  Call {siteSettings.phonePrimary}
                </a>
                <Link href="/contact" className="btn-primary w-full">
                  Get a Call Back
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
