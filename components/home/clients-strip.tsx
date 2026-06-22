"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import deloitte  from "@/assets/clients/deloitte.jpg";
import cosyn     from "@/assets/clients/cosyn.jpg";
import rcn       from "@/assets/clients/rcn.jpg";
import acta      from "@/assets/clients/acta.jpg";
import infojini  from "@/assets/clients/infojini.jpg";

const clients = [
  { src: deloitte,  alt: "Deloitte" },
  { src: cosyn,     alt: "COSYN" },
  { src: rcn,       alt: "RCN" },
  { src: acta,      alt: "acta" },
  { src: infojini,  alt: "Infojini" },
];

export function ClientsStrip() {
  return (
    <section className="border-b border-line bg-navy-50/30">
      <div className="container py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Clients we&apos;ve served
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {clients.map((c, i) => (
            <motion.div
              key={c.alt}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={c.src}
                alt={c.alt}
                height={36}
                width={120}
                className="h-9 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
