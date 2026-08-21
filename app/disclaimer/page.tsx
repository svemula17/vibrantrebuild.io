import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { disclaimerSections } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Disclaimer",
  description:
    "Terms and conditions governing access to and use of the Vibrant Inc website and its contents.",
  path: "/disclaimer/"
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      description="Terms and conditions governing access to and use of this website and its contents."
      sections={disclaimerSections}
    />
  );
}
