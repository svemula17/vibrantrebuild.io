import { PageHero } from "@/components/page-hero";
import type { LegalSection } from "@/content/legal";
import { legalLastUpdated } from "@/content/legal";

/* Shared shell for /privacy and /disclaimer. Narrow measure, generous leading,
   because these run long and are read in full far less often than they are
   scanned for one clause. */
export function LegalPage({
  eyebrow,
  title,
  description,
  sections
}: {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        crumbs={[{ label: "Home", href: "/" }, { label: title }]}
      />

      <section className="section">
        <div className="container max-w-3xl">
          <p className="text-sm text-muted">Last updated: {legalLastUpdated}</p>

          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <div key={i}>
                {s.heading && (
                  <h2 className="text-xl font-semibold text-navy-700">{s.heading}</h2>
                )}
                <div className={s.heading ? "mt-4 space-y-4" : "space-y-4"}>
                  {s.body.map((p, j) => (
                    <p key={j} className="text-muted leading-relaxed [text-wrap:pretty]">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
