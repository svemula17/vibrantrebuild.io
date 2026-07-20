import { HeroSlider }           from "@/components/home/hero-slider";
import { TrustBadges }          from "@/components/home/trust-badges";
import { ServicesGrid }         from "@/components/home/services-grid";
import { AiShieldBand }         from "@/components/home/ai-shield-band";
import { IndustryVerticals }    from "@/components/home/industry-verticals";
import { ParallaxBanner }       from "@/components/home/parallax-banner";
import { WhyVibrant }           from "@/components/home/why-vibrant";
import { ValueAdds }            from "@/components/home/value-adds";
import { ImpactStrip }          from "@/components/home/impact-strip";
import { ParallaxMid }          from "@/components/home/parallax-mid";
import { CaseStudies }          from "@/components/home/case-studies";
import { ClientLogos }          from "@/components/home/client-logos";
import { StatsBand }            from "@/components/home/stats-band";
import { CtaCallback }          from "@/components/home/cta-callback";
import { VibrantMethod }        from "@/components/vibrant-method";

export default function HomePage() {
  return (
    <>
      <HeroSlider />          {/* dark photo */}
      <TrustBadges />         {/* white */}
      <ServicesGrid />        {/* warm cream — seven pillars */}
      <AiShieldBand />        {/* navy — featured platform */}
      <IndustryVerticals />   {/* dotted texture */}
      <ParallaxBanner />      {/* dark photo — 25 years */}
      <WhyVibrant />          {/* white */}
      <VibrantMethod />       {/* cream gradient */}
      <ValueAdds />           {/* navy */}
      <ImpactStrip />         {/* warm gradient — tech for good */}
      <ParallaxMid />         {/* dark photo */}
      <CaseStudies />         {/* cream */}
      <ClientLogos />         {/* white — client marquee */}
      <StatsBand />           {/* navy — anniversary medallion */}
      <CtaCallback />         {/* cream */}
    </>
  );
}
