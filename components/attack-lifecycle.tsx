"use client";

import { useState } from "react";

/* The attack-lifecycle spine, ported from the design canvas.
   Four stages share one spine so the page reads as a sequence rather than four
   unrelated features, and each stage names the tool that runs at that point.
   Selecting a stage swaps the detail panel below it. */

type Stage = {
  key: string;
  n: string;
  label: string;
  sub: string;
  headline: string;
  body: string;
  items: string[];
  tool: string;
  toolBlurb: string;
};

const STAGES: Stage[] = [
  {
    key: "detect",
    n: "01",
    label: "Detect",
    sub: "See it while it is still small",
    headline: "Detection that covers the surfaces attackers actually use.",
    body: "Rule-based tooling catches what someone already thought to write a rule for. Models tuned to your environment cut false positives and surface the slow, low-signal anomalies no one has time to hunt for by hand.",
    items: [
      "ML-powered threat detection",
      "Anomaly detection across cloud and on-prem",
      "Cloud security posture management",
      "Integration with existing SIEM and SOC tooling"
    ],
    tool: "kaveo",
    toolBlurb:
      "Posture management for AWS, Azure, GCP and Kubernetes through a read-only role in your own account. No configuration or log data leaves it."
  },
  {
    key: "analyze",
    n: "02",
    label: "Analyze",
    sub: "Separate noise from a real intrusion",
    headline: "Behavioral baselines, so only the deviations that matter reach a human.",
    body: "UEBA baselines every user and entity, then flags the deviations worth waking someone for. The layer between services, gateways, brokers and meshes, is where most of the unaudited risk sits, so we audit it explicitly.",
    items: [
      "User and Entity Behavioral Analytics (UEBA)",
      "Attack-path correlation across identity and workload",
      "Middleware, gateway and service-mesh audit",
      "Security assessments and gap analysis"
    ],
    tool: "Vectasec",
    toolBlurb:
      "Middleware security for the layer between services. Catches authentication gaps, over-broad routing and policy drift between environments."
  },
  {
    key: "respond",
    n: "03",
    label: "Respond",
    sub: "Contain before the radius grows",
    headline: "Pre-approved playbooks that run the moment a threat is confirmed.",
    body: "The slowest part of most incidents is waiting for permission. We agree the containment decisions up front, so isolation and remediation happen in minutes, day or night, with a full record of what was done.",
    items: [
      "Automated incident response playbooks",
      "Isolation, containment and remediation in minutes",
      "Gated tool calls for AI agents touching internal systems",
      "24×7 managed SOC operations"
    ],
    tool: "aegis",
    toolBlurb:
      "An authenticated, audited gateway in front of your MCP servers: role-based authorization, threat filtering, rate limiting and a hash-chained audit log."
  },
  {
    key: "predict",
    n: "04",
    label: "Predict",
    sub: "Close it before it is used",
    headline: "Threat intelligence and drift detection, pointed at what you actually run.",
    body: "Posture is not a state, it is a slope. Feeds and pattern analysis warn you before an attack lands, and continuous checks catch the configuration drift that quietly reopens a door you closed last quarter.",
    items: [
      "Predictive threat intelligence feeds",
      "Configuration and policy drift detection",
      "Zero-trust architecture design",
      "Compliance: SOC 2, HIPAA, PCI, CMMC"
    ],
    tool: "AI Shield™",
    toolBlurb:
      "The platform the four stages run on, with audit-ready reporting generated as you go rather than assembled before a deadline."
  }
];

export function AttackLifecycle() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <section className="section-soft">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">How AI Shield works</p>
          <h2 className="mt-3">One spine, four stages, and the tooling that runs on it.</h2>
          <p className="mt-4 text-muted">
            The same lifecycle every attack follows, and what we put in the way of each step.
            Select a stage.
          </p>
        </div>

        <div className="cy-spine mt-10" role="tablist" aria-label="Attack lifecycle stages">
          {STAGES.map((s, i) => (
            <button
              key={s.key}
              type="button"
              role="tab"
              id={`stage-tab-${s.key}`}
              aria-selected={i === active}
              aria-controls={`stage-panel-${s.key}`}
              data-on={i === active}
              className="cy-stage"
              onClick={() => setActive(i)}
            >
              <span className="cy-stagen">{s.n}</span>
              <span className="cy-stagelabel">{s.label}</span>
              <span className="cy-stagesub">{s.sub}</span>
            </button>
          ))}
        </div>

        <div
          className="cy-detail mt-6"
          role="tabpanel"
          id={`stage-panel-${stage.key}`}
          aria-labelledby={`stage-tab-${stage.key}`}
        >
          <div className="cy-detailmain">
            <h3 className="text-xl font-semibold text-navy-700 leading-snug">{stage.headline}</h3>
            <p className="mt-3 text-muted leading-relaxed">{stage.body}</p>
            <ul className="svc-list mt-5">
              {stage.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>

          <aside className="cy-detailside">
            <p className="eyebrow">Tooling at this stage</p>
            <p className="cy-prod">{stage.tool}</p>
            <p className="mt-2 text-sm text-muted leading-relaxed">{stage.toolBlurb}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
