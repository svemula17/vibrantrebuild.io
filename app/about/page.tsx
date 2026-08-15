import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import {
  aboutFacts,
  companyOverview,
  coreValues,
  siteSettings,
  visionStatement,
  withBasePath
} from "@/content/site-content";
import anniversary from "@/assets/anniversary.png";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Founder-led since 2000, Vibrant Inc modernizes ERP, cloud, and data for companies across North America, senior practitioners who own the outcome.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Vibrant"
        title="Built on integrity: 27 years of delivering on our promises."
        description="Vibrant Inc modernizes ERP, cloud, and data for companies that can't afford downtime. Founder-led since 2000, senior practitioners on every engagement, and a client list that keeps coming back."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-3">Twenty-seven years of practical execution.</h2>
            <div className="mt-6 space-y-4">
              {companyOverview.map((p, i) => (
                <p key={i} className="text-muted">{p}</p>
              ))}
            </div>

            {/* Vision, slim inline quote, no card chrome */}
            <blockquote id="vision" className="mt-6 scroll-mt-28 border-l-2 border-brand-600 pl-4 text-[15px] font-medium text-neutral-700 leading-relaxed">
              &ldquo;{visionStatement}&rdquo;
            </blockquote>
          </div>

          {/* Right: one compact card, small 27-year graphic + key facts */}
          <div className="card p-7">
            <div className="mx-auto overflow-hidden rounded-xl" style={{ maxWidth: 180 }}>
              <Image
                src={anniversary}
                alt="Vibrant Inc. Celebrating 27 Years in Business"
                width={780}
                height={960}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <hr className="my-6 border-line" />
            <p className="eyebrow">By the numbers</p>
            <div className="mt-4 grid grid-cols-2 gap-5">
              {aboutFacts.map((f) => (
                <div key={f.label}>
                  <div className="text-3xl font-semibold tracking-tight text-navy-700">{f.value}</div>
                  <p className="mt-1 text-xs text-muted">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="section-soft scroll-mt-28">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Core values</p>
            <h2 className="mt-3">What we stand on, every engagement.</h2>
            <p className="mt-4 text-muted">
              Five principles that shape how we deliver, hire, and partner with our clients.
            </p>
          </div>
          {/* Flex-wrap, not grid: coreValues is data-driven, so any fixed column
              count leaves a ragged trailing row (5 items in 3 cols = 3 + 2 and a
              dead cell). justify-center centers whatever the last row holds, at
              any count. */}
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {coreValues.map((v) => (
              <li
                key={v.title}
                className="card p-5 hover:border-sky/40 hover:shadow-cardHover transition-all basis-full md:basis-[calc(50%-0.375rem)] lg:basis-[calc(33.333%-0.5rem)]"
              >
                <h3 className="text-base font-semibold text-navy-700">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Brochure download ── */}
      <section className="section">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-neutral-900 p-8 md:p-10">
            {/* Glow */}
            <div aria-hidden className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(200,64,26,0.25) 0%, transparent 60%)" }} />

            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow-on-dark">Company Brochure</p>
                <h2 className="mt-3 text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)" }}>
                  Learn more about Vibrant Inc.
                </h2>
                <p className="mt-4 text-white/65 leading-relaxed">
                  Our company brochure covers our full range of services, delivery model, corporate values, and career opportunities, everything you need to know about partnering with Vibrant.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={withBasePath("/Vibrant-Company-Brochure.pdf")}
                    download
                    className="btn-outline-light"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    Download Brochure (PDF)
                  </a>
                  <Link href="/contact" className="btn-outline-light">
                    Contact us →
                  </Link>
                </div>
              </div>

              {/* Highlights from brochure */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Strategic IT Consulting", body: "Spanning the full SDLC from planning through post-implementation." },
                  { title: "Global Delivery Model", body: "Staff augmentation, fixed price, T&M, and global delivery options." },
                  { title: "Custom Development", body: "Onshore + offshore blended teams for bespoke applications." },
                  { title: "People-First Culture", body: "CMM-aligned talent model. 8+ years average practitioner experience." },
                ].map((item) => (
                  <div key={item.title} className="card-dark p-5">
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-xs text-white/55 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Ready to talk</p>
            <h2 className="mt-3">A conversation, not a pitch.</h2>
            <p className="mt-5 text-muted">
              Tell us where you want to be in 12 months. We&apos;ll help you get there with senior practitioners and a 27-year delivery track record.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Schedule a Call</Link>
              <Link href="/services" className="btn-ghost">See our services</Link>
            </div>
          </div>
          <div className="card p-8">
            <p className="eyebrow">Headquartered in</p>
            <h3 className="mt-2 text-xl font-semibold text-navy-700">{siteSettings.address}</h3>
            <p className="mt-2 text-sm text-muted">
              Consultants are distributed across the country and travel to client sites as required.
            </p>
            <hr className="my-6 border-line" />
            <p className="eyebrow">Talk to us</p>
            <p className="mt-2 text-navy-700 font-medium">
              <a href={`tel:${siteSettings.phonePrimary}`} className="hover:text-brand-700">{siteSettings.phonePrimary}</a>
              <span className="text-muted"> · </span>
              <a href={`tel:${siteSettings.phoneSecondary}`} className="hover:text-brand-700">{siteSettings.phoneSecondary}</a>
            </p>
            <p className="mt-1 text-navy-700 font-medium">
              <a href={`mailto:${siteSettings.email}`} className="hover:text-brand-700">{siteSettings.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
