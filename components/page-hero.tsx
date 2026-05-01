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
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-50/70 to-white">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[24rem] w-[24rem] rounded-full bg-sky/10 blur-3xl"
      />
      <div className="container relative pt-20 pb-16 md:pt-28 md:pb-20">
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
