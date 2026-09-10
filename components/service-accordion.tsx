"use client";

import { useId, useState, type ReactNode } from "react";

/* Capability panels collapse. On ERP, which carries a dozen groups, the open
   state was a wall of bullets between the reader and the rest of the page.
   The first panel opens so the pattern is legible without a click.

   The collapse is grid-template-rows 1fr → 0fr rather than max-height, so it
   animates to the content's real height instead of a guessed one. That needs
   .svc-accbody to hold exactly one grid child — hence the inner div — and the
   card to be align-self: start, or the grid stretches a collapsed panel to its
   open sibling's height and nothing appears to close. */
export function ServiceAccordion({
  label,
  children,
  defaultOpen = false
}: {
  label: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="svc-acc" data-open={open}>
      <h4>
        <button
          type="button"
          className="svc-acchead"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{label}</span>
          <svg viewBox="0 0 24 24" className="svc-accchev" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </h4>
      <div className="svc-accbody" id={id}>
        <div>
          <div className="svc-accinner">{children}</div>
        </div>
      </div>
    </div>
  );
}
