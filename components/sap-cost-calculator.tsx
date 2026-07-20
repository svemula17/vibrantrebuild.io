"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

/* Indicative cost model — directional planning figures only */
const BASE_COST = 150_000;

const MODULES = [
  { id: "fico", label: "Finance (FI/CO)", cost: 90_000 },
  { id: "sd", label: "Sales & Distribution (SD)", cost: 80_000 },
  { id: "mm", label: "Sourcing & Procurement (MM)", cost: 70_000 },
  { id: "pp", label: "Production Planning (PP)", cost: 110_000 },
  { id: "ewm", label: "Warehouse (EWM)", cost: 130_000 },
  { id: "tm", label: "Transportation (TM)", cost: 120_000 },
  { id: "ibp", label: "Planning (IBP)", cost: 100_000 }
] as const;

const LANDSCAPES = [
  { id: "single", label: "Single instance", multiplier: 1.0 },
  { id: "multi", label: "2–3 systems", multiplier: 1.35 },
  { id: "global", label: "Global multi-instance", multiplier: 1.8 }
] as const;

const APPROACHES = [
  { id: "greenfield", label: "Greenfield (new implementation)", multiplier: 1.0 },
  { id: "brownfield", label: "Brownfield (system conversion)", multiplier: 0.85 },
  { id: "selective", label: "Selective data transition", multiplier: 1.25 }
] as const;

function userCost(users: number) {
  const tier1 = Math.min(users, 500) * 200;
  const tier2 = Math.max(Math.min(users, 2000) - 500, 0) * 120;
  const tier3 = Math.max(users - 2000, 0) * 70;
  return tier1 + tier2 + tier3;
}

function roundTo25k(n: number) {
  return Math.round(n / 25_000) * 25_000;
}

function fmt(n: number) {
  return n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`
    : `$${Math.round(n / 1000)}K`;
}

export function SapCostCalculator() {
  const [users, setUsers] = useState(250);
  const [modules, setModules] = useState<string[]>(["fico"]);
  const [landscape, setLandscape] = useState<string>("single");
  const [approach, setApproach] = useState<string>("brownfield");

  const toggleModule = (id: string) =>
    setModules((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]));

  const { low, high } = useMemo(() => {
    const moduleCost = MODULES.filter((m) => modules.includes(m.id)).reduce(
      (sum, m) => sum + m.cost,
      0
    );
    const landscapeMult = LANDSCAPES.find((l) => l.id === landscape)?.multiplier ?? 1;
    const approachMult = APPROACHES.find((a) => a.id === approach)?.multiplier ?? 1;
    const estimate = (BASE_COST + userCost(users) + moduleCost) * landscapeMult * approachMult;
    return { low: roundTo25k(estimate * 0.8), high: roundTo25k(estimate * 1.25) };
  }, [users, modules, landscape, approach]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr,minmax(320px,400px)] lg:items-start">
      {/* Inputs */}
      <div className="card p-7 space-y-8">
        {/* Users */}
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="calc-users" className="text-sm font-semibold text-navy-700">
              SAP users
            </label>
            <span className="text-sm font-bold text-sky">{users.toLocaleString()}</span>
          </div>
          <input
            id="calc-users"
            type="range"
            min={50}
            max={5000}
            step={50}
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
            className="mt-3 w-full accent-[#C8401A]"
          />
          <div className="mt-1 flex justify-between text-xs text-muted">
            <span>50</span>
            <span>5,000</span>
          </div>
        </div>

        {/* Modules */}
        <fieldset>
          <legend className="text-sm font-semibold text-navy-700">Modules in scope</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {MODULES.map((m) => (
              <label
                key={m.id}
                className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm transition-all ${
                  modules.includes(m.id)
                    ? "border-sky/50 bg-sky/5 text-navy-700 font-medium"
                    : "border-line text-ink/70 hover:border-navy-200"
                }`}
              >
                <input
                  type="checkbox"
                  checked={modules.includes(m.id)}
                  onChange={() => toggleModule(m.id)}
                  className="rounded border-line text-[#C8401A] focus:ring-sky"
                />
                {m.label}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Landscape */}
        <div>
          <label htmlFor="calc-landscape" className="text-sm font-semibold text-navy-700">
            Landscape size
          </label>
          <select
            id="calc-landscape"
            value={landscape}
            onChange={(e) => setLandscape(e.target.value)}
            className="mt-3 w-full rounded-xl border-line text-sm focus:border-sky focus:ring-sky"
          >
            {LANDSCAPES.map((l) => (
              <option key={l.id} value={l.id}>
                {l.label}
              </option>
            ))}
          </select>
        </div>

        {/* Approach */}
        <fieldset>
          <legend className="text-sm font-semibold text-navy-700">Migration approach</legend>
          <div className="mt-3 space-y-2">
            {APPROACHES.map((a) => (
              <label
                key={a.id}
                className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm transition-all ${
                  approach === a.id
                    ? "border-sky/50 bg-sky/5 text-navy-700 font-medium"
                    : "border-line text-ink/70 hover:border-navy-200"
                }`}
              >
                <input
                  type="radio"
                  name="approach"
                  checked={approach === a.id}
                  onChange={() => setApproach(a.id)}
                  className="border-line text-[#C8401A] focus:ring-sky"
                />
                {a.label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Result */}
      <div className="lg:sticky lg:top-28 space-y-4">
        <div className="rounded-2xl bg-navy-900 p-7 text-white shadow-cardHover">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            Indicative range
          </p>
          <p className="mt-3 text-4xl font-bold tracking-tight" aria-live="polite">
            {fmt(low)} <span className="text-white/40">–</span> {fmt(high)}
          </p>
          <p className="mt-3 text-sm text-white/65">
            {users.toLocaleString()} users · {modules.length}{" "}
            {modules.length === 1 ? "module" : "modules"} ·{" "}
            {LANDSCAPES.find((l) => l.id === landscape)?.label.toLowerCase()} ·{" "}
            {APPROACHES.find((a) => a.id === approach)?.label.split(" ")[0].toLowerCase()}
          </p>
          <div className="mt-5 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/50">
            Directional planning figure only. Actual cost depends on data quality,
            customizations, integrations, and change-management scope — a 30-minute scoping
            call gets you a real estimate.
          </div>
          <Link href="/contact" className="btn-primary mt-5 w-full">
            Get a real estimate
          </Link>
        </div>
        <p className="text-xs text-muted leading-relaxed">
          Model assumptions: implementation services only (no SAP licensing or infrastructure),
          blended onshore/offshore delivery, mid-market data complexity.
        </p>
      </div>
    </div>
  );
}
