import { AnimatedCounter } from "@/components/animated-counter";
import { stats } from "@/content/site-content";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy-700 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(74,144,226,0.25),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(74,144,226,0.18),transparent_60%)]"
      />
      <div className="container relative py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky">By the numbers</p>
          <h2 className="mt-3 text-white">A quarter century of measurable impact.</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-sky/50 pl-5">
              <div className="text-5xl font-semibold tracking-tight text-white">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
