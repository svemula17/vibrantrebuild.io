"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { serviceCards } from "@/content/site-content";

export function ServicesGrid() {
  return (
    <section className="section bg-white">
      <div className="container">

        {/* Section header — slides in from left */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3">Seven practices, one trusted partner.</h2>
          <p className="mt-4 text-muted">
            From AI readiness to managed IT — covering the full enterprise technology stack
            with senior practitioners.
          </p>
        </motion.div>

        {/* Cards — cascade in */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {serviceCards.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.08,
                ease: "easeOut"
              }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-all hover:-translate-y-1.5 hover:shadow-cardHover hover:border-sky/40 overflow-hidden"
              >
                {/* Left accent bar — slides in on hover */}
                <span
                  className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: "linear-gradient(to bottom, #C8401A, #E05A1F)" }}
                />

                {/* Icon with brand gradient background on hover */}
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-sky/10 text-sky transition-colors group-hover:bg-sky group-hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d={service.iconPath} />
                  </svg>
                </span>

                <p className="mt-6 eyebrow text-[0.7rem]">{service.kicker}</p>
                <h3 className="mt-2 text-xl text-navy-700">{service.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{service.summary}</p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky group-hover:gap-3 transition-all">
                  Learn more
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
