import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { PageHero } from "@/components/page-hero";
import { leadership, type Leader } from "@/content/site-content";

export const metadata: Metadata = pageMeta({
  title: "Leadership | ERP & Security Practitioners",
  description:
    "Meet the Vibrant Inc leadership team, founder-led delivery backed by principal architects across ERP, cloud, SAP, cybersecurity, and AI.",
  path: "/team"
});

import sureshPhoto from "@/assets/team/suresh-reddy.jpg";

const leaderPhotos: Record<string, StaticImageData> = {
  "suresh-reddy": sureshPhoto
};

const AI_ICON =
  "M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1 0 8v1a4 4 0 1 1-8 0v-1a4 4 0 0 1 0-8V6a4 4 0 0 1 4-4zM9 10h.01M15 10h.01M9 14h.01M15 14h.01";

/* Expertise chips deep-link to the service where that work happens */
const EXPERTISE_LINKS: Record<string, string> = {
  "Cloud Transformation (AWS)": "cloud-modernization",
  "Azure Architecture": "cloud-modernization",
  "Cloud Transformation": "cloud-modernization",
  "DevOps & Automation": "ai-readiness",
  "DevOps": "ai-readiness",
  "DevOps Governance": "ai-readiness",
  "App Modernization": "cloud-modernization",
  "Application Modernization": "cloud-modernization",
  "AI": "ai-readiness",
  "AI-Driven Innovation": "ai-readiness",
  "SAP Integration": "sap-solutions",
  "GRC & Compliance": "cybersecurity",
  "Oracle EBS · PeopleSoft · JD Edwards": "erp-optimization",
  "Enterprise Applications": "erp-optimization",
  "S/4HANA": "sap-solutions",
  "SAP ECC": "sap-solutions",
  "SAP BTP": "sap-solutions",
  "SAP Architecture": "sap-solutions",
  "Zero Trust": "cybersecurity",
  "Cloud Security": "cybersecurity",
  "Security Architecture": "cybersecurity",
  "Governance & Compliance": "cybersecurity",
  "Risk Management": "cybersecurity",
  "Generative AI": "ai-readiness",
  "Agentic AI": "ai-readiness",
  "Machine Learning": "ai-readiness",
  "Intelligent Automation": "ai-readiness",
  "AI Integration": "ai-readiness"
};

function ExpertiseChip({ label, className }: { label: string; className: string }) {
  const slug = EXPERTISE_LINKS[label];
  if (!slug) return <span className={className}>{label}</span>;
  return (
    <Link
      href={`/services/${slug}`}
      className={`${className} transition-colors hover:border-brand-600/50 hover:text-brand-700`}
    >
      {label}
    </Link>
  );
}

function Avatar({ leader, size = "lg" }: { leader: Leader; size?: "lg" | "xl" }) {
  const photo = leaderPhotos[leader.id];
  const dims = size === "xl" ? "h-64 w-64 md:h-80 md:w-80" : "h-16 w-16";

  if (photo) {
    return (
      <Image
        src={photo}
        alt={leader.name ?? leader.role}
        className={`${dims} rounded-2xl object-cover object-top shadow-cardHover ring-1 ring-line`}
      />
    );
  }

  if (size === "xl") {
    return (
      <div
        className="grid h-64 w-64 md:h-80 md:w-80 place-items-center rounded-2xl bg-brand-600 text-white shadow-cardHover"
        role="img"
        aria-label={leader.name ?? leader.role}
      >
        <span className="text-7xl font-black tracking-tight">{leader.initials}</span>
      </div>
    );
  }

  return (
    <div
      className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-brand-600 text-white"
      role="img"
      aria-label={leader.name ?? leader.role}
    >
      {leader.initials ? (
        <span className="text-xl font-bold">{leader.initials}</span>
      ) : (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d={AI_ICON} />
        </svg>
      )}
    </div>
  );
}

export default function TeamPage() {
  const founder = leadership.find((l) => l.featured);
  const principals = leadership.filter((l) => !l.featured);

  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Senior architects. Founder-led delivery."
        description="Every Vibrant engagement is led by people who've done the work themselves, a founder with 27+ years in enterprise transformation and a bench of principal architects across ERP, cloud, SAP, cybersecurity, and AI."
        crumbs={[{ label: "Home", href: "/" }, { label: "Leadership" }]}
      />

      {/* Founder */}
      {founder && (
        <section className="section">
          <div className="container grid gap-10 lg:grid-cols-[auto,1fr] lg:items-center">
            <div className="flex justify-center lg:justify-start">
              <Avatar leader={founder} size="xl" />
            </div>
            <div className="max-w-3xl">
              <p className="eyebrow">{founder.role}</p>
              <h2 className="mt-2">{founder.name}</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {founder.credentials?.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full bg-sky/10 px-3 py-1 text-xs font-semibold text-brand-700"
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                    </svg>
                    {c}
                  </span>
                ))}
                {founder.expertise.map((e) => (
                  <ExpertiseChip
                    key={e}
                    label={e}
                    className="inline-flex items-center rounded-full border border-line bg-navy-50/60 px-3 py-1 text-xs font-medium text-navy-700"
                  />
                ))}
              </div>

              <div className="mt-6 space-y-4">
                {founder.bio.map((para, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-ink/80">
                    {para}
                  </p>
                ))}
              </div>

              {/* Actions. Calendly button appears once the URL is set in site-content */}
              {(founder.calendly || founder.linkedin) && (
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  {founder.calendly && (
                    <a
                      href={founder.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Book a meeting →
                    </a>
                  )}
                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost inline-flex items-center gap-2"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.36v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 7v7.44h-4.56v-6.6c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V22H7.62V8z" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Principal architects */}
      <section className="section-soft">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Principal architects</p>
            <h2 className="mt-3">The bench behind every engagement.</h2>
            <p className="mt-4 text-muted">
              Principal-level depth in each of our capability pillars, the people who design,
              review, and stand behind the work.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {principals.map((leader) => (
              <div key={leader.id} className="card p-7">
                <div className="flex items-center gap-4">
                  <Avatar leader={leader} />
                  <div>
                    {leader.name && (
                      <h3 className="text-lg text-navy-700">{leader.name}</h3>
                    )}
                    <p className={leader.name ? "text-sm font-medium text-brand-700" : "text-lg font-semibold text-navy-700"}>
                      {leader.role}
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {leader.bio.map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed text-ink/75">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {leader.expertise.map((e) => (
                    <ExpertiseChip
                      key={e}
                      label={e}
                      className="inline-flex items-center rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-navy-700"
                    />
                  ))}
                </div>

                {!leader.name && (
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:gap-2.5 transition-all"
                  >
                    Ask about our AI practice
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tint">
        <div className="container text-center">
          <h2>Deploy a Principal Architect to architect your solution.</h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            No account managers, no hand-offs, talk directly to the people who&apos;ll design
            and deliver the work.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-primary">
              Set Up a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
