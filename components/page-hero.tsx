import Link from "next/link";
import type { ReactNode } from "react";

export type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, crumbs, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-brand-600/10 bg-gradient-to-b from-[#FDF0E8] via-[#FDF6F2] to-neutral-50">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-brand-500/15 blur-3xl"
      />
      <div className="container relative pt-16 pb-12 md:pt-24 md:pb-14">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="crumbs mb-6">
            {crumbs.map((c, i) => (
              <span key={i} className="contents">
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span className="text-muted">{c.label}</span>}
                {i < crumbs.length - 1 && <span aria-hidden>/</span>}
              </span>
            ))}
          </nav>
        )}
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg text-muted leading-relaxed">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
