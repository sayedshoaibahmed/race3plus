import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{ minHeight: "80vh", padding: "4rem 1.5rem" }}
    >
      {/* 404 number */}
      <p
        className="neon-text"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 900,
          fontSize: "clamp(5rem, 20vw, 10rem)",
          lineHeight: 1,
          opacity: 0.3,
        }}
        aria-hidden="true"
      >
        404
      </p>

      <h1
        className="text-3xl md:text-5xl mt-4"
        style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
      >
        Page Not Found
      </h1>

      <p
        className="mt-4 mb-8 max-w-md text-base leading-relaxed"
        style={{ color: "var(--color-text-muted)" }}
      >
        Sorry, we could not find the page you were looking for. It may have
        been moved, or the link might be incorrect.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
        <Link href="/products" className="btn-secondary">
          View Products
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact Us
        </Link>
      </div>

      {/* Quick links */}
      <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 justify-center" aria-label="Site links">
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="footer-link text-sm"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
