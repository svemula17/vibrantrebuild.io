"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { serviceCards } from "@/content/site-content";

export function ServicesGrid() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3">Seven practices, one trusted partner.</h2>
          <p className="mt-4 text-muted">
            From AI readiness to managed IT — covering the full enterprise technology stack with senior practitioners.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {serviceCards.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover hover:border-sky/40"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-sky/10 text-sky">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d={service.iconPath} />
                  </svg>
                </span>
                <p className="mt-6 eyebrow text-[0.7rem]">{service.kicker}</p>
                <h3 className="mt-2 text-xl text-navy-700">{service.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{service.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky group-hover:gap-2.5 transition-all">
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
