"use client";

import { motion } from "framer-motion";

const industries = [
  {
    label: "Healthcare & Life Sciences",
    icon: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
  },
  {
    label: "Financial Services",
    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  },
  {
    label: "Government & Public Sector",
    icon: "M3 22V10M21 22V10M12 2l9 8H3l9-8zM12 22V10m-4 0v12M16 10v12",
  },
  {
    label: "Manufacturing & Supply Chain",
    icon: "M2 20h20M5 20V10l7-7 7 7v10M9 20v-5h6v5",
  },
  {
    label: "Retail & eCommerce",
    icon: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0",
  },
  {
    label: "Technology & SaaS",
    icon: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  },
];

export function IndustryVerticals() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container">

        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">Industries we serve</p>
          <h2 className="mt-3">Built for the complexity of your industry.</h2>
          <p className="mt-4 text-muted">
            25 years of cross-sector experience means we understand the compliance, integration,
            and delivery challenges your teams face every day.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex flex-col items-center text-center gap-3 rounded-2xl border border-line bg-white p-5 hover:border-sky/40 hover:shadow-card transition-all cursor-default"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-sky/10 text-sky group-hover:bg-sky group-hover:text-white transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={ind.icon} />
                </svg>
              </span>
              <p className="text-xs font-semibold text-navy-700 leading-snug">{ind.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
