import Image from "next/image";
import Link from "next/link";

/* Static hero, one brand photo, one message. The rotating services showcase
   lives in the What-we-do grid (components/home/service-showcase.tsx).
   The artwork is light — brand gradient with copy space on the left, team on
   the right — so the type runs dark and the scrim lifts, it does not darken. */
import heroBg from "@/assets/hero-team.jpg";

export function HeroSlider() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-100 hero-min-h">
      {/* Brand photo. Below lg the crop pulls left so the copy space survives
          the narrower frame, at lg the full 3:2 artwork fits the band. */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[34%_bottom] md:object-[42%_bottom] lg:object-bottom"
          placeholder="blur"
        />
      </div>

      {/* Text-side scrim. The artwork lightens toward the left already, this
          only guarantees the headline clears AA where the crop shifts. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(255,251,246,0.34) 0%, rgba(255,251,246,0.20) 34%, rgba(255,251,246,0) 62%)"
        }}
      />
      {/* Below lg the photo can sit under the text, so lift the whole frame */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none lg:hidden"
        style={{ background: "rgba(255,251,246,0.20)" }}
      />

      {/* Content */}
      <div
        className="container relative flex flex-col justify-center pt-24 pb-28 md:pt-28 md:pb-32"
        style={{ minHeight: "inherit" }}
      >
        {/* Narrow column, stays over the clean gradient, clear of the faces */}
        <div className="max-w-xl">
          <p className="text-eyebrow uppercase text-brand-800">
            ERP · Cloud · Cybersecurity · Data · AI
          </p>

          {/* text-h1 token, same scale as every inner-page hero. The old inline
              clamp topped out at 2.3rem, which left the homepage headline 20px
              smaller than /about's. */}
          <h1 className="mt-4 text-h1 text-neutral-900 [text-wrap:balance]">
            Helping Mid-Market &amp; Enterprise Companies Modernize ERP, Cloud &amp; AI Without Disrupting Operations
          </h1>

          <p className="mt-5 max-w-lg text-neutral-800 leading-relaxed [text-wrap:pretty]">
            Founder-led since 2000. Senior practitioners who plan, migrate, and run
            the systems you can&apos;t afford to lose.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary">
              Schedule a Call
            </Link>
            <Link
              href="/services"
              className="btn border border-neutral-900/20 bg-white/70 text-neutral-900 backdrop-blur-sm hover:bg-white hover:border-neutral-900/30"
            >
              Explore our services&nbsp;→
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
