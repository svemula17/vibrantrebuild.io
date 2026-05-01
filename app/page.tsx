import { HeroSlider }           from "@/components/home/hero-slider";
import { TrustBadges }          from "@/components/home/trust-badges";
import { ServicesGrid }         from "@/components/home/services-grid";
import { IndustryVerticals }    from "@/components/home/industry-verticals";
import { ParallaxBanner }       from "@/components/home/parallax-banner";
import { WhyVibrant }           from "@/components/home/why-vibrant";
import { HowWeWork }            from "@/components/home/how-we-work";
import { CaseStudies }          from "@/components/home/case-studies";
import { CertificationsBand }   from "@/components/home/certifications-band";
import { StatsBand }            from "@/components/home/stats-band";
import { CtaCallback }          from "@/components/home/cta-callback";

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
      <CaseStudies />
      <CertificationsBand />
      <StatsBand />
      <CtaCallback />
    </>
  );
}
