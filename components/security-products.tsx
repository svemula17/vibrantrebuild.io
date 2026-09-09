/* Three product cards: illustration, then heading, then two lines.
   The illustrations are inline SVG rather than screenshots, because there are no
   product screenshots to use and a placeholder image would be worse than a
   diagram that actually explains the shape of the thing. Each one draws the same
   idea the copy makes: the product sits inside the client's own boundary. */

const STROKE = "#C8401A";
const INK = "#292420";
const LINE = "#E7E3DE";

/** kaveo: three clouds collected read-only into a boundary that nothing leaves. */
function KaveoArt() {
  return (
    <svg viewBox="0 0 340 150" className="w-full h-auto" role="img"
         aria-label="AWS, Azure and GCP accounts feeding a read-only collector inside your own boundary, with findings staying inside it.">
      <rect x="150" y="14" width="176" height="122" rx="10" fill="#FDF3EE" stroke={STROKE} strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="238" y="32" textAnchor="middle" fontSize="8.5" fill={STROKE} fontWeight="700" letterSpacing="0.8">YOUR ACCOUNT</text>

      {["AWS", "Azure", "GCP"].map((c, i) => (
        <g key={c}>
          <rect x="12" y={26 + i * 36} width="66" height="26" rx="6" fill="#fff" stroke={LINE} strokeWidth="1.5" />
          <text x="45" y={43 + i * 36} textAnchor="middle" fontSize="10" fill={INK} fontWeight="600">{c}</text>
          <path d={`M78 ${39 + i * 36} H112 Q120 ${39 + i * 36} 120 75 V75`} fill="none" stroke={STROKE} strokeWidth="1.4" opacity="0.55" />
        </g>
      ))}
      <path d="M120 75 H150" fill="none" stroke={STROKE} strokeWidth="1.6" />
      <text x="126" y="68" fontSize="7.5" fill={STROKE} fontWeight="700">READ ONLY</text>

      <rect x="166" y="52" width="94" height="30" rx="7" fill={INK} />
      <text x="213" y="71" textAnchor="middle" fontSize="10.5" fill="#fff" fontWeight="700">kaveo</text>

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="166" y={92 + i * 15} width="144" height="10" rx="3" fill="#fff" stroke={LINE} />
          <rect x="170" y={95 + i * 15} width="4" height="4" rx="1" fill={STROKE} opacity={1 - i * 0.28} />
          <rect x="180" y={95.5 + i * 15} width={104 - i * 22} height="3" rx="1.5" fill={INK} opacity="0.28" />
        </g>
      ))}
    </svg>
  );
}

/** Vectasec: the layer between services, which is the part usually unaudited. */
function VectasecArt() {
  return (
    <svg viewBox="0 0 340 150" className="w-full h-auto" role="img"
         aria-label="Services connecting through an audited middleware layer of API gateways, message brokers and service meshes.">
      {[0, 1, 2].map((i) => (
        <g key={`l${i}`}>
          <rect x="10" y={24 + i * 38} width="58" height="26" rx="6" fill="#fff" stroke={LINE} strokeWidth="1.5" />
          <text x="39" y={41 + i * 38} textAnchor="middle" fontSize="9" fill={INK} fontWeight="600">Service</text>
          <path d={`M68 ${37 + i * 38} H124`} stroke={STROKE} strokeWidth="1.3" opacity="0.5" fill="none" />
        </g>
      ))}

      <rect x="124" y="12" width="92" height="126" rx="9" fill="#FDF3EE" stroke={STROKE} strokeWidth="1.5" />
      <text x="170" y="30" textAnchor="middle" fontSize="8.5" fill={STROKE} fontWeight="700" letterSpacing="0.6">AUDITED</text>
      {["API gateway", "Broker", "Service mesh"].map((t, i) => (
        <g key={t}>
          <rect x="134" y={40 + i * 30} width="72" height="22" rx="5" fill="#fff" stroke={STROKE} strokeWidth="1.1" />
          <text x="170" y={54.5 + i * 30} textAnchor="middle" fontSize="8.5" fill={INK} fontWeight="600">{t}</text>
        </g>
      ))}

      {[0, 1, 2].map((i) => (
        <g key={`r${i}`}>
          <path d={`M216 ${37 + i * 38} H272`} stroke={STROKE} strokeWidth="1.3" opacity="0.5" fill="none" />
          <rect x="272" y={24 + i * 38} width="58" height="26" rx="6" fill="#fff" stroke={LINE} strokeWidth="1.5" />
          <text x="301" y={41 + i * 38} textAnchor="middle" fontSize="9" fill={INK} fontWeight="600">Service</text>
        </g>
      ))}
    </svg>
  );
}

/** aegis: every tool call authenticated, then hash-chained into an audit log. */
function AegisArt() {
  return (
    <svg viewBox="0 0 340 150" className="w-full h-auto" role="img"
         aria-label="Agents calling MCP servers through a gateway that authenticates, authorizes and rate limits, writing a hash-chained audit log.">
      {["Agent", "Agent", "Client"].map((t, i) => (
        <g key={i}>
          <rect x="8" y={18 + i * 34} width="56" height="24" rx="6" fill="#fff" stroke={LINE} strokeWidth="1.5" />
          <text x="36" y={34 + i * 34} textAnchor="middle" fontSize="9" fill={INK} fontWeight="600">{t}</text>
          <path d={`M64 ${30 + i * 34} H104`} stroke={STROKE} strokeWidth="1.3" opacity="0.55" fill="none" />
        </g>
      ))}

      <rect x="104" y="14" width="96" height="84" rx="8" fill={INK} />
      <text x="152" y="34" textAnchor="middle" fontSize="10.5" fill="#fff" fontWeight="700">aegis</text>
      {["Authenticate", "Authorize", "Rate limit"].map((t, i) => (
        <text key={t} x="152" y={52 + i * 15} textAnchor="middle" fontSize="8" fill="#fff" opacity="0.82">{t}</text>
      ))}

      {[0, 1].map((i) => (
        <g key={`s${i}`}>
          <path d={`M200 ${40 + i * 30} H244`} stroke={STROKE} strokeWidth="1.3" opacity="0.55" fill="none" />
          <rect x="244" y={28 + i * 30} width="86" height="24" rx="6" fill="#fff" stroke={LINE} strokeWidth="1.5" />
          <text x="287" y={44 + i * 30} textAnchor="middle" fontSize="9" fill={INK} fontWeight="600">MCP server</text>
        </g>
      ))}

      {/* hash-chained log: each block links to the one before it */}
      <text x="104" y="118" fontSize="7.5" fill={STROKE} fontWeight="700" letterSpacing="0.6">HASH-CHAINED LOG</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={`h${i}`}>
          <rect x={104 + i * 34} y="124" width="26" height="14" rx="3" fill="#fff" stroke={STROKE} strokeWidth="1.1" />
          {i < 4 && <path d={`M130 ${131} H${138 + i * 34}`} stroke={STROKE} strokeWidth="1.1" opacity="0.6" transform={`translate(${i * 34},0)`} />}
        </g>
      ))}
    </svg>
  );
}

const PRODUCTS = [
  {
    art: <KaveoArt />,
    name: "kaveo",
    heading: "Posture that never leaves your account",
    body: "Finds misconfigurations across AWS, Azure, GCP and Kubernetes through a read-only role inside your own environment. No configuration or log data is shipped to a vendor cloud."
  },
  {
    art: <VectasecArt />,
    name: "Vectasec",
    heading: "Security for the layer between services",
    body: "Audits the connective tissue most tools skip: API gateways, message brokers and service meshes. Catches authentication gaps, over-broad routing and policy drift between environments."
  },
  {
    art: <AegisArt />,
    name: "aegis",
    heading: "Every tool call authenticated and logged",
    body: "A gateway in front of your MCP servers adding authentication, role-based authorization, threat filtering and rate limiting. Writes a hash-chained audit log you can verify independently."
  }
];

export function SecurityProducts() {
  return (
    <section className="section-soft">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">Security products we build</p>
          <h2 className="mt-3">Tools that run inside your estate, not ours.</h2>
          <p className="mt-4 text-muted">
            Three products built by our own engineers, for teams who cannot ship telemetry to a
            vendor cloud. Every finding cites the stored observation that produced it, so auditors
            get evidence rather than dashboard screenshots.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover hover:border-sky/40"
            >
              <div className="rounded-xl border border-line bg-neutral-50 p-4">{p.art}</div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                {p.name}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-navy-700 leading-snug">{p.heading}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
