import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CapabilityFlow } from "@/components/capability-flow";
import { getCapabilityFlow, serviceCards } from "@/content/site-content";

/* What we do: the seven services drawn as the sequence clients actually walk,
   rather than a grid of equal tiles. The full catalogue lives on /services. */
export function Capabilities() {
  const { stages, rail } = getCapabilityFlow();
  const totalServices = serviceCards.filter((s) => !s.hideFromGrid).length;

  if (!rail) return null;

  return (
    <section className="section section-soft" id="capabilities">
      <div className="container">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3">Seven Capabilities. One Vibrant Partner.</h2>
          <p className="mt-5 max-w-2xl text-muted leading-relaxed">
            Most clients start at the core and work right. You can enter anywhere, and one
            team stays accountable the whole way across.
          </p>
        </Reveal>

        <CapabilityFlow stages={stages} rail={rail} className="mt-14" />

        <div className="mt-12 flex justify-center">
          <Link href="/services" className="btn-ghost inline-flex items-center gap-2">
            Explore all {totalServices} services
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
