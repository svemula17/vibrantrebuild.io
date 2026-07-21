"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animated-counter";
import { stats, siteSettings } from "@/content/site-content";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      {/* Brand-coloured radial glow — logo orange-red */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 50%, rgba(200,64,26,0.28) 0%, transparent 55%), radial-gradient(circle at 85% 30%, rgba(163,51,21,0.20) 0%, transparent 55%)"
        }}
      />

      <div className="container relative py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow-on-dark">By the numbers</p>
          {/* The client-mandated tagline lives here (single source: siteSettings.tagline) */}
          <h2 className="mt-3 text-white">{siteSettings.tagline}</h2>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                  {/* Anniversary medallion — celebratory treatment for the 25+ stat */}
                  <div
                    className="text-6xl md:text-7xl font-bold tracking-tight"
                    style={{
                      background: "linear-gradient(135deg, #FFB347 0%, #E8703A 45%, #E05A1F 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent"
                    }}
                  >
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-white/65">{s.label}</p>
                  <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-brand-400/45 bg-brand-600/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400">
                    Est. 2000 · Celebrating 25+ Years
                  </span>
                </>
              ) : (
                <>
                  <div className="text-5xl font-semibold tracking-tight text-white">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-white/65">{s.label}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
