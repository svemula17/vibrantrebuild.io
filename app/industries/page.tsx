import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { industries } from "@/content/industries";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Healthcare & Insurance IT Consulting",
  description:
    "Where Vibrant Inc has deep vertical experience: healthcare providers and healthcare insurance carriers.",
  path: "/industries"
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for regulated, always-on operations."
        description="Our service catalogue covers what we do. This covers who we have done it for, and the constraints that came with it."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-line bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:border-sky/40 hover:shadow-cardHover"
            >
              <p className="eyebrow">{ind.kicker}</p>
              <h2 className="mt-3 text-2xl font-semibold text-navy-700">{ind.title}</h2>
              <p className="mt-4 text-muted leading-relaxed flex-1">{ind.summary}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {ind.capabilities.slice(0, 4).map((c) => (
                  <li key={c.title} className="chip-accent text-xs">
                    {c.title}
                  </li>
                ))}
              </ul>

              <span className="mt-6 text-sm font-semibold text-brand-700 group-hover:text-brand-800">
                Explore {ind.title} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
