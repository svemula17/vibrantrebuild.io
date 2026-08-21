/**
 * Industry verticals.
 *
 * Ported from three pages on the previous WordPress site that the 19-to-7
 * service consolidation left without a home:
 *   /healthcare-solution-consulting/     -> industries/healthcare
 *   /healthcare-appointment-scheduling/  -> industries/healthcare
 *   /solutions-insurance/                -> industries/insurance
 *
 * The service catalogue answers "what we do". This answers "who we have done it
 * for", which is the axis a healthcare or payer buyer actually searches on.
 * Claims here are restated from the original pages, not invented.
 */

export type IndustryCapability = {
  title: string;
  body: string;
  points?: string[];
};

export type Industry = {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  metaDescription: string;
  intro: string[];
  capabilities: IndustryCapability[];
  stack: string[];
  bestFit: string;
  /** Service slugs this vertical leans on, for cross-linking. */
  relatedServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    kicker: "Industries",
    title: "Healthcare",
    summary:
      "Digitization, cloud migration, and analytics for providers who cannot trade patient care for a platform upgrade.",
    metaDescription:
      "Healthcare technology consulting from Vibrant Inc: EHR modernization, telemedicine, HIPAA-aligned cloud, predictive analytics, and appointment optimization.",
    intro: [
      "Healthcare organizations carry a harder version of every problem in this catalogue. The systems are clinical, the data is regulated, and the maintenance window is whatever hour the ward is quietest.",
      "We work across digitization, cloud migration, and data analytics so providers can make decisions on their own data without putting patient care or compliance at risk."
    ],
    capabilities: [
      {
        title: "Electronic Health Records",
        body:
          "Move off paper and disconnected systems onto secure, interoperable records, so access and collaboration improve without loosening privacy or compliance.",
        points: [
          "Interoperability between systems that were never designed to talk",
          "Access and audit controls that survive a compliance review"
        ]
      },
      {
        title: "Telemedicine",
        body:
          "Virtual consultation and remote patient monitoring, extending care beyond the clinic and widening access without adding clinic hours."
      },
      {
        title: "Cloud infrastructure",
        body:
          "Migrate healthcare IT to the cloud for scale and cost control, with storage, collaboration, and resource use planned around clinical uptime rather than a migration calendar.",
        points: [
          "Private networking so system components talk over isolated channels",
          "Security and compliance safeguards applied to data at rest and in transit"
        ]
      },
      {
        title: "Predictive analytics",
        body:
          "Surface patterns across large volumes of healthcare data to identify risk earlier, refine treatment planning, and improve outcomes.",
        points: [
          "Custom dashboards tracking the indicators leadership actually reviews",
          "Reporting built for continuous improvement, not a quarterly export"
        ]
      },
      {
        title: "Appointment optimization",
        body:
          "Scheduling is where capacity quietly leaks. We model historical appointment data to predict cancellations and no-shows, then act on the prediction rather than filing it.",
        points: [
          "Models that forecast cancellation and no-show rates from historical records",
          "Waitlist prioritization by urgency and availability, not queue position",
          "Real-time slot notifications to waitlisted patients as openings appear",
          "Automated reminders and confirmations over secure email and SMS channels",
          "Intelligent rescheduling options offered before a slot is lost"
        ]
      }
    ],
    stack: [
      "Azure Data Services",
      "Azure Machine Learning",
      "Azure Event Grid / Event Hub",
      "Azure API Management",
      "SendGrid",
      "Twilio",
      "Cloudflare",
      "Palo Alto Networks"
    ],
    bestFit:
      "Providers modernizing clinical or administrative systems where patient data protection and continuity of care are non-negotiable.",
    relatedServices: ["cloud-modernization", "data-analytics", "cybersecurity", "ai-readiness"]
  },
  {
    slug: "insurance",
    kicker: "Industries",
    title: "Insurance",
    summary:
      "Claims, pre-authorization, and policyholder communication platforms for small and mid-size healthcare insurance providers.",
    metaDescription:
      "Insurance technology from Vibrant Inc: claim management portals, pre-authorization workflows, AI-assisted claim processing, and automated policyholder alerts.",
    intro: [
      "Smaller and mid-size healthcare insurance providers compete against carriers with far larger technology budgets. The gap usually shows up in claims handling, where manual process and paperwork slow settlement and frustrate everyone in the chain.",
      "We build the portals and platforms that close that gap: claim management, pre-authorization, AI-assisted processing, and policyholder communication, integrated with the systems and workflows already in place."
    ],
    capabilities: [
      {
        title: "Claim management portal",
        body:
          "One portal covering submission, adjudication, and settlement. Manual steps are automated, paperwork drops, and insurers, providers, and policyholders work from the same view of a claim.",
        points: [
          "Track and manage claims without chasing status across systems",
          "Less administrative load, and claims that move on time"
        ]
      },
      {
        title: "Pre-authorization",
        body:
          "Providers submit pre-authorization requests without friction, and insurers review them through workflows that keep approvals moving while staying inside regulatory guidelines.",
        points: [
          "Intelligent routing so requests reach the right reviewer",
          "Fewer errors and faster provision of necessary care"
        ]
      },
      {
        title: "AI-assisted claim processing",
        body:
          "Claim data is analyzed for patterns, flagging suspected fraud while accelerating valid claims. Less manual effort, better accuracy, and prompt fair settlement for policyholders."
      },
      {
        title: "Policyholder communication",
        body:
          "Automated SMS and email keeps policyholders informed on claim status, renewal reminders, and policy changes, with personalized messaging and automated delivery."
      }
    ],
    stack: [
      "Claim management portals",
      "Pre-authorization workflows",
      "AI claim analysis",
      "Automated SMS / email",
      "Systems integration"
    ],
    bestFit:
      "Small and mid-size healthcare insurance providers modernizing claims and policyholder experience without replacing every system at once.",
    relatedServices: ["ai-readiness", "data-analytics", "cloud-modernization", "managed-it"]
  }
];

export const getIndustryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
