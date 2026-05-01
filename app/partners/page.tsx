import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { partnerBenefits, partners, siteSettings } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Vibrant Inc maintains certified partnerships with Oracle NetSuite, Wrike, and Microsoft — giving clients right-sized licensing, vendor-validated architecture, and fast support escalation."
};

const partnerAccent: Record<string, string> = {
  "Oracle NetSuite": "bg-orange-50 text-orange-700 border-orange-200",
  "Wrike":           "bg-green-50  text-green-700  border-green-200",
  "Microsoft":       "bg-blue-50   text-blue-700   border-blue-200"
};

const partnerLogos: Record<string, { lines: string[] }> = {
  "Oracle NetSuite": { lines: ["Oracle", "NetSuite"] },
  "Wrike":           { lines: ["Wrike"] },
  "Microsoft":       { lines: ["Microsoft", "Partner"] }
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Platforms we know inside and out."
        description="Vibrant maintains deep, certified partnerships with the platforms we deliver every day — so our clients get the right licensing, the right architecture, and direct vendor support channels."
        crumbs={[{ label: "Home", href: "/" }, { label: "Partners" }]}
      />

      {/* ── Partner cards ── */}
      <section className="section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {partners.map((p) => {
              const logoLines = partnerLogos[p.name]?.lines ?? [p.logo];
              return (
                <div
                  key={p.name}
                  className="flex flex-col rounded-2xl border border-line bg-white p-8 shadow-card hover:shadow-cardHover hover:border-sky/30 transition-all"
                >
                  {/* Logo mark */}
                  <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-navy-50 leading-tight">
                    {logoLines.map((l) => (
                      <span key={l} className="text-xs font-bold text-navy-700 text-center">{l}</span>
                    ))}
                  </div>

                  {/* Name + category */}
                  <h3 className="mt-5 text-xl font-semibold text-navy-700">{p.name}</h3>
                  <span className={`mt-2 inline-flex w-fit rounded-full border px-2.5 py-0.5 text-xs font-semibold ${partnerAccent[p.name] ?? "bg-sky/10 text-sky border-sky/20"}`}>
                    {p.category}
                  </span>

                  {/* Description */}
                  <p className="mt-5 text-sm text-muted leading-relaxed flex-1">{p.description}</p>

                  {/* CTA */}
                  <Link
                    href={p.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky hover:gap-3 transition-all"
                  >
                    Related services →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why partnerships matter ── */}
      <section className="section-soft">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Why partnerships matter</p>
            <h2 className="mt-3">Direct vendor access, not vendor lock-in.</h2>
            <p className="mt-4 text-muted">
              Our certified partnerships mean your projects get vendor-validated architecture, right-sized
              licensing, and fast escalation paths — not generic recommendations from the outside.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {partnerBenefits.map((b) => (
              <li key={b.title} className="card p-6 hover:border-sky/40 hover:shadow-cardHover transition-all">
                <h3 className="text-base font-semibold text-navy-700">{b.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Partnership inquiry ── */}
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Want to partner with Vibrant?</p>
            <h2 className="mt-3">Let&apos;s compare notes.</h2>
            <p className="mt-5 text-muted">
              If you&apos;re a software vendor or services partner whose roadmap overlaps with ours,
              we&apos;d like to hear from you. We move fast on partnerships that create real value
              for mutual clients.
            </p>
          </div>
          <div className="card p-8 text-center">
            <h3 className="text-lg font-semibold text-navy-700">Partnership inquiries</h3>
            <p className="mt-2 text-sm text-muted">Email our partnerships team and we&apos;ll set up a call.</p>
            <a href={`mailto:${siteSettings.emailPartnerships}`} className="btn-primary mt-5">
              {siteSettings.emailPartnerships}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
