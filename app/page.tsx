import { HeroSlider }           from "@/components/home/hero-slider";
import { TrustBadges }          from "@/components/home/trust-badges";
import { ServicesGrid }         from "@/components/home/services-grid";
import { IndustryVerticals }    from "@/components/home/industry-verticals";
import { ParallaxBanner }       from "@/components/home/parallax-banner";
import { WhyVibrant }           from "@/components/home/why-vibrant";
import { HowWeWork }            from "@/components/home/how-we-work";
import { ValueAdds }            from "@/components/home/value-adds";
import { ParallaxMid }          from "@/components/home/parallax-mid";
import { CaseStudies }          from "@/components/home/case-studies";
import { StatsBand }            from "@/components/home/stats-band";
import { CtaCallback }          from "@/components/home/cta-callback";
import { VibrantMethod }         from "@/components/vibrant-method";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustBadges />
      <ServicesGrid />
      <IndustryVerticals />
      <ParallaxBanner />
      <WhyVibrant />
      <HowWeWork />
      <VibrantMethod />
      <ValueAdds />
      <ParallaxMid />
      <CaseStudies />
      <StatsBand />
      <CtaCallback />
    </>
  );
}
