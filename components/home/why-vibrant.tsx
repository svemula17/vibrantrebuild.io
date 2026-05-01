"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import anniversary from "@/image.png";

const points = [
  { title: "Established in 2000",    body: "25 years of trusted, value-added IT delivery across cloud, data, and ERP." },
  { title: "Senior practitioners",   body: "A deep professional pool of architects, functional leads, and engineers." },
  { title: "Long-term relationships",body: "Most clients return — built on outcomes, not transactions." },
  { title: "Proven delivery",        body: "Repeatable methodology, accelerators, and onshore + offshore execution." }
];

export function WhyVibrant() {
  return (
    <section className="section bg-white">
      <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">

        {/* Left — copy, slides in from left */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Why Vibrant</p>
          <h2 className="mt-3">Trusted, value-added IT solutions since 2000.</h2>
          <p className="mt-5 text-muted leading-relaxed">
            Vibrant Inc helps businesses navigate the digital landscape through cloud and data analytics —
            with practical execution, senior delivery teams, and a 25-year reputation for getting it right.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about"    className="btn-primary">About Vibrant</Link>
            <Link href="/services" className="btn-ghost">All services</Link>
          </div>
        </motion.div>

        {/* Right — anniversary graphic + value tiles */}
        <div className="flex flex-col gap-6">

          {/* Anniversary badge — constrained size, centred */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <Image
              src={anniversary}
              alt="Vibrant Inc — Celebrating 25 Years in Business"
              width={260}
              height={320}
              className="w-52 h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Value tiles — staggered */}
          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6%" }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.07 }}
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
