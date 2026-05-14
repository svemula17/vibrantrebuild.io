"use client";

import { motion } from "framer-motion";
import { valueAdds } from "@/content/site-content";

const ICONS: Record<string, string> = {
  "SAP Certified Consultants":           "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  "Discovery & Assessment Workshops":    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  "Accelerators & Reusable Solutions":   "M13 10V3L4 14h7v7l9-11h-7z",
  "Generative AI & Intelligent Automation": "M12 2a4 4 0 014 4v1a4 4 0 010 8v1a4 4 0 01-8 0v-1a4 4 0 010-8V6a4 4 0 014-4z",
  "Global Delivery Model":               "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  "24/7 Production Support":             "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  "Industry-Specific Expertise":         "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  "Cloud & Integration Expertise":       "M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z",
};

const DEFAULT_ICON = "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";

export function ValueAdds() {
  return (
    <section className="section bg-navy-900 text-white">
      <div className="container">

        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow text-sky">Our value add</p>
          <h2 className="mt-3 text-white">What makes Vibrant different.</h2>
          <p className="mt-4 text-white/65 leading-relaxed">
            Certified expertise, global delivery, and purpose-built accelerators — the eight
            reasons clients choose us and keep coming back.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valueAdds.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-sky/40 transition-all"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky/20 text-sky group-hover:bg-sky group-hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={ICONS[item.title] ?? DEFAULT_ICON} />
                </svg>
              </span>
              <h3 className="mt-4 text-sm font-semibold text-white leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
