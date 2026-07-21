import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { serviceCards, servicesProcess } from "@/content/site-content";
import { VibrantMethod } from "@/components/vibrant-method";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "Seven capability pillars. Eighteen specialized services. From ERP and cloud modernization to cybersecurity, data, automation, and AI — the full enterprise technology stack under one partner.",
  path: "/services"
});

export default function ServicesPage() {
  const gridServices = serviceCards.filter(s => !s.hideFromGrid);
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The full enterprise technology stack — under one partner."
        description="Seven capability pillars, eighteen specialized services. From ERP and cloud modernization to cybersecurity, data, automation, and AI — delivered by certified practitioners with 25+ years of trusted delivery."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section">
        <div className="container">
          <h2 className="sr-only">All services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {gridServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover hover:border-sky/40"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-sky/10 text-brand-700">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d={service.iconPath} />
                  </svg>
                </span>
                <p className="mt-6 eyebrow text-[0.7rem]">{service.kicker}</p>
                <h3 className="mt-2 text-xl text-navy-700">{service.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{service.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 transition-all">
                  Learn more
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <VibrantMethod />
    </>
  );
}
