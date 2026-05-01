export type NavigationItem = { href: string; label: string };

export type ServiceCard = {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  longDescription: string;
  iconPath: string;
  metaTags: string[];
  outcomes: string[];
  capabilities: string[];
  bestFit: string;
};

export type ContactDetail = { label: string; value: string };

export const siteSettings = {
  brandName: "Vibrant Inc",
  tagline: "Your efficiency and bottom line is our business",
  siteUrl: "https://vibrantinc.com",
  defaultTitle: "Vibrant Inc — Enterprise Technology Consulting",
  defaultDescription:
    "Vibrant Inc is an award-winning IT consulting firm established in 2000. We help North America-based businesses achieve competitive advantage through cloud modernization, data analytics, ERP solutions, cybersecurity, and managed IT — with 25 years of trusted delivery.",
  careersUrl: "/careers",
  phonePrimary: "609-945-2244",
  phoneSecondary: "609-945-0442",
  email: "info@vibrantinc.com",
  emailCareers: "careers@vibrantinc.com",
  emailPartnerships: "partnerships@vibrantinc.com",
  emailCommunity: "community@vibrantinc.com",
  address: "Princeton, New Jersey",
  social: {
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/"
  }
};

export const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/social-responsibility", label: "Social Responsibility" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact Us" }
];

const ICONS = {
  ai: "M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1 0 8v1a4 4 0 1 1-8 0v-1a4 4 0 0 1 0-8V6a4 4 0 0 1 4-4zM9 10h.01M15 10h.01M9 14h.01M15 14h.01",
  cloud: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
  shield: "M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12z",
  bolt: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
  layers: "M3 7h18M3 12h18M3 17h12",
  chart: "M3 3v18h18M7 15l4-4 4 4 5-7",
  monitor: "M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4M12 17v4M8 21h8"
};

export const serviceCards: ServiceCard[] = [
  {
    slug: "ai-readiness",
    kicker: "AI Readiness",
    title: "AI Readiness",
    summary:
      "Assess your data, talent, and infrastructure readiness — then deploy AI use cases that move real business KPIs.",
    longDescription:
      "Vibrant helps enterprises move from AI curiosity to AI value. We assess data, talent, and infrastructure readiness, then prioritize and deliver use cases that show up in the P&L.",
    iconPath: ICONS.ai,
    metaTags: [
      "AI readiness assessment",
      "Use-case prioritization",
      "MLOps & responsible AI",
      "Generative AI pilots"
    ],
    outcomes: [
      "Clear, prioritized AI roadmap",
      "Shipped pilots tied to a business KPI",
      "Production-grade MLOps and governance"
    ],
    capabilities: [
      "AI readiness assessment",
      "Use-case discovery & prioritization",
      "Generative AI pilots",
      "MLOps & responsible AI",
      "Data foundation for AI",
      "Change management & enablement"
    ],
    bestFit:
      "Mid-market and enterprise leaders moving past AI experimentation into production value."
  },
  {
    slug: "cloud-modernization",
    kicker: "Cloud Modernization",
    title: "Cloud Modernization",
    summary:
      "Rationalize, replatform, and refactor your estate on Azure, AWS, or GCP — without the rip-and-replace risk.",
    longDescription:
      "We modernize legacy estates incrementally — landing zones, migrations, microservices, and platform engineering — so the business keeps shipping while the foundation gets stronger.",
    iconPath: ICONS.cloud,
    metaTags: [
      "Azure / AWS / GCP",
      "Landing zones",
      "Microservices & containers",
      "Platform engineering"
    ],
    outcomes: [
      "Resilient, cost-aware cloud foundation",
      "Lower run cost via FinOps",
      "Faster developer velocity"
    ],
    capabilities: [
      "Cloud strategy & assessment",
      "Landing zones (Azure / AWS / GCP)",
      "Migration & replatforming",
      "Microservices & Kubernetes",
      "Platform engineering",
      "FinOps & cost optimization"
    ],
    bestFit:
      "Organizations with legacy data centers or fragmented cloud estates needing a defensible plan."
  },
  {
    slug: "cybersecurity",
    kicker: "Cybersecurity",
    title: "Cybersecurity",
    summary:
      "Zero-trust architectures, identity, and 24×7 SOC operations — security that scales with the business, not against it.",
    longDescription:
      "Security as an enabler, not a brake. We assess gaps, design zero-trust architecture, harden identity, and stand up 24×7 detection — aligned to compliance frameworks the business already lives in.",
    iconPath: ICONS.shield,
    metaTags: [
      "Security assessments & gap analysis",
      "Zero-trust architecture",
      "Identity & access management",
      "SOC & threat detection"
    ],
    outcomes: [
      "Reduced breach exposure and faster detection",
      "Audit-ready compliance posture",
      "Identity-first architecture"
    ],
    capabilities: [
      "Security assessments & gap analysis",
      "Zero-trust architecture",
      "Identity & access management",
      "SOC & threat detection",
      "Cloud security posture",
      "Compliance (SOC 2, HIPAA, PCI)"
    ],
    bestFit:
      "Mid-market and enterprise companies modernizing security alongside cloud and AI programs."
  },
  {
    slug: "automation",
    kicker: "Automation",
    title: "Automation",
    summary:
      "Process discovery, RPA, and intelligent automation that take repetitive work off your team's plate.",
    longDescription:
      "We find the work that shouldn't be done by humans — then automate it. Process discovery, RPA, intelligent document processing, and workflow automation that compound across the business.",
    iconPath: ICONS.bolt,
    metaTags: [
      "Process discovery & mining",
      "RPA (UiPath, Automation Anywhere, Power Automate)",
      "Intelligent document processing",
      "Workflow automation"
    ],
    outcomes: [
      "Hours-back-per-week for high-cost teams",
      "Fewer manual errors and rework",
      "Compounding savings across functions"
    ],
    capabilities: [
      "Process discovery & mining",
      "RPA (UiPath, Automation Anywhere, Power Automate)",
      "Intelligent document processing",
      "Workflow automation",
      "Business process redesign",
      "Citizen developer enablement"
    ],
    bestFit:
      "Operations-heavy organizations with measurable manual workload to compress."
  },
  {
    slug: "erp-optimization",
    kicker: "ERP Optimization",
    title: "ERP Optimization",
    summary:
      "NetSuite, WorkDay, Microsoft Dynamics, and Oracle E-Business — implementation, post go-live optimization, and managed support.",
    longDescription:
      "Whether you're standing up a new ERP or stabilizing one that under-delivered, Vibrant's 25-year ERP practice covers NetSuite, WorkDay HCM/Financials, Microsoft Dynamics 365, and Oracle E-Business Suite.",
    iconPath: ICONS.layers,
    metaTags: [
      "Oracle NetSuite implementation",
      "WorkDay HCM & Financials",
      "Microsoft Dynamics 365",
      "Oracle E-Business Suite"
    ],
    outcomes: [
      "On-time, on-budget go-lives",
      "Lower total cost of ownership",
      "Higher user adoption and ROI"
    ],
    capabilities: [
      "Oracle NetSuite implementation",
      "WorkDay HCM & Financials",
      "Microsoft Dynamics 365",
      "Oracle E-Business Suite",
      "Post go-live stabilization",
      "ERP managed support"
    ],
    bestFit:
      "Companies replacing legacy ERP, rolling out a new platform, or rescuing a stalled program."
  },
  {
    slug: "data-analytics",
    kicker: "Data & Analytics",
    title: "Data & Analytics",
    summary:
      "Modern data platforms, self-service BI, and decision-grade reporting on Snowflake, Databricks, Power BI, and Oracle BI.",
    longDescription:
      "From data strategy to dashboards, we build the platform and the reporting layer that gives leadership numbers they trust — and gives analysts the freedom to answer their own questions.",
    iconPath: ICONS.chart,
    metaTags: [
      "Data & analytics strategy",
      "Modern data platform (Snowflake, Databricks)",
      "Power BI / Tableau / Oracle BI",
      "Data warehouse modernization"
    ],
    outcomes: [
      "Executive dashboards tied to KPIs",
      "Reliable, governed reporting",
      "Reduced manual spreadsheet work"
    ],
    capabilities: [
      "Data & analytics strategy",
      "Modern data platform (Snowflake, Databricks)",
      "Power BI / Tableau / Oracle BI",
      "Data warehouse modernization",
      "Data quality & governance",
      "Self-service analytics enablement"
    ],
    bestFit:
      "Organizations with data, but no consistent decision-grade reporting."
  },
  {
    slug: "managed-it",
    kicker: "Managed IT",
    title: "Managed IT",
    summary:
      "24×7 managed services across cloud, security, ERP, and end-user computing — so your internal team stays focused on growth.",
    longDescription:
      "Vibrant's managed services give lean IT teams the depth, coverage, and senior escalation they need — without growing headcount. From application managed services to FinOps to managed SOC.",
    iconPath: ICONS.monitor,
    metaTags: [
      "Application managed services",
      "Cloud operations & FinOps",
      "Managed SOC",
      "Service desk & end-user support"
    ],
    outcomes: [
      "Predictable IT operating costs",
      "24×7 coverage without growing headcount",
      "Senior escalation when you need it"
    ],
    capabilities: [
      "Application managed services",
      "Cloud operations & FinOps",
      "Managed SOC",
      "Service desk & end-user support",
      "Database administration",
      "Staff augmentation"
    ],
    bestFit:
      "Lean IT teams that need depth, coverage, and senior escalation paths without hiring."
  }
];

export const trustBadges = [
  { label: "25 Years", sub: "of trusted delivery" },
  { label: "E-Verify", sub: "Partner" },
  { label: "NMSDC", sub: "Certified" },
  { label: "Oracle NetSuite", sub: "Solution Partner" },
  { label: "Wrike", sub: "Solution Partner" }
];

export const stats = [
  { value: 25, suffix: "+", label: "Years of innovation" },
  { value: 500, suffix: "+", label: "Successful engagements" },
  { value: 50, suffix: "+", label: "Enterprise clients" },
  { value: 24, suffix: "/7", label: "Managed IT support" }
];

export type Partner = {
  name: string;
  logo: string;
  category: string;
  description: string;
  href: string;
};

export const partners: Partner[] = [
  {
    name: "Oracle NetSuite",
    logo: "NS",
    category: "ERP · CRM · Accounting",
    description:
      "Vibrant Inc is an authorized Reseller and Implementation Partner of Oracle NetSuite Software. NetSuite is the #1 Cloud ERP — one unified solution for ERP/Financials, CRM, and ecommerce used by more than 40,000 organizations worldwide. Our partnership covers licensing, implementation, data migration, customization, and post go-live managed support.",
    href: "/services/erp-optimization"
  },
  {
    name: "Wrike",
    logo: "W",
    category: "Work Management",
    description:
      "Wrike is a leading Work Management Solution enabling collaboration, streamlined workflow, and full project visibility. As a Wrike Solution Partner, Vibrant helps clients deploy this cloud-based platform across teams of any size — reducing email overhead, improving reporting, and keeping distributed delivery teams in sync.",
    href: "/services"
  },
  {
    name: "Microsoft",
    logo: "MS",
    category: "Cloud · ERP · AI",
    description:
      "Vibrant is a proud member of the Microsoft Partner Network, providing access to exclusive resources, programs, and tools across Azure cloud transformation, Microsoft Dynamics AX/365 ERP, Azure IoT, Azure Machine Learning, and the full Microsoft enterprise ecosystem.",
    href: "/services/cloud-modernization"
  }
];

export const partnerBenefits = [
  {
    title: "Right-sized licensing",
    body: "We help you size what you actually need — not the SKU your sales rep wants to hit quota with."
  },
  {
    title: "Architecture credibility",
    body: "Vendor-validated reference architectures keep your build supportable and upgrade-friendly."
  },
  {
    title: "Fast escalation",
    body: "Direct partner channels for urgent support tickets — your issues don't sit in a Tier-1 queue."
  },
  {
    title: "Roadmap visibility",
    body: "Early access to product roadmaps so we can plan around what's coming, not what's shipped."
  }
];

export const companyOverview = [
  "Vibrant Inc was established in 2000 as a trusted provider of value-added, cost-effective IT solutions to customers across North America. For 25 years, we have helped businesses navigate the digital landscape through cloud and data analytics — working as true partners to deliver measurable outcomes.",
  "Our practice areas span cloud modernization on Azure and leading platforms, data and analytics strategy, Oracle NetSuite ERP and multi-platform ERP implementations, cybersecurity, intelligent automation, AI readiness, and managed IT services.",
  "Vibrant combines onshore senior leadership with a hybrid delivery model to maximize efficiency without sacrificing quality. Our engagement managers, architects, and subject-matter experts take full ownership of every engagement — from discovery through hypercare and beyond.",
  "We are NMSDC certified, E-Verify compliant, and an Oracle NetSuite Solution Partner — credentials that reflect how we build our teams and support our clients' diversity and compliance programs."
];

export const visionStatement =
  "Be the partner of choice, empowering businesses to leverage cloud technology and data analytics for competitive advantage, sustained performance, and long-term growth.";

export const aboutFacts = [
  { value: "2000", label: "Established to deliver value-added IT solutions" },
  { value: "25+", label: "Years of trusted enterprise delivery" },
  { value: "5", label: "Practice areas across cloud, data, ERP & managed IT" },
  { value: "Global", label: "Onshore and offshore delivery" }
];

export const coreValues = [
  {
    title: "Broad SDLC services",
    body: "End-to-end delivery across the software development lifecycle."
  },
  { title: "Deep professional pool", body: "Senior consultants with functional and technical depth." },
  { title: "Long-term relationships", body: "Most clients return — built on trust, not transactions." },
  {
    title: "Proven delivery methodology",
    body: "Repeatable execution, accelerators, and reusable assets."
  },
  { title: "Customer centricity", body: "Every engagement starts and ends with the customer." }
];

export const deliverySteps = [
  {
    title: "Senior project leadership",
    body:
      "Superior project management with strong ownership at the engagement level — accountable from kickoff to go-live."
  },
  {
    title: "Multi-location execution",
    body:
      "Onshore and offshore delivery model designed to maximize productivity and reduce costs without sacrificing quality."
  },
  {
    title: "Continuous improvement",
    body:
      "Ongoing investment in delivery, automation, and managed services so clients keep getting more value over time."
  },
  {
    title: "Customer partnership",
    body: "Tailored solutions to your unique challenges, with quarterly business reviews and senior advisor access."
  }
];

export const servicesProcess = [
  {
    title: "Discover",
    body:
      "Working sessions with your team to map current-state systems, gaps, and the business outcomes you're chasing."
  },
  {
    title: "Design",
    body: "Practical target-state architecture, sequencing, and a delivery plan you can defend internally."
  },
  {
    title: "Deliver",
    body: "Senior-led implementation with onshore + offshore execution, weekly demos, and tight change control."
  },
  {
    title: "Operate",
    body: "Hypercare, managed support, and continuous improvement once you're live."
  }
];

export const careersBenefits = [
  "Top wages",
  "Medical, dental, and vision insurance",
  "Company-paid life, short-term and long-term disability",
  "Direct deposit",
  "Employee assistance program",
  "401(k) retirement savings plan",
  "Technical and project / process management training",
  "Inclusive, distributed-team culture",
  "Long-tenured colleagues and clients"
];

export const careersCriteria = [
  "5+ years' experience in your specialty",
  "Hands-on functional or technical depth (not just slideware)",
  "Ownership mindset — you finish what you start",
  "Comfortable with client-facing communication",
  "Curious about cloud, data, and ERP modernization"
];

export type Opening = {
  category: string;
  title: string;
  summary: string;
};

export const careerOpenings: Opening[] = [
  {
    category: "Functional",
    title: "NetSuite Functional Consultant",
    summary:
      "Lead implementations and post go-live optimization for SMB clients moving off QuickBooks or fragmented stacks."
  },
  {
    category: "Cloud",
    title: "Senior Azure Architect",
    summary:
      "Design and lead Azure modernization programs — landing zones, microservices, and data platform."
  },
  {
    category: "Analytics",
    title: "BI & Analytics Lead",
    summary: "Own analytics strategy and Oracle BI delivery for mid-market and enterprise clients."
  },
  {
    category: "ERP",
    title: "WorkDay HCM Consultant",
    summary:
      "Functional configuration, integrations, and stabilization across complex multi-country deployments."
  },
  {
    category: "ERP",
    title: "Microsoft Dynamics 365 Lead",
    summary: "Lead end-to-end D365 F&O / CE engagements across mid-market clients."
  },
  {
    category: "Delivery",
    title: "Engagement Manager",
    summary: "Run senior-led, multi-stream programs from kickoff through hypercare."
  }
];

export const socialResponsibilityCommitments = [
  {
    title: "Community involvement",
    body:
      "Founder involvement in Rotary-led social projects and broader community support across the regions where our team lives and works."
  },
  {
    title: "Employee participation",
    body:
      "Employees contribute through financial donations and paid volunteer hours to causes they care about most."
  },
  {
    title: "Ethics, diversity, and environment",
    body:
      "A standing commitment to ethical business practices, diversity and inclusion, and environmental responsibility — measured, not just stated."
  },
  {
    title: "Long-term local impact",
    body:
      "A long-term pledge to create positive impact in local communities and for future generations — building on 25 years of consistent giving."
  }
];

export const interestOptions = [
  "AI Readiness",
  "Cloud Modernization (Azure / AWS / GCP)",
  "Cybersecurity & Zero Trust",
  "Automation & RPA",
  "ERP Optimization (NetSuite, WorkDay, MS Dynamics, Oracle)",
  "Data & Analytics",
  "Managed IT Services",
  "Partnership inquiry",
  "Other / not sure"
];

export const contactDetails: ContactDetail[] = [
  { label: "General inquiries", value: siteSettings.email },
  { label: "Phone", value: siteSettings.phonePrimary },
  { label: "Alternate phone", value: siteSettings.phoneSecondary },
  { label: "Headquarters", value: siteSettings.address }
];

export function getServiceBySlug(slug: string) {
  return serviceCards.find((service) => service.slug === slug);
}

// ───── Legacy aliases for compatibility ─────
export const techPills = serviceCards.map((s) => s.title);
export const proofPoints = trustBadges.map((b) => ({ value: b.label, label: b.sub }));
export const companyFacts = aboutFacts;
export const officialHighlights = serviceCards.map((s) => s.summary);
export const newsItems = [
  {
    title: "Celebrating 25 Years of Innovation and Trust",
    summary:
      "Vibrant marks a quarter century of serving businesses across North America with technology and transformation solutions."
  }
];
export const careersHighlights = [
  "Vibrant is an exciting company to work with and build a career.",
  "Consultants are distributed across the country and travel to client sites as required, while the company is headquartered in Princeton, New Jersey.",
  "We emphasize customer satisfaction, employee satisfaction, work-life balance, and ongoing training."
];
export const testimonials: { name: string; role: string; quote: string }[] = [];
export const serviceDeliveryModel = deliverySteps.map((d) => `${d.title}: ${d.body}`);
export const socialResponsibility = socialResponsibilityCommitments.map((c) => c.body);
