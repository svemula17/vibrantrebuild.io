import Link from "next/link";
import type { CaseStudy } from "@/content/site-content";

/* Shared outcome card, used in the homepage band and as the "Proof" block on
   matching service detail pages. Motion-free; wrap in motion.div if needed.

   On the homepage the parent passes active/onSelect, which turns the row into a
   pick-one group: the chosen card leads and reveals "What we did", the others
   recede to 0.72. Omit those props and it renders exactly as before, which is
   how the service pages use it. */
export function CaseStudyCard({
  cs,
  active,
  onSelect
}: {
  cs: CaseStudy;
  active?: boolean;
  onSelect?: () => void;
}) {
  const selectable = typeof active === "boolean";
  return (
    <div
      className={`${selectable ? "cs-card " : ""}group relative flex h-full flex-col rounded-2xl border border-line bg-white p-8 shadow-card hover:shadow-cardHover hover:border-sky/30 transition-all overflow-hidden`}
      {...(selectable
        ? {
            "data-active": String(active),
            onClick: onSelect,
            onMouseEnter: onSelect,
            role: "button",
            tabIndex: 0,
            "aria-pressed": active,
            onKeyDown: (e: React.KeyboardEvent) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect?.();
              }
            }
          }
        : {})}
    >
      {/* Watermark metric */}
      <span
        aria-hidden
        className="absolute -top-3 -right-2 text-6xl sm:text-8xl font-black leading-none select-none pointer-events-none text-brand-600/[0.06]"
      >
        {cs.metric}
      </span>

      {/* Left accent line */}
      <span className="cs-bar absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-brand-600 transition-all duration-300 opacity-0 group-hover:opacity-100" />

      {/* Sector pill */}
      <span className="chip-accent">{cs.sector}</span>

      {/* Metric */}
      <div className="mt-6 flex items-baseline gap-2">
        <span className="cs-metric text-4xl font-bold text-navy-700 transition-colors duration-300">{cs.metric}</span>
        <span className="text-sm text-muted">{cs.metricLabel}</span>
      </div>

      {/* Labelled, so the quote reads as the client's problem rather than ours */}
      <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Situation</p>
      <p className="mt-1.5 text-sm text-muted leading-relaxed italic">
        &ldquo;{cs.challenge}&rdquo;
      </p>
      {selectable ? (
        /* Collapsed until this card is the selected one. grid-template-rows
           0fr -> 1fr animates height without hardcoding one. */
        <div className="cs-detail mt-4 flex-1">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">What we did</p>
            <p className="mt-1.5 text-sm font-medium text-navy-700 leading-relaxed">{cs.result}</p>
          </div>
        </div>
      ) : (
        <>
          <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">What we did</p>
          <p className="mt-1.5 text-sm font-medium text-navy-700 leading-relaxed flex-1">
            {cs.result}
          </p>
        </>
      )}

      <div className="mt-5 pt-5 border-t border-line flex items-center justify-between">
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
