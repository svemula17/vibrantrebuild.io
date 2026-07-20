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
  const [paused, setPaused]   = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef    = useRef<number | null>(null);
  const startRef  = useRef<number>(0);
  const reduceMotion = useReducedMotion();

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
    if (paused || reduceMotion) return;
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % total);
      setProgress(0);
      startRef.current = performance.now();
    }, INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, total, reduceMotion]);

  /* Pause while the tab is hidden — otherwise the timer keeps advancing while
     animation frames are throttled and the slide content desyncs from the counter */
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

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
            "linear-gradient(to right, rgba(10,18,32,0.96) 0%, rgba(10,18,32,0.88) 45%, rgba(10,18,32,0.62) 70%, rgba(10,18,32,0.38) 100%)",
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
        className="container relative flex flex-col justify-center pt-20 pb-24 md:pt-24 md:pb-24"
        style={{ minHeight: "inherit" }}
      >
        {/* One alignment spine: every element shares this flush-left edge */}
        <div className="max-w-xl lg:max-w-3xl">

          {/* Persistent positioning statement — anchored by a brand rule */}
          <h1 className="border-l-2 border-sky pl-4 text-[13px] md:text-[15px] font-medium text-white/80 leading-snug max-w-lg">
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

          {/* Teaser + proof chips — flush with the spine, no hanging indents */}
          <motion.div
            key={`body-${service.slug}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mt-5"
          >
            <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-2xl">
              {service.heroTeaser ?? service.summary}
            </p>
            {service.heroHighlights && service.heroHighlights.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2.5">
                {service.heroHighlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] backdrop-blur-sm px-3.5 py-1.5 text-[13px] font-medium text-white/90"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky" />
                    {h}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

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
          <motion.span
            key={`lbl-${service.slug}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50"
          >
            {service.kicker}
          </motion.span>

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
