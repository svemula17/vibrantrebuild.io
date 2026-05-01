import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  aboutFacts,
  companyOverview,
  coreValues,
  deliverySteps,
  siteSettings,
  visionStatement
} from "@/content/site-content";
import anniversary from "@/image.png";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vibrant Inc, established in 2000, is a trusted provider of value-added IT solutions helping businesses navigate the digital landscape through cloud and data analytics."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Vibrant"
        title="Trusted, value-added IT solutions since 2000."
        description="Vibrant Inc helps businesses navigate the digital landscape through cloud and data analytics — combining cloud, analytics, and implementation expertise to help clients achieve sustainable success."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-3">A quarter century of practical execution.</h2>
            <div className="mt-6 space-y-4">
              {companyOverview.map((p, i) => (
                <p key={i} className="text-muted">{p}</p>
              ))}
            </div>

            {/* Vision card */}
            <div className="mt-8 card p-7">
              <p className="eyebrow">Our vision</p>
              <p className="mt-3 text-lg font-medium text-navy-700 leading-relaxed">
                &ldquo;{visionStatement}&rdquo;
              </p>
            </div>
          </div>

          {/* Right: 25-year graphic + key facts */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl shadow-cardHover">
              <Image
                src={anniversary}
                alt="Vibrant Inc — Celebrating 25 Years in Business"
                width={780}
                height={960}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <div className="card p-7">
              <p className="eyebrow">By the numbers</p>
              <div className="mt-5 grid grid-cols-2 gap-6">
                {aboutFacts.map((f) => (
                  <div key={f.label}>
                    <div className="text-3xl font-semibold tracking-tight text-navy-700">{f.value}</div>
                    <p className="mt-1 text-xs text-muted">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Core values</p>
            <h2 className="mt-3">What we stand on, every engagement.</h2>
            <p className="mt-4 text-muted">
              Five principles that shape how we deliver, hire, and partner with our clients.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v, i) => (
              <li
                key={v.title}
                className={`card p-6 hover:border-sky/40 hover:shadow-cardHover transition-all ${
                  i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <h3 className="text-base font-semibold text-navy-700">{v.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Service delivery model</p>
            <h2 className="mt-3">How we run engagements.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <div className="text-xs font-semibold text-sky">{`0${i + 1}`}</div>
                <h3 className="mt-3 text-base font-semibold text-navy-700">{s.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Ready to talk</p>
            <h2 className="mt-3">A conversation, not a pitch.</h2>
            <p className="mt-5 text-muted">
              Tell us where you want to be in 12 months. We&apos;ll help you get there with senior practitioners and a 25-year delivery track record.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Get a call back</Link>
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
              <a href={`tel:${siteSettings.phonePrimary}`} className="hover:text-sky">{siteSettings.phonePrimary}</a>
              <span className="text-muted"> · </span>
              <a href={`tel:${siteSettings.phoneSecondary}`} className="hover:text-sky">{siteSettings.phoneSecondary}</a>
            </p>
            <p className="mt-1 text-navy-700 font-medium">
              <a href={`mailto:${siteSettings.email}`} className="hover:text-sky">{siteSettings.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
