import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { serviceCards, servicesProcess } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Seven practices, one trusted partner. From AI readiness to managed IT — covering the full enterprise technology stack."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Seven practices, one trusted partner."
        description="From AI readiness to managed IT — we cover the full enterprise technology stack with senior practitioners and a 25-year delivery track record."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceCards.map((service) => (
              <Link
                key={service.slug}
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
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">How we work</p>
            <h2 className="mt-3">One delivery model — tuned to each engagement.</h2>
            <p className="mt-4 text-muted">
              Every engagement is led by a senior advisor and supported by our onshore + offshore delivery teams.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {servicesProcess.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <div className="text-xs font-semibold text-sky">{`0${i + 1}`}</div>
                <h3 className="mt-3 text-base font-semibold text-navy-700">{s.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
