import Link from "next/link";
import { Reveal } from "@/components/reveal";

/* Compact homepage About section — the full story lives on /about */
export function AboutIntro() {
  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <p className="eyebrow">About Vibrant</p>
          <h2 className="mt-3">Built on integrity since 2000.</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-muted leading-relaxed">
            Vibrant Inc has been modernizing ERP, cloud, data, and security for
            mid-market and enterprise companies for 25 years — founder-led, senior
            practitioners on every engagement, and a client list that keeps coming back.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            From our Princeton headquarters and Hyderabad delivery center, we take
            ownership from the first blueprint to the first quiet month after go-live.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:gap-3 transition-all"
          >
            More about us
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
