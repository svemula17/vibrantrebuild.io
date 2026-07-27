import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import {
  getCaseStudyForService,
  getRelatedResourcesForService,
  getRelatedServices,
  getServiceBySlug,
  serviceCards,
  serviceInterestMap,
  siteSettings
} from "@/content/site-content";
import { CaseStudyCard } from "@/components/case-study-card";
import { pageMeta } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return serviceCards.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return pageMeta({
    title: service.title,
    description: service.metaDescription ?? service.summary,
    path: `/services/${slug}`
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = serviceCards.filter((s) => s.slug !== service.slug).slice(0, 3);
  const relatedResources = getRelatedResourcesForService(service.slug);
  const relatedServices = getRelatedServices(service.slug);
  const proof = getCaseStudyForService(service.slug);

  return (
    <>
      <PageHero
        eyebrow={service.kicker}
        title={service.title}
        description={service.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title }
        ]}
      >
        <div className="flex flex-wrap gap-2">
          {service.metaTags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full bg-white border border-line px-3 py-1.5 text-xs font-medium text-navy-700"
            >
              {t}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1fr_22rem]">
          <div>
            <p className="eyebrow">Overview</p>
            <h2 className="mt-3">What we deliver.</h2>
            <p className="mt-5 text-muted">{service.longDescription}</p>

            <h3 className="mt-12 text-xl">Outcomes you can expect</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {service.outcomes.map((o, i) => (
                <div
                  key={o}
                  className="rounded-2xl border border-line bg-white p-5 shadow-card"
                >
                  <div className="text-sm font-semibold text-brand-700">{`0${i + 1}`}</div>
                  <p className="mt-2 text-sm text-ink/80 leading-relaxed">{o}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-12 text-xl">What we do, specifically</h3>
            <ul className="svc-list mt-5">
              {service.capabilities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <h3 className="mt-12 text-xl">Best fit</h3>
            <p className="mt-3 text-muted">{service.bestFit}</p>

            {proof && (
              <>
                <h3 className="mt-12 text-xl">Proof: client outcome</h3>
                <div className="mt-5 max-w-md">
                  <CaseStudyCard cs={proof} />
                </div>
              </>
            )}

            {relatedResources.length > 0 && (
              <>
                <h3 className="mt-12 text-xl">Steal our playbooks</h3>
                <p className="mt-2 text-sm text-muted">
                  The guides and checklists our architects use on real engagements — free,
                  ungated, and specific to this kind of work.
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {relatedResources.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="group rounded-2xl border border-line bg-white p-5 shadow-card hover:-translate-y-0.5 hover:shadow-cardHover hover:border-sky/40 transition-all"
                    >
                      <span className="chip-accent text-[11px]">{r.category}</span>
                      <p className="mt-3 text-sm font-semibold text-navy-700 leading-snug">{r.title}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 group-hover:gap-2.5 transition-all">
                        {r.readTime ? `Read the guide · ${r.readTime}` : "Open"} →
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside>
            <div className="lg:sticky lg:top-28 card p-7">
              <p className="eyebrow">Talk to an expert</p>
              <h3 className="mt-2 text-lg">{`Talk to a ${service.kicker} expert.`}</h3>
              <p className="mt-2 text-sm text-muted">
                A 30-minute senior-led call to understand your situation and share what we&apos;d typically recommend.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <Link
                  href={`/contact/?interest=${encodeURIComponent(serviceInterestMap[service.slug] ?? "")}`}
                  className="btn-primary"
                >
                  Book a Call
                </Link>
                <a href={`tel:${siteSettings.phonePrimary}`} className="btn-ghost">{siteSettings.phonePrimary}</a>
              </div>
              <hr className="my-6 border-line" />
              <p className="eyebrow">Related capabilities</p>
              <ul className="mt-3 space-y-2 text-sm">
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-navy-700 font-medium hover:text-brand-700">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Other services</p>
            <h2 className="mt-3">Pair this with the rest of our practice.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="group rounded-2xl border border-line bg-white p-6 shadow-card hover:-translate-y-0.5 hover:shadow-cardHover hover:border-sky/40 transition-all"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky/10 text-brand-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d={o.iconPath} />
                  </svg>
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-700">{o.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{o.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 transition-all">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
