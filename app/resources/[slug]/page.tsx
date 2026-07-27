import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import {
  getInsightBySlug,
  getResourceGuideBySlug,
  getServiceBySlug,
  insights,
  resourceGuides
} from "@/content/site-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...resourceGuides, ...insights].map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getResourceGuideBySlug(slug);
  if (guide) {
    return pageMeta({
      title: guide.seoTitle ?? guide.title,
      description: guide.description,
      path: `/resources/${slug}`
    });
  }
  const post = getInsightBySlug(slug);
  if (post) {
    return pageMeta({
      title: post.seoTitle ?? post.title,
      description: post.summary,
      path: `/resources/${slug}`
    });
  }
  return {};
}

export default async function ResourceDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getResourceGuideBySlug(slug);
  const post = guide ? undefined : getInsightBySlug(slug);

  if (!guide && !post) notFound();

  /* ── Guide / checklist / white-paper layout ── */
  if (guide) {
    const related = guide.relatedServices
      .map((s) => getServiceBySlug(s))
      .filter((s): s is NonNullable<typeof s> => Boolean(s));

    return (
      <>
        <PageHero
          eyebrow={`${guide.category} · ${guide.readTime}`}
          title={guide.title}
          description={guide.description}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
            { label: guide.category }
          ]}
        />

        <section className="section">
          <div className="container grid gap-12 lg:grid-cols-[1fr,minmax(280px,340px)] lg:items-start">
            <article className="max-w-3xl space-y-10">
              {guide.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-2xl md:text-3xl">{section.heading}</h2>
                  {section.body && (
                    <p className="mt-4 text-[16px] leading-relaxed text-ink/80">{section.body}</p>
                  )}
                  {section.bullets && (
                    <ul className="svc-list mt-4">
                      {section.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 space-y-5">
              <div className="card p-7">
                <h3 className="text-lg text-navy-700">Want this executed, not just read?</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  This is the framework we run on real engagements, a principal architect can
                  apply it to your environment.
                </p>
                <Link href="/contact" className="btn-primary mt-5 w-full">
                  Talk to an architect
                </Link>
              </div>

              {related.length > 0 && (
                <div className="card p-7">
                  <p className="eyebrow text-[0.7rem]">Related services</p>
                  <ul className="mt-4 space-y-3">
                    {related.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="group flex items-center justify-between gap-2 text-sm font-medium text-navy-700 hover:text-brand-700 transition-colors"
                        >
                          {service.title}
                          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-brand-700 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </section>
      </>
    );
  }

  /* ── Insight / article layout ── */
  const article = post!;
  const more = insights.filter((i) => i.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${article.tag} · ${article.date}`}
        title={article.title}
        description={article.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Blog" }
        ]}
      />

      <section className="section">
        <div className="container">
          <article className="max-w-3xl space-y-6">
            {article.body.map((para, i) => (
              <p key={i} className="text-[17px] leading-relaxed text-ink/80">
                {para}
              </p>
            ))}
          </article>

          <div className="mt-14 max-w-3xl rounded-2xl border border-line bg-navy-50/40 p-7">
            <h2 className="text-xl">Talk it through with a practitioner</h2>
            <p className="mt-2 text-sm text-muted">
              If this hits close to home, a 30-minute call with a principal architect will tell
              you what to do about it.
            </p>
            <Link href="/contact" className="btn-primary mt-5">
              Set Up a Call
            </Link>
          </div>

          {article.relatedServices.length > 0 && (
            <div className="mt-14 max-w-3xl">
              <p className="eyebrow">Where this gets done</p>
              <h2 className="mt-2 text-xl">Put this into practice.</h2>
              <p className="mt-2 text-sm text-muted">
                These are the services where we do this exact work for clients, senior-led,
                and scoped in a 30-minute call.
              </p>
              <ul className="mt-4 space-y-3">
                {article.relatedServices
                  .map((s) => getServiceBySlug(s))
                  .filter((s): s is NonNullable<typeof s> => Boolean(s))
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-navy-700 font-medium hover:text-brand-700 transition-colors"
                      >
                        {s.title} →
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {more.length > 0 && (
            <div className="mt-16 max-w-3xl">
              <p className="eyebrow">More insights</p>
              <ul className="mt-4 space-y-3">
                {more.map((i) => (
                  <li key={i.slug}>
                    <Link
                      href={`/resources/${i.slug}`}
                      className="text-navy-700 font-medium hover:text-brand-700 transition-colors"
                    >
                      {i.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
