"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { serviceCards } from "@/content/site-content";

/* ─── Slide images — one per service ──────────────────────────────────── */
import imgAI     from "@/assets/services/ai.jpg";           // keep
import imgCloud  from "@/assets/services/cloud.jpg"; // updated
import imgCyber  from "@/assets/services/cybersecurity.jpg";                                  // new
import imgAuto   from "@/assets/services/automation.jpg";                             // new
import imgERP    from "@/assets/services/erp.jpg"; // updated
import imgData   from "@/assets/services/data-analytics.jpg";                                   // new
import imgMIT    from "@/assets/services/managed-it.jpg";     // keep

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
  /* One boolean per pause cause; auto-advance runs only when all are clear.
     userPaused is PERMANENT after any manual interaction (WCAG 2.2.2) —
     only the play button clears it. */
  const [userPaused, setUserPaused]     = useState(false);
  const [hoverPaused, setHoverPaused]   = useState(false);
  const [focusPaused, setFocusPaused]   = useState(false);
  const [hiddenPaused, setHiddenPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef    = useRef<number | null>(null);
  const startRef  = useRef<number>(0);
  const reduceMotion = useReducedMotion();
  const isPaused = userPaused || hoverPaused || focusPaused || hiddenPaused || !!reduceMotion;

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
    setUserPaused(true); // manual interaction stops auto-rotation for good
  }, [total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* Animated progress bar */
  useEffect(() => {
    if (isPaused) { if (rafRef.current) cancelAnimationFrame(rafRef.current); return; }
    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      setProgress(Math.min(elapsed / INTERVAL, 1));
      if (elapsed < INTERVAL) rafRef.current = requestAnimationFrame(tick);
    };
    startRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [current, isPaused]);

  /* Auto-advance */
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % total);
      setProgress(0);
      startRef.current = performance.now();
    }, INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, isPaused, total]);

  /* Pause while the tab is hidden — otherwise the timer keeps advancing while
     animation frames are throttled and the slide content desyncs from the counter */
  useEffect(() => {
    const onVisibility = () => setHiddenPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const service = carouselServices[current];
  const slideImg = SLIDE_IMAGES[service.slug];

  return (
    <section
      className="relative isolate overflow-hidden text-white bg-neutral-900 hero-min-h"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocus={() => setFocusPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocusPaused(false);
      }}
      aria-label="Services slideshow"
      aria-roledescription="carousel"
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
            alt=""
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
            "linear-gradient(to right, rgba(18,12,8,0.96) 0%, rgba(18,12,8,0.88) 45%, rgba(18,12,8,0.62) 70%, rgba(18,12,8,0.38) 100%)",
        }}
      />
      {/* Extra full overlay on mobile so text is always readable */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none md:hidden"
        style={{ background: "rgba(18,12,8,0.45)" }}
      />
      {/* Bottom fade so controls bar text stays readable */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-40 -z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(18,12,8,0.80) 0%, transparent 100%)" }}
      />

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <div
        className="container relative flex flex-col justify-center pt-20 pb-24 md:pt-24 md:pb-24"
        style={{ minHeight: "inherit" }}
        aria-live={isPaused ? "polite" : "off"}
      >
        {/* One alignment spine: every element shares this flush-left edge */}
        <div className="max-w-xl lg:max-w-3xl">

          {/* Persistent positioning statement — anchored by a brand rule */}
          <h1 className="border-l-2 border-sky pl-4 text-[13px] md:text-[15px] font-medium text-white/75 leading-snug max-w-lg [text-wrap:balance]">
            Helping Mid-Market &amp; Enterprise Companies Modernize ERP, Cloud &amp; AI —
            Without Disrupting Operations
          </h1>

          {/* ── BIG technology name — the hero of each slide (div, not H1).
               Keyed re-mount plays the enter animation per slide; no
               AnimatePresence exit choreography (it can wedge at opacity 0). ── */}
          <motion.div
            key={`title-${service.slug}`}
            role="heading"
            aria-level={2}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(2.1rem, 5vw, 3.9rem)", lineHeight: 1.06 }}
          >
            {service.kicker}
          </motion.div>

          {/* One line, no paragraph, no chips — minimal by design */}
          <motion.p
            key={`body-${service.slug}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl [text-wrap:balance]"
          >
            {service.heroTagline ?? service.summary}
          </motion.p>

          {/* One primary action + one quiet text link */}
          <div className="mt-9 flex flex-col items-start sm:flex-row sm:items-center gap-5">
            <Link href="/contact" className="btn-primary">
              Get my callback
            </Link>
            <Link
              href={`/services/${service.slug}`}
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
            >
              Explore {service.kicker}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
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

          {/* Slide dots — 44px hit areas around small visual dots */}
          <div className="flex items-center" role="group" aria-label="Choose slide">
            {carouselServices.map((s, i) => (
              <button
                key={s.slug}
                type="button"
                aria-label={`Go to slide ${i + 1} of ${total}: ${s.kicker}`}
                aria-current={i === current ? "true" : undefined}
                onClick={() => goTo(i)}
                className="flex h-11 min-w-[28px] items-center justify-center px-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-full"
              >
                <span
                  aria-hidden="true"
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "h-2 w-8 bg-sky"
                      : "h-1.5 w-3 bg-white/30 hover:bg-white/55"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Current service name — center */}
          <motion.span
            key={`lbl-${service.slug}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50"
          >
            {service.kicker}
          </motion.span>

          {/* Pause/Play + Prev/Next */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                if (userPaused) {
                  setUserPaused(false);
                  setProgress(0);
                  startRef.current = performance.now();
                } else {
                  setUserPaused(true);
                }
              }}
              aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
              aria-pressed={userPaused}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white/70 hover:bg-white/20 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              {userPaused ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white/70 hover:bg-white/20 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white/70 hover:bg-white/20 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
