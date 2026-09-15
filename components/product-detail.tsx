"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { PRODUCTS } from "@/components/security-products";

/* The expanded product write-ups for /products.

   Every claim here is already made elsewhere on the site — the PRODUCTS array,
   the attack-lifecycle tool blurbs, and the cybersecurity service page. This
   file restructures them into something a buyer can actually evaluate; it does
   not invent capabilities. Anything genuinely new about these products has to
   come from the people who build them. */

type Detail = {
  stage: string;
  stageNote: string;
  summary: string;
  specs: { label: string; value: string }[];
  facts: string[];
};

const DETAIL: Record<string, Detail> = {
  kaveo: {
    stage: "Detect",
    stageNote: "First stage of the AI Shield lifecycle",
    summary:
      "Posture management for AWS, Azure, GCP and Kubernetes through a read-only role in your own account. No configuration or log data leaves it.",
    specs: [
      { label: "Deployment", value: "A read-only role inside your own cloud account" },
      { label: "Coverage", value: "AWS, Azure, GCP and Kubernetes in one view" },
      { label: "Output", value: "Dated, cited evidence artifacts, not dashboard screenshots" },
      { label: "Egress", value: "None. No configuration, no logs, no telemetry" }
    ],
    facts: [
      "Read-only role, deployed inside your own account",
      "AWS, Azure, GCP and Kubernetes in one view",
      "Findings become dated, cited evidence artifacts",
      "Nothing egresses: no configuration, no logs, no telemetry"
    ]
  },
  Vectasec: {
    stage: "Analyze",
    stageNote: "Second stage of the AI Shield lifecycle",
    summary:
      "Middleware security for the layer between services. Catches authentication gaps, over-broad routing and policy drift between environments.",
    specs: [
      { label: "Scope", value: "API gateways, message brokers and service meshes" },
      { label: "Finds", value: "Authentication gaps and over-broad routing" },
      { label: "Compares", value: "Policy drift between environments" },
      { label: "Why it exists", value: "The layer most scanners never look at" }
    ],
    facts: [
      "API gateways, message brokers and service meshes",
      "Authentication gaps and over-broad routing surfaced",
      "Policy drift caught between environments",
      "The layer most scanners never look at"
    ]
  },
  Aegis: {
    stage: "Respond",
    stageNote: "Third stage of the AI Shield lifecycle",
    summary:
      "An authenticated, audited gateway in front of your MCP servers: role-based authorization, threat filtering, rate limiting and a hash-chained audit log.",
    specs: [
      { label: "Position", value: "In front of your MCP servers" },
      { label: "Enforces", value: "Authentication and role-based authorization per tool call" },
      { label: "Controls", value: "Threat filtering and rate limiting at the gateway" },
      { label: "Record", value: "A hash-chained audit log you can verify independently" }
    ],
    facts: [
      "Authentication and role-based authorization per tool call",
      "Threat filtering and rate limiting at the gateway",
      "Guardrails in place before agents become load-bearing"
    ]
  }
};

/* Same contract the rest of the site uses: the resting state is the visible
   state. .is-armed is added from JS, so with no JS nothing is ever hidden. */
function useArmedOnView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;
    el.classList.add("is-armed");
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      el.classList.add("is-in");
      io.disconnect();
      window.clearTimeout(t);
    };
    const io = new IntersectionObserver((e) => e[0]?.isIntersecting && show(), { rootMargin: "-8%" });
    io.observe(el);
    const t = window.setTimeout(show, 2800);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);
  return ref;
}

function Backdrop() {
  return (
    <div className="sp-bg" aria-hidden="true">
      <span className="sp-dots" />
      <span className="sp-wash sp-w1" />
      <span className="sp-packet sp-p1" />
      <span className="sp-packet sp-p2" />
      <span className="sp-packet sp-p3" />
      <span className="sp-packet sp-p4" />
      <span className="sp-threat sp-t1" />
      <span className="sp-threat sp-t2" />
      <span className="sp-sweep" />
    </div>
  );
}

function ProductBlock({
  product,
  detail,
  dark,
  flip,
  index
}: {
  product: (typeof PRODUCTS)[number];
  detail: Detail;
  dark: boolean;
  flip: boolean;
  index: number;
}) {
  const ref = useArmedOnView<HTMLElement>();

  return (
    <section
      ref={ref}
      id={product.slug}
      className={`section sec-tight sp relative isolate overflow-hidden scroll-mt-24 ${
        dark ? "is-dark bg-navy-700" : "bg-white"
      }`}
    >
      <Backdrop />
      <div className={`container relative sp-split${flip ? " is-flip" : ""}`}>
        <div className="sp-art">
          <div className="rounded-xl border border-line bg-neutral-50 p-5">{product.art}</div>
        </div>

        <div className="sp-copy">
          <div className="sp-lock">
            <span className="sp-built">Built by Vibrant</span>
            <p className="sp-name">{product.name}</p>
            <p className="sp-kind">
              {product.kind}
              <span className="sp-dot" aria-hidden>·</span>
              {product.short}
            </p>
          </div>

          <h2 className="mt-5 text-2xl font-semibold leading-snug text-navy-700">{product.heading}</h2>
          <p className="mt-4 text-base text-muted leading-relaxed">{detail.summary}</p>

          <ul className="sp-facts">
            {detail.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          {/* At a glance: the four things a buyer asks before a demo. */}
          <dl className="pd-specs">
            {detail.specs.map((s, i) => (
              <div key={s.label} style={{ ["--i" as string]: i }}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>

          <p className="sp-stage">
            {detail.stage} · {detail.stageNote}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Talk to us about {product.name}&nbsp;→
            </Link>
            <Link href="/services/cybersecurity" className="btn-ghost">
              How it fits AI Shield
            </Link>
          </div>
        </div>
      </div>
      <span className="pd-count" aria-hidden>{`0${index + 1}`}</span>
    </section>
  );
}

export function ProductDetailSections() {
  return (
    <>
      {PRODUCTS.map((p, i) => (
        <ProductBlock
          key={p.slug}
          product={p}
          detail={DETAIL[p.name]}
          dark={i % 2 === 1}
          flip={i % 2 === 1}
          index={i}
        />
      ))}
    </>
  );
}
