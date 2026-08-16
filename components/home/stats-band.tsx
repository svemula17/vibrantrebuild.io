"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { stats } from "@/content/site-content";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden text-white bg-brand-gradient">
      {/* Brand-coloured radial glow, logo orange-red */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            /* Bottom-right wash strengthened: at 0.25 the light stop still left
               white/85 at ~4.3:1, just under the 4.5 AA floor. */
            "radial-gradient(circle at 15% 40%, rgba(255,255,255,0.08) 0%, transparent 45%), radial-gradient(ellipse at 95% 90%, rgba(90,25,4,0.42) 0%, transparent 60%)"
        }}
      />

      <div className="container relative py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-eyebrow uppercase text-white/90">By the numbers</p>
          {/* Says what the numbers below add up to. The company tagline still
              carries the brand line in the footer and page metadata. */}
          <h2 className="mt-3 text-white">
            Twenty-six years, 200+ programs, and a client list that keeps coming back.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="border-l-2 border-white/45 pl-5"
            >
              {s.highlight ? (
                <>
                  {/* Anniversary medallion, celebratory treatment for the 26+ stat */}
                  <div className="text-6xl md:text-7xl font-bold tracking-tight text-white">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-white/90">{s.label}</p>
                  <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    Est. 2000 · Celebrating 26+ Years
                  </span>
                </>
              ) : (
                <>
                  <div className="text-5xl font-semibold tracking-tight text-white">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-white/90">{s.label}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
