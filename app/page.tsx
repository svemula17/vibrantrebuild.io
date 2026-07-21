import { HeroSlider }   from "@/components/home/hero-slider";
import { ClientLogos }  from "@/components/home/client-logos";
import { ServicesGrid } from "@/components/home/services-grid";
import { AiShieldBand } from "@/components/home/ai-shield-band";
import { CaseStudies }  from "@/components/home/case-studies";
import { StatsBand }    from "@/components/home/stats-band";
import { ImpactStrip }  from "@/components/home/impact-strip";
import { CtaCallback }  from "@/components/home/cta-callback";

export default function HomePage() {
  return (
    <>
      <HeroSlider />    {/* dark photo — service carousel + positioning H1 */}
      <ClientLogos />   {/* white — 19-client marquee, immediate social proof */}
      <ServicesGrid />  {/* cream — seven pillars, ERP first */}
      <AiShieldBand />  {/* dark navy — featured platform */}
      <CaseStudies />   {/* cream — outcome stories */}
      <StatsBand />     {/* dark navy — tagline + 25+ medallion + 200+ stat */}
      <ImpactStrip />   {/* slim cream strip — tech for good one-liner */}
      <CtaCallback />   {/* cream — final CTA + callback form */}
    </>
  );
}
