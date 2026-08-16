import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { YearsRail } from "@/components/home/years-rail";
import { foundedYear, withBasePath, yearsInBusiness } from "@/content/site-content";
import anniversary from "@/assets/anniversary.png";

/* Compact homepage About section, the full story lives on /about */
export function AboutIntro() {
  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-[1fr,auto] lg:items-center">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">About Vibrant</p>
            <h2 className="mt-3">Built on integrity since 2000.</h2>
            <p className="mt-5 text-muted leading-relaxed">
              Founder-led for 26 years, senior practitioners modernizing ERP, cloud,
              data, and security for companies that can&apos;t afford downtime.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From Princeton and Hyderabad, our teams take ownership from the first
              blueprint to the first quiet month after go-live. Most of our work
              comes from clients who came back.
            </p>

            <YearsRail foundedYear={foundedYear} currentYear={foundedYear + yearsInBusiness} />

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:gap-3 transition-all"
              >
                More about us
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href={withBasePath("/Vibrant-Company-Brochure.pdf")}
                download
                className="btn-ghost inline-flex items-center gap-2 text-sm"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download brochure
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto lg:mx-0 ab-medal">
          <Image
            src={anniversary}
            alt={`Vibrant Inc. Celebrating ${yearsInBusiness} Years in Business`}
            className="w-52 md:w-60 h-auto rounded-2xl shadow-card"
          />
        </Reveal>
      </div>
    </section>
  );
}
