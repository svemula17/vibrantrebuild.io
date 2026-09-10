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
  /** <title> and hero H1. `title` stays short for nav and index cards. */
  seoTitle?: string;
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
    slug: "manufacturing",
    seoTitle: "Manufacturing SAP ERP & IT Consulting",
    kicker: "Industries",
    title: "Manufacturing",
    summary:
      "Vibrant runs the SAP estate behind the plant floor and the supply chain, S/4HANA, EWM, TM, IBP, and PP, plus the support and analytics that keep production moving.",
    metaDescription:
      "Manufacturing technology consulting from Vibrant Inc: SAP S/4HANA, EWM, TM, IBP and PP, application management across shifts, and plant analytics.",
    intro: [
      "Manufacturing does not get a quiet maintenance weekend. A warehouse management change that goes wrong stops putaway, a transport planning error strands trailers at the dock, and a bad transport into production shows up as operators standing still on a line that only earns while it moves.",
      "We work on the SAP estate that runs the plant and the supply chain around it, with clean core discipline so the next upgrade is uneventful, application support scheduled around your shift pattern rather than office hours, and production, quality, and supplier data landed in one place so the plant and the executive team work from the same numbers."
    ],
    capabilities: [
      {
        title: "S/4HANA migration and clean core",
        body:
          "Moving to S/4HANA on a site that runs around the clock means cutover windows measured in hours, not weekends. We plan the move against the production calendar, keep custom code out of the core, and put extensions on BTP so the next upgrade is not another shutdown.",
        points: [
          "ABAP custom code reviewed, retired, or rebuilt as BTP extensions and Fiori apps",
          "Cutover and regression testing sequenced around live production, not around IT"
        ]
      },
      {
        title: "Warehouse, transport, and production planning",
        body:
          "EWM, TM, PP, and IBP are where an ERP program meets the dock door and the work center. We configure and tune those modules to how your plant actually sequences work, then keep them tuned as volumes, routes, and supplier lead times change.",
        points: [
          "EWM and TM for putaway, picking, yard moves, and freight execution",
          "PP and IBP so the production plan and the demand plan reference the same numbers"
        ]
      },
      {
        title: "Application management across shifts",
        body:
          "A line stop is not a ticket, it is lost output. We cover SAP AMS and service desk on a schedule built around your shift pattern, with AI ticket classification routing plant floor issues to the person who can clear them instead of into a queue.",
        points: [
          "Run support and enhancement from Princeton and the Hyderabad delivery center",
          "Workflow automation and OCR for supplier invoices, receiving paperwork, and approvals"
        ]
      },
      {
        title: "Plant and supply chain analytics",
        body:
          "Throughput, scrap, on-time delivery, and supplier performance usually live in four systems and one spreadsheet. We land ERP, shop floor, and quality data in Snowflake or Databricks and put the result in front of plant managers and the executive team in Power BI.",
        points: [
          "Dashboards for yield, downtime, and on-time-in-full by site and by line",
          "Forecasting and predictive models for demand, spare parts, and supplier risk"
        ]
      }
    ],
    stack: [
      "SAP S/4HANA",
      "SAP EWM",
      "SAP TM",
      "SAP IBP",
      "SAP PP",
      "SAP BTP",
      "SAP Fiori",
      "Snowflake",
      "Power BI"
    ],
    bestFit:
      "Plant, supply chain, and IT leaders running SAP across multiple sites, where every ERP change has to land without stopping a line.",
    relatedServices: [
      "erp-optimization",
      "managed-it",
      "data-analytics",
      "cybersecurity"
    ]
  },
  {
    slug: "financial-services",
    seoTitle: "Financial Services IT & Security Consulting",
    kicker: "Industries",
    title: "Financial Services",
    summary:
      "Security engineering, cloud modernization, and analytics for banks, credit unions, insurers, and payments firms running regulated work on legacy systems.",
    metaDescription:
      "Financial services technology consulting from Vibrant Inc: zero trust security, SOC 2 and PCI-aligned controls, cloud modernization, and risk analytics.",
    intro: [
      "Financial services firms work under supervision, and that changes what a technology project has to produce. An examiner can ask who touched a record, when, and under which control, and the answer has to come out of systems that were written decades ago and cannot be taken offline for a rewrite. The pressure to modernize lands at the same time as the obligation to prove nothing moved without a trail.",
      "Vibrant works on the parts a consultancy can be accountable for: security engineering, cloud modernization, data platforms, and the operations that keep them running. We align delivery to zero trust practice and to SOC 2, HIPAA, and PCI DSS control requirements, and we hand over the control documentation with the work rather than after it. Vibrant is not a regulator and holds no banking accreditation, so examination and licensing stay with your compliance function and your supervisor. For procurement teams tracking supplier diversity, Vibrant is an NMSDC certified MBE."
    ],
    capabilities: [
      {
        title: "Security and audit evidence",
        body:
          "We build zero trust access, identity and privilege management, and 24x7 SOC monitoring around the systems holding account and cardholder data. Controls are mapped to SOC 2 and PCI DSS requirements as they are built, so the evidence an auditor asks for is already collected instead of reconstructed under deadline.",
        points: [
          "Identity and access management with privileged sessions recorded and reviewed",
          "AI Shield and UEBA watching for account takeover and insider misuse, with written response playbooks"
        ]
      },
      {
        title: "Cloud modernization around the core",
        body:
          "A core banking or policy platform rarely moves in one step, so we modernize around it with landing zones, containers, and API-first services. Older workloads stay in place and supported while new capability ships on Azure, AWS, or GCP under a single set of controls.",
        points: [
          "Landing zones with network segmentation, logging, and key management set before the first workload lands",
          "FinOps reporting that attributes cloud spend to a product line rather than one shared invoice"
        ]
      },
      {
        title: "Risk and performance analytics",
        body:
          "Risk, finance, and operations teams often hold the same numbers in different systems and reconcile them by hand at month end. We consolidate that data in Snowflake or Databricks and publish it to Power BI dashboards that trace back to the source of record.",
        points: [
          "Executive and internal reporting built from one governed data set",
          "Predictive models for delinquency, attrition, and forecasting, monitored after they go live"
        ]
      },
      {
        title: "Back-office automation and support",
        body:
          "Loan files, statements, and onboarding paperwork still arrive as documents that staff key in twice. We apply OCR and document processing at intake, route exceptions through approval workflows, and run the service desk and application integration behind them.",
        points: [
          "Invoice and document automation with an approval trail on every exception",
          "AI ticket classification so access and security requests reach the right queue first"
        ]
      }
    ],
    stack: [
      "Azure",
      "AWS",
      "Kubernetes",
      "Docker",
      "Snowflake",
      "Databricks",
      "Power BI",
      "AI Shield",
      "UEBA"
    ],
    bestFit:
      "Security, infrastructure, and data leaders at banks, credit unions, insurers, and payments firms who need modernization work that holds up in an audit.",
    relatedServices: [
      "cybersecurity",
      "cloud-modernization",
      "data-analytics",
      "managed-it"
    ]
  },
  {
    slug: "technology",
    seoTitle: "SaaS Security & SOC 2 Readiness Consulting",
    kicker: "Industries",
    title: "Technology",
    summary:
      "Security posture, cloud discipline, and AI governance for software companies whose next enterprise deal depends on passing a customer's security review.",
    metaDescription:
      "Technology consulting from Vibrant Inc: SOC 2 readiness, cloud modernization on Azure, AWS, and GCP, 24x7 security monitoring, and governed AI features.",
    intro: [
      "Software and product companies get audited by their own customers. A security questionnaire, a SOC 2 report, a security questionnaire, and an architecture diagram now sit between a signed proposal and a closed deal, and every one of them lands on the engineers who are supposed to be shipping the roadmap. The cloud footprint that got the product to market was built for release speed, not for that level of reading, and the AI features you shipped most recently raise a second round of questions about where customer data goes.",
      "Vibrant does that work alongside the product team instead of in place of it. We run SOC 2 readiness and evidence collection, rebuild the account structure and identity model underneath the platform, monitor the result around the clock, and put governance around the AI in the product, so the security review becomes a step in the sales cycle rather than unplanned engineering work."
    ],
    capabilities: [
      {
        title: "SOC 2 readiness and audit evidence",
        body:
          "We map current controls to the SOC 2 trust services criteria, find the gaps an auditor will raise first, and build the evidence trail before the observation window opens. The same groundwork extends to HIPAA, PCI, and CMMC scopes when a customer contract pulls one of them in.",
        points: [
          "Gap assessment, remediation plan, and evidence collection ahead of the audit",
          "Security questionnaire and due diligence answers your team can reuse per deal"
        ]
      },
      {
        title: "Cloud architecture that survives diligence",
        body:
          "Landing zones, network segmentation, and identity boundaries get rebuilt so an account structure that grew with the product stops being the weakest answer in a review. We containerize on Kubernetes and Docker, move the workloads that suit serverless, and put FinOps reporting on the bill before the next funding conversation.",
        points: [
          "Landing zones, segmentation, and least privilege access across Azure, AWS, and GCP",
          "DevOps pipelines and FinOps reporting that make change and cost auditable"
        ]
      },
      {
        title: "AI features enterprise buyers will approve",
        body:
          "Retrieval augmented generation over your own content, vector search, and assistants for support, sales, and documentation, built so the data path is explainable when a customer asks where their content goes. Tenant isolation and retention rules go into the design rather than getting added after the first security review.",
        points: [
          "RAG and vector database design over product, support, and knowledge content",
          "Enterprise AI search and assistants for customer support and sales teams"
        ]
      },
      {
        title: "24x7 monitoring without a security team of your own",
        body:
          "Most product companies cannot staff a night shift, and buyers still ask who is watching. Our SOC covers detection, UEBA, and response playbooks, and AI Shield plus model monitoring extend the same coverage to the AI running inside the product.",
        points: [
          "24x7 detection and response with playbooks your on-call engineers can follow",
          "AI governance and model monitoring for the features customers ask about"
        ]
      }
    ],
    stack: [
      "Microsoft Azure",
      "AWS",
      "Google Cloud Platform",
      "Kubernetes",
      "Docker",
      "IAM and zero trust",
      "UEBA",
      "AI Shield",
      "Vector databases"
    ],
    bestFit:
      "Software and product companies whose next enterprise contract depends on passing a customer security review, and whose cloud footprint grew faster than the team running it.",
    relatedServices: [
      "cybersecurity",
      "cloud-modernization",
      "ai-readiness"
    ]
  },
  {
    slug: "retail",
    seoTitle: "Retail IT, ERP & Omnichannel Consulting",
    kicker: "Industries",
    title: "Retail",
    summary:
      "Vibrant helps retailers keep one inventory number across every channel, run SAP EWM and store systems through peak season, and personalize the digital storefront.",
    metaDescription:
      "Retail technology consulting from Vibrant Inc: omnichannel experience, SAP EWM inventory accuracy, demand forecasting, and peak season readiness.",
    intro: [
      "Retail's constraint is the calendar. The change freeze starts before the peak weeks do, so anything not stable by then gets carried through the quarter as manual work, and every defect that reaches a checkout page or a store register is visible to customers within minutes. Underneath that sits the harder problem: the inventory count every omnichannel promise depends on is assembled from a warehouse system, a store system, and a channel platform that were never designed to agree.",
      "We work the three places that break. The digital experience customers actually touch, the ERP and warehouse execution behind the inventory number, and the analytics that tell merchants what to buy and when to mark it down. The VIBRANT Method sets the delivery pattern, Princeton runs the client side, and our Hyderabad center covers the overnight hours, which counts for most in the weeks when nothing can wait until morning."
    ],
    capabilities: [
      {
        title: "Storefront, search, and self-service",
        body:
          "Shoppers leave when search returns the wrong product, and they call when an order status is not visible in their account. We build AI-first storefronts, enterprise search across catalog and content, and customer portals that answer order, return, and availability questions without a support ticket.",
        points: [
          "Product and content search that reads intent, not only keywords",
          "Self-service order status, returns, and store availability inside the customer account"
        ]
      },
      {
        title: "Inventory accuracy in SAP EWM",
        body:
          "Omnichannel promises usually fail at the shelf rather than on the website, because the distribution center, the store, and the channel each hold their own version of the count. We work in SAP S/4HANA and EWM on the processes behind that count, including receiving, putaway, cycle counting, wave planning, and ship-from-store.",
        points: [
          "Receiving, putaway, cycle counting, and wave planning tuned to your store and DC mix",
          "Clean core extensions and Fiori apps, so the next upgrade does not reopen every customization"
        ]
      },
      {
        title: "Demand forecasting and merchandise analytics",
        body:
          "Buying decisions are made months ahead of the season, on data spread across the ERP, the point of sale, the e-commerce platform, and a spreadsheet one person maintains alone. We consolidate those sources in Snowflake or Databricks and build forecasting models and Power BI dashboards for demand, replenishment, and markdown timing.",
        points: [
          "Forecasts for demand, replenishment, and markdown timing built on your own sales history",
          "Executive and store manager dashboards working from one definition of a sale and a return"
        ]
      },
      {
        title: "Peak season run and back office automation",
        body:
          "Peak weeks do not leave room for a discovery call, so the support model has to be in place before volume arrives. We run managed services and workflow automation through the season, covering the service desk, AI ticket classification, returns and vendor invoice processing, and the integrations between store, warehouse, and channel systems.",
        points: [
          "extended coverage across the peak weeks from Princeton and Hyderabad",
          "Automated returns, invoice, and approval workflows so seasonal volume does not become overtime"
        ]
      }
    ],
    stack: [
      "SAP S/4HANA",
      "SAP EWM",
      "SAP IBP",
      "SAP Fiori",
      "SAP BTP",
      "Snowflake",
      "Databricks",
      "Power BI",
      "Azure"
    ],
    bestFit:
      "Retail IT, supply chain, and digital leaders who own an inventory number that has to be right on the site, in the store, and in the warehouse at the same time.",
    relatedServices: [
      "ai-digital-experience",
      "erp-optimization",
      "data-analytics",
      "managed-it"
    ]
  },
  {
    slug: "logistics",
    seoTitle: "Logistics IT & SAP EWM/TM Consulting",
    kicker: "Industries",
    title: "Logistics",
    summary:
      "Warehouse and transport execution, shipment visibility across every handoff, and the analytics that finally show margin per shipment.",
    metaDescription:
      "Logistics technology consulting from Vibrant Inc: SAP EWM and TM, shipment visibility, freight cost analytics, and managed integration support.",
    intro: [
      "Logistics is executed outside your own four walls. Custody passes between warehouse, carrier, broker, and customer, and each handoff lands in a different system owned by a different party, so a shipment that reads on time in your ERP may already be sitting on a dock. Margin per shipment is thin, which means an error another industry would absorb gets multiplied by volume before anyone sees it.",
      "We work the three layers where that shows up. SAP EWM and TM for warehouse and transport execution, analytics that join order, shipment, and freight cost data into one view of margin, and managed services that automate the document handling and integration between your systems and your partners'. Vibrant has run SAP and application support programs since 2000, and the VIBRANT Method governs how a change is tested and cut over in an operation that never stops."
    ],
    capabilities: [
      {
        title: "Warehouse execution on SAP EWM",
        body:
          "EWM decides how a warehouse behaves under load, from putaway strategy to wave planning to labor allocation. We configure and tune it against your actual order profile and keep the build inside clean core, so the next upgrade does not undo the work.",
        points: [
          "EWM configuration for putaway, picking, wave, packing, and yard processes",
          "Fiori screens designed for the scanner and the floor, not the desk"
        ]
      },
      {
        title: "Transport planning and freight settlement",
        body:
          "SAP TM is where planning, carrier selection, and freight cost meet, and where a small configuration gap becomes an invoice nobody can reconcile. We build out planning profiles, charge management, and settlement so the freight you pay matches the freight you actually moved.",
        points: [
          "Transportation planning, carrier selection, and tendering in SAP TM",
          "Freight cost and settlement tied back to the shipment record"
        ]
      },
      {
        title: "Visibility and margin per shipment",
        body:
          "Most operators can report cost by lane and cost by month but not margin by shipment, because the numbers sit in systems that were never joined. We consolidate order, warehouse, transport, and billing data in Snowflake or Databricks and put the result into dashboards that hold up in a rate negotiation.",
        points: [
          "One data layer covering orders, shipments, freight cost, and service levels",
          "Forecasting for volume, capacity, and lane cost movement"
        ]
      },
      {
        title: "Partner integration and document automation",
        body:
          "Every handoff to a carrier, broker, or customer arrives in a different document format with a different exception attached. We automate the document processing and the application integration between your systems and theirs, and run the service desk that handles what falls out.",
        points: [
          "OCR and automated matching for freight invoices, bills of lading, and proof of delivery",
          "Enterprise application integration across ERP, warehouse, carrier, and customer systems"
        ]
      }
    ],
    stack: [
      "SAP S/4HANA",
      "SAP EWM",
      "SAP TM",
      "SAP IBP",
      "SAP Fiori",
      "SAP BTP",
      "Snowflake",
      "Databricks",
      "Power BI"
    ],
    bestFit:
      "Third-party logistics providers, distributors, and manufacturers running their own warehouse and transport operations on SAP, where margin per shipment is under pressure and handoffs are where visibility breaks.",
    relatedServices: [
      "erp-optimization",
      "data-analytics",
      "managed-it"
    ]
  },
  {
    slug: "energy",
    seoTitle: "Energy IT, ERP & Analytics Consulting",
    kicker: "Industries",
    title: "Energy",
    summary:
      "ERP, analytics, and security for energy operators running field assets, OT networks, and IT systems that all answer to the same regulator.",
    metaDescription:
      "Energy technology consulting from Vibrant Inc: asset and maintenance ERP, operations analytics, Security and compliance reporting, and compliance reporting workflows.",
    intro: [
      "Energy runs on assets that outlast the software written to manage them. A turbine, a substation, or a pipeline segment stays in service long after the control system watching it goes out of support, and the operational technology around it was never meant to share a network with email and ERP. Add crews working where connectivity is poor and regulators who expect safety and environmental records on demand, and an ordinary IT project picks up a second set of rules.",
      "We work the IT side of that line and respect the OT side of it. That means maintenance and asset data in an ERP field crews will actually use, operations data landed in one place where planners and executives read the same numbers, identity and monitoring controls built for a network full of contractors and remote sites, and compliance reporting that assembles itself from the systems of record instead of a spreadsheet built the week before an audit."
    ],
    capabilities: [
      {
        title: "Asset and maintenance ERP",
        body:
          "Work orders, spare parts, and plant maintenance history belong in one system of record that survives the next reorganization. We run SAP S/4HANA and JD Edwards programs for asset-heavy operators, keeping the core clean so the extensions field work needs do not block the next upgrade.",
        points: [
          "Fiori interfaces built for a technician on a tablet, not a desk",
          "EWM and PP configured around spares, outages, and turnaround schedules"
        ]
      },
      {
        title: "Operations and asset analytics",
        body:
          "Meter data, historian exports, maintenance logs, and financials each answer part of a question and none of them answer it alone. We land that data in Snowflake or Databricks and model it so planners see failure patterns forming and leadership sees production, downtime, and cost in the same view.",
        points: [
          "Predictive maintenance models trained on your own failure history",
          "Power BI dashboards for output, outage, and cost per asset"
        ]
      },
      {
        title: "Security and compliance reporting",
        body:
          "Energy networks carry contractors, vendors, remote sites, and equipment that cannot be patched on a normal cycle, which makes identity and segmentation the controls that do the real work. We run zero trust and IAM programs on the IT side, watch them from a 24x7 SOC, and align the work to the control frameworks your auditors and insurers ask about.",
        points: [
          "Access governance covering contractor, vendor, and shared field accounts",
          "Response playbooks rehearsed in advance, with UEBA on accounts and devices"
        ]
      },
      {
        title: "Safety and compliance reporting",
        body:
          "Safety, environmental, and regulatory reporting is usually assembled by hand from inspection forms, permits, and approvals buried in email. We automate that path with document processing and OCR on the paperwork, approval workflows that record who signed what and when, and integration back into the systems the report is drawn from.",
        points: [
          "Inspection and permit documents captured by OCR instead of retyped",
          "Approval workflows that leave an audit trail a reviewer can follow"
        ]
      }
    ],
    stack: [
      "SAP S/4HANA",
      "SAP EWM",
      "SAP Fiori",
      "SAP BTP",
      "JD Edwards",
      "Snowflake",
      "Databricks",
      "Power BI",
      "Azure"
    ],
    bestFit:
      "Call us if you own plant systems, asset performance, or security at a generation, transmission, utility, or oilfield services operator and your field data still lives outside the systems your reports come from.",
    relatedServices: [
      "erp-optimization",
      "data-analytics",
      "cybersecurity",
      "managed-it"
    ]
  },
  {
    slug: "education",
    seoTitle: "Education IT, ERP & Student Portal Consulting",
    kicker: "Industries",
    title: "Education",
    summary:
      "Vibrant supports PeopleSoft and Workday estates, student self-service portals, and daily IT for institutions whose technology team is smaller than the calendar demands.",
    metaDescription:
      "Education IT consulting from Vibrant Inc: PeopleSoft and Workday support, student self-service portals, managed IT, and student data protection.",
    intro: [
      "Education runs on a calendar that does not move. Registration, census, aid disbursement, and commencement land on fixed dates, and the systems behind them sit quiet for months and then take a term's worth of traffic in a week. The team carrying that load is usually small, a handful of people covering a student information system, an LMS, a payroll and HR estate, a network, and a help desk, and most of the records they administer are records the institution is obliged to protect.",
      "Vibrant works on the parts of that problem an institution cannot fix by hiring. We modernize PeopleSoft, Workday, and Oracle estates without a rip and replace, we build the portals and self-service that keep routine questions away from a small help desk, and we run managed IT and security monitoring with capacity that expands for the enrollment peak and comes back down after it. Delivery follows the VIBRANT Method and runs between Princeton and Hyderabad, so overnight and weekend windows are staffed by people already on the system."
    ],
    capabilities: [
      {
        title: "PeopleSoft and Workday estates",
        body:
          "Campus ERP estates carry years of custom code, much of it written to cover a gap the vendor has since closed. We review that code against what the product now does natively, keep the customizations that encode real academic policy, and schedule upgrades and support around the academic calendar instead of across it.",
        points: [
          "Upgrade, patch, and testing cycles planned around registration, census, and aid disbursement",
          "Application managed services for PeopleSoft, Workday, and Oracle E-Business Suite between releases"
        ]
      },
      {
        title: "Student self-service and portals",
        body:
          "Most of what reaches a campus help desk in August is one person hunting for an answer buried in a PDF or a department page. We build portals and AI search that answer those questions directly, so applicants, students, faculty, and parents can check aid status, registration, and course information without opening a ticket.",
        points: [
          "Enterprise AI search across course catalogs, policy documents, and financial aid instructions",
          "Digital onboarding that puts new students, faculty, and staff on one guided path"
        ]
      },
      {
        title: "Managed IT through peak season",
        body:
          "Enrollment load arrives in weeks, not evenly across the year, and a small institution cannot staff for the peak and carry that cost through February. We run service desk, monitoring, and application support as a managed service, with coverage that scales up for registration and add/drop periods and scales back afterward.",
        points: [
          "AI ticket classification and routing so the queue is sorted before staff open it",
          "Document processing and approval workflows for transcripts, forms, and invoices"
        ]
      },
      {
        title: "Student data protection",
        body:
          "Student records, aid files, health data, and research data live in different systems with different owners, and each one is a disclosure question waiting to be asked. We align identity, access, and monitoring to FERPA obligations and institutional policy, and watch the environment continuously rather than at audit time.",
        points: [
          "Zero trust access and IAM covering staff, faculty, students, and third-party vendors",
          "24x7 SOC monitoring with response playbooks written for campus systems"
        ]
      }
    ],
    stack: [
      "PeopleSoft",
      "Workday",
      "Oracle E-Business Suite",
      "Microsoft Dynamics 365",
      "Azure",
      "Enterprise AI search with RAG",
      "OCR document processing",
      "IAM and zero trust access"
    ],
    bestFit:
      "CIOs, registrars, and IT directors at colleges, universities, and districts running PeopleSoft or Workday with a team too small to cover the upgrade and the semester at the same time.",
    relatedServices: [
      "erp-optimization",
      "ai-digital-experience",
      "managed-it",
      "cybersecurity"
    ]
  },
  {
    slug: "government",
    seoTitle: "Government IT & Cybersecurity Consulting",
    kicker: "Industries",
    title: "Government",
    summary:
      "Cloud modernization, security, records automation, and accessible portals for public agencies answering to auditors, procurement rules, and residents at once.",
    metaDescription:
      "Government IT consulting from Vibrant Inc: cloud modernization, zero trust security, records and workflow automation, accessible constituent portals.",
    intro: [
      "Public agencies buy technology in the open. The requirement is written before the problem is fully understood, the award is reviewed by people who were not in the room, the money belongs to a fiscal year, and almost everything the system produces can become a public record. The same system has to be accessible to every resident who is required to use it, and the legacy application it replaces is usually the one holding the record of authority.",
      "Vibrant has built and run enterprise systems since 2000, and we work the way public procurement expects: scope that fits a statement of work, controls documented while the work happens rather than reconstructed later, and a delivery record that holds up in an audit. We are an NMSDC certified Minority Business Enterprise and an E-Verify partner, which supports supplier diversity and MBE participation requirements in a solicitation, and our engagements run on the VIBRANT Method from discovery through steady state, staffed from Princeton, New Jersey and our delivery center in Hyderabad, India."
    ],
    capabilities: [
      {
        title: "Security that holds up under audit",
        body:
          "We build zero trust access, identity and access management, and 24x7 SOC monitoring around the systems that hold resident data, case files, and payment records. Controls are documented as they are implemented and aligned to the frameworks your assessors already work from, including SOC 2, HIPAA, PCI, and CMMC.",
        points: [
          "Identity and access management with role separation that matches delegated authority",
          "Response playbooks, UEBA monitoring, and evidence trails ready for the next audit cycle"
        ]
      },
      {
        title: "Cloud modernization on a fiscal calendar",
        body:
          "Legacy applications move to Azure, AWS, or GCP through landing zones designed for logging, retention, and separation of duties before the first workload lands. Containers, microservices, and API-first design let a system be replaced in parts, so a modernization program can survive a funding change or a change in administration.",
        points: [
          "Landing zones with logging, retention, and cost boundaries set at the start",
          "FinOps reporting that ties cloud spend to a budget line and a fiscal year"
        ]
      },
      {
        title: "Records, forms, and approval workflow",
        body:
          "Document processing and OCR turn paper files, scanned forms, and mailbox attachments into records staff can search and retrieve. Approval workflows carry what used to move on paper, with each step time stamped so a public records request months later has an answer.",
        points: [
          "OCR and document processing for permit, benefit, and procurement files",
          "Approval routing, service desk coverage, and AI ticket classification"
        ]
      },
      {
        title: "Accessible constituent portals",
        body:
          "Residents should not have to know which department owns a form to finish their business with the agency. We build customer portals, digital onboarding, and enterprise AI search that answer in plain language, and we build portals people can actually complete unaided because a public service has to work for everyone required to use it.",
        points: [
          "Self-service portals and forms built for completion without a phone call",
          "Enterprise AI search grounded in your own policies, forms, and program pages"
        ]
      }
    ],
    stack: [
      "Microsoft Azure",
      "AWS",
      "Google Cloud Platform",
      "Kubernetes",
      "Docker",
      "Cloud landing zones",
      "Zero trust and IAM",
      "OCR document processing",
      "Enterprise AI search"
    ],
    bestFit:
      "City, county, and state CIOs, IT directors, and procurement leads modernizing legacy systems under audit, accessibility, and supplier diversity requirements.",
    relatedServices: [
      "cybersecurity",
      "cloud-modernization",
      "managed-it",
      "ai-digital-experience"
    ]
  },
  {
    slug: "professional-services",
    seoTitle: "Professional Services ERP & AI Consulting",
    kicker: "Industries",
    title: "Professional Services",
    summary:
      "Project accounting, utilization reporting, proposal generation, and knowledge search for firms whose product is billable time and the expertise behind it.",
    metaDescription:
      "Professional services consulting from Vibrant Inc: ERP and project accounting, utilization analytics, AI proposal generation, and knowledge assistants.",
    intro: [
      "A professional services firm sells capacity it cannot store. An hour that goes unbilled this week is gone for good, and the people who could fix the systems causing it are the same people carrying a utilization target, so internal work always loses to client work. The result is familiar: the truth about an engagement lives in time entry, the resource plan, the engagement letter, and a partner's spreadsheet, and those four do not agree at month end.",
      "We work on the systems that decide whether an engagement makes money. That means ERP and project accounting where time, cost, and revenue recognition come from one record, analytics that show utilization and realization while the engagement is still running, and generative AI aimed at the two places senior time disappears, writing proposals and searching for what the firm already knows."
    ],
    capabilities: [
      {
        title: "Project accounting and ERP",
        body:
          "Time, expense, cost, and revenue recognition belong on one record, not reconciled at month end out of four systems. We optimize SAP, Oracle, Workday, and Dynamics 365 so project setup, work in progress, billing rules, and percent complete reporting all run off the data engagement teams already enter.",
        points: [
          "Clean core discipline so the customizations you need do not block the next upgrade",
          "Application managed services for month end close, rate card changes, and new entity rollouts"
        ]
      },
      {
        title: "Utilization and realization analytics",
        body:
          "An engagement can go wrong long before anyone writes off the invoice. We build dashboards and forecasts on Snowflake, Databricks, and Power BI that put utilization, realization, backlog, and staffing gaps in front of practice leads while the engagement can still be corrected.",
        points: [
          "Executive dashboards for bookings, backlog, and coverage by practice and grade",
          "Predictive forecasting for pipeline demand, bench risk, and revenue timing"
        ]
      },
      {
        title: "Proposal and pursuit generation",
        body:
          "Proposals are written by the people you most want billable, and each one restates work the firm has already described somewhere else. We build generative AI proposal drafting that retrieves from your own past pursuits, methodology, and consultant bios, with document summarization for the RFP and the reference material behind it.",
        points: [
          "Retrieval augmented drafting grounded in approved firm content, with sources shown",
          "Document summarization for long RFPs, contracts, and prior deliverables"
        ]
      },
      {
        title: "Knowledge assistants and enterprise search",
        body:
          "Expertise walks out with every consultant who changes accounts, and the answer to a client question is usually sitting in a deliverable nobody can find. We stand up enterprise AI search and knowledge assistants over engagement archives, methodology, and policy, built on RAG and vector databases so every answer points back to the document it came from.",
        points: [
          "Enterprise AI search across deliverables, methodology, and precedent",
          "Retrieval scoped to the engagement, so answers cite only that engagement's approved material"
        ]
      }
    ],
    stack: [
      "SAP S/4HANA",
      "SAP BTP",
      "Workday",
      "Dynamics 365",
      "Oracle EBS",
      "Snowflake",
      "Databricks",
      "Power BI",
      "Azure"
    ],
    bestFit:
      "Partners, practice leads, and CIOs at consulting, accounting, legal, engineering, and agency firms where utilization, project margin, and pursuit speed decide the year.",
    relatedServices: [
      "erp-optimization",
      "ai-readiness",
      "data-analytics",
      "managed-it"
    ]
  },
  {
    slug: "healthcare",
    seoTitle: "Healthcare IT Consulting & EHR Modernization",
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
    seoTitle: "Insurance Technology Consulting",
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
