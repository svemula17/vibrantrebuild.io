import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { insights, resourceGuides } from "@/content/site-content";

export const metadata: Metadata = pageMeta({
  title: "Resources",
  description:
    "White papers, migration guides, readiness checklists, an SAP S/4HANA cost calculator, and insights from 25+ years of ERP, cloud, and AI delivery.",
  path: "/resources"
});

const CATEGORY_STYLES: Record<string, string> = {
  "White Paper": "bg-navy-700 text-white",
  Guide: "bg-sky/10 text-brand-700",
  Checklist: "bg-emerald-50 text-emerald-700",
  Roadmap: "bg-amber-50 text-amber-700"
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Guides, tools, and insights from 25+ years of delivery."
        description="The same frameworks and checklists we use on real engagements — free to read, built to be used. No gate, no email wall."
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      {/* Guides & white papers */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Guides & white papers</p>
            <h2 className="mt-3">Read before you buy anything.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resourceGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/resources/${guide.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover hover:border-sky/40"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      CATEGORY_STYLES[guide.category] ?? "bg-navy-50 text-navy-700"
                    }`}
                  >
                    {guide.category}
                  </span>
                  <span className="text-xs text-muted">{guide.readTime}</span>
                </div>
                <h3 className="mt-5 text-xl text-navy-700">{guide.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                  {guide.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-3 transition-all">
                  Read the {guide.category.toLowerCase()}
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator callout */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 30%, rgba(200,64,26,0.30) 0%, transparent 55%)"
          }}
        />
        <div className="container relative py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <p className="eyebrow-on-dark">Interactive tool</p>
            <h2 className="mt-3 text-white">SAP S/4HANA Cost Calculator</h2>
            <p className="mt-4 text-white/70">
              Users, modules, landscape, approach — get an indicative budget range for planning
              conversations in about 60 seconds.
            </p>
          </div>
          <Link href="/resources/sap-cost-calculator" className="btn-outline-light shrink-0">
            Run the calculator →
          </Link>
        </div>
      </section>

      {/* Insights */}
      <section className="section-soft">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">From the blog</p>
            <h2 className="mt-3">Short reads, strong opinions.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {insights.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover hover:border-sky/40"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-flex items-center rounded-full bg-sky/10 px-3 py-1 font-semibold text-brand-700">
                    {post.tag}
                  </span>
                  <span className="text-muted">{post.date}</span>
                </div>
                <h3 className="mt-4 text-xl text-navy-700">{post.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{post.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-3 transition-all">
                  Read article
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2>Prefer answers to reading?</h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Thirty minutes with a principal architect beats three hours of research — bring your
            hardest question.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-primary">
              Get my callback
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
