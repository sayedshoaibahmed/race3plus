import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

// Instagram SVG icon
function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-r3">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.webp"
              alt="Race3+ logo"
              width={140}
              height={48}
              loading="lazy"
              className="h-[32px] md:h-[44px] w-auto"
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
            <p className="text-sm max-w-[240px] leading-relaxed footer-link" style={{ pointerEvents: "none" }}>
              {siteConfig.tagline}
            </p>
            {/* Instagram */}
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Race3+ on Instagram"
              className="footer-social"
            >
              <InstagramIcon />
              <span className="text-sm font-medium">@race3plus</span>
            </a>
          </div>

          {/* Quick Links column */}
          <div>
            <h3
              className="text-xs font-bold uppercase mb-4 neon-text-sm"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.18em",
              }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3
              className="text-xs font-bold uppercase mb-4 neon-text-sm"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.18em",
              }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="footer-link text-sm">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="footer-link text-sm">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Accent divider */}
        <div className="divider-accent-line mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "#4B5563" }}>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#6B7280" }}>
            {siteConfig.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
