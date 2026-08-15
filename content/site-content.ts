export type NavigationItem = { href: string; label: string };

export type ServiceCard = {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  /** SERP copy (≤160 chars, sentence form), falls back to summary */
  metaDescription?: string;
  longDescription: string;
  iconPath: string;
  metaTags: string[];
  outcomes: string[];
  capabilities: string[];
  /** Labeled sub-practices, used where one service absorbs several (SAP, ERP) */
  capabilityGroups?: { label: string; items: string[] }[];
  bestFit: string;
  category?: string;
  featured?: boolean; // shows in homepage carousel
  hideFromGrid?: boolean; // carousel-only entries hidden from services grid
  carouselOrder?: number; // hero slide position (lower = earlier); unset featured cards sort last
  heroTagline?: string; // ONE short line on the hero slide (minimal hero); falls back to summary
  heroTeaser?: string; // longer copy, kept for reuse on detail surfaces, not rendered in the hero
  heroHighlights?: string[]; // proof chips, kept in data, no longer rendered in the hero
};

export type ContactDetail = { label: string; value: string };

/* Company age, derived rather than written down. It was previously hardcoded in
   ~15 places and baked into assets/anniversary.png, which is how the site came
   to claim 27 and 25 at the same time. Evaluated at build time (static export),
   same as the footer copyright year. */
export const foundedYear = 2000;
export const yearsInBusiness = new Date().getFullYear() - foundedYear;

export const siteSettings = {
  brandName: "Vibrant Inc",
  tagline: "Optimizing your efficiency. Strengthening your bottom line.",
  siteUrl: "https://vibrantinc.com",
  // ~60 chars so search results don't truncate; the full positioning
  // statement lives in the homepage H1 (hero-slider).
  defaultTitle: "Vibrant Inc | ERP, Cloud & AI Modernization Without Disruption",
  defaultDescription:
    "Vibrant Inc modernizes ERP, cloud, security, data, and AI for mid-market and enterprise companies, without disrupting operations. Trusted delivery since 2000.",
  careersUrl: "/careers",
  phonePrimary: "609-945-2244",
  phoneSecondary: "609-945-0442",
  email: "info@vibrantinc.com",
  emailCareers: "careers@vibrantinc.com",
  emailPartnerships: "partnerships@vibrantinc.com",
  emailCommunity: "community@vibrantinc.com",
  address: "5 Independence Way, Suite 300, Princeton, NJ 08540",
  addressShort: "Princeton, New Jersey",
  social: {
    facebook: "https://www.facebook.com/VibrantIncNJ/",
    twitter: "https://x.com/VibrantInc",
    linkedin: "https://www.linkedin.com/company/11160088/"
  },
  /* Contact-form backend. Paste ONE key to activate that provider; leave both
     empty to fall back to FormSubmit.co (which needs its one-time activation
     email clicked at info@vibrantinc.com before submissions arrive).
     - formspreeId: create a free form at formspree.io with info@vibrantinc.com,
       copy the id from the endpoint URL (formspree.io/f/<id>). 50/mo free,
       dashboard keeps every submission even if an email goes missing.
     - web3formsKey: get a free access key at web3forms.com (no account).
       250/mo free, email-only delivery. */
  forms: {
    formspreeId: "",
    web3formsKey: ""
  }
};

export type Office = {
  id: "us" | "india";
  label: string;
  company: string;
  addressLines: string[];
  phone?: string;
  mapsQuery: string;
  photoAlt: string;
};

export const offices: Office[] = [
  {
    id: "us",
    label: "Princeton, New Jersey. Headquarters",
    company: "Vibrant Inc",
    addressLines: ["5 Independence Way, Suite 300", "Princeton, NJ 08540", "United States"],
    phone: "609-945-2244",
    mapsQuery: "5 Independence Way, Suite 300, Princeton, NJ 08540",
    photoAlt: "Vibrant Inc headquarters at 5 Independence Way, Princeton, New Jersey"
  },
  {
    id: "india",
    label: "Hyderabad, India. Delivery Center",
    company: "PYS IT Services Private Limited",
    addressLines: [
      "Door No 1-60/8/A & B, 3rd Floor, KNR Square",
      "Opp. 'The Platina', Gachibowli, Kondapur",
      "Hyderabad 500032, India"
    ],
    mapsQuery: "KNR Square, Gachibowli, Kondapur, Hyderabad 500032",
    photoAlt: "Vibrant delivery center at KNR Square, Gachibowli, Hyderabad"
  }
];

export type Leader = {
  id: string;
  name?: string; // unset = unnamed role card (practice-led)
  role: string;
  bio: string[];
  expertise: string[];
  credentials?: string[];
  initials?: string;
  hasPhoto?: boolean;
  featured?: boolean; // founder gets the wide two-column treatment
  linkedin?: string; // public profile URL, renders a "Connect on LinkedIn" button
  calendly?: string; // booking URL, renders a "Book a meeting" button once set
};

export const leadership: Leader[] = [
  {
    id: "suresh-reddy",
    name: "Suresh Reddy",
    role: "Founder & President",
    featured: true,
    hasPhoto: true,
    initials: "SR",
    credentials: ["ITIL Foundation Certified"],
    linkedin: "https://www.linkedin.com/in/sureshpreddy/",
    calendly: "", // paste the calendly.com/.. URL to show the "Book a meeting" button
    bio: [
      "With more than 27 years leading enterprise technology transformation, Suresh Reddy is the Founder and President of Vibrant Inc, helping organizations modernize through cloud, enterprise applications, DevOps, and AI-driven innovation, with complex initiatives delivered across the full systems lifecycle for Fortune 500 partners.",
      "A recognized leader in cloud and DevOps transformation, Suresh has migrated enterprise workloads to AWS, built high-performing engineering teams, and established enterprise-wide governance, security, and automation for large-scale, mission-critical environments, alongside deep application expertise across Oracle E-Business Suite, PeopleSoft, and JD Edwards EnterpriseOne.",
      "ITIL Foundation Certified, he is passionate about simplifying complexity and improving operational efficiency. Under his leadership, Vibrant delivers practical, results-driven solutions that help clients thrive in an increasingly digital world."
    ],
    expertise: [
      "Cloud Transformation (AWS)",
      "DevOps Governance",
      "Oracle EBS · PeopleSoft · JD Edwards",
      "AI-Driven Innovation"
    ]
  },
  {
    id: "chaitanya-komatireddy",
    name: "Chaitanya Kumar Komatireddy",
    role: "Principal Enterprise Architect",
    initials: "CK",
    bio: [
      "Chaitanya is an accomplished enterprise technology leader with over 22 years of experience in cloud transformation, Azure architecture, AI, DevOps, and application modernization. He has led enterprise programs for Fortune 500 organizations, delivering scalable cloud-native solutions, modern engineering practices, and digital transformation initiatives that drive business innovation and operational excellence."
    ],
    expertise: ["Azure Architecture", "Cloud Transformation", "App Modernization", "DevOps", "AI"]
  },
  {
    id: "sathish-donthula",
    name: "Sathish Donthula",
    role: "Principal SAP Solution Architect",
    initials: "SD",
    bio: [
      "A seasoned SAP technology leader with over 15 years of experience delivering enterprise SAP solutions across S/4HANA, SAP ECC, and SAP BTP. He has led complex SAP transformation initiatives for global organizations including Chevron, Johnson & Johnson, Toshiba, Canon Medical, and Hanes, helping clients modernize their SAP environments through scalable architecture, innovation, and technical excellence."
    ],
    expertise: ["S/4HANA", "SAP ECC", "SAP BTP", "SAP Integration"]
  },
  {
    id: "dushanth",
    name: "Dishanth",
    role: "Principal Cybersecurity Architect",
    initials: "D",
    bio: [
      "A seasoned cybersecurity leader with extensive experience in enterprise security architecture, cloud security, Zero Trust, governance, risk management, and regulatory compliance. He helps organizations build secure, resilient technology environments by integrating cybersecurity into every phase of digital transformation, enabling businesses to innovate with confidence."
    ],
    expertise: ["Zero Trust", "Cloud Security", "GRC & Compliance", "Security Architecture"]
  },
  {
    id: "ai-solutions-architect",
    name: "Sai Varma",
    role: "Principal AI Solutions Architect",
    initials: "SV",
    bio: [
      "An experienced AI technology leader specializing in Generative AI, Agentic AI, machine learning, intelligent automation, and enterprise AI integration. He partners with organizations to design and implement secure, scalable AI solutions that improve business performance, accelerate innovation, and enable successful digital transformation."
    ],
    expertise: ["Generative AI", "Agentic AI", "Machine Learning", "Intelligent Automation"]
  }
];

export const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Leadership" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
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
  monitor: "M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4M12 17v4M8 21h8",
  database: "M12 3c3.866 0 7 1.79 7 4v3c0 2.21-3.134 4-7 4s-7-1.79-7-4V7c0-2.21 3.134-4 7-4zM5 10c0 2.21 3.134 4 7 4s7-1.79 7-4M5 17c0 2.21 3.134 4 7 4s7-1.79 7-4",
  package: "M12.89 1.45l8 4v6.5c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5.45l8-4z",
  truck: "M1 6v12h4v3h12v-3h4V6H1zm9 11H6v-2h4v2zm8-2v2h-3v-2h3zM3 8h14v5H3V8z",
  settings: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.62l-1.92-3.32c-.12-.22-.39-.3-.61-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.25-.25-.43-.5-.43h-3.84c-.25 0-.46.18-.49.43L9.13 5.5C8.54 5.74 8 6.06 7.44 6.46L5.05 5.5c-.22-.09-.49 0-.61.22L2.52 9.04c-.13.21-.08.48.1.62l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.1.62l1.92 3.32c.12.22.39.3.61.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.25.25.43.5.43h3.84c.25 0 .46-.18.49-.43l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.49 0 .61-.22l1.92-3.32c.12-.22.07-.47-.12-.62l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
  zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M16 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7.5 11c1.933 0 3.5-1.791 3.5-4S9.433 3 7.5 3 4 4.791 4 7s1.567 4 3.5 4z"
};

export const serviceCards: ServiceCard[] = [
  {
    slug: "ai-readiness",
    kicker: "AI Readiness",
    title: "AI Readiness",
    summary:
      "AI as an accelerator, not a science project, we assess your data, talent, and infrastructure, then ship use cases that move real business KPIs.",
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
    capabilityGroups: [
      {
        label: "Intelligent Automation",
        items: [
          "Process discovery & mining",
          "RPA (UiPath, Automation Anywhere, Power Automate)",
          "Intelligent document processing",
          "Workflow automation",
          "Business process redesign",
          "Citizen developer enablement"
        ]
      }
    ],
    bestFit:
      "Mid-market and enterprise leaders moving past AI experimentation into production value.",
    featured: true,
    carouselOrder: 4,
    heroTagline: "AI that accelerates the business you already run, shipped, not demoed.",
    heroTeaser:
      "AI should accelerate the business you already run, not become a lab experiment. We assess data, talent, and infrastructure readiness, prioritize the use cases that matter, and ship pilots that show up in the P&L.",
    heroHighlights: ["Readiness assessment & roadmap", "Generative AI pilots", "MLOps & responsible AI"]
  },
  {
    slug: "cloud-modernization",
    kicker: "Cloud Modernization",
    title: "Cloud Modernization",
    summary:
      "Rationalize, replatform, and refactor your estate on Azure, AWS, or GCP, without the rip-and-replace risk.",
    longDescription:
      "We modernize legacy estates incrementally, landing zones, migrations, microservices, and platform engineering, so the business keeps shipping while the foundation gets stronger.",
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
      "Organizations with legacy data centers or fragmented cloud estates needing a defensible plan.",
    featured: true,
    carouselOrder: 2,
    heroTagline: "Azure, AWS, or GCP, moved incrementally, never rip-and-replace.",
    heroTeaser:
      "Move to Azure, AWS, or GCP without the rip-and-replace risk. We modernize incrementally, landing zones, migrations, microservices, and platform engineering, so the business keeps shipping while the foundation gets stronger.",
    heroHighlights: ["Azure · AWS · GCP landing zones", "Migration & replatforming", "FinOps cost optimization"]
  },
  {
    slug: "cybersecurity",
    metaDescription:
      "Zero-trust security, 24×7 SOC coverage, and audit-ready SOC 2, HIPAA, PCI, and CMMC compliance, backed by Vibrant's AI Shield detection platform.",
    kicker: "Cybersecurity & Compliance",
    title: "Cybersecurity & Compliance",
    summary:
      "Zero-trust architecture, hardened identity, always-on SOC operations, and audit-ready compliance across SOC 2, HIPAA, PCI, and CMMC, with our AI Shield platform watching your back.",
    longDescription:
      "Security as an enabler, not a brake. Our AI Shield capability uses machine learning and behavioral analytics to detect, investigate, and neutralize threats faster than any manual approach. We assess gaps, design zero-trust architecture, harden identity, and stand up AI-driven 24×7 detection, aligned to compliance frameworks the business already lives in.",
    iconPath: ICONS.shield,
    metaTags: [
      "Zero-trust architecture",
      "Identity & access management",
      "SOC 2 · HIPAA · PCI · CMMC",
      "24×7 SOC operations"
    ],
    outcomes: [
      "Reduced breach exposure and faster detection",
      "Audit-ready compliance posture",
      "AI-driven threat response in minutes, not hours"
    ],
    capabilities: [
      "AI Shield. ML-powered threat detection & response",
      "Behavioral analytics (UEBA)",
      "Automated incident response playbooks",
      "Predictive threat intelligence",
      "Security assessments & gap analysis",
      "Zero-trust architecture design",
      "Identity & access management",
      "SOC operations (24×7 managed)",
      "Cloud security posture management",
      "Compliance (SOC 2, HIPAA, PCI, CMMC)"
    ],
    capabilityGroups: [
      {
        label: "AI Shield: intelligent detection & response",
        items: [
          "ML-powered threat detection",
          "User & Entity Behavioral Analytics (UEBA)",
          "Automated incident response playbooks",
          "Predictive threat intelligence feeds",
          "Anomaly detection across cloud & on-prem",
          "Integration with existing SIEM/SOC tooling"
        ]
      }
    ],
    bestFit:
      "Mid-market and enterprise companies modernizing security alongside cloud and AI programs, especially those seeking AI-augmented threat response.",
    featured: true,
    carouselOrder: 3,
    heroTagline: "Zero-trust architecture, always-on SOC coverage, audit-ready compliance.",
    heroTeaser:
      "Security that enables the business instead of slowing it down. We design zero-trust architecture, harden identity, run round-the-clock SOC coverage, and keep you audit-ready across SOC 2, HIPAA, PCI, and CMMC, backed by our AI Shield detection platform.",
    heroHighlights: ["Zero-trust & identity", "24×7 SOC operations", "SOC 2 · HIPAA · PCI · CMMC"]
  },
  {
    slug: "erp-optimization",
    metaDescription:
      "One partner for SAP, JD Edwards, PeopleSoft, Oracle EBS, Workday, and Dynamics 365, implementation, upgrades, and managed support, owned end to end.",
    kicker: "ERP & Enterprise Applications",
    title: "ERP & Enterprise Applications",
    summary:
      "One ERP practice, every major platform. SAP Implementation & Support, JD Edwards CNC Services, PeopleSoft Implementation & Support, plus Oracle E-Business Suite, Workday, and Dynamics 365. From first blueprint to the first quiet month after go-live, owned end to end.",
    longDescription:
      "Whether you're running a complex JD Edwards environment, launching a PeopleSoft or SAP program, or stabilizing a Dynamics 365 rollout that under-delivered. Vibrant's 26-year ERP practice covers the full Oracle stack (JD Edwards EnterpriseOne, PeopleSoft, Oracle E-Business Suite), SAP (ECC / S/4HANA), Workday HCM/Financials, and Microsoft Dynamics 365. Our certified practitioners take ownership from blueprint through go-live and the stabilization weeks that follow.",
    iconPath: ICONS.layers,
    metaTags: [
      "SAP Implementation & Support (ECC / S/4HANA)",
      "JD Edwards CNC Services",
      "PeopleSoft Implementation & Support",
      "Workday HCM & Financials",
      "Microsoft Dynamics 365",
      "Oracle E-Business Suite"
    ],
    outcomes: [
      "On-time, on-budget go-lives",
      "Lower total cost of ERP ownership",
      "Higher user adoption and measurable ROI"
    ],
    capabilities: [
      "JD Edwards EnterpriseOne CNC Administration",
      "JD Edwards Functional & Technical Implementation",
      "SAP Implementation & Support (ECC / S/4HANA)",
      "PeopleSoft Implementation & Support",
      "Workday HCM & Financials",
      "Microsoft Dynamics 365 (F&O / CE)",
      "Oracle E-Business Suite",
      "Post go-live stabilization & managed support",
      "ERP data migration & integrations",
      "ERP upgrade & modernization"
    ],
    capabilityGroups: [
      {
        label: "JD Edwards CNC Services",
        items: [
          "JD Edwards CNC administration",
          "OneWorld & EnterpriseOne support",
          "Environment provisioning & patching",
          "Security & access control",
          "Database tuning & optimization",
          "Release & deployment management",
          "Backup & disaster recovery",
          "24×7 monitoring & incident response"
        ]
      },
      {
        label: "PeopleSoft Implementation & Support",
        items: [
          "PeopleSoft HCM implementation",
          "PeopleSoft FSCM (Financials Supply Chain Management)",
          "PeopleCode & customization",
          "System upgrades & patches",
          "Performance tuning",
          "Integrations (payroll, benefits, GL)",
          "User enablement & training",
          "24×7 production support"
        ]
      }
    ],
    bestFit:
      "Companies replacing legacy ERP, running JD Edwards or PeopleSoft environments needing CNC expertise, or rescuing a stalled SAP or Dynamics program.",
    featured: true,
    carouselOrder: 1,
    heroTagline: "SAP, JD Edwards, and PeopleSoft, modernized without missing a beat.",
    heroTeaser:
      "Your ERP is the heart of the business, modernize it without missing a beat. Vibrant's 26-year practice spans SAP Implementation & Support, JD Edwards CNC Services, and PeopleSoft Implementation & Support, alongside Oracle EBS, Workday, and Dynamics 365.",
    heroHighlights: ["SAP ECC / S/4HANA · AMS", "JD Edwards CNC & EnterpriseOne", "PeopleSoft HCM / FSCM"]
  },
  {
    slug: "data-analytics",
    kicker: "Data & Analytics",
    title: "Data & Analytics",
    summary:
      "Modern data platforms, self-service BI, and decision-grade reporting on Snowflake, Databricks, Power BI, and Oracle BI.",
    longDescription:
      "From data strategy to dashboards, we build the platform and the reporting layer that gives leadership numbers they trust, and gives analysts the freedom to answer their own questions.",
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
      "Organizations with data, but no consistent decision-grade reporting.",
    featured: true,
    carouselOrder: 6,
    heroTagline: "Numbers leadership can trust. Dashboards analysts actually use.",
    heroTeaser:
      "Numbers leadership can trust, dashboards analysts actually use. We build modern data platforms on Snowflake and Databricks, and the governed, decision-grade reporting layer on top in Power BI, Tableau, and Oracle BI.",
    heroHighlights: ["Snowflake & Databricks platforms", "Power BI · Tableau · Oracle BI", "Governance & data quality"]
  },
  {
    slug: "managed-it",
    kicker: "Managed IT",
    title: "Managed IT",
    summary:
      "Always-on managed services across cloud, security, ERP, and end-user computing, so your internal team stays focused on growth.",
    longDescription:
      "Vibrant's managed services give lean IT teams the depth, coverage, and senior escalation they need, without growing headcount. From application managed services to FinOps to managed SOC.",
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
      "Lean IT teams that need depth, coverage, and senior escalation paths without hiring.",
    category: "Managed Services",
    featured: true,
    carouselOrder: 7,
    heroTagline: "Round-the-clock depth for lean IT teams, without the headcount.",
    heroTeaser:
      "Round-the-clock depth for lean IT teams, applications, cloud operations, security, and service desk with senior escalation always on call. Predictable costs, no headcount growth, no 2 a.m. surprises.",
    heroHighlights: ["24×7 application support", "Cloud ops & FinOps", "Managed SOC & service desk"]
  },

  /* ───── SAP SOLUTIONS. One umbrella carousel slide ───── */
  {
    slug: "sap-solutions",
    metaDescription:
      "Full-lifecycle SAP services from one senior-led team. S/4HANA implementation, AMS support, supply chain, BTP integration, Fiori UX, and clean core.",
    kicker: "SAP Solutions",
    title: "SAP Solutions",
    summary:
      "Every SAP discipline under one roof. S/4HANA implementations, AMS, supply chain, BTP integration, Fiori UX, and clean core, plus JD Edwards and PeopleSoft depth when your estate spans platforms.",
    longDescription:
      "One SAP team, accountable for the whole lifecycle. We implement S/4HANA, keep production stable through AMS, modernize supply chain execution with EWM, TM, and IBP, extend cleanly on BTP, and design Fiori experiences users actually adopt. And because most enterprise estates aren't SAP-only, the same practice carries JD Edwards CNC and PeopleSoft expertise, so one partner covers the estate you actually have.",
    iconPath: ICONS.database,
    metaTags: [
      "SAP S/4HANA Implementation",
      "SAP AMS & Support",
      "Supply Chain (EWM, TM, IBP)",
      "SAP BTP & Integrations",
      "Fiori/UI5 UX",
      "JD Edwards CNC",
      "PeopleSoft HCM/FSCM"
    ],
    outcomes: [
      "On-time, on-budget SAP go-lives",
      "Stable, optimized SAP landscape post-go-live",
      "Measurable supply chain & operational efficiency gains"
    ],
    capabilities: [
      "SAP S/4HANA Implementation & Migration",
      "SAP Application Management Services (AMS)",
      "Supply Chain Solutions. EWM, TM, IBP & PP",
      "SAP Business Technology Platform (BTP)",
      "SAP Integration Services (EDI, IDoc, API)",
      "Enterprise User Experience. Fiori & UI5",
      "SAP Clean Core & Upgrade Services",
      "SAP ABAP & Custom Development",
      "JD Edwards CNC Administration",
      "PeopleSoft HCM/FSCM Implementation & Support"
    ],
    capabilityGroups: [
      {
        label: "S/4HANA Implementation & Migration",
        items: [
          "SAP S/4HANA greenfield implementation",
          "ECC to S/4HANA migration",
          "Implementation roadmap & sequencing",
          "Blueprint & design workshops",
          "Data migration & cleansing",
          "Testing strategy & execution",
          "Go-live & hypercare support"
        ]
      },
      {
        label: "Application Management Services (AMS)",
        items: [
          "24×7 SAP monitoring & alerting",
          "Incident management & resolution",
          "Performance tuning & optimization",
          "SAP Enhancement Package (SP) management",
          "Basis & system administration",
          "Database optimization",
          "Backup & disaster recovery",
          "Quarterly business reviews"
        ]
      },
      {
        label: "Supply Chain: EWM, TM, IBP & PP",
        items: [
          "SAP Extended Warehouse Management (EWM)",
          "Transportation Management (TM)",
          "Integrated Business Planning (IBP)",
          "Production Planning (PP/GATP)",
          "Network optimization",
          "Demand-driven planning",
          "Inventory optimization",
          "Warehouse automation integration"
        ]
      },
      {
        label: "Business Technology Platform (BTP)",
        items: [
          "SAP BTP architecture design",
          "Cloud Integration Suite",
          "Workflow automation (low-code)",
          "API management & governance",
          "Analytics Cloud extensions",
          "AI & ML services integration",
          "Third-party SaaS connectivity"
        ]
      },
      {
        label: "Integration Services",
        items: [
          "SAP API management",
          "EDI & IDoc configuration",
          "Message brokers & async patterns",
          "REST & SOAP integrations",
          "Cloud middleware (BTP, iPaaS)",
          "Real-time data pipelines",
          "Partner ecosystem connectivity"
        ]
      },
      {
        label: "Enterprise UX: Fiori & UI5",
        items: [
          "SAP Fiori UX assessment",
          "Custom UI5 application development",
          "Responsive & mobile-first design",
          "Design system creation",
          "User research & usability testing",
          "Portal & launchpad configuration"
        ]
      },
      {
        label: "Clean Core & Upgrades",
        items: [
          "Clean core assessment",
          "Custom code analysis & remediation",
          "S/4HANA readiness evaluation",
          "Phased upgrade planning",
          "Enhancement replacement with standard SAP",
          "Post-upgrade stabilization"
        ]
      },
      {
        label: "ABAP & Custom Development",
        items: [
          "ABAP custom development",
          "SAP Query & InfoSet development",
          "Form design (SAPScript, Adobe Forms)",
          "Enhancement points & exits (BADI, User Exits)",
          "Batch jobs & background processing",
          "Testing, documentation & handover"
        ]
      }
    ],
    bestFit:
      "Enterprises running or implementing SAP, JD Edwards, or PeopleSoft who need a single trusted partner across the full ERP lifecycle.",
    category: "SAP Solutions"
  },

];

export const trustBadges = [
  { label: "26+ Years", sub: "of trusted delivery" },
  { label: "ERP", sub: "SAP · Oracle certified practice" },
  { label: "Oracle", sub: "Partner" },
  { label: "Microsoft", sub: "Partner Network" },
  { label: "NMSDC", sub: "Certified MBE" },
  { label: "E-Verify", sub: "Partner" }
];


export type Stat = { value: number; suffix: string; label: string; highlight?: boolean };

export const stats: Stat[] = [
  { value: 26, suffix: "+", label: "Years of innovation", highlight: true },
  { value: 200, suffix: "+", label: "Successful ERP, cloud & digital transformation engagements since 2000" },
  { value: 50, suffix: "+", label: "Enterprise clients" },
  { value: 24, suffix: "×7", label: "Managed IT support" }
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
    name: "Oracle",
    logo: "OR",
    category: "ERP · Database · Cloud",
    description:
      "Vibrant Inc is an Oracle Partner with deep delivery expertise across JD Edwards EnterpriseOne (CNC administration and functional implementation), PeopleSoft, and Oracle E-Business Suite. Our Oracle practice spans full-cycle implementations, CNC administration, system upgrades, data migrations, and post go-live managed support, backed by practitioners averaging 15+ years of hands-on Oracle delivery.",
    href: "/services/erp-optimization"
  },
  {
    name: "Wrike",
    logo: "W",
    category: "Work Management",
    description:
      "Wrike is a leading Work Management Solution enabling collaboration, streamlined workflow, and full project visibility. As a Wrike Solution Partner, Vibrant helps clients deploy this cloud-based platform across teams of any size, reducing email overhead, improving reporting, and keeping distributed delivery teams in sync.",
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
    body: "We help you size what you actually need, not the SKU your sales rep wants to hit quota with."
  },
  {
    title: "Architecture credibility",
    body: "Vendor-validated reference architectures keep your build supportable and upgrade-friendly."
  },
  {
    title: "Fast escalation",
    body: "Direct partner channels for urgent support tickets, your issues don't sit in a Tier-1 queue."
  },
  {
    title: "Roadmap visibility",
    body: "Early access to product roadmaps so we can plan around what's coming, not what's shipped."
  }
];

export const companyOverview = [
  "Vibrant Inc opened its doors in 2000 with a simple model: put senior practitioners on every engagement and finish what we start. Twenty-six years on, clients across North America still call us when ERP, cloud, or data work has to land on time and keep running.",
  "From ERP and cloud to data, cybersecurity, and AI, our architects and engagement managers own every engagement from discovery through steady state. We're NMSDC Certified, an E-Verify Partner, and Oracle and Microsoft partners, credentials that show in how we build teams and deliver."
];

export const visionStatement =
  "Be the partner of choice, empowering businesses to leverage cloud technology and data analytics for competitive advantage, sustained performance, and long-term growth.";

export const aboutFacts = [
  { value: "2000", label: "Founded in Princeton, New Jersey" },
  { value: "26+", label: "Years of trusted enterprise delivery" },
  { value: "5", label: "Practice areas across cloud, data, ERP & managed IT" },
  { value: "Global", label: "Onshore and offshore delivery" }
];

export const coreValues = [
  {
    title: "Broad SDLC services",
    body: "End-to-end delivery across the software development lifecycle."
  },
  { title: "Deep professional pool", body: "Senior consultants with functional and technical depth." },
  { title: "Long-term relationships", body: "Most clients return, built on trust, not transactions." },
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
      "Superior project management with strong ownership at the engagement level, accountable from kickoff to go-live."
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

/* ── The VIBRANT Method™. Vibrant's proprietary delivery framework ───── */
export const vibrantMethod = [
  {
    letter: "V",
    step: "Value Discovery",
    body: "Deep discovery sessions mapping your current state, pain points, and measurable success criteria. We surface hidden opportunities and align on what value looks like."
  },
  {
    letter: "I",
    step: "Iterative Design",
    body: "Architecture and roadmap co-created in working sessions, not handed down in a binder. We design defensible solutions, your business context drives every decision."
  },
  {
    letter: "B",
    step: "Build in Sprints",
    body: "Senior-led agile sprints with weekly demos, transparent progress, and tight change control. You see working software every week, no black boxes."
  },
  {
    letter: "R",
    step: "Refine & Validate",
    body: "Rigorous testing, user validation, and performance tuning. What ships is battle-tested, not hoped-for, we catch and fix issues before they matter."
  },
  {
    letter: "A",
    step: "Activate & Adopt",
    body: "Go-live with full hypercare, structured training, and change management. Adoption is engineered, not assumed, your team is confident from day one."
  },
  {
    letter: "N",
    step: "Nurture & Optimize",
    body: "Managed support, quarterly business reviews, and continuous improvement. We stay invested in your success long after go-live, value compounds."
  },
  {
    letter: "T",
    step: "Transform & Scale",
    body: "Realize measurable KPI impact and build a foundation ready for growth. The platform evolves with your business, not a rip-and-replace nightmare."
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
    body: "Post-go-live care, managed support, and continuous improvement once you're live."
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
  "Ownership mindset, you finish what you start",
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
    category: "ERP",
    title: "JD Edwards EnterpriseOne Functional Consultant",
    summary:
      "Lead JDE implementations, CNC administration, and post go-live optimization for clients modernizing their Oracle ERP estate."
  },
  {
    category: "ERP",
    title: "SAP Functional / Technical Consultant",
    summary:
      "Deliver SAP ECC and S/4HANA implementations, support engagements, and system integrations across mid-market and enterprise clients."
  },
  {
    category: "Cloud",
    title: "Senior Azure Architect",
    summary:
      "Design and lead Azure modernization programs, landing zones, microservices, and data platform."
  },
  {
    category: "Analytics",
    title: "BI & Analytics Lead",
    summary: "Own analytics strategy and Oracle BI delivery for mid-market and enterprise clients."
  },
  {
    category: "ERP",
    title: "Workday HCM Consultant",
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
    title: "Real community action",
    body:
      "Not just donations, our team shows up. Founder-led involvement in Rotary social projects, employee volunteer days, and hands-on community support in the regions where we live and work."
  },
  {
    title: "Environmental responsibility",
    body:
      "Remote-first, distributed delivery that cuts commute emissions. We track, measure, and reduce our footprint, because being responsible for the planet isn't optional, it's who we are."
  },
  {
    title: "Diversity, equity & inclusion",
    body:
      "NMSDC Certified Minority Business Enterprise. We hire for merit, build inclusive teams, and believe diverse perspectives build better technology and stronger businesses."
  },
  {
    title: "Building for future generations",
    body:
      "26 years of giving back, mentoring emerging technologists, supporting STEM pathways, and making decisions today that the next generation won't have to undo."
  }
];

export const interestOptions = [
  "ERP & Enterprise Applications",
  "Cloud Modernization (Azure / AWS / GCP)",
  "Cybersecurity & Compliance",
  "AI Shield",
  "AI Readiness",
  "Automation",
  "SAP S/4HANA Implementation",
  "SAP Application Management Services (AMS)",
  "Supply Chain Solutions (EWM, TM, IBP, PP)",
  "SAP BTP & Integration",
  "Enterprise UX (Fiori / UI5)",
  "SAP Clean Core & Upgrades",
  "ABAP & Custom Development",
  "JD Edwards CNC Services",
  "PeopleSoft Implementation & Support",
  "Data & Analytics",
  "Managed IT",
  "Partnership inquiry",
  "Other / not sure"
];

export type ValueAdd = {
  title: string;
  description: string;
};

// Currently unrendered, the homepage ValueAdds section was cut in the minimal
// redesign. Kept for reuse on /services or /about.
export const valueAdds: ValueAdd[] = [
  {
    title: "Certified ERP Consultants",
    description:
      "SAP-, Oracle-, and JD Edwards-certified professionals delivering industry-focused solutions and best practices."
  },
  {
    title: "Discovery & Assessment Workshops",
    description:
      "Business process evaluations and roadmap planning for digital transformation initiatives."
  },
  {
    title: "Accelerators & Reusable Solutions",
    description:
      "Prebuilt frameworks, templates, and automation accelerators for faster project delivery."
  },
  {
    title: "Generative AI & Intelligent Automation",
    description:
      "AI-powered enterprise solutions for analytics, automation, document processing, and decision support."
  },
  {
    title: "Global Delivery Model",
    description:
      "Flexible onsite, offshore, and hybrid engagement models with worldwide delivery capabilities."
  },
  {
    title: "24×7 Production Support",
    description:
      "Continuous monitoring and support services ensuring business continuity and system stability."
  },
  {
    title: "Industry-Specific Expertise",
    description:
      "Experience across manufacturing, retail, pharma, logistics, healthcare, and consumer goods sectors."
  },
  {
    title: "Cloud & Integration Expertise",
    description:
      "Specialized services for cloud platforms, APIs, middleware, and enterprise integrations."
  }
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

/* Maps service slugs to the matching interestOptions entry so service-page CTAs
   and the calculator can preselect the contact form via ?interest=. Values must
   match interestOptions exactly. */
export const serviceInterestMap: Record<string, string> = {
  "erp-optimization": "ERP & Enterprise Applications",
  "sap-solutions": "SAP Solutions",
  "cloud-modernization": "Cloud Modernization (Azure / AWS / GCP)",
  "cybersecurity": "Cybersecurity & Compliance",
  "ai-readiness": "AI Readiness",
  "data-analytics": "Data & Analytics",
  "managed-it": "Managed IT"
};

/* ── Resource center ─────────────────────────────────────────────────── */

export type ResourceSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type ResourceGuide = {
  slug: string;
  category: "White Paper" | "Guide" | "Checklist" | "Roadmap";
  title: string;
  /** Shorter <title>/OG title (≤55 chars), falls back to title */
  seoTitle?: string;
  description: string;
  readTime: string;
  relatedServices: string[]; // service slugs for the sidebar
  sections: ResourceSection[];
};

export const resourceGuides: ResourceGuide[] = [
  {
    slug: "sap-s4hana-migration-guide",
    category: "Guide",
    title: "SAP S/4HANA Migration Guide",
    description:
      "Greenfield, brownfield, or selective data transition? A practical walkthrough of the three migration paths, the timeline phases, and the pitfalls that blow up budgets.",
    readTime: "9 min read",
    relatedServices: ["sap-solutions", "sap-solutions", "sap-solutions"],
    sections: [
      {
        heading: "Choosing your migration path",
        body:
          "There are three ways to get to S/4HANA, and the right one depends on how much of your current system is worth keeping. Greenfield means a fresh implementation, best when your ECC system carries years of process debt you'd rather not bring along. Brownfield (system conversion) keeps your configuration, custom code, and history, fastest and cheapest when your current system is fundamentally sound. Selective data transition sits in between: a new system, but with chosen data and configuration migrated, powerful for mergers, carve-outs, and multi-instance consolidations, at the cost of more planning."
      },
      {
        heading: "Building the business case",
        body:
          "Boards don't fund technology upgrades; they fund outcomes. The strongest S/4HANA cases stack three layers: unavoidable facts (ECC mainstream maintenance ends in 2027), hard savings (infrastructure, database licensing, integration simplification), and new capability (real-time close, embedded analytics, clean-core extensibility). Put a number on the cost of doing nothing, rising support costs and shrinking ECC talent pool included."
      },
      {
        heading: "The migration timeline",
        bullets: [
          "Discover (4–8 weeks): system assessment, custom-code analysis, data profiling, path decision",
          "Prepare (4–6 weeks): business case, team formation, environment provisioning, cleanup start",
          "Convert / Build (3–9 months): the conversion or new build, integration rework, custom-code remediation",
          "Test (6–10 weeks): multiple conversion rehearsals, integration testing, user acceptance, performance",
          "Cutover (1 weekend, planned like a moon landing): final conversion run, validation, go/no-go gates",
          "Hypercare (4–8 weeks): on-site support, issue triage, stabilization, handover to AMS"
        ]
      },
      {
        heading: "The pitfalls that blow up budgets",
        bullets: [
          "Skipping custom-code analysis until after the path decision, it changes the answer",
          "Treating data cleanup as a technical task instead of a business one",
          "One conversion rehearsal instead of three, the third run is where the timeline gets real",
          "No decision-maker in the cutover room",
          "Letting the integration list grow during the project instead of freezing scope"
        ]
      },
      {
        heading: "Clean core from day one",
        body:
          "Whatever path you choose, adopt the clean-core discipline immediately: keep the S/4HANA core as close to standard as possible and build extensions on BTP with released APIs. It's the difference between future upgrades taking weeks versus quarters, and it's much easier to enforce from day one than to retrofit."
      }
    ]
  },
  {
    slug: "ai-readiness-checklist",
    category: "Checklist",
    title: "AI Readiness Checklist",
    description:
      "20 checkpoints across data, talent, infrastructure, and governance to score your organization before the first AI dollar is spent.",
    readTime: "6 min read",
    relatedServices: ["ai-readiness", "data-analytics", "ai-readiness"],
    sections: [
      {
        heading: "Data foundation",
        bullets: [
          "A defined owner exists for each core data domain (customer, product, finance, operations)",
          "Critical reports reconcile, two teams asking the same question get the same number",
          "Data needed for your first AI use cases is accessible without a 6-month integration project",
          "PII and sensitive data are classified, with access controls that would survive an audit",
          "History depth is sufficient (most forecasting use cases want 2–3 years of clean history)"
        ]
      },
      {
        heading: "Talent & operating model",
        bullets: [
          "At least one business leader owns an AI use case with a KPI attached, not 'innovation' in the abstract",
          "You can name the people who will maintain a model after the consultants leave",
          "The teams whose workflow changes have been told, and someone owns that change",
          "There's a defined path from pilot to production, with budget for the production half",
          "Legal/compliance has reviewed how you'll handle AI-generated output in your industry"
        ]
      },
      {
        heading: "Infrastructure & security",
        bullets: [
          "Your cloud platform supports the AI services you plan to use without a migration first",
          "Model access is gated by identity, not shared API keys in a spreadsheet",
          "Cost guardrails exist, token and compute budgets with alerts, per use case",
          "A sandbox exists where teams can experiment without touching production data",
          "Vendor AI features (in your ERP, CRM, service desk) are inventoried, you may already own what you're about to buy"
        ]
      },
      {
        heading: "Governance & responsible AI",
        bullets: [
          "A human owns every decision an AI system influences, on paper, not in spirit",
          "You log model inputs and outputs somewhere you could actually retrieve them",
          "There's a defined review before any AI output reaches a customer",
          "Bias and quality are measured for use cases that touch people (hiring, credit, pricing)",
          "You know which regulations apply (EU AI Act, sector rules) and someone tracks them"
        ]
      },
      {
        heading: "Scoring your result",
        body:
          "Count your checked boxes. 16–20: you're ready, pick the highest-ROI use case and move. 10–15: ready for pilots, not production; fix the gaps in parallel. Below 10: spend the next two quarters on data and governance foundations first, an AI pilot on a weak foundation produces a demo, not a capability. Either way, the checklist tells you exactly what to fix and in what order."
      }
    ]
  },
  {
    slug: "erp-modernization-roadmap",
    category: "Roadmap",
    title: "ERP Modernization Roadmap",
    description:
      "A sequenced, board-defensible plan for moving off legacy ERP, assess, rationalize, sequence, execute, measure.",
    readTime: "8 min read",
    relatedServices: ["erp-optimization", "sap-solutions", "managed-it"],
    sections: [
      {
        heading: "Assess the estate",
        body:
          "Start with an unsentimental inventory: every ERP instance, version, customization, interface, and the business capability each one serves. Score each on three axes, business fit (does it still match how you operate?), technical health (support status, security posture, talent availability), and cost of ownership (licenses, infrastructure, people). Most estates cluster into keep, fix, and replace buckets faster than you'd expect."
      },
      {
        heading: "Rationalize & prioritize",
        body:
          "Modernization fails when it's framed as 'replace everything.' The defensible version sequences by risk and value: systems out of vendor support get dates, not debates. Overlapping instances consolidate. Heavily customized modules get re-evaluated against today's standard functionality. ERP products have absorbed a decade of the customizations you're paying to maintain."
      },
      {
        heading: "Sequencing the program",
        bullets: [
          "Wave 0, foundations: integration platform, data quality, environment strategy, governance",
          "Wave 1, burning platforms: anything out of support or blocking the business",
          "Wave 2, high-value consolidation: duplicate instances, finance harmonization",
          "Wave 3, experience & intelligence: analytics, automation, user-experience modernization",
          "Rule of thumb: no wave longer than 9 months, every wave ends with something in production"
        ]
      },
      {
        heading: "Execution & change management",
        body:
          "Run each wave with senior-led delivery and weekly demos. ERP programs die in the dark. Pair every technical workstream with a named business owner. Budget change management at 10–15% of program cost; adoption is engineered, not assumed. And keep a stabilization period in every wave plan, the go-live isn't the finish line, the first clean month-end close is."
      },
      {
        heading: "Measuring ROI",
        bullets: [
          "Run-cost per user before and after (licenses + infrastructure + support headcount)",
          "Days to close the books, the classic ERP health metric for a reason",
          "Interface count and integration incident rate",
          "Percentage of transactions touched by a human that didn't need to be",
          "Time to onboard an acquisition onto your ERP, the hidden strategic metric"
        ]
      }
    ]
  },
  {
    slug: "cloud-migration-checklist",
    category: "Checklist",
    title: "Cloud Migration Checklist",
    description:
      "Everything to verify before, during, and after a production cloud migration, landing zones, security, waves, cutover, and the first 90 days of FinOps.",
    readTime: "7 min read",
    relatedServices: ["cloud-modernization", "managed-it", "cybersecurity"],
    sections: [
      {
        heading: "Before you migrate",
        bullets: [
          "Application inventory with owners, dependencies, and a 6R disposition (rehost, replatform, refactor, retire, retain, repurchase)",
          "Baseline performance metrics captured, you can't prove 'it's slower now' claims wrong without them",
          "Licensing reviewed for cloud terms (some vendors price differently on shared tenancy)",
          "Egress and DR costs modeled, not discovered",
          "A named decision-maker for each application's go/no-go"
        ]
      },
      {
        heading: "Landing zone & security",
        bullets: [
          "Account/subscription structure with separated prod and non-prod",
          "Identity federated to your directory, no local cloud admin accounts",
          "Network segmentation and private connectivity (ExpressRoute / Direct Connect) in place",
          "Guardrails as policy-as-code: encryption on, public buckets blocked, regions restricted",
          "Centralized logging and alerting live before the first workload lands"
        ]
      },
      {
        heading: "Migration waves",
        bullets: [
          "Wave 1 is low-risk, internal, and rehearsable, never the ERP",
          "Each wave has a rollback plan that's been read by someone other than its author",
          "Dependencies migrate together or get a latency test first",
          "Every migrated app gets a burn-in period before its old environment is decommissioned",
          "Decommission dates are in the plan, the savings aren't real until the old servers are off"
        ]
      },
      {
        heading: "Cutover weekend",
        bullets: [
          "A minute-by-minute runbook with named owners and go/no-go checkpoints",
          "DNS TTLs dropped in advance",
          "Data sync validated with counts and checksums, not vibes",
          "Comms drafted for both outcomes, success and rollback",
          "The first business-day-after has extra support staffed, not hoped for"
        ]
      },
      {
        heading: "The first 90 days. FinOps",
        bullets: [
          "Right-size everything 30 days in, lift-and-shift sizing is always generous",
          "Reserved instances / savings plans purchased once usage stabilizes",
          "Orphaned resources (unattached disks, idle IPs, forgotten snapshots) swept monthly",
          "Showback per team or product so cost has an owner",
          "One cost-anomaly alert that a human actually reads"
        ]
      }
    ]
  },
  {
    slug: "vibrant-method-white-paper",
    seoTitle: "The VIBRANT Method: Agile Enterprise Delivery",
    category: "White Paper",
    title: "The VIBRANT Method™. Agile Delivery for Enterprise Programs",
    description:
      "How a seven-phase agile framework keeps ERP, cloud, and AI programs on time and on budget, without disrupting operations. The methodology behind every Vibrant engagement.",
    readTime: "5 min read",
    relatedServices: ["erp-optimization", "cloud-modernization", "ai-readiness"],
    sections: [
      {
        heading: "Why enterprise programs fail",
        body:
          "Large technology programs rarely fail on technology. They fail on ambiguity, value never defined, scope never frozen, adoption never owned. Waterfall hides these failures until late; pure product-team agile ignores the governance enterprises actually need. The VIBRANT Method is our answer: agile execution inside enterprise accountability."
      },
      {
        heading: "Seven letters, seven phases",
        bullets: [
          "V. Value Discovery: current state, pain points, and measurable success criteria before anything is built",
          "I. Iterative Design: architecture and roadmap co-created in working sessions, not handed down in a binder",
          "B. Build in Sprints: senior-led agile sprints, weekly demos, tight change control",
          "R. Refine & Validate: continuous testing and user validation inside each sprint",
          "A. Activate & Adopt: go-live with hypercare, training, and engineered adoption",
          "N. Nurture & Optimize: managed support, quarterly reviews, continuous improvement",
          "T. Transform & Scale: KPIs move, the platform scales, the roadmap evolves"
        ]
      },
      {
        heading: "What makes it agile, and what makes it enterprise",
        body:
          "Agile: two-week sprints, demos every Friday, a groomed backlog the client can reprioritize, and working software as the only measure of progress. Enterprise: phase gates with go/no-go criteria, architecture review before build, a change-control board for scope, and audit-ready documentation produced as a by-product of delivery rather than as an afterthought."
      },
      {
        heading: "The operating rhythm",
        body:
          "Every engagement runs the same weekly cadence: Monday sprint planning, Friday demo, a written status your CFO can read in ninety seconds, and a monthly steering committee with decisions, not updates, on the agenda. Escalations reach a Vibrant principal within one business day. It's a rhythm clients keep long after go-live, because it works."
      }
    ]
  }
];

export type Insight = {
  slug: string;
  title: string;
  /** Shorter <title>/OG title (≤55 chars), falls back to title */
  seoTitle?: string;
  date: string;
  tag: string;
  summary: string;
  body: string[];
  relatedServices: string[]; // service slugs, "Put this into practice" links
};

export const insights: Insight[] = [
  {
    slug: "five-signs-your-erp-is-costing-too-much",
    seoTitle: "Five Signs Your ERP Costs Too Much",
    relatedServices: ["erp-optimization", "sap-solutions", "managed-it"],
    title: "Five Signs Your ERP Is Costing More Than It Should",
    date: "July 2026",
    tag: "ERP",
    summary:
      "Rising maintenance, shadow spreadsheets, and a shrinking talent pool, the symptoms show up long before the invoice does.",
    body: [
      "ERP cost problems rarely announce themselves. They accumulate quietly: another year of maintenance uplift, another customization nobody remembers the reason for, another spreadsheet built because the system report 'doesn't quite work.' By the time the run-rate gets executive attention, the estate has usually been overpaying for years.",
      "The five signs we see most: maintenance and support costs rising faster than usage; a customization portfolio nobody can fully inventory; month-end close that takes longer every year; critical knowledge held by one or two people near retirement; and a growing shadow layer of spreadsheets and Access databases doing what the ERP was bought to do.",
      "None of these requires a rip-and-replace to fix. A customization rationalization pass, targeted managed services, and honest version-strategy decisions routinely cut ERP run costs 20–30%, and they fund the modernization the board actually wants to talk about.",
      "Start with a two-week assessment: inventory, cost baseline, and a keep/fix/replace map. It's the cheapest money an ERP owner can spend."
    ]
  },
  {
    slug: "genai-start-with-the-workflow",
    seoTitle: "Enterprise GenAI: Start with the Workflow",
    relatedServices: ["ai-readiness", "ai-readiness"],
    title: "GenAI in the Enterprise: Start with the Workflow, Not the Model",
    date: "June 2026",
    tag: "AI",
    summary:
      "The model is the easy part. Value comes from picking a workflow where minutes saved multiply, and wiring AI into it properly.",
    body: [
      "Most enterprise GenAI conversations start in the wrong place: which model, which vendor, which platform. Those questions matter, but they're third. The first question is: which workflow, done thousands of times a year by expensive people, has a step where a draft would save real minutes?",
      "Contract review first-pass. Support ticket triage and suggested responses. RFP response assembly. Invoice exception handling. These aren't glamorous, but they share the profile that works: high volume, text-heavy, a human already reviews the output, and minutes saved multiply across a team.",
      "The second question is integration: AI that lives in a separate tab gets abandoned in six weeks. AI that appears inside the tool people already use, the CRM, the service desk, the ERP, compounds. That's an engineering problem, not a data-science one, and it's where most of the real work lives.",
      "Only then pick the model. By that point the choice is usually obvious from the workflow's privacy, latency, and cost constraints, and you'll have a KPI to hold it accountable to."
    ]
  },
  {
    slug: "zero-trust-is-a-roadmap",
    relatedServices: ["cybersecurity", "cybersecurity"],
    title: "Zero Trust Is a Roadmap, Not a Product",
    date: "May 2026",
    tag: "Security",
    summary:
      "Nobody sells zero trust in a box. It's a multi-year re-architecture of identity, network, and access, sequenced right, it pays for itself early.",
    body: [
      "Every security vendor now sells 'zero trust.' None of them can, because zero trust isn't a product, it's an architectural principle: never trust by default, verify explicitly, grant least privilege, assume breach. Getting there is a sequence of projects, not a purchase order.",
      "The sequence that works: identity first (MFA everywhere, single directory, conditional access), because identity is the new perimeter. Then device posture, you can't trust a session from a laptop you know nothing about. Then network segmentation, replacing the flat internal network where one phished credential reaches everything. Application-level access policies come last, once the foundations make them meaningful.",
      "The early phases pay for themselves fast: MFA and conditional access alone neutralize the majority of credential-based attacks, still the most common breach entry point. That makes zero trust one of the rare security programs where the first budget request is also the highest-ROI one.",
      "Treat it as a two-to-three-year roadmap with quarterly milestones, and measure progress in attack paths eliminated, not tools deployed."
    ]
  },
  {
    slug: "clean-core-discipline",
    seoTitle: "SAP Clean Core: Upgrades in Weeks, Not Quarters",
    relatedServices: ["sap-solutions", "sap-solutions"],
    title: "Clean Core: The Discipline That Makes S/4HANA Upgrades Cheap",
    date: "April 2026",
    tag: "SAP",
    summary:
      "Every customization inside the core is a tax on every future upgrade. Clean core moves them out, and turns upgrades from projects into events.",
    body: [
      "Ask anyone who has run an ECC upgrade what made it expensive, and the answer is always the same: the customizations. Thousands of custom objects, each needing analysis, remediation, and retesting, that's where the quarters and the millions go.",
      "Clean core is the discipline that stops the cycle: keep the S/4HANA core as standard as possible, and build what makes you different as extensions on BTP using released APIs. The core stays upgradeable; your differentiation lives where SAP's upgrades can't break it.",
      "The payoff is structural. Customers who hold the discipline upgrade S/4HANA in weeks, with regression testing focused on a stable, documented API surface. Customers who don't are quietly rebuilding the same upgrade debt they just paid to escape.",
      "The hard part isn't technical, it's governance. Every 'small tweak in the core' request needs a gate: can this be standard config? An extension? Only then, core. Hold that line for two years and upgrades become a line item, not a program."
    ]
  }
];

export function getResourceGuideBySlug(slug: string) {
  return resourceGuides.find((guide) => guide.slug === slug);
}

export function getInsightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

/* ── Internal-linking maps ─────────────────────────────────────────────── */

export type RelatedResourceRef = { slug: string; type: "guide" | "insight" | "tool" };

/* Which guides/articles/tools each service page should surface. The "tool"
   type resolves to the S/4HANA cost calculator. */
export const serviceRelatedResources: Record<string, RelatedResourceRef[]> = {
  "erp-optimization": [
    { slug: "erp-modernization-roadmap", type: "guide" },
    { slug: "five-signs-your-erp-is-costing-too-much", type: "insight" }
  ],
  "sap-solutions": [
    { slug: "sap-s4hana-migration-guide", type: "guide" },
    { slug: "sap-cost-calculator", type: "tool" }
  ],
  "cybersecurity": [
    { slug: "zero-trust-is-a-roadmap", type: "insight" },
    { slug: "vibrant-method-white-paper", type: "guide" }
  ],
  "cloud-modernization": [
    { slug: "cloud-migration-checklist", type: "guide" }
  ],
  "ai-readiness": [
    { slug: "ai-readiness-checklist", type: "guide" },
    { slug: "genai-start-with-the-workflow", type: "insight" }
  ],
  "data-analytics": [
    { slug: "ai-readiness-checklist", type: "guide" }
  ],
  "managed-it": [
    { slug: "five-signs-your-erp-is-costing-too-much", type: "insight" }
  ]
};

export type ResolvedResource = {
  href: string;
  title: string;
  category: string;
  readTime?: string;
};

export function getRelatedResourcesForService(slug: string): ResolvedResource[] {
  const refs = serviceRelatedResources[slug] ?? [];
  return refs.flatMap((ref): ResolvedResource[] => {
    if (ref.type === "tool") {
      return [{
        href: "/resources/sap-cost-calculator",
        title: "SAP S/4HANA Cost Calculator",
        category: "Interactive tool"
      }];
    }
    if (ref.type === "guide") {
      const g = getResourceGuideBySlug(ref.slug);
      return g ? [{ href: `/resources/${g.slug}`, title: g.title, category: g.category, readTime: g.readTime }] : [];
    }
    const i = getInsightBySlug(ref.slug);
    return i ? [{ href: `/resources/${i.slug}`, title: i.title, category: i.tag }] : [];
  });
}

/* Curated same-family sidebar links per service, replaces the old
   uncurated everything-but-this-page list. Unmapped slugs fall back to
   same-category, then featured cards. */
export const serviceRelatedServices: Record<string, string[]> = {
  "erp-optimization": ["sap-solutions", "managed-it", "cloud-modernization", "data-analytics"],
  "sap-solutions": ["erp-optimization", "cloud-modernization", "managed-it", "data-analytics"],
  "cloud-modernization": ["managed-it", "data-analytics", "cybersecurity", "sap-solutions"],
  "cybersecurity": ["managed-it", "cloud-modernization", "ai-readiness", "data-analytics"],
  "ai-readiness": ["data-analytics", "cloud-modernization", "erp-optimization"],
  "data-analytics": ["ai-readiness", "cloud-modernization", "sap-solutions"],
  "managed-it": ["cloud-modernization", "cybersecurity", "erp-optimization", "sap-solutions"]
};

export function getRelatedServices(slug: string, count = 5) {
  const curated = serviceRelatedServices[slug];
  if (curated) {
    return curated
      .map((s) => serviceCards.find((c) => c.slug === s))
      .filter((c): c is NonNullable<typeof c> => Boolean(c))
      .slice(0, count);
  }
  const self = getServiceBySlug(slug);
  const sameCategory = serviceCards.filter(
    (c) => c.slug !== slug && c.category && c.category === self?.category
  );
  const pool = sameCategory.length ? sameCategory : serviceCards.filter((c) => c.featured && c.slug !== slug);
  return pool.slice(0, count);
}

/* ── Case studies, shared data, surfaced on home + matching service pages ── */

export type CaseStudy = {
  sector: string;
  challenge: string;
  result: string;
  metric: string;
  metricLabel: string;
  service: string;
  slug: string;          // primary service link
  relatedSlugs: string[]; // every service page that should show this proof
};

export const caseStudies: CaseStudy[] = [
  {
    sector: "Global Manufacturer",
    challenge:
      "Aging SAP ECC blocking innovation, with 200+ heavily customized objects making upgrades risky",
    result:
      "SAP S/4HANA brownfield migration with custom-code cleanup, clean core achieved, go-live on time.",
    metric: "40%",
    metricLabel: "faster month-end close",
    service: "SAP S/4HANA",
    slug: "sap-solutions",
    relatedSlugs: ["sap-solutions", "erp-optimization"]
  },
  {
    sector: "Retail Distributor",
    challenge:
      "Warehouse operations relying on manual processes, picking errors and inventory inaccuracy growing",
    result:
      "SAP EWM rollout across 8 distribution centers with mobile RF integration and automated cycle counting.",
    metric: "$3M+",
    metricLabel: "annual savings",
    service: "Supply Chain Solutions",
    slug: "sap-solutions",
    relatedSlugs: ["sap-solutions", "sap-integration"]
  },
  {
    sector: "Healthcare Network",
    challenge:
      "Fragmented on-prem data across 12 hospitals preventing unified executive reporting",
    result:
      "Unified data platform on Azure with automated pipelines, leadership now has one source of truth.",
    metric: "60%",
    metricLabel: "faster reporting",
    service: "Cloud Modernization",
    slug: "cloud-modernization",
    relatedSlugs: ["cloud-modernization", "data-analytics", "managed-it"]
  }
];

export function getCaseStudyForService(slug: string) {
  return caseStudies.find((cs) => cs.relatedSlugs.includes(slug));
}

/* Static-export deploys under a basePath (GitHub Pages project site) don't
   rewrite raw hrefs to public/ files, prefix them explicitly. */
export const withBasePath = (p: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${p}`;

// ───── Legacy aliases for compatibility ─────
export const techPills = serviceCards.map((s) => s.title);
export const proofPoints = trustBadges.map((b) => ({ value: b.label, label: b.sub }));
export const companyFacts = aboutFacts;
export const officialHighlights = serviceCards.map((s) => s.summary);
export const newsItems = [
  {
    title: "Celebrating 26 Years of Innovation and Trust",
    summary:
      "Vibrant marks twenty-six years of serving businesses across North America with technology and transformation solutions."
  }
];
export const careersHighlights = [
  "Senior work, real ownership, and colleagues who've been here for years, that's the career case for Vibrant.",
  "Consultants are distributed across the country and travel to client sites as required, while the company is headquartered in Princeton, New Jersey.",
  "We emphasize customer satisfaction, employee satisfaction, work-life balance, and ongoing training."
];
export const testimonials: { name: string; role: string; quote: string }[] = [];
export const serviceDeliveryModel = deliverySteps.map((d) => `${d.title}: ${d.body}`);
export const socialResponsibility = socialResponsibilityCommitments.map((c) => c.body);
