import { HeroSlider }      from "@/components/home/hero-slider";
import { TrustBadges }     from "@/components/home/trust-badges";
import { ServicesGrid }    from "@/components/home/services-grid";
import { ParallaxBanner }  from "@/components/home/parallax-banner";
import { WhyVibrant }      from "@/components/home/why-vibrant";
import { StatsBand }       from "@/components/home/stats-band";
import { CtaCallback }     from "@/components/home/cta-callback";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustBadges />
      <ServicesGrid />
      <ParallaxBanner />
      <WhyVibrant />
      <StatsBand />
      <CtaCallback />
    </>
  );
}
