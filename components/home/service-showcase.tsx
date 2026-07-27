"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { serviceCards, type ServiceCard } from "@/content/site-content";

import imgAI    from "@/assets/services/ai.jpg";
import imgCloud from "@/assets/services/cloud.jpg";
import imgCyber from "@/assets/services/cybersecurity.jpg";
import imgAuto  from "@/assets/services/automation.jpg";
import imgERP   from "@/assets/services/erp.jpg";
import imgData  from "@/assets/services/data-analytics.jpg";
import imgMIT   from "@/assets/services/managed-it.jpg";

const IMAGES: Record<string, StaticImageData> = {
  "erp-optimization":    imgERP,
  "cloud-modernization": imgCloud,
  "cybersecurity":       imgCyber,
  "ai-readiness":        imgAI,
  "automation":          imgAuto,
  "data-analytics":      imgData,
  "managed-it":          imgMIT
};

const INTERVAL = 5000;

/* The flagship slot of the What-we-do grid: an auto-sliding showcase that
   rotates through the seven pillars (ERP first). Pauses on hover/focus and
   stands still for reduced-motion users. */
export function ServiceShowcase() {
  const services: ServiceCard[] = serviceCards
    .filter((s) => s.featured === true)
    .sort((a, b) => (a.carouselOrder ?? 99) - (b.carouselOrder ?? 99));

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % services.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused, reduceMotion, services.length]);

  const service = services[current];

  return (
    <div
      className="group relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-line shadow-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
      aria-roledescription="carousel"
      aria-label="Service highlights"
    >
      {/* Photos — cross-fade via CSS opacity */}
      {services.map((s, i) => (
        <div
          key={s.slug}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-700 ease-brand ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={IMAGES[s.slug] ?? imgERP}
            alt=""
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(18,12,8,0.88) 0%, rgba(18,12,8,0.45) 55%, rgba(18,12,8,0.20) 100%)"
            }}
          />
        </div>
      ))}

      {/* Copy — bottom-left, aria-live announces the slide when paused */}
      <div
        className="relative flex h-full flex-col justify-end p-7 text-white"
        aria-live={paused ? "polite" : "off"}
      >
        <p className="eyebrow-on-dark">Our services</p>
        <h3 className="mt-2 text-2xl font-semibold text-white leading-snug">{service.kicker}</h3>
        <p className="mt-2 text-sm text-white/80 leading-relaxed line-clamp-2 max-w-md">
          {service.heroTagline ?? service.summary}
        </p>
        <Link
          href={`/services/${service.slug}`}
          className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-300 hover:gap-3 transition-all"
        >
          Learn more
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Dots — bottom-right */}
      <div className="absolute bottom-7 right-7 flex items-center" role="group" aria-label="Choose service slide">
        {services.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Show ${s.kicker}`}
            aria-current={i === current ? "true" : undefined}
            className="flex h-8 min-w-[20px] items-center justify-center"
          >
            <span
              aria-hidden
              className={`rounded-full transition-all duration-300 ${
                i === current ? "h-2 w-6 bg-brand-400" : "h-1.5 w-1.5 bg-white/40 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
