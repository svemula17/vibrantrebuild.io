import Image from "next/image";
import Link from "next/link";

/* Static hero, one brand photo, one message. The rotating services showcase
   lives in the What-we-do grid (components/home/service-showcase.tsx). */
import heroBg from "@/assets/hero.jpg";

export function HeroSlider() {
  return (
    <section className="relative isolate overflow-hidden text-white bg-neutral-900 hero-min-h">
      {/* Brand photo */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] md:object-[36%_center] lg:object-right-top"
          placeholder="blur"
        />
      </div>

      {/* Text-side vignette, the artwork already darkens toward the left */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(18,12,8,0.66) 0%, rgba(18,12,8,0.30) 36%, rgba(18,12,8,0.06) 58%, rgba(18,12,8,0) 100%), linear-gradient(to right, rgba(18,12,8,0.22) 0%, rgba(18,12,8,0) 55%)"
        }}
      />
      {/* Extra full overlay on mobile so text is always readable */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none lg:hidden"
        style={{ background: "rgba(18,12,8,0.30)" }}
      />

      {/* Content */}
      <div
        className="container relative flex flex-col justify-end pt-36 pb-20 md:pt-40 md:pb-56"
        style={{ minHeight: "inherit" }}
      >
        {/* Narrow column, stays over the clean gradient, clear of the faces */}
        <div className="max-w-xl">
          <p className="text-eyebrow uppercase text-white/80">
            ERP · Cloud · Cybersecurity · Data · AI
          </p>

          <h1
            className="mt-4 text-white [text-wrap:balance]"
            style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.3rem)", lineHeight: 1.2, letterSpacing: "-0.01em", fontWeight: 500 }}
          >
            Helping Mid-Market &amp; Enterprise Companies Modernize ERP, Cloud &amp; AI Without Disrupting Operations
          </h1>

          <p className="mt-5 max-w-lg text-white/85 leading-relaxed [text-wrap:pretty]">
            Founder-led since 2000. Senior practitioners who plan, migrate, and run
            the systems you can&apos;t afford to lose.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary">
              Schedule a Call
            </Link>
            <Link
              href="/services"
              className="btn inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-white/35 text-white hover:bg-white/12 transition-colors"
            >
              Explore our services&nbsp;→
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
