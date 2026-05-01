"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animated-counter";
import { stats } from "@/content/site-content";

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
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#E8703A" }}>
            By the numbers
          </p>
          <h2 className="mt-3 text-white">A quarter century of measurable impact.</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-l-2 pl-5"
              style={{ borderColor: "#C8401A" }}
            >
              <div className="text-5xl font-semibold tracking-tight text-white">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-white/65">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
