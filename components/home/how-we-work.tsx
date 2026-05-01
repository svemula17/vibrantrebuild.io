"use client";

import { motion } from "framer-motion";
import { servicesProcess } from "@/content/site-content";

export function HowWeWork() {
  return (
    <section className="section bg-navy-50/40">
      <div className="container">

        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">Our approach</p>
          <h2 className="mt-3">How we deliver.</h2>
          <p className="mt-4 text-muted">
            A proven four-phase methodology — senior-led from first conversation through long-term partnership.
          </p>
        </motion.div>

        <div className="mt-14 relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Connecting line — desktop only */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px z-0"
            style={{ background: "linear-gradient(to right, #C8401A 0%, rgba(200,64,26,0.15) 100%)" }}
          />

          {servicesProcess.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-card"
                style={{ background: "linear-gradient(135deg, #A33315 0%, #C8401A 60%, #E05A1F 100%)" }}
              >
                0{i + 1}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-navy-700">{step.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
