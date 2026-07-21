import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { PageHero } from "@/components/page-hero";
import { leadership, type Leader } from "@/content/site-content";

export const metadata: Metadata = pageMeta({
  title: "Leadership",
  description:
    "Meet the Vibrant Inc leadership team — founder-led delivery backed by principal architects across ERP, cloud, SAP, cybersecurity, and AI.",
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
  "DevOps & Automation": "automation",
  "DevOps": "automation",
  "DevOps Governance": "automation",
  "App Modernization": "cloud-modernization",
  "Application Modernization": "cloud-modernization",
  "AI": "ai-readiness",
  "AI-Driven Innovation": "ai-readiness",
  "SAP Integration": "sap-integration",
  "GRC & Compliance": "cybersecurity",
  "Oracle EBS · PeopleSoft · JD Edwards": "erp-optimization",
  "Enterprise Applications": "erp-optimization",
  "S/4HANA": "sap-s4hana-implementation",
  "SAP ECC": "sap-s4hana-implementation",
  "SAP BTP": "sap-btp",
  "SAP Architecture": "sap-solutions",
  "Zero Trust": "cybersecurity",
  "Cloud Security": "cybersecurity",
  "Security Architecture": "cybersecurity",
  "Governance & Compliance": "cybersecurity",
  "Risk Management": "cybersecurity",
  "Generative AI": "ai-readiness",
  "Agentic AI": "ai-readiness",
  "Machine Learning": "ai-readiness",
  "Intelligent Automation": "automation",
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
  // Photo variant renders smaller than the initials tile — the source headshot is
  // 143px; anything past ~2x upscale goes soft.
  const dims = size === "xl" ? "h-48 w-48 md:h-56 md:w-56" : "h-16 w-16";

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
        description="Every Vibrant engagement is led by people who've done the work themselves — a founder with 25+ years in enterprise transformation and a bench of principal architects across ERP, cloud, SAP, cybersecurity, and AI."
        crumbs={[{ label: "Home", href: "/" }, { label: "Leadership" }]}
      />

      {/* Founder */}
      {founder && (
        <section className="section">
          <div className="container grid gap-12 lg:grid-cols-[auto,1fr] lg:items-start">
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
              Principal-level depth in each of our capability pillars — the people who design,
              review, and stand behind the work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
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
      <section className="section">
        <div className="container text-center">
          <h2>Put a principal architect on your problem.</h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            No account managers, no hand-offs — talk directly to the people who&apos;ll design
            and deliver the work.
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
