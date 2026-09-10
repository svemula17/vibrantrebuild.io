import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { siteSettings, withBasePath } from "@/content/site-content";
import heroTeam from "@/assets/hero-team.jpg";
import { HeroCursor } from "@/components/home/hero-cursor";

/* Split hero: copy on a ruled panel, the team photograph alongside it. The
   photo spans the whole section and the panel sits on top of it — see the
   "Home hero" block in globals.css. Everything animates on load, in CSS, so
   this stays a server component and ships no JS. */

const HEADLINE = "Transforming enterprises with AI, cloud and intelligent digital experiences.";

const PROMISES = [
  "30 minutes with a senior advisor who understands your estate",
  "A practical view of where your security gaps and your ERP roadmap intersect",
  "A senior response within one business day"
];

/* The headline rises a word at a time, so each word needs its own delay. The
   spaces are siblings of the word spans, never inside them — .vh-word clips
   its overflow, which would swallow a trailing space and run the words
   together. */
function RisingHeadline({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          {i > 0 ? " " : null}
          <span className="vh-word">
            <span style={{ animationDelay: `${(0.2 + i * 0.055).toFixed(3)}s` }}>{word}</span>
          </span>
        </Fragment>
      ))}
    </>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-50 hero-min-h vh-hero">
      <div className="vh-left">
        <HeroCursor />
        <div className="vh-bg" aria-hidden>
          <span className="vh-glow" />
          <span className="vh-glow-2" />
          <span className="vh-scan" />
          <span className="vh-cursor" />
          <span className="vh-spark" />
          <span className="vh-node vh-n1" />
          <span className="vh-node vh-n2" />
          <span className="vh-node vh-n3" />
          <span className="vh-node vh-n4" />
          <span className="vh-traces">
            <span className="vh-trace vh-t1" />
            <span className="vh-trace vh-t2" />
            <span className="vh-trace vh-t3" />
            <span className="vh-trace vh-t4" />
          </span>
        </div>

        <div className="vh-copy">
          <p className="vh-1 text-eyebrow uppercase text-brand-800">
            Manufacturing · Distribution · Healthcare
          </p>
          <div className="vh-rule" aria-hidden />

          <h1 className="mt-5 text-h1 text-neutral-900">
            <RisingHeadline text={HEADLINE} />
          </h1>

          <p className="vh-3 mt-5 text-neutral-800 leading-relaxed [text-wrap:pretty]">
            We help organizations modernize legacy systems, harness Generative AI, automate
            business processes, and build secure cloud-native digital platforms that accelerate
            innovation and create exceptional customer experiences.
          </p>

          <div className="vh-4 mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Request a call →
            </Link>
            {/* The calculator asks for a commitment before we have earned one.
                The brochure is the lower-friction second step. */}
            <a
              href={withBasePath("/Vibrant-Company-Brochure.pdf")}
              download
              className="btn gap-2 border border-neutral-900/20 bg-white text-neutral-900 hover:border-neutral-900/30"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download the brochure
            </a>
            <a
              href={`tel:${siteSettings.phonePrimary}`}
              className="inline-flex items-center gap-2 px-1 text-sm font-semibold text-neutral-900 hover:text-brand-700 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.42 2 2 0 0 1 3.56 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.19a16 16 0 0 0 6.09 6.09l.91-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
              </svg>
              or call {siteSettings.phonePrimary}
            </a>
          </div>

          <ul className="vh-ticks mt-6 flex flex-col gap-1.5 text-sm text-neutral-800">
            {PROMISES.map((promise) => (
              <li key={promise} className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 mt-0.5 shrink-0 text-brand-700" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {promise}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="vh-photo">
        <Image
          src={heroTeam}
          alt="The Vibrant team in Princeton, New Jersey"
          priority
          sizes="(min-width: 900px) 46vw, 100vw"
        />
      </div>
    </section>
  );
}
