import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container max-w-2xl text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3">This page can&apos;t be found.</h1>
        <p className="mt-5 text-muted">
          The page you&apos;re looking for may have moved or no longer exists. Use the navigation
          above, or jump back to one of these.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/services" className="btn-ghost">Browse services</Link>
          <Link href="/contact" className="btn-ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
