"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import anniversary from "@/image.png";

const points = [
  {
    title: "Established in 2000",
    body: "25 years of trusted, value-added IT delivery across cloud, data, and ERP."
  },
  {
    title: "Senior practitioners",
    body: "A deep professional pool of architects, functional leads, and engineers."
  },
  {
    title: "Long-term relationships",
    body: "Most clients return — built on outcomes, not transactions."
  },
  {
    title: "Proven delivery",
    body: "Repeatable methodology, accelerators, and onshore + offshore execution."
  }
];

export function WhyVibrant() {
  return (
    <section className="section bg-white">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Why Vibrant</p>
          <h2 className="mt-3">Trusted, value-added IT solutions since 2000.</h2>
          <p className="mt-5 text-muted leading-relaxed">
            Vibrant Inc helps businesses navigate the digital landscape through cloud and data analytics —
            with practical execution, senior delivery teams, and a 25-year reputation for getting it right.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="btn-secondary">About Vibrant</Link>
            <Link href="/services" className="btn-ghost">All services</Link>
          </div>
        </motion.div>

        {/* Right side: 25-year graphic + value points */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl shadow-cardHover"
          >
            <Image
              src={anniversary}
              alt="Vibrant Inc — Celebrating 25 Years in Business"
              width={780}
              height={960}
              className="w-full h-auto object-cover max-h-60 object-top"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-line bg-navy-50/40 p-5 hover:bg-white hover:border-sky/30 hover:shadow-card transition-all"
              >
                <h3 className="text-sm font-semibold text-navy-700">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
