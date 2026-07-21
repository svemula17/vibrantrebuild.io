import Link from "next/link";

/* Slim one-row divider band — the full impact story lives on /social-responsibility */
export function ImpactStrip() {
  return (
    <section
      className="border-y border-line"
      style={{ background: "linear-gradient(180deg, #fff6f2 0%, #ffffff 100%)" }}
    >
      <div className="container flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col md:flex-row md:items-baseline gap-x-3 gap-y-1">
          <h2 className="text-lg md:text-xl font-semibold text-navy-700 whitespace-nowrap">
            Good business. Better world.
          </h2>
          <p className="text-sm text-muted">
            NMSDC Certified MBE · community volunteering · mentoring the next
            generation of technologists.
          </p>
        </div>
        <Link
          href="/social-responsibility"
          className="btn-ghost shrink-0 inline-flex items-center gap-2 self-start sm:self-auto"
        >
          See how we give back
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
