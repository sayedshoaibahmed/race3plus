import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/* ── Metadata ── */
export const metadata: Metadata = {
  title: "Keep Performance Alive",
  description:
    "Race3+ delivers premium automotive engine protection — coolants, additives, and performance solutions engineered to keep your engine running cooler, longer, and stronger.",
  openGraph: {
    title: "Race3+ — Keep Performance Alive",
    description:
      "Premium automotive engine protection solutions. Engine coolants and additives engineered for cars, bikes, SUVs, and commercial vehicles.",
    url: siteConfig.url,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Race3+" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Race3+ — Keep Performance Alive",
    description: "Premium automotive engine protection solutions.",
    images: ["/logo.png"],
  },
};

/* ── JSON-LD Schema ── */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Race3+",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: [siteConfig.instagram],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
    },
  ],
  email: siteConfig.email,
};

/* ─────────────────────────────────────────────
   SVG ICONS
   ───────────────────────────────────────────── */

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   BENEFIT DATA
   ───────────────────────────────────────────── */

const benefits = [
  {
    id: "high-cooling-efficiency",
    label: "High Cooling Efficiency",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
        <line x1="12" y1="2" x2="9" y2="5" />
        <line x1="12" y1="2" x2="15" y2="5" />
        <line x1="12" y1="22" x2="9" y2="19" />
        <line x1="12" y1="22" x2="15" y2="19" />
        <line x1="2" y1="12" x2="5" y2="9" />
        <line x1="2" y1="12" x2="5" y2="15" />
        <line x1="22" y1="12" x2="19" y2="9" />
        <line x1="22" y1="12" x2="19" y2="15" />
      </svg>
    ),
  },
  {
    id: "engine-protection",
    label: "Engine Protection",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "corrosion-resistant",
    label: "Corrosion Resistant",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
        <path d="M8.5 8.5l7 7" />
      </svg>
    ),
  },
  {
    id: "all-vehicles",
    label: "Cars, Bikes & SUVs ",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: "replacement-cycle",
    label: "Recommended 9-Month Cycle",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* ── 1. HERO ─────────────────────────────── */}
      <section
        className="relative hero-grid-bg section-angled overflow-hidden"
        style={{
          minHeight: "100svh",
          background: "linear-gradient(160deg, #000000 0%, #0A0A0A 50%, #060D02 100%)",
          display: "flex",
          alignItems: "center",
        }}
        aria-label="Hero"
      >
        {/* Glow blobs */}
        <div
          className="hero-glow-blob"
          style={{ top: "-120px", left: "50%", transform: "translateX(-50%)" }}
          aria-hidden="true"
        />
        <div
          className="hero-glow-blob"
          style={{
            bottom: "-200px",
            right: "-100px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, #6DC13514 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="container-r3 relative z-10 flex flex-col items-center text-center gap-8 py-24">
          {/* Eyebrow */}
          <div className="hero-eyebrow animate-fade-up" aria-hidden="true">
            Automotive Performance
          </div>

          {/* Logo / Wordmark */}
          <div className="animate-fade-up delay-100">
            <Image
              src="/logo.webp"
              alt="Race3+ — Keep Performance Alive"
              width={480}
              height={164}
              priority
              className="h-[64px] md:h-[96px] w-auto"
              style={{ objectFit: "contain", maxWidth: "90vw" }}
            />
          </div>

          {/* Tagline */}
          <p
            className="text-xl md:text-2xl neon-text animate-neon-pulse animate-fade-up delay-200"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 800, letterSpacing: "0.08em" }}
          >
            Keep Performance Alive.
          </p>

          {/* Supporting line */}
          <p
            className="text-base md:text-lg max-w-xl leading-relaxed animate-fade-up delay-300"
            style={{ color: "var(--color-text-muted)" }}
          >
            Engineered to protect your engine against heat, wear, and corrosion —
            so every drive delivers the performance you depend on.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up delay-400">
            <Link href="/products" className="btn-primary">
              View Product
            </Link>
            <a
              href={siteConfig.whatsappLaunchMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              aria-label="WhatsApp Us — chat on WhatsApp"
            >
              <WhatsAppIcon size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* Scroll hint */}
          <div
            className="animate-fade-up delay-600 mt-4"
            aria-hidden="true"
            style={{ color: "#3F3F3F" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT TEASER ─────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--color-brand-bg-deep)" }}
        aria-labelledby="about-heading"
      >
        <div className="container-r3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text block */}
            <div className="flex flex-col gap-6">
              {/* Section label */}
              <span className="hero-eyebrow" style={{ justifyContent: "flex-start" }}>
                Who We Are
              </span>

              <h2
                id="about-heading"
                className="text-4xl md:text-5xl heading-accent"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Built on a Passion<br />
                <span className="neon-text">for Automotive Performance</span>
              </h2>

              <div
                className="flex flex-col gap-4 text-base leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                <p>
                  At Race3+, we know your vehicle is more than just a way to get from one place to another—it&apos;s something you depend on every day.
                </p>
                <p>
                  Built from a passion for automotive excellence, Race3+ is committed to creating reliable automotive solutions that protect your engine and help it perform at its best. We believe every driver deserves products they can trust.
                </p>
                <p>
                  Every product is designed to keep engines running cooler, protect against wear and corrosion, and deliver lasting performance when it matters most.
                </p>
                <p>
                  As Race3+ grows, our promise remains the same: to provide dependable automotive products that give you confidence every time you turn the key.
                </p>
              </div>

              <Link href="/about" className="about-teaser-link mt-2">
                Learn more about us <ArrowRight size={15} />
              </Link>
            </div>

            {/* Decorative side panel */}
            <div className="hidden lg:flex flex-col gap-6" aria-hidden="true">
              {/* Stat blocks */}
              {[
                { num: "9 Month", label: "Replacement cycle" },
                { num: "4x4", label: "Vehicle types covered" },
                { num: "100%", label: "Performance focused" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-5 p-5 rounded-lg border"
                  style={{ borderColor: "#1F1F1F", background: "#0A0A0A" }}
                >
                  <span
                    className="text-4xl font-black neon-text"
                    style={{ fontFamily: "var(--font-heading)", lineHeight: 1 }}
                  >
                    {stat.num}
                  </span>
                  <span className="text-sm uppercase tracking-widest" style={{ color: "#6B7280", fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Angled slash divider */}
      <div className="divider-slash" aria-hidden="true" />

      {/* ── 3. PRODUCT TEASER ───────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--color-brand-bg)" }}
        aria-labelledby="product-heading"
      >
        <div className="container-r3">
          <div className="flex flex-col items-center text-center gap-3 mb-12">
            <span className="hero-eyebrow">Products</span>
            <h2
              id="product-heading"
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What&apos;s Coming
            </h2>
          </div>

          {/* Teaser card — links to /products */}
          <Link href="/products" className="block max-w-lg mx-auto product-teaser-card">
            <div className="relative z-10 flex flex-col gap-6 p-8">
              {/* Top row: badge + coming soon */}
              <div className="flex items-center justify-between">
                <span className="badge-neon animate-neon-pulse">Coming Soon</span>
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#4B5563", fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  Performance Series
                </span>
              </div>

              {/* Logo watermark */}
              <div className="flex justify-center py-4">
                <Image
                  src="/logo.webp"
                  alt="Race3+"
                  width={220}
                  height={75}
                  loading="lazy"
                  className="h-[32px] md:h-[40px] w-auto"
                  style={{ objectFit: "contain", opacity: 0.55 }}
                />
              </div>

              {/* Product name */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-2xl md:text-3xl text-white"
                  style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase" }}
                >
                  Performance Engine<br />
                  <span className="neon-text">Coolant Concentrate</span>
                </h3>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  Advanced formula designed to keep engines running cooler, protected, and performing at their peak.
                </p>
              </div>

              {/* CTA hint */}
              <div
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest neon-text-sm"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                View Details <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── 4. BENEFIT STRIP ────────────────────── */}
      <section
        className="section-pad section-angled-reverse"
        style={{ background: "#080808" }}
        aria-labelledby="benefits-heading"
      >
        <div className="container-r3">
          <div className="flex flex-col items-center text-center gap-3 mb-12">
            <span className="hero-eyebrow">Why Race3+</span>
            <h2
              id="benefits-heading"
              className="text-4xl md:text-5xl heading-accent-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Built to Perform
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b.id} id={b.id} className="benefit-card">
                <div className="benefit-icon">{b.icon}</div>
                <p
                  className="text-sm font-bold uppercase leading-snug"
                  style={{
                    fontFamily: "var(--font-heading)",
                    letterSpacing: "0.08em",
                    color: "#E5E7EB",
                  }}
                >
                  {b.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. INSTAGRAM BAND ───────────────────── */}
      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-band"
        id="instagram-band"
      >
        <InstagramIcon size={26} />
        <span>Follow {siteConfig.instagramHandle} on Instagram</span>
        <ArrowRight size={18} />
      </a>

      {/* ── 6. FINAL CTA ────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--color-brand-bg-deep)" }}
        aria-labelledby="launch-cta-heading"
      >
        <div className="container-r3 flex flex-col items-center text-center gap-8">
          {/* Decorative accent line */}
          <div className="divider-accent-line" style={{ maxWidth: "200px" }} aria-hidden="true" />

          <span className="hero-eyebrow">Launch Notification</span>

          <h2
            id="launch-cta-heading"
            className="text-4xl md:text-6xl max-w-2xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get notified when<br />
            <span className="neon-text">we launch.</span>
          </h2>

          <p className="max-w-md text-base" style={{ color: "var(--color-text-muted)" }}>
            Be the first to know when the Race3+ Performance Engine Coolant Concentrate drops. Send us a message on WhatsApp and we&apos;ll notify you on launch day.
          </p>

          <a
            href={siteConfig.whatsappLaunchMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            id="whatsapp-launch-cta"
            aria-label="Notify Me on WhatsApp — get notified when Race3+ coolant launches"
          >
            <WhatsAppIcon size={20} />
            Notify Me on WhatsApp
          </a>

          <p className="text-xs" style={{ color: "#6B7280" }}>
            Opens WhatsApp with a pre-filled message. No spam, just one notification on launch day.
          </p>
        </div>
      </section>
    </>
  );
}
