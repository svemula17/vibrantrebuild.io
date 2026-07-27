import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { SapCostCalculator } from "@/components/sap-cost-calculator";

export const metadata: Metadata = pageMeta({
  title: "SAP S/4HANA Cost Calculator",
  description:
    "Get an indicative S/4HANA implementation budget range in 60 seconds, users, modules, landscape size, and migration approach. Directional planning figures, not a quote.",
  path: "/resources/sap-cost-calculator"
});

export default function SapCostCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Interactive tool"
        title="SAP S/4HANA Cost Calculator"
        description="An indicative budget range for planning conversations, not a quote. Adjust the inputs and the range updates live."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "S/4HANA Cost Calculator" }
        ]}
      />

      <section className="section">
        <div className="container">
          <SapCostCalculator />
        </div>
      </section>
    </>
  );
}
