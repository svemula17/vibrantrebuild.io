"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { serviceCards, siteSettings } from "@/content/site-content";

/* ─── Slide images — one per service ──────────────────────────────────── */
import imgAI     from "@/pexels-tara-winstead-8386440.jpg";           // keep
import imgCloud  from "@/Banner-Image-Cloud-Computing-in-Digital-Transformation.jpg"; // updated
import imgCyber  from "@/cyber.jpg";                                  // new
import imgAuto   from "@/automation.jpg";                             // new
import imgERP    from "@/272362-0-27498000-1741330535-enterprise_resource_planning-ERP.jpg"; // updated
import imgData   from "@/data.jpg";                                   // new
import imgMIT    from "@/pexels-tima-miroshnichenko-5380596.jpg";     // keep

const SLIDE_IMAGES: Record<string, StaticImageData> = {
  // Existing services
  "ai-readiness":       imgAI,
  "cloud-modernization": imgCloud,
  "cybersecurity":       imgCyber,
  "automation":          imgAuto,
  "erp-optimization":   imgERP,
  "data-analytics":      imgData,
  "managed-it":          imgMIT,
  // SAP Solutions umbrella slide
  "sap-solutions":              imgERP,
  // Individual SAP detail pages (not in carousel, but image mapping kept for safety)
  "sap-s4hana-implementation": imgERP,
  "sap-ams":            imgERP,
  "sap-supply-chain":   imgERP,
  "sap-btp":            imgCloud,
  "sap-integration":    imgCloud,
  "sap-fiori-ux":       imgCloud,
  "sap-clean-core":     imgERP,
  "sap-abap":           imgData,
  "jd-edwards-cnc":     imgERP,
  "peoplesoft-implementation": imgERP,
};

const INTERVAL = 5500;

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused]   = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef    = useRef<number | null>(null);
  const startRef  = useRef<number>(0);

  // Featured services, in explicit carouselOrder — ERP leads, AI is an accelerator not the identity
  const featuredServices = serviceCards
    .filter(s => s.featured === true)
    .sort((a, b) => (a.carouselOrder ?? 99) - (b.carouselOrder ?? 99));
  const carouselServices = featuredServices.length > 0 ? featuredServices : serviceCards;
  const total = carouselServices.length;

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + total) % total);
    setProgress(0);
    startRef.current = performance.now();
  }, [total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* Animated progress bar */
  useEffect(() => {
    if (paused) { if (rafRef.current) cancelAnimationFrame(rafRef.current); return; }
    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      setProgress(Math.min(elapsed / INTERVAL, 1));
      if (elapsed < INTERVAL) rafRef.current = requestAnimationFrame(tick);
    };
    startRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [current, paused]);

  /* Auto-advance */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % total);
      setProgress(0);
      startRef.current = performance.now();
    }, INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, total]);

  const service = carouselServices[current];
  const slideImg = SLIDE_IMAGES[service.slug];

  return (
    <section
      className="relative isolate overflow-hidden text-white bg-navy-900"
      style={{ minHeight: "min(100vh, 720px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Services slideshow"
    >

      {/* ── PHOTO — full brightness, cross-fades per slide ───────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={service.slug}
          className="absolute inset-0 -z-20"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={slideImg}
            alt={service.kicker}
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Overlay: full dark on mobile, left-vignette on desktop ─────── */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(15,31,51,0.93) 0%, rgba(15,31,51,0.80) 40%, rgba(15,31,51,0.55) 65%, rgba(15,31,51,0.30) 100%)",
        }}
      />
      {/* Extra full overlay on mobile so text is always readable */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none md:hidden"
        style={{ background: "rgba(10,20,36,0.45)" }}
      />
      {/* Bottom fade so controls bar text stays readable */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-40 -z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(15,31,51,0.80) 0%, transparent 100%)" }}
      />

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <div
        className="container relative flex flex-col justify-center pt-28 pb-32 md:pt-36 md:pb-40"
        style={{ minHeight: "inherit" }}
      >
        {/* max width keeps text on the readable left half */}
        <div className="max-w-xl lg:max-w-2xl">

          {/* Persistent headline — stays put while slides rotate beneath it */}
          <h1 className="text-sm md:text-base font-semibold text-white/85 leading-snug max-w-2xl">
            Helping Mid-Market &amp; Enterprise Companies Modernize ERP, Cloud &amp; AI —
            Without Disrupting Operations
          </h1>

          {/* Small counter pill */}
          <motion.p
            key={`counter-${service.slug}`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-sky/90"
          >
            {String(current + 1).padStart(2, "0")} &nbsp;/&nbsp; {String(total).padStart(2, "0")}
          </motion.p>

          {/* ── BIG technology name — the hero of each slide (div, not H1) ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-${service.slug}`}
              role="heading"
              aria-level={2}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-3 font-bold leading-none tracking-tight text-white"
              style={{ fontSize: "clamp(2.2rem, 6.5vw, 5rem)" }}
            >
              {service.kicker}
            </motion.div>
          </AnimatePresence>

          {/* Service icon + teaser + proof chips */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`body-${service.slug}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="mt-5"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky/20 border border-sky/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-sky" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={service.iconPath} />
                  </svg>
                </span>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  {service.heroTeaser ?? service.summary}
                </p>
              </div>
              {service.heroHighlights && service.heroHighlights.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2 md:pl-12">
                  {service.heroHighlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-sky" />
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary">
              Get a Callback
            </Link>
            <Link
              href={`/services/${service.slug}`}
              className="btn inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-white/35 text-white hover:bg-white/12 transition-colors"
            >
              Explore {service.kicker}&nbsp;→
            </Link>
          </div>

          {/* Contact strip */}
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-2 text-sm text-white/55">
            <a href={`tel:${siteSettings.phonePrimary}`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.42 2 2 0 0 1 3.56 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.19a16 16 0 0 0 6.09 6.09l.91-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
              </svg>
              {siteSettings.phonePrimary}
            </a>
            <a href={`tel:${siteSettings.phoneSecondary}`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.42 2 2 0 0 1 3.56 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.19a16 16 0 0 0 6.09 6.09l.91-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
              </svg>
              {siteSettings.phoneSecondary}
            </a>
            <a href={`mailto:${siteSettings.email}`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {siteSettings.email}
            </a>
          </div>
        </div>
      </div>

      {/* ── CONTROLS BAR ─────────────────────────────────────────────────── */}
      <div className="absolute bottom-0 inset-x-0 z-10">
        {/* Thin progress line */}
        <div className="h-[3px] bg-white/15">
          <motion.div
            className="h-full bg-sky"
            style={{ width: `${progress * 100}%` }}
            transition={{ duration: 0 }}
          />
        </div>

        <div className="container flex items-center justify-between py-4">

          {/* Dot / label tabs */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Slide indicators">
            {carouselServices.map((s, i) => (
              <button
                key={s.slug}
                role="tab"
                aria-selected={i === current}
                aria-label={`Show ${s.kicker}`}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky ${
                  i === current
                    ? "h-2 w-8 bg-sky"
                    : "h-1.5 w-3 bg-white/30 hover:bg-white/55"
                }`}
              />
            ))}
          </div>

          {/* Current service name — center */}
          <AnimatePresence mode="wait">
            <motion.span
              key={`lbl-${service.slug}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50"
            >
              {service.kicker}
            </motion.span>
          </AnimatePresence>

          {/* Prev / Next arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white/70 hover:bg-white/20 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white/70 hover:bg-white/20 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
