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
  category?: string; // SAP, Cloud, Security, ERP, etc.
  featured?: boolean; // For homepage carousel curation
};

export type ContactDetail = { label: string; value: string };

export const siteSettings = {
  brandName: "Vibrant Inc",
  tagline: "Optimizing your efficiency. Strengthening your bottom line.",
  siteUrl: "https://vibrantinc.com",
  defaultTitle: "Vibrant Inc — Enterprise Technology Consulting",
  defaultDescription:
    "Vibrant Inc is an award-winning IT consulting firm established in 2000. We help North America-based businesses achieve competitive advantage through cloud modernization, data analytics, ERP (JD Edwards, SAP, PeopleSoft, WorkDay, Dynamics 365), Cybersecurity & AI Shield, and managed IT — with 25 years of trusted delivery.",
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
      "Organizations with legacy data centers or fragmented cloud estates needing a defensible plan.",
    featured: true
  },
  {
    slug: "cybersecurity",
    kicker: "Cybersecurity & AI Shield",
    title: "Cybersecurity & AI Shield",
    summary:
      "Zero-trust architectures, AI-powered threat detection, and 24×7 SOC operations — security that anticipates threats before they strike.",
    longDescription:
      "Security as an enabler, not a brake. Our AI Shield capability uses machine learning and behavioral analytics to detect, investigate, and neutralize threats faster than any manual approach. We assess gaps, design zero-trust architecture, harden identity, and stand up AI-driven 24×7 detection — aligned to compliance frameworks the business already lives in.",
    iconPath: ICONS.shield,
    metaTags: [
      "AI Shield threat detection",
      "Zero-trust architecture",
      "Identity & access management",
      "SOC & threat detection"
    ],
    outcomes: [
      "Reduced breach exposure and faster detection",
      "Audit-ready compliance posture",
      "AI-driven threat response in minutes, not hours"
    ],
    capabilities: [
      "AI Shield — ML-powered threat detection & response",
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
    bestFit:
      "Mid-market and enterprise companies modernizing security alongside cloud and AI programs — especially those seeking AI-augmented threat response."
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
      "JD Edwards CNC, SAP, PeopleSoft, WorkDay, Microsoft Dynamics 365, and Oracle E-Business Suite — implementation, CNC administration, post go-live support, and managed services.",
    longDescription:
      "Whether you're running a complex JD Edwards environment, launching a PeopleSoft or SAP program, or stabilizing a Dynamics 365 rollout that under-delivered — Vibrant's 25-year ERP practice covers the full Oracle stack (JD Edwards EnterpriseOne, PeopleSoft, Oracle E-Business Suite), SAP (ECC / S/4HANA), WorkDay HCM/Financials, and Microsoft Dynamics 365. Our certified practitioners take ownership from blueprint through hypercare.",
    iconPath: ICONS.layers,
    metaTags: [
      "JD Edwards (JDE) CNC",
      "SAP Implementation & Support",
      "PeopleSoft Implementation & Support",
      "WorkDay HCM & Financials",
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
      "WorkDay HCM & Financials",
      "Microsoft Dynamics 365 (F&O / CE)",
      "Oracle E-Business Suite",
      "Post go-live stabilization & managed support",
      "ERP data migration & integrations",
      "ERP upgrade & modernization"
    ],
    bestFit:
      "Companies replacing legacy ERP, running JD Edwards or PeopleSoft environments needing CNC expertise, or rescuing a stalled SAP or Dynamics program.",
    featured: true
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
      "Lean IT teams that need depth, coverage, and senior escalation paths without hiring.",
    category: "Managed Services"
  },

  /* ───── SAP & ERP SOLUTIONS (New) ───── */
  {
    slug: "sap-s4hana-implementation",
    kicker: "SAP S/4HANA",
    title: "SAP S/4HANA Implementation",
    summary:
      "End-to-end SAP implementation, migration, rollout, and transformation services for enterprise modernization.",
    longDescription:
      "Vibrant delivers comprehensive SAP S/4HANA implementations and migrations with proven methodologies, certified consultants, and accelerators that compress timelines and de-risk go-live. From legacy ECC to cloud-native S/4HANA, we handle discovery, design, build, testing, and hypercare with full ownership and accountability.",
    iconPath: ICONS.database,
    metaTags: [
      "SAP S/4HANA",
      "ECC Migration",
      "Greenfield Implementation",
      "Cloud Deployment"
    ],
    outcomes: [
      "On-time, on-budget SAP go-live",
      "Faster modernization with reduced rework",
      "Cloud-ready enterprise foundation"
    ],
    capabilities: [
      "SAP S/4HANA greenfield implementation",
      "ECC to S/4HANA migration",
      "Implementation roadmap & sequencing",
      "Blueprint & design workshops",
      "Custom development & extensions",
      "Data migration & cleansing",
      "Testing strategy & execution",
      "Go-live & hypercare support"
    ],
    bestFit:
      "Enterprise organizations replacing legacy ERP systems or modernizing to cloud SAP.",
    category: "SAP Solutions",
    featured: true
  },
  {
    slug: "sap-ams",
    kicker: "SAP AMS",
    title: "SAP Application Management Services",
    summary:
      "Reliable SAP support, monitoring, enhancements, incident resolution, and continuous improvement services.",
    longDescription:
      "Keep your SAP environment stable, performant, and aligned with business evolution. Our Application Management Services include 24×7 proactive monitoring, rapid incident response, post-go-live stabilization, enhancements, and optimizations — backed by certified senior consultants with deep SAP expertise.",
    iconPath: ICONS.settings,
    metaTags: [
      "SAP Support",
      "Monitoring & Operations",
      "Enhancement Management",
      "Performance Tuning"
    ],
    outcomes: [
      "Reduced downtime & incident response time",
      "Continuous system optimization",
      "Predictable support costs"
    ],
    capabilities: [
      "24×7 SAP monitoring & alerting",
      "Incident management & resolution",
      "Performance tuning & optimization",
      "SAP Enhancement Package (SP) management",
      "Basis & system administration",
      "Database optimization",
      "Backup & disaster recovery",
      "Quarterly business reviews"
    ],
    bestFit:
      "Mid-market and enterprise companies running SAP who need reliable, hands-on post-go-live support.",
    category: "SAP Solutions",
    featured: true
  },
  {
    slug: "sap-supply-chain",
    kicker: "Supply Chain Solutions",
    title: "Supply Chain Solutions – EWM, TM, IBP & PP",
    summary:
      "Integrated supply chain optimization solutions for warehouse, transportation, planning, and manufacturing operations.",
    longDescription:
      "Transform supply chain execution with SAP Extended Warehouse Management (EWM), Transportation Management (TM), Integrated Business Planning (IBP), and Production Planning (PP). Vibrant designs and implements end-to-end supply chain solutions that drive visibility, agility, and cost optimization across procurement, planning, manufacturing, and logistics.",
    iconPath: ICONS.truck,
    metaTags: [
      "SAP Extended Warehouse Management",
      "Transportation Management",
      "Integrated Business Planning",
      "Production Planning"
    ],
    outcomes: [
      "Reduced supply chain costs",
      "Improved on-time delivery",
      "Real-time supply chain visibility"
    ],
    capabilities: [
      "SAP Extended Warehouse Management (EWM)",
      "Transportation Management (TM)",
      "Integrated Business Planning (IBP)",
      "Production Planning (PP/GATP)",
      "Network optimization",
      "Demand-driven planning",
      "Inventory optimization",
      "Warehouse automation integration"
    ],
    bestFit:
      "Manufacturing, retail, and logistics organizations seeking modern, data-driven supply chain execution.",
    category: "SAP Solutions",
    featured: true
  },
  {
    slug: "sap-btp",
    kicker: "SAP BTP",
    title: "SAP Business Technology Platform",
    summary:
      "Cloud integrations, workflow automation, analytics, extensions, and AI-driven enterprise applications.",
    longDescription:
      "Extend SAP functionality and integrate with your broader ecosystem using SAP's cloud-native platform. BTP enables low-code workflow automation, real-time analytics, API-driven integrations, and intelligent extensions — all without customizing core SAP.",
    iconPath: ICONS.cloud,
    metaTags: [
      "SAP BTP",
      "Cloud Integrations",
      "Workflow Automation",
      "API Management"
    ],
    outcomes: [
      "Faster integrations with cleaner core",
      "Reduced integration backlog",
      "Faster time-to-value for new capabilities"
    ],
    capabilities: [
      "SAP BTP architecture design",
      "Cloud Integration Suite",
      "Workflow automation (low-code)",
      "API management & governance",
      "Analytics Cloud extensions",
      "Mobile app development",
      "AI & ML services integration",
      "Third-party SaaS connectivity"
    ],
    bestFit:
      "Enterprises needing rapid, cloud-native integrations and extensions while maintaining SAP clean core.",
    category: "SAP Solutions"
  },
  {
    slug: "sap-integration",
    kicker: "SAP Integration",
    title: "SAP Integration Services",
    summary:
      "EDI, IDoc, API, middleware, cloud integrations, and third-party application connectivity solutions.",
    longDescription:
      "Seamlessly integrate SAP with your broader enterprise ecosystem — legacy systems, cloud applications, EDI partners, and real-time data pipelines. We architect and implement scalable integration solutions using APIs, iPaaS, message queues, and modern middleware.",
    iconPath: ICONS.zap,
    metaTags: [
      "SAP Integration",
      "API Management",
      "EDI/IDoc",
      "Middleware"
    ],
    outcomes: [
      "Seamless cross-system data flow",
      "Reduced manual data entry",
      "Real-time business process visibility"
    ],
    capabilities: [
      "SAP API management",
      "EDI & IDoc configuration",
      "Message brokers & async patterns",
      "REST & SOAP integrations",
      "Cloud middleware (BTP, iPaaS)",
      "Real-time data pipelines",
      "Process automation integration",
      "Partner ecosystem connectivity"
    ],
    bestFit:
      "Organizations with complex integration landscapes needing reliable, maintainable SAP connectivity.",
    category: "SAP Solutions"
  },
  {
    slug: "sap-fiori-ux",
    kicker: "Enterprise UX",
    title: "Enterprise User Experience – Fiori & UI5",
    summary:
      "Modern SAP Fiori/UI5 applications delivering simplified, responsive, and user-friendly experiences.",
    longDescription:
      "Replace clunky SAP transactions with intuitive Fiori interfaces. We design and build responsive, mobile-first UX that delights users — from standard SAP Fiori apps to custom UI5 applications tailored to your workflows.",
    iconPath: ICONS.monitor,
    metaTags: [
      "SAP Fiori",
      "UI5 Development",
      "User Experience",
      "Mobile-First Design"
    ],
    outcomes: [
      "Faster user adoption",
      "Reduced training costs",
      "Higher employee satisfaction"
    ],
    capabilities: [
      "SAP Fiori UX assessment",
      "Custom UI5 application development",
      "Responsive web design",
      "Mobile app development",
      "Design system creation",
      "User research & usability testing",
      "Analytics integration",
      "Portal & launchpad configuration"
    ],
    bestFit:
      "Enterprises prioritizing user experience in SAP deployments or modernizing legacy interfaces.",
    category: "SAP Solutions"
  },
  {
    slug: "sap-clean-core",
    kicker: "Clean Core & Upgrades",
    title: "SAP Clean Core & Upgrade Services",
    summary:
      "Future-ready SAP architecture with clean core strategy, system modernization, and S/4 upgrades.",
    longDescription:
      "Prepare your SAP landscape for the future with clean core architecture — removing technical debt, retiring custom code where possible, and moving to standard SAP. We manage your upgrade roadmap, handle complex data migrations, and ensure your system is positioned for years of value.",
    iconPath: ICONS.layers,
    metaTags: [
      "SAP Clean Core",
      "S/4HANA Upgrade",
      "Technical Debt Removal",
      "System Modernization"
    ],
    outcomes: [
      "Simpler, more maintainable SAP landscape",
      "Lower upgrade and support costs",
      "Faster adoption of SAP innovations"
    ],
    capabilities: [
      "Clean core assessment",
      "Custom code analysis & remediation",
      "S/4HANA readiness evaluation",
      "Phased upgrade planning",
      "Enhancement replacement with standard SAP",
      "Performance optimization",
      "Documentation & knowledge transfer",
      "Post-upgrade stabilization"
    ],
    bestFit:
      "SAP ECC customers with significant technical debt seeking a clear path to S/4HANA.",
    category: "SAP Solutions"
  },
  {
    slug: "sap-abap",
    kicker: "ABAP & Development",
    title: "SAP ABAP & Custom Development",
    summary:
      "Custom reports, interfaces, enhancements, forms, workflows, and technical development services.",
    longDescription:
      "When standard SAP doesn't fit, our ABAP experts build custom solutions. Reports, interfaces, form enhancements, workflow automation — all with production-grade quality, testing, and documentation.",
    iconPath: ICONS.zap,
    metaTags: [
      "ABAP Development",
      "Custom Reports",
      "Enhancements & Forms",
      "Interfaces & APIs"
    ],
    outcomes: [
      "Custom solutions exactly matching business needs",
      "Faster time-to-value than workarounds",
      "Production-ready code quality"
    ],
    capabilities: [
      "ABAP custom development",
      "SAP Query & InfoSet development",
      "Form design (SAPScript, Adobe Forms)",
      "Enhancement points & exits (BADI, User Exits)",
      "Batch jobs & background processing",
      "Smartforms & function modules",
      "Testing & quality assurance",
      "Code documentation & handover"
    ],
    bestFit:
      "Enterprises needing specific custom functionality that standard SAP cannot provide.",
    category: "SAP Solutions"
  },
  {
    slug: "jd-edwards-cnc",
    kicker: "JD Edwards CNC",
    title: "JD Edwards CNC Services",
    summary:
      "CNC administration, environment management, security, upgrades, deployments, and managed support.",
    longDescription:
      "Master the complexity of JD Edwards environments. From Oracle-level administration (OneWorld, EnterpriseOne) to CNC environment setup, security hardening, release management, and 24×7 monitoring — our JDE experts keep your systems running reliably and performing optimally.",
    iconPath: ICONS.settings,
    metaTags: [
      "JD Edwards CNC",
      "Environment Management",
      "System Administration",
      "JDE Support"
    ],
    outcomes: [
      "Stable, well-maintained JDE environment",
      "Reduced system incidents",
      "Predictable upgrade cycles"
    ],
    capabilities: [
      "JD Edwards CNC administration",
      "OneWorld & EnterpriseOne support",
      "Environment provisioning & patching",
      "Security & access control",
      "Database tuning & optimization",
      "Release & deployment management",
      "Backup & disaster recovery",
      "24×7 monitoring & incident response"
    ],
    bestFit:
      "Mid-market and enterprise organizations running complex JD Edwards environments.",
    category: "ERP Platforms",
    featured: true
  },
  {
    slug: "peoplesoft-implementation",
    kicker: "PeopleSoft",
    title: "PeopleSoft Implementation & Support",
    summary:
      "PeopleSoft HCM/FSCM consulting, integrations, upgrades, maintenance, and production support.",
    longDescription:
      "Deploy, maintain, and optimize PeopleSoft across HCM and FSCM. From implementation and configuration to ongoing support, upgrades, and integrations — Vibrant's PeopleSoft team delivers on time and on budget.",
    iconPath: ICONS.users,
    metaTags: [
      "PeopleSoft HCM",
      "PeopleSoft FSCM",
      "Implementation & Support",
      "PeopleSoft Upgrades"
    ],
    outcomes: [
      "Successful PeopleSoft deployment",
      "Smooth system upgrades with zero downtime",
      "Optimized HR and financial operations"
    ],
    capabilities: [
      "PeopleSoft HCM implementation",
      "PeopleSoft FSCM (Financials Supply Chain Management)",
      "PeopleCode & customization",
      "System upgrades & patches",
      "Performance tuning",
      "Integrations (payroll, benefits, GL)",
      "User enablement & training",
      "24×7 production support"
    ],
    bestFit:
      "Mid-market and enterprise organizations implementing or optimizing PeopleSoft for HR and finance.",
    category: "ERP Platforms",
    featured: true
  }
];

export const trustBadges = [
  { label: "25 Years", sub: "of trusted delivery" },
  { label: "E-Verify", sub: "Partner" },
  { label: "NMSDC", sub: "Certified MBE" },
  { label: "Oracle", sub: "Partner" },
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
    name: "Oracle",
    logo: "OR",
    category: "ERP · Database · Cloud",
    description:
      "Vibrant Inc is an Oracle Partner with deep delivery expertise across JD Edwards EnterpriseOne (CNC administration and functional implementation), PeopleSoft, and Oracle E-Business Suite. Our Oracle practice spans full-cycle implementations, CNC administration, system upgrades, data migrations, and post go-live managed support — backed by practitioners averaging 15+ years of hands-on Oracle delivery.",
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
  "Our practice areas span cloud modernization on Azure and leading platforms, data and analytics strategy, multi-platform ERP (JD Edwards, SAP, PeopleSoft, WorkDay, Microsoft Dynamics 365, Oracle E-Business Suite), cybersecurity with AI Shield, intelligent automation, AI readiness, and managed IT services.",
  "Vibrant combines onshore senior leadership with a hybrid delivery model to maximize efficiency without sacrificing quality. Our engagement managers, architects, and subject-matter experts take full ownership of every engagement — from discovery through hypercare and beyond.",
  "We are NMSDC Certified, E-Verify compliant, and Oracle and Microsoft partners — credentials that reflect how we build our teams, support our clients' diversity programs, and deliver with accountability at every engagement."
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

/* ── The VIBRANT Method™ — Vibrant's proprietary delivery framework ───── */
export const vibrantMethod = [
  {
    letter: "V",
    step: "Value Discovery",
    body: "Deep discovery sessions mapping your current state, pain points, and measurable success criteria. We surface hidden opportunities and align on what value looks like."
  },
  {
    letter: "I",
    step: "Ideate & Design",
    body: "Co-create your target architecture and roadmap with your team. We design defensible solutions, not one-size-fits-all blueprints — your business context drives every decision."
  },
  {
    letter: "B",
    step: "Build with Agility",
    body: "Senior-led iterative sprints with weekly demos, transparent progress, and tight change control. You see exactly what you're getting, when."
  },
  {
    letter: "R",
    step: "Refine & Validate",
    body: "Rigorous testing, user validation, and performance tuning. What ships is battle-tested, not hoped-for — we catch and fix issues before they matter."
  },
  {
    letter: "A",
    step: "Activate & Launch",
    body: "Go-live with full hypercare, structured training, and change management. Your team is confident and prepared from day one."
  },
  {
    letter: "N",
    step: "Nurture & Optimize",
    body: "Managed support, quarterly business reviews, and continuous improvement. We stay invested in your success long after go-live — value compounds."
  },
  {
    letter: "T",
    step: "Transform & Scale",
    body: "Realize measurable KPI impact and build a foundation ready for growth. The platform evolves with your business — not a rip-and-replace nightmare."
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
    title: "Real community action",
    body:
      "Not just donations — our team shows up. Founder-led involvement in Rotary social projects, employee volunteer days, and hands-on community support in the regions where we live and work."
  },
  {
    title: "Environmental responsibility",
    body:
      "Remote-first, distributed delivery that cuts commute emissions. We track, measure, and reduce our footprint — because being responsible for the planet isn't optional, it's who we are."
  },
  {
    title: "Diversity, equity & inclusion",
    body:
      "NMSDC Certified Minority Business Enterprise. We hire for merit, build inclusive teams, and believe diverse perspectives build better technology and stronger businesses."
  },
  {
    title: "Building for future generations",
    body:
      "25 years of giving back — mentoring emerging technologists, supporting STEM pathways, and making decisions today that the next generation won't have to undo."
  }
];

export const interestOptions = [
  "AI Readiness",
  "Cloud Modernization (Azure / AWS / GCP)",
  "Cybersecurity & AI Shield",
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
  "ERP Optimization",
  "Data & Analytics",
  "Managed IT",
  "Partnership inquiry",
  "Other / not sure"
];

export type ValueAdd = {
  title: string;
  description: string;
};

export const valueAdds: ValueAdd[] = [
  {
    title: "SAP Certified Consultants",
    description:
      "Experienced SAP professionals delivering industry-focused solutions and best practices."
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
      "Specialized services for SAP Cloud, APIs, middleware, and enterprise integrations."
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
