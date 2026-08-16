import Link from "next/link";
import type { CaseStudy } from "@/content/site-content";

/* Shared outcome card, used in the homepage band and as the "Proof" block on
   matching service detail pages. Motion-free; wrap in motion.div if needed. */
export function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-8 shadow-card hover:shadow-cardHover hover:border-sky/30 transition-all overflow-hidden">
      {/* Watermark metric */}
      <span
        aria-hidden
        className="absolute -top-3 -right-2 text-6xl sm:text-8xl font-black leading-none select-none pointer-events-none text-brand-600/[0.06]"
      >
        {cs.metric}
      </span>

      {/* Left accent line */}
      <span className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-brand-600 transition-all duration-300 opacity-0 group-hover:opacity-100" />

      {/* Sector pill */}
      <span className="chip-accent">{cs.sector}</span>

      {/* Metric */}
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-navy-700">{cs.metric}</span>
        <span className="text-sm text-muted">{cs.metricLabel}</span>
      </div>

      <p className="mt-3 text-sm text-muted leading-relaxed italic">
        &ldquo;{cs.challenge}&rdquo;
      </p>
      <p className="mt-4 text-sm font-medium text-navy-700 leading-relaxed flex-1">
        {cs.result}
      </p>

      <div className="mt-6 pt-5 border-t border-line flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
          {cs.service}
        </span>
        <Link
          href={`/services/${cs.slug}`}
          className="text-xs font-semibold text-brand-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}
