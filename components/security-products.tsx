"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
/* Three product cards: illustration, then heading, then two lines.
   The illustrations are inline SVG rather than screenshots, because there are no
   product screenshots to use and a placeholder image would be worse than a
   diagram that actually explains the shape of the thing. Each one draws the same
   idea the copy makes: the product sits inside the client's own boundary. */

const STROKE = "#C8401A";
const INK = "#292420";
const LINE = "#E7E3DE";

/** kaveo: three clouds collected read-only into a boundary that nothing leaves. */
export function KaveoArt() {
  return (
    <svg viewBox="0 0 340 150" className="w-full h-auto" role="img"
         aria-label="AWS, Azure and GCP accounts feeding a read-only collector inside your own boundary, with findings staying inside it.">
      <rect x="150" y="14" width="176" height="122" rx="10" fill="#FDF3EE" stroke={STROKE} strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="238" y="32" textAnchor="middle" fontSize="8.5" fill={STROKE} fontWeight="700" letterSpacing="0.8">YOUR ACCOUNT</text>

      {["AWS", "Azure", "GCP"].map((c, i) => (
        <g key={c}>
          <rect x="12" y={26 + i * 36} width="66" height="26" rx="6" fill="#fff" stroke={LINE} strokeWidth="1.5" />
          <text x="45" y={43 + i * 36} textAnchor="middle" fontSize="10" fill={INK} fontWeight="600">{c}</text>
          <path className="sp-wire" d={`M78 ${39 + i * 36} H112 Q120 ${39 + i * 36} 120 75 V75`} fill="none" stroke={STROKE} strokeWidth="1.4" opacity="0.55" />
        </g>
      ))}
      <path className="sp-wire" d="M120 75 H150" fill="none" stroke={STROKE} strokeWidth="1.6" />
      <text x="126" y="68" fontSize="7.5" fill={STROKE} fontWeight="700">READ ONLY</text>

      <rect x="166" y="52" width="94" height="30" rx="7" fill={INK} />
      <text x="213" y="71" textAnchor="middle" fontSize="10.5" fill="#fff" fontWeight="700">kaveo</text>

      {[0, 1, 2].map((i) => (
        <g key={i} className="sp-row" style={{ "--i": i } as React.CSSProperties}>
          <rect x="166" y={92 + i * 15} width="144" height="10" rx="3" fill="#fff" stroke={LINE} />
          <rect x="170" y={95 + i * 15} width="4" height="4" rx="1" fill={STROKE} opacity={1 - i * 0.28} />
          <rect x="180" y={95.5 + i * 15} width={104 - i * 22} height="3" rx="1.5" fill={INK} opacity="0.28" />
        </g>
      ))}
    </svg>
  );
}

/** Vectasec: the layer between services, which is the part usually unaudited. */
export function VectasecArt() {
  return (
    <svg viewBox="0 0 340 150" className="w-full h-auto" role="img"
         aria-label="Services connecting through an audited middleware layer of API gateways, message brokers and service meshes.">
      {[0, 1, 2].map((i) => (
        <g key={`l${i}`}>
          <rect x="10" y={24 + i * 38} width="58" height="26" rx="6" fill="#fff" stroke={LINE} strokeWidth="1.5" />
          <text x="39" y={41 + i * 38} textAnchor="middle" fontSize="9" fill={INK} fontWeight="600">Service</text>
          <path className="sp-wire" d={`M68 ${37 + i * 38} H124`} stroke={STROKE} strokeWidth="1.3" opacity="0.5" fill="none" />
        </g>
      ))}

      <rect x="124" y="12" width="92" height="126" rx="9" fill="#FDF3EE" stroke={STROKE} strokeWidth="1.5" />
      <text x="170" y="30" textAnchor="middle" fontSize="8.5" fill={STROKE} fontWeight="700" letterSpacing="0.6">AUDITED</text>
      {["API gateway", "Broker", "Service mesh"].map((t, i) => (
        <g key={t} className="sp-pulse" style={{ "--i": i } as React.CSSProperties}>
          <rect x="134" y={40 + i * 30} width="72" height="22" rx="5" fill="#fff" stroke={STROKE} strokeWidth="1.1" />
          <text x="170" y={54.5 + i * 30} textAnchor="middle" fontSize="8.5" fill={INK} fontWeight="600">{t}</text>
        </g>
      ))}

      {[0, 1, 2].map((i) => (
        <g key={`r${i}`}>
          <path className="sp-wire" d={`M216 ${37 + i * 38} H272`} stroke={STROKE} strokeWidth="1.3" opacity="0.5" fill="none" />
          <rect x="272" y={24 + i * 38} width="58" height="26" rx="6" fill="#fff" stroke={LINE} strokeWidth="1.5" />
          <text x="301" y={41 + i * 38} textAnchor="middle" fontSize="9" fill={INK} fontWeight="600">Service</text>
        </g>
      ))}
    </svg>
  );
}

/** aegis: every tool call authenticated, then hash-chained into an audit log. */
export function AegisArt() {
  return (
    <svg viewBox="0 0 340 150" className="w-full h-auto" role="img"
         aria-label="Agents calling MCP servers through a gateway that authenticates, authorizes and rate limits, writing a hash-chained audit log.">
      {["Agent", "Agent", "Client"].map((t, i) => (
        <g key={i}>
          <rect x="8" y={18 + i * 34} width="56" height="24" rx="6" fill="#fff" stroke={LINE} strokeWidth="1.5" />
          <text x="36" y={34 + i * 34} textAnchor="middle" fontSize="9" fill={INK} fontWeight="600">{t}</text>
          <path className="sp-wire" d={`M64 ${30 + i * 34} H104`} stroke={STROKE} strokeWidth="1.3" opacity="0.55" fill="none" />
        </g>
      ))}

      <rect x="104" y="14" width="96" height="84" rx="8" fill={INK} />
      <text x="152" y="34" textAnchor="middle" fontSize="10.5" fill="#fff" fontWeight="700">Aegis</text>
      {["Authenticate", "Authorize", "Rate limit"].map((t, i) => (
        <text key={t} x="152" y={52 + i * 15} textAnchor="middle" fontSize="8" fill="#fff" opacity="0.82">{t}</text>
      ))}

      {[0, 1].map((i) => (
        <g key={`s${i}`}>
          <path className="sp-wire" d={`M200 ${40 + i * 30} H244`} stroke={STROKE} strokeWidth="1.3" opacity="0.55" fill="none" />
          <rect x="244" y={28 + i * 30} width="86" height="24" rx="6" fill="#fff" stroke={LINE} strokeWidth="1.5" />
          <text x="287" y={44 + i * 30} textAnchor="middle" fontSize="9" fill={INK} fontWeight="600">MCP server</text>
        </g>
      ))}

      {/* hash-chained log: each block links to the one before it */}
      <text x="104" y="118" fontSize="7.5" fill={STROKE} fontWeight="700" letterSpacing="0.6">HASH-CHAINED LOG</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={`h${i}`} className="sp-block" style={{ "--i": i } as React.CSSProperties}>
          <rect x={104 + i * 34} y="124" width="26" height="14" rx="3" fill="#fff" stroke={STROKE} strokeWidth="1.1" />
          {i < 4 && <path d={`M130 ${131} H${138 + i * 34}`} stroke={STROKE} strokeWidth="1.1" opacity="0.6" transform={`translate(${i * 34},0)`} />}
        </g>
      ))}
    </svg>
  );
}

export const PRODUCTS = [
  {
    art: <KaveoArt />,
    slug: "kaveo",
    name: "kaveo",
    kind: "Cloud security posture",
    short: "CSPM",
    heading: "Posture that never leaves your account",
    body: "Finds misconfigurations across AWS, Azure, GCP and Kubernetes through a read-only role inside your own environment. No configuration or log data is shipped to a vendor cloud."
  },
  {
    art: <VectasecArt />,
    slug: "vectasec",
    name: "Vectasec",
    kind: "Middleware security",
    short: "API · Mesh",
    heading: "Security for the layer between services",
    body: "Audits the connective tissue most tools skip: API gateways, message brokers and service meshes. Catches authentication gaps, over-broad routing and policy drift between environments."
  },
  {
    art: <AegisArt />,
    slug: "aegis",
    name: "Aegis",
    kind: "MCP gateway",
    short: "AuthN · AuthZ · Audit",
    heading: "Every tool call authenticated and logged",
    body: "A gateway in front of your MCP servers adding authentication, role-based authorization, threat filtering and rate limiting. Writes a hash-chained audit log you can verify independently."
  }
];

/* Which lifecycle stage each product runs at, and the four things about it
   worth a line. Only the expanded sections variant shows these; the homepage
   band stays a three-up summary. */
const FACTS: Record<string, { stage: string; facts: string[] }> = {
  kaveo: {
    stage: "Runs at the Detect stage",
    facts: [
      "Read-only role, deployed inside your own account",
      "AWS, Azure, GCP and Kubernetes in one view",
      "Findings become dated, cited evidence artifacts",
      "Nothing egresses: no configuration, no logs, no telemetry"
    ]
  },
  Vectasec: {
    stage: "Runs at the Analyze stage",
    facts: [
      "API gateways, message brokers and service meshes",
      "Authentication gaps and over-broad routing surfaced",
      "Policy drift caught between environments",
      "The layer most scanners never look at"
    ]
  },
  Aegis: {
    stage: "Runs at the Respond stage",
    facts: [
      "Authentication and role-based authorization per tool call",
      "Threat filtering and rate limiting at the gateway",
      "Guardrails in place before agents become load-bearing"
    ]
  }
};

/* Every animation is gated on .is-in so nothing runs off-screen, and .is-armed
   is added from JS, so with JS off the content renders at rest rather than
   stuck at opacity 0. */
function useArmedOnView<T extends HTMLElement>(rootMargin: string) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("is-armed");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (el.classList.add("is-in"), io.disconnect()),
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);
  return ref;
}

/* The monitored-surface backdrop. Every .sp section carries one. */
function SpBackdrop() {
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
      <span className="sp-threat sp-t3" />
      <span className="sp-sweep" />
    </div>
  );
}

/* One full-width section per product, art on one side and copy on the other,
   alternating so Vectasec mirrors the two either side of it. Each is its own
   anchor target, so the nav and the hero strip can land on a single product. */
function ProductSection({
  product,
  dark,
  flip
}: {
  product: (typeof PRODUCTS)[number];
  dark: boolean;
  flip: boolean;
}) {
  const ref = useArmedOnView<HTMLElement>("-8%");
  const extra = FACTS[product.name];

  return (
    <section
      ref={ref}
      id={`product-${product.slug}`}
      className={`section sp relative isolate overflow-hidden scroll-mt-24 ${
        dark ? "is-dark bg-navy-700" : "bg-white"
      }`}
    >
      <SpBackdrop />
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

          <h2 className="mt-5 text-2xl font-semibold leading-snug text-navy-700">
            {product.heading}
          </h2>
          <p className="mt-4 text-base text-muted leading-relaxed">{product.body}</p>

          {extra && (
            <>
              <ul className="sp-facts">
                {extra.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="sp-stage">{extra.stage}</p>
            </>
          )}

          <div className="mt-6">
            <Link href="/contact" className="btn-primary">
              Talk to us about {product.name}&nbsp;→
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SecurityProductSections() {
  return (
    <>
      {PRODUCTS.map((p, i) => (
        <ProductSection key={p.slug} product={p} dark={i % 2 === 1} flip={i % 2 === 1} />
      ))}
    </>
  );
}

export function SecurityProducts() {
  const ref = useArmedOnView<HTMLElement>("-10%");

  return (
    <section ref={ref} className="section sp is-dark bg-navy-700 relative isolate overflow-hidden" id="security-products">
      <SpBackdrop />

      <div className="container relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Security products we build</p>
          <h2 className="mt-3">kaveo, Vectasec and Aegis. Tools that run inside your estate, not ours.</h2>
          <p className="mt-4 text-muted">
            Three products built by our own engineers, for teams who cannot ship telemetry to a
            vendor cloud. Every finding cites the stored observation that produced it, so auditors
            get evidence rather than dashboard screenshots.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              style={{ "--i": i } as React.CSSProperties}
              className="sp-card flex flex-col rounded-2xl border border-line bg-white p-7 md:p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover hover:border-sky/40"
            >
              <div className="rounded-xl border border-line bg-neutral-50 p-5">{p.art}</div>
              <div className="sp-lock">
                <span className="sp-built">Built by Vibrant</span>
                <p className="sp-name">{p.name}</p>
                <p className="sp-kind">
                  {p.kind}
                  <span className="sp-dot" aria-hidden>·</span>
                  {p.short}
                </p>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-navy-700 leading-snug">{p.heading}</h3>
              <p className="mt-3 text-base text-muted leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
