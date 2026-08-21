import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { privacySections } from "@/content/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "What personal information Vibrant Inc collects through this website, why we collect it, and what we do with it.",
  path: "/privacy/"
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="What we collect through this website, why we collect it, and what we do with it."
      sections={privacySections}
    />
  );
}
