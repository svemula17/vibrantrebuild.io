import type { Metadata } from "next";
import { Hero }         from "@/components/home/hero";
import { ClientLogos }  from "@/components/home/client-logos";
import { AboutIntro }   from "@/components/home/about-intro";
import { Capabilities } from "@/components/home/capabilities";
import { AiShieldBand } from "@/components/home/ai-shield-band";
import { CaseStudies }  from "@/components/home/case-studies";
import { StatsBand }    from "@/components/home/stats-band";
import { ImpactStrip }  from "@/components/home/impact-strip";
import { CtaCallback }  from "@/components/home/cta-callback";

// Layout no longer sets a global canonical (it leaked onto every child page);
// the homepage declares its own. Title/description/OG inherit from layout.
export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <Hero />          {/* split: ruled copy panel + team photograph */}
      <ClientLogos credentials />  {/* white, credential row + 19-client marquee */}
      <AboutIntro />    {/* white, who Vibrant is, in one tight section */}
      <Capabilities />  {/* cream, the seven drawn as a pipeline, ERP first */}
      <AiShieldBand />  {/* dark navy, featured platform */}
      <CaseStudies />   {/* white, outcome stories */}
      <StatsBand />     {/* dark navy, 26 years + 200+ programs */}
      <ImpactStrip />   {/* slim cream strip, tech for good one-liner */}
      <CtaCallback />   {/* cream, final CTA + callback form */}
    </>
  );
}
