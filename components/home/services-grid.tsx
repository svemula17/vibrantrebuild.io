"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { serviceCards } from "@/content/site-content";

// Homepage grid: the seven capability pillars, ERP first. Full catalog on /services.
const homepageSlugs = [
  "erp-optimization",
  "cloud-modernization",
  "cybersecurity",
  "data-analytics",
  "automation",
  "ai-readiness",
  "managed-it"
];

export function ServicesGrid() {
  const gridServices = homepageSlugs
    .map(slug => serviceCards.find(s => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const totalServices = serviceCards.filter(s => !s.hideFromGrid).length;

  return (
    <section className="section section-soft">
      <div className="container">

        {/* Section header — rises in once on scroll */}
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3">Seven Capabilities. One Vibrant Partner.</h2>
          <p className="mt-4 text-muted">
            From ERP and cloud to cybersecurity, data, automation, and AI — seven capability
            pillars covering the full enterprise technology stack, delivered by senior
            practitioners who&apos;ve been doing this since 2000.
          </p>
        </Reveal>

        {/* Cards — cascade in */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {gridServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{
                duration: 0.35,
                delay: (i % 4) * 0.06,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={i === 0 ? "sm:col-span-2" : undefined}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-all hover:-translate-y-1.5 hover:shadow-cardHover hover:border-sky/40 overflow-hidden"
              >
                {/* Left accent bar — slides in on hover */}
                <span className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-brand-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Icon with brand gradient background on hover */}
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-sky/10 text-brand-700 transition-colors group-hover:bg-sky group-hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d={service.iconPath} />
                  </svg>
                </span>

                <p className="mt-6 eyebrow text-[0.7rem]">{service.kicker}</p>
                <h3 className="mt-2 text-xl text-navy-700">{service.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{service.summary}</p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-3 transition-all">
                  Learn more
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-10 flex justify-center">
          <Link href="/services" className="btn-ghost inline-flex items-center gap-2">
            Explore all {totalServices} services
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
