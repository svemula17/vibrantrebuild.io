import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { serviceCards } from "@/content/site-content";
import { CapabilityFlow, type FlowStage } from "@/components/capability-flow";
import { Reveal } from "@/components/reveal";
import { VibrantMethod } from "@/components/vibrant-method";
import { ClientLogos } from "@/components/home/client-logos";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "Seven services, one partner: ERP, SAP, cloud modernization, cybersecurity, AI readiness, data and analytics, and managed IT.",
  path: "/services"
});

/* Explicit order: ERP first, SAP second, then the rest. */
const ORDER = [
  "erp-optimization",
  "sap-solutions",
  "cloud-modernization",
  "cybersecurity",
  "ai-readiness",
  "data-analytics",
  "managed-it"
];

/* The same seven, read as a sequence rather than a list: what you run, what
   you modernize, what you get out of it. Managed IT sits under all three. */
const FLOW = [
  { label: "Run the core", slugs: ["erp-optimization", "sap-solutions"] },
  { label: "Modernize the platform", slugs: ["cloud-modernization", "cybersecurity"] },
  { label: "Get the value out", slugs: ["data-analytics", "ai-readiness"] }
];
const RAIL_SLUG = "managed-it";

export default function ServicesPage() {
  const services = ORDER.map((slug) => serviceCards.find((s) => s.slug === slug)).filter(
    (s): s is NonNullable<typeof s> => Boolean(s)
  );
  const bySlug = new Map(services.map((s) => [s.slug, s]));

  const stages: FlowStage[] = FLOW.map((stage) => ({
    label: stage.label,
    nodes: stage.slugs.flatMap((slug) => {
      const service = bySlug.get(slug);
      return service ? [{ slug, title: service.title, iconPath: service.iconPath }] : [];
    })
  }));

  const railService = bySlug.get(RAIL_SLUG);
  const rail = railService && {
    slug: RAIL_SLUG,
    index: String(ORDER.indexOf(RAIL_SLUG) + 1).padStart(2, "0"),
    title: railService.title,
    description: "And we run all of it, 24×7."
  };

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Seven services. One accountable partner."
        description="Everything we do, on one page. Each service is delivered by senior practitioners who own the outcome from first blueprint to steady state."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* The catalogue as a pipeline, before the catalogue itself. !py-14 is
          tighter than .section and has to out-rank the "first band after a
          hero" rule in globals.css, which otherwise wins on specificity. */}
      {rail && (
        <section className="section !py-14">
          <div className="container">
            <Reveal>
              <p className="eyebrow">The map</p>
              <h2 className="mt-3 text-2xl md:text-3xl">Start anywhere. We stay accountable across.</h2>
            </Reveal>
            <CapabilityFlow stages={stages} rail={rail} className="mt-9" />
          </div>
        </section>
      )}

      {/* All services, listed in full */}
      <section className="section">
        <div className="container">
          <h2 className="sr-only">All services</h2>

          <ol className="space-y-5">
            {services.map((service, i) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group card card-hover flex flex-col gap-5 p-6 md:flex-row md:items-start md:gap-6 md:p-7"
                >
                  {/* Index + icon */}
                  <div className="flex shrink-0 items-center gap-4">
                    <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600/10 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <span className="absolute -left-1 -top-2 text-[11px] font-bold tabular-nums text-brand-700/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d={service.iconPath} />
                      </svg>
                    </span>
                  </div>

                  {/* Copy */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl text-navy-700">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>

                    {/* What's inside, at a glance */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(service.capabilityGroups
                        ? service.capabilityGroups.map((g) => g.label)
                        : service.capabilities.slice(0, 5)
                      ).map((label) => (
                        <span key={label} className="chip-neutral">
                          {label}
                        </span>
                      ))}
                    </div>

                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all group-hover:gap-3">
                      Explore {service.kicker}
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClientLogos tinted />

      <VibrantMethod />
    </>
  );
}
