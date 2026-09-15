import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { ProductDetailSections } from "@/components/product-detail";
import { BreadcrumbSchema } from "@/components/structured-data";

export const metadata: Metadata = pageMeta({
  title: "Our Security Products: kaveo, Vectasec and Aegis",
  description:
    "Three security products built by Vibrant's own engineers: kaveo for cloud security posture, Vectasec for middleware security, and Aegis for gated MCP tool calls. All run inside your own estate.",
  path: "/products"
});

const LIFECYCLE = [
  { n: "01", stage: "Detect", product: "kaveo", slug: "kaveo", line: "Misconfiguration found before it is used." },
  { n: "02", stage: "Analyze", product: "Vectasec", slug: "vectasec", line: "The layer between services, audited." },
  { n: "03", stage: "Respond", product: "Aegis", slug: "aegis", line: "Every agent tool call gated and logged." }
];

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products/" }
        ]}
      />

      <PageHero
        eyebrow="Built by Vibrant"
        motif="scan"
        title="Three products that run inside your estate, not ours."
        description="Most security vendors ask you to ship configuration, logs and telemetry to their cloud. Ours do not. kaveo, Vectasec and Aegis deploy inside your own environment, and every finding cites the observation that produced it."
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      >
        <div className="cy-prodstrip mt-8">
          <span className="cy-prodlabel">Jump to</span>
          {LIFECYCLE.map((l) => (
            <Link key={l.slug} href={`#${l.slug}`} className="cy-prod">
              <b>{l.product}</b>
              {l.stage}
            </Link>
          ))}
        </div>
      </PageHero>

      {/* Why these exist at all, and how the three relate to one another. */}
      <section className="section sec-tight">
        <div className="container grid gap-x-12 gap-y-6 lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-start">
          <h2>One spine, three tools</h2>
          <div className="space-y-4">
            <p className="text-muted">
              We build these because our own engagements kept running into the same wall: teams
              in regulated estates cannot hand their configuration and logs to a vendor cloud,
              and the tools that respect that boundary tend to stop at the perimeter.
            </p>
            <p className="text-muted">
              Each product sits at a different stage of the AI Shield lifecycle. They are useful
              on their own and they compose, so you can start at the stage that hurts most rather
              than buying a platform up front.
            </p>
            <ol className="pd-spine">
              {LIFECYCLE.map((l) => (
                <li key={l.slug}>
                  <Link href={`#${l.slug}`}>
                    <span className="pd-spine-n">{l.n}</span>
                    <span className="pd-spine-stage">{l.stage}</span>
                    <b>{l.product}</b>
                    <span className="pd-spine-line">{l.line}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ProductDetailSections />

      <section className="section-tint sec-tight">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">See them running</p>
            <h2 className="mt-3">A walkthrough on your own estate, not a canned demo.</h2>
            <p className="mt-4 text-muted">
              We would rather show you kaveo reading a read-only role in your account than play a
              recording. Thirty minutes with the engineers who build these, and you keep whatever
              findings come out of it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/contact" className="btn-primary">Request a walkthrough →</Link>
            <Link href="/services/cybersecurity" className="btn-ghost">See the security practice</Link>
          </div>
        </div>
      </section>
    </>
  );
}
