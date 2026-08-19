import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { siteSettings, socialResponsibilityCommitments } from "@/content/site-content";
import nmsdcMbe from "@/assets/badges/nmsdc-mbe.png";
import nmsdcCorporatePlus from "@/assets/badges/nmsdc-corporate-plus.png";
import nmsdcMccGrowth from "@/assets/badges/nmsdc-mcc-growth.png";
import nmsdcIfcFund from "@/assets/badges/nmsdc-ifc-fund.png";

/* NMSDC digital badges. These carry no year, unlike the retired scanned
   certificate, so the section no longer goes stale on renewal. */
const nmsdcBadges = [
  { src: nmsdcMbe,            label: "Minority Business Enterprise", alt: "NMSDC Certified Minority Business Enterprise (MBE)" },
  { src: nmsdcCorporatePlus,  label: "Corporate Plus\u00AE MBE",     alt: "NMSDC Certified Corporate Plus MBE" },
  { src: nmsdcMccGrowth,      label: "MCC Growth Initiative",        alt: "NMSDC Certified MCC Growth Initiative" },
  { src: nmsdcIfcFund,        label: "IFC Investment Fund",          alt: "NMSDC Certified IFC Investment Fund" }
];

export const metadata: Metadata = pageMeta({
  title: "Social Responsibility",
  description:
    "Quiet, consistent impact. Vibrant's commitments to community, employees, ethics, diversity, and the environment.",
  path: "/social-responsibility"
});

export default function SocialResponsibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Social Responsibility"
        title="Impact isn't a checkbox. It's who we are."
        description="We show up for our communities, protect our planet, champion diversity, and invest in future generations, because building better technology means building a better world alongside it."
        crumbs={[{ label: "Home", href: "/" }, { label: "Social Responsibility" }]}
      />

      <section className="section">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Our commitments</p>
            <h2 className="mt-3">Four ways we show up.</h2>
          </div>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {socialResponsibilityCommitments.map((c, i) => (
              <li key={c.title} className="card p-7 hover:border-sky/40 hover:shadow-cardHover transition-all">
                <div className="text-xs font-semibold text-brand-700">{`0${i + 1}`}</div>
                <h3 className="mt-3 text-lg font-semibold text-navy-700">{c.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-soft">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Diversity certification</p>
            <h2 className="mt-3">NMSDC certified MBE.</h2>
            <p className="mt-5 text-muted">
              Vibrant Inc is certified by the National Minority Supplier Development Council (NMSDC) as a Minority Business Enterprise, supporting our clients&apos; supplier-diversity programs and reflecting how we&apos;ve always built our team.
            </p>
            <p className="mt-4 text-muted">
              Beyond the base MBE certification, Vibrant holds NMSDC&apos;s Corporate Plus&#174; designation, awarded to
              MBEs with proven capacity to deliver national contracts, alongside the MCC Growth Initiative and IFC
              Investment Fund credentials. Together they enable supplier-diversity procurement across enterprise and
              government clients.
            </p>
          </div>
          <div className="card p-8">
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {nmsdcBadges.map((b) => (
                <div key={b.label} className="text-center">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    width={160}
                    height={160}
                    className="mx-auto h-auto w-full max-w-[132px] object-contain"
                  />
                  <p className="mt-3 text-xs font-medium text-muted">{b.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-line pt-5 text-center">
              <h3 className="text-base font-semibold text-navy-700">National Minority Supplier Development Council</h3>
              <p className="mt-1 text-sm text-muted">Vibrant Inc. Certified Minority Business Enterprise</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Get involved</p>
            <h2 className="mt-3">Partner with us on something that matters.</h2>
            <p className="mt-5 text-muted">
              If your organization is doing meaningful community work, or if you&apos;d like Vibrant to support a cause we haven&apos;t yet, we&apos;d love to hear from you.
            </p>
          </div>
          <div className="card p-8 text-center">
            <h3 className="text-lg font-semibold text-navy-700">Reach our community team</h3>
            <a href={`mailto:${siteSettings.emailCommunity}`} className="btn-primary mt-5">
              {siteSettings.emailCommunity}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
