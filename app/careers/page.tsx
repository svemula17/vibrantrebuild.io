import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  careersBenefits,
  careersCriteria,
  careerOpenings,
  siteSettings
} from "@/content/site-content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Vibrant is an exciting company to work with and build a career. We hire experienced practitioners and trust them to lead."
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a career, not just a role."
        description="Vibrant is an exciting company to work with and build a career. We emphasize customer satisfaction, employee satisfaction, work-life balance, and ongoing training."
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link href="#openings" className="btn-primary">See open roles</Link>
          <Link href="/contact" className="btn-ghost">Talk to recruiting</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Our culture</p>
            <h2 className="mt-3">Senior, distributed, and built on trust.</h2>
            <p className="mt-5 text-muted">
              Consultants are distributed across the country and travel to client sites as required, while the company is headquartered in Princeton, New Jersey. We hire experienced practitioners and trust them to lead.
            </p>
            <p className="mt-4 text-muted">
              Our people stay because the work is interesting, the teams are senior, and the relationships — with clients and with each other — are long-term.
            </p>
          </div>
          <div className="card p-8">
            <p className="eyebrow">What we look for</p>
            <ul className="svc-list mt-4">
              {careersCriteria.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Benefits</p>
            <h2 className="mt-3">What we offer.</h2>
            <p className="mt-4 text-muted">
              A complete package designed to support you and your family through every stage of your career.
            </p>
          </div>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {careersBenefits.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3.5"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-sky/10 text-sky shrink-0">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm text-navy-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="openings" className="section">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Open roles</p>
            <h2 className="mt-3">Where we&apos;re hiring right now.</h2>
            <p className="mt-4 text-muted">
              If you don&apos;t see a perfect match, send us your résumé anyway — we hire ahead of demand for senior practitioners.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {careerOpenings.map((o) => (
              <Link
                key={o.title}
                href="/contact"
                className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card hover:-translate-y-1 hover:shadow-cardHover hover:border-sky/40 transition-all"
              >
                <p className="eyebrow text-[0.7rem]">{o.category}</p>
                <h4 className="mt-2 text-lg font-semibold text-navy-700">{o.title}</h4>
                <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{o.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky group-hover:gap-2.5 transition-all">
                  Apply →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Don&apos;t see your role?</p>
            <h2 className="mt-3">Send us your résumé anyway.</h2>
            <p className="mt-5 text-muted">
              We hire experienced consultants ahead of demand. If you&apos;d be a fit on a future engagement, we want to know now.
            </p>
          </div>
          <div className="card p-8 text-center">
            <h3 className="text-lg font-semibold text-navy-700">Email us your résumé</h3>
            <p className="mt-2 text-sm text-muted">A senior recruiter will reach out within one business day.</p>
            <a href={`mailto:${siteSettings.emailCareers}`} className="btn-primary mt-5">
              {siteSettings.emailCareers}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
