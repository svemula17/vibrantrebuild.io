import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { getIndustryBySlug, industries } from "@/content/industries";
import { getServiceBySlug } from "@/content/site-content";
import { pageMeta } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustryBySlug(slug);
  if (!ind) return { title: "Industry not found" };
  return pageMeta({ title: ind.title, description: ind.metaDescription, path: `/industries/${slug}` });
}

export default async function IndustryDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const ind = getIndustryBySlug(slug);
  if (!ind) notFound();

  const related = ind.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHero
        eyebrow={ind.kicker}
        title={ind.title}
        description={ind.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: ind.title }
        ]}
      />

      <section className="section">
        <div className="container max-w-3xl">
          {ind.intro.map((p, i) => (
            <p key={i} className={`text-muted leading-relaxed [text-wrap:pretty] ${i ? "mt-4" : ""}`}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <p className="eyebrow">What we build</p>
          <h2 className="mt-3">Capabilities</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {ind.capabilities.map((c) => (
              <div key={c.title} className="card p-7">
                <h3 className="text-lg font-semibold text-navy-700">{c.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{c.body}</p>
                {c.points && (
                  <ul className="mt-4 space-y-2">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Typical stack</p>
              <h2 className="mt-3 text-2xl">What this runs on</h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {ind.stack.map((t) => (
                  <li key={t} className="chip-accent">{t}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow">Related services</p>
              <h2 className="mt-3 text-2xl">How we deliver it</h2>
              <ul className="mt-6 space-y-2">
                {related.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm font-medium text-brand-700 underline underline-offset-4 decoration-brand-600/30 hover:decoration-brand-600 transition-colors"
                    >
                      {s.title} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border-l-4 border-brand-600 bg-neutral-100 p-7">
            <p className="text-sm font-semibold text-navy-700">Best fit</p>
            <p className="mt-2 text-muted leading-relaxed">{ind.bestFit}</p>
          </div>

          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Talk to a {ind.title.toLowerCase()} specialist &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
