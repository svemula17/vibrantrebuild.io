import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import {
  aboutCapabilities,
  aboutFacts,
  companyClosingLine,
  companyCommitment,
  companyCommunity,
  companyExperience,
  companyLeadership,
  companyOverview,
  coreValues,
  siteSettings,
  visionStatement,
  whyVibrantBody,
  whyVibrantClose,
  whyVibrantLead,
  yearsInBusiness,
  withBasePath
} from "@/content/site-content";
import anniversary from "@/assets/anniversary.png";

export const metadata: Metadata = pageMeta({
  title: "About Us: Enterprise Experience, Founder-Led Since 2000",
  description:
    "Vibrant Inc is an IT services and solutions company helping businesses transform, modernize, and manage their technology environments, with a focus on cybersecurity, ERP modernization and digital transformation.",
  path: "/about"
});

/* Every heading and paragraph on this page is the owner's supplied copy from
   "About US.docx", used verbatim and in its original order. The section
   headings are theirs too, which is why this page drops the eyebrow-plus-
   headline pattern the rest of the site uses: adding a headline would mean
   inventing words the owner did not write. */
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Vibrant"
        title="Enterprise Experience. Modern Technology. Personal Commitment."
        description="Vibrant, Inc. is an IT services and solutions company helping businesses transform, modernize, and manage their technology environments. We focus more on Cybersecurity, ERP modernization and digital transformation."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            {companyOverview.map((p, i) => (
              <p key={i} className="text-muted">{p}</p>
            ))}
          </div>

          {/* Right: one compact card, small 26-year graphic + key facts */}
          <div className="card p-7">
            <div className="mx-auto overflow-hidden rounded-xl" style={{ maxWidth: 180 }}>
              <Image
                src={anniversary}
                alt={`Vibrant Inc. Celebrating ${yearsInBusiness} Years in Business`}
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

      <section className="section-soft">
        <div className="container">
          <div className="max-w-3xl">
            <h2>Experience That Makes a Difference</h2>
            <div className="mt-6 space-y-4">
              {companyExperience.map((p, i) => (
                <p key={i} className="text-muted">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What We Do</h2>
          {/* Seven items, flex-wrap so the trailing row centers rather than
              leaving dead cells in a fixed three-column grid. */}
          <ul className="mt-8 flex flex-wrap justify-center gap-5">
            {aboutCapabilities.map((c) => {
              const inner = (
                <>
                  <h3 className="text-base font-semibold text-navy-700">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{c.body}</p>
                  {c.href && (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 transition-all">
                      Explore →
                    </span>
                  )}
                </>
              );
              const base =
                "flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card basis-full md:basis-[calc(50%-0.625rem)] xl:basis-[calc(33.333%-0.834rem)]";
              return (
                <li key={c.title} className="contents">
                  {c.href ? (
                    <Link
                      href={c.href}
                      className={`group ${base} hover:-translate-y-1 hover:shadow-cardHover hover:border-sky/40 transition-all`}
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div className={base}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="values" className="section-soft scroll-mt-28">
        <div className="container">
          <div className="max-w-3xl">
            <h2>Why Vibrant?</h2>
            <p className="mt-4 text-lg font-medium text-navy-700 leading-relaxed">{whyVibrantLead}</p>
            <div className="mt-4 space-y-4">
              {whyVibrantBody.map((p, i) => (
                <p key={i} className="text-muted">{p}</p>
              ))}
            </div>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {coreValues.map((v) => (
              <li
                key={v.title}
                className="card p-5 hover:border-sky/40 hover:shadow-cardHover transition-all basis-full md:basis-[calc(50%-0.375rem)] lg:basis-[calc(25%-0.5625rem)]"
              >
                <h3 className="text-base font-semibold text-navy-700">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{v.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-muted">{whyVibrantClose}</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2>Leadership with Purpose</h2>
            <div className="mt-6 space-y-4">
              {companyLeadership.map((p, i) => (
                <p key={i} className="text-muted">{p}</p>
              ))}
            </div>
            {/* The founding principle. #vision is linked from the Company
                dropdown, so the id has to stay wherever this quote lives. */}
            <blockquote id="vision" className="mt-5 scroll-mt-28 border-l-2 border-brand-600 pl-4 text-[15px] font-medium text-neutral-700 leading-relaxed">
              &ldquo;{visionStatement}&rdquo;
            </blockquote>
            <Link
              href="/team"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:gap-2.5 transition-all"
            >
              Meet the leadership team →
            </Link>
          </div>

          <div>
            <h2>Supporting Businesses in Our Community</h2>
            <div className="mt-6 space-y-4">
              {companyCommunity.map((p, i) => (
                <p key={i} className="text-muted">{p}</p>
              ))}
            </div>
            <Link
              href="/social-responsibility"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:gap-2.5 transition-all"
            >
              How we give back →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div className="card mx-auto max-w-3xl p-8 text-center">
            <h2>Our Commitment</h2>
            <div className="mt-5 space-y-4">
              {companyCommitment.map((p, i) => (
                <p key={i} className="text-muted">{p}</p>
              ))}
            </div>
            <hr className="my-6 border-line" />
            <p className="text-base font-semibold text-navy-700">{companyClosingLine}</p>
          </div>
        </div>
      </section>

      {/* ── Brochure download ── */}
      <section className="section">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-8 md:p-10">
            {/* The old orange glow is pointless on an orange ground. This is the
                same corner wash used in the footer: the 135deg gradient ends
                lightest bottom-right, where white drops to 3.7:1. */}
            <div aria-hidden className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(circle at 85% 15%, rgba(255,255,255,0.08) 0%, transparent 45%), radial-gradient(ellipse at 100% 100%, rgba(90,25,4,0.40) 0%, transparent 62%)" }} />

            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-eyebrow uppercase text-white/90">Company Brochure</p>
                <h2 className="mt-3 text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)" }}>
                  Learn more about Vibrant Inc.
                </h2>
                <p className="mt-4 text-white/90 leading-relaxed">
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
                  <div key={item.title} className="rounded-2xl border border-white/25 bg-white/15 p-5">
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-xs text-white/90 leading-relaxed">{item.body}</p>
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
              Tell us where you want to be in 12 months. We&apos;ll help you get there with senior
              practitioners and a {yearsInBusiness}-year delivery track record.
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
