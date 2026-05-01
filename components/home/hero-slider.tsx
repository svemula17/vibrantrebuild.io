"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { serviceCards, siteSettings } from "@/content/site-content";

/* ─── Slide images — one per service ──────────────────────────────────── */
import imgAI     from "@/pexels-tara-winstead-8386440.jpg";
import imgCloud  from "@/EA5BBA79-D574-4E5B-91F5-07F4A98C3EF3_1_102_a.jpeg";
import imgCyber  from "@/pexels-rdne-7948005.jpg";
import imgAuto   from "@/BBD35025-2521-436B-B26A-BE267C05B9B3_1_102_a.jpeg";
import imgERP    from "@/9EBDBB46-F678-4876-9A7B-B8CED32853DD_1_102_a.jpeg";
import imgData   from "@/4597653D-8E97-48D9-B13A-8A3F22E99726_1_102_a.jpeg";
import imgMIT    from "@/pexels-tima-miroshnichenko-5380596.jpg";

const SLIDE_IMAGES: Record<string, StaticImageData> = {
  "ai-readiness":       imgAI,
  "cloud-modernization": imgCloud,
  "cybersecurity":       imgCyber,
  "automation":          imgAuto,
  "erp-optimization":   imgERP,
  "data-analytics":      imgData,
  "managed-it":          imgMIT,
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

  const total = serviceCards.length;

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

  const service = serviceCards[current];
  const slideImg = SLIDE_IMAGES[service.slug];

  return (
    <section
      className="relative isolate overflow-hidden text-white"
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

      {/* ── Overlay: strong left vignette, transparent right ─────────────── */}
      {/* Left panel — text readable */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(15,31,51,0.92) 0%, rgba(15,31,51,0.75) 45%, rgba(15,31,51,0.25) 70%, rgba(15,31,51,0.05) 100%)",
        }}
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

          {/* Small counter pill */}
          <motion.p
            key={`counter-${service.slug}`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-xs font-bold uppercase tracking-[0.22em] text-sky/90"
          >
            {String(current + 1).padStart(2, "0")} &nbsp;/&nbsp; {String(total).padStart(2, "0")}
          </motion.p>

          {/* ── BIG technology name — the hero of each slide ── */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${service.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-3 font-bold leading-none tracking-tight text-white"
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)" }}
            >
              {service.kicker}
            </motion.h1>
          </AnimatePresence>

          {/* Service icon + summary */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`body-${service.slug}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="mt-5 flex items-start gap-3"
            >
              <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky/20 border border-sky/30">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-sky" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={service.iconPath} />
                </svg>
              </span>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                {service.summary}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary">
              Get a Call Back
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
            <a href={`tel:${siteSettings.phonePrimary}`} className="hover:text-white transition-colors">
              📞 {siteSettings.phonePrimary}
            </a>
            <a href={`tel:${siteSettings.phoneSecondary}`} className="hover:text-white transition-colors">
              📞 {siteSettings.phoneSecondary}
            </a>
            <a href={`mailto:${siteSettings.email}`} className="hover:text-white transition-colors">
              ✉ {siteSettings.email}
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
            {serviceCards.map((s, i) => (
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
