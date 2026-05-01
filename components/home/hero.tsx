"use client";

import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { siteSettings } from "@/content/site-content";

export function Hero({ image }: { image: StaticImageData }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-700 text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/95 via-navy-700/85 to-navy-700/60" />
        <div
          aria-hidden
          className="absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-sky/30 blur-3xl"
        />
      </div>

      <div className="container relative pt-24 pb-28 md:pt-32 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-sky animate-pulse" />
            Celebrating 25 Years
          </span>
          <h1 className="mt-6 text-white text-[clamp(2.5rem,5.4vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            Celebrating 25 Years of <span className="text-sky">Innovation</span> and Trust
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Your efficiency and bottom line is our business. Vibrant Inc helps enterprises modernize
            cloud, data, ERP, and managed IT — with senior practitioners and a 25-year delivery track record.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <Link href="/contact" className="btn-primary">
              Get a Call Back
            </Link>
            <Link
              href="/services"
              className="btn inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-white/30 text-white hover:bg-white/10"
            >
              Explore our services
            </Link>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
            <a href={`tel:${siteSettings.phonePrimary}`} className="hover:text-white">
              📞 {siteSettings.phonePrimary}
            </a>
            <a href={`tel:${siteSettings.phoneSecondary}`} className="hover:text-white">
              📞 {siteSettings.phoneSecondary}
            </a>
            <a href={`mailto:${siteSettings.email}`} className="hover:text-white">
              ✉ {siteSettings.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
