import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow-stack">
        <p className="eyebrow">Page not found</p>
        <h1>That page has moved in the rebuild.</h1>
        <p>Use the streamlined navigation or head to Services to keep exploring.</p>
        <Link href="/services" className="button button-primary">
          Browse services
        </Link>
      </div>
    </section>
  );
}
