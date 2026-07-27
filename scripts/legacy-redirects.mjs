/**
 * Static-export redirect stubs.
 *
 * `output: "export"` ignores next.config redirects(), so retired service URLs
 * would 404 after the 19 → 7 consolidation. This writes a tiny HTML file at
 * each old path that canonicals + meta-refreshes to its parent service, so
 * search equity and old links survive.
 *
 * Run after `next build` (see package.json "build").
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const SITE_URL = "https://vibrantinc.com";

/** retired slug -> surviving parent slug */
const REDIRECTS = {
  "sap-s4hana-implementation": "sap-solutions",
  "sap-ams": "sap-solutions",
  "sap-supply-chain": "sap-solutions",
  "sap-btp": "sap-solutions",
  "sap-integration": "sap-solutions",
  "sap-fiori-ux": "sap-solutions",
  "sap-clean-core": "sap-solutions",
  "sap-abap": "sap-solutions",
  "jd-edwards-cnc": "erp-optimization",
  "peoplesoft-implementation": "erp-optimization",
  "ai-shield": "cybersecurity",
  automation: "ai-readiness"
};

const stub = (target, canonical) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="${canonical}">
<meta name="robots" content="noindex,follow">
<meta http-equiv="refresh" content="0; url=${target}">
<script>window.location.replace(${JSON.stringify(target)});</script>
</head>
<body>Redirecting to <a href="${target}">${target}</a>…</body>
</html>
`;

const out = path.join(process.cwd(), "out", "services");
let written = 0;

for (const [from, to] of Object.entries(REDIRECTS)) {
  const dir = path.join(out, from);
  const target = `${BASE_PATH}/services/${to}/`;
  const canonical = `${SITE_URL}/services/${to}/`;
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), stub(target, canonical), "utf8");
  written += 1;
}

console.log(`legacy-redirects: wrote ${written} redirect stubs into out/services/`);
