import { HeroSlider } from "@/components/home/hero-slider";
import { TrustBadges } from "@/components/home/trust-badges";
import { ServicesGrid } from "@/components/home/services-grid";
import { WhyVibrant } from "@/components/home/why-vibrant";
import { StatsBand } from "@/components/home/stats-band";
import { CtaCallback } from "@/components/home/cta-callback";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustBadges />
      <ServicesGrid />
      <WhyVibrant />
      <StatsBand />
      <CtaCallback />
    </>
  );
}
