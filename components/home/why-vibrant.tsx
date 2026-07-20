"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import anniversary from "@/image.png";
import { RevealWords } from "@/components/reveal-on-scroll";

const points = [
  { title: "25 years of trusted delivery", body: "Since 2000, we've helped enterprises modernize, grow, and run better — with measurable outcomes every time." },
  { title: "Senior practitioners only",    body: "Deep professional pool of architects, functional leads, and engineers. No juniors staffed on your account." },
  { title: "Built for impact",             body: "We optimize for outcomes that matter — efficiency, sustainability, economic growth — not just project completion." },
  { title: "Partners, not vendors",        body: "Most clients return. We build long-term relationships around trust, not transactions or recurring license fees." }
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
          <h2 className="mt-3">
            <RevealWords text="Trusted, value-added IT solutions since 2000." />
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            We believe technology should do more than cut costs — it should create jobs, reduce waste, and
            power businesses that do good in the world. Vibrant combines deep ERP, cloud, and security
            expertise with a genuine commitment to people, planet, and performance.
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
