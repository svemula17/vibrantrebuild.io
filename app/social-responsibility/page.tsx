import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { siteSettings, socialResponsibilityCommitments } from "@/content/site-content";
import nmsdcCert from "@/NMSDC_CERIFIED_2024.jpg";
import nmsdcBadge from "@/blob.png";

export const metadata: Metadata = {
  title: "Social Responsibility",
  description:
    "Quiet, consistent impact. Vibrant's commitments to community, employees, ethics, diversity, and the environment."
};

export default function SocialResponsibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Social Responsibility"
        title="Quiet, consistent impact."
        description="We don't do CSR for the press release. We do it because it's the kind of company we want to be — and the kind our employees and clients want to be associated with."
        crumbs={[{ label: "Home", href: "/" }, { label: "Social Responsibility" }]}
      />

      <section className="section">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Our commitments</p>
            <h2 className="mt-3">Four ways we show up.</h2>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {socialResponsibilityCommitments.map((c, i) => (
              <li key={c.title} className="card p-7 hover:border-sky/40 hover:shadow-cardHover transition-all">
                <div className="text-xs font-semibold text-sky">{`0${i + 1}`}</div>
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
              Vibrant Inc is certified by the National Minority Supplier Development Council (NMSDC) as a Minority Business Enterprise — supporting our clients&apos; supplier-diversity programs and reflecting how we&apos;ve always built our team.
            </p>
            <p className="mt-4 text-muted">
              Our 2024 MBE certification confirms continued compliance with NMSDC standards and enables supplier-diversity procurement across enterprise and government clients.
            </p>
          </div>
          <div className="card p-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <Image
                  src={nmsdcBadge}
                  alt="NMSDC Certified Minority Business Enterprise"
                  width={160}
                  height={160}
                  className="mx-auto object-contain"
                />
                <p className="mt-3 text-xs font-medium text-muted">MBE Certified</p>
              </div>
              <div className="text-center">
                <Image
                  src={nmsdcCert}
                  alt="NMSDC Certified MBE 2024"
                  width={160}
                  height={160}
                  className="mx-auto object-contain"
                />
                <p className="mt-3 text-xs font-medium text-muted">2024 Certification</p>
              </div>
            </div>
            <div className="mt-6 border-t border-line pt-5 text-center">
              <h3 className="text-base font-semibold text-navy-700">National Minority Supplier Development Council</h3>
              <p className="mt-1 text-sm text-muted">Vibrant Inc — Certified Minority Business Enterprise</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Get involved</p>
            <h2 className="mt-3">Partner with us on something that matters.</h2>
            <p className="mt-5 text-muted">
              If your organization is doing meaningful community work — or if you&apos;d like Vibrant to support a cause we haven&apos;t yet — we&apos;d love to hear from you.
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
