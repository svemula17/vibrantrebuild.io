"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { stats, siteSettings } from "@/content/site-content";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden text-white bg-brand-gradient">
      {/* Brand-coloured radial glow, logo orange-red */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 40%, rgba(255,255,255,0.10) 0%, transparent 45%), radial-gradient(circle at 90% 85%, rgba(60,10,0,0.25) 0%, transparent 55%)"
        }}
      />

      <div className="container relative py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-eyebrow uppercase text-white/85">By the numbers</p>
          {/* The client-mandated tagline lives here (single source: siteSettings.tagline) */}
          <h2 className="mt-3 text-white">{siteSettings.tagline}</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="border-l-2 border-brand-600 pl-5"
            >
              {s.highlight ? (
                <>
                  {/* Anniversary medallion, celebratory treatment for the 25+ stat */}
                  <div className="text-6xl md:text-7xl font-bold tracking-tight text-white">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-white/85">{s.label}</p>
                  <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-brand-400/45 bg-brand-600/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400">
                    Est. 2000 · Celebrating 27+ Years
                  </span>
                </>
              ) : (
                <>
                  <div className="text-5xl font-semibold tracking-tight text-white">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-white/85">{s.label}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
