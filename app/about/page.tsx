import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/* ── Metadata ── */
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Race 3 Plus — built from a passion for automotive excellence, committed to reliable engine protection solutions and performance products you can trust every time you turn the key.",
  alternates: {
    canonical: "https://race3plus.com/about",
  },
  openGraph: {
    title: "About Race 3 Plus — Built on a Passion for Automotive Excellence",
    description:
      "Race 3 Plus is committed to creating reliable automotive solutions that protect your engine and help it perform at its best. Discover our story, mission, and what makes us different.",
    url: `${siteConfig.url}/about`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Race 3 Plus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Race 3 Plus — Built on a Passion for Automotive Excellence",
    description:
      "Committed to engine protection and dependable automotive performance. Every driver deserves products they can trust.",
    images: ["/og-image.png"],
  },
};

/* ── SVG Icons ── */
function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ArrowRight({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ── Why Race3+ data ── */
const whyPoints = [
  {
    id: "passion",
    icon: <HeartIcon />,
    heading: "Born from Genuine Passion",
    body: "Race3+ wasn't built in a boardroom — it was built by people who genuinely care about automotive performance. That passion shapes every product decision we make.",
  },
  {
    id: "engineering",
    icon: <WrenchIcon />,
    heading: "Engineering-First Mindset",
    body: "We start with the science: heat transfer efficiency, corrosion chemistry, material compatibility. Every formulation is driven by what the engine actually needs, not marketing trends.",
  },
  {
    id: "dependability",
    icon: <ShieldIcon />,
    heading: "Dependability You Can Count On",
    body: "Performance means nothing if it's inconsistent. Race3+ products are designed to protect reliably — every drive, every season, for the recommended 9-month cycle.",
  },
  {
    id: "drivers",
    icon: <StarIcon />,
    heading: "Built for All Drivers",
    body: "Whether you're daily-driving a hatchback, riding a motorcycle, hauling cargo, or pushing an SUV hard — Race3+ is formulated to work across the full spectrum of vehicles.",
  },
];

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <>
      {/* ── 1. PAGE HEADER ──────────────────────── */}
      <section
        className="page-header-band section-angled"
        style={{ paddingTop: "6rem", paddingBottom: "5rem" }}
        aria-label="About page header"
      >
        <div className="container-r3 relative z-10 text-center flex flex-col items-center gap-4">
          <span className="hero-eyebrow">Our Story</span>
          <h1
            className="text-5xl md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            About Us
          </h1>
          <p
            className="text-base md:text-lg max-w-lg"
            style={{ color: "var(--color-text-muted)" }}
          >
            Built from a passion for automotive excellence — and a belief that every driver deserves engine protection they can actually trust.
          </p>
        </div>
      </section>

      {/* ── 2. STORY SECTION ────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--color-brand-bg-deep)" }}
        aria-labelledby="story-heading"
      >
        <div className="container-r3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Left: main story copy */}
            <div className="flex flex-col gap-7">
              <div>
                <span className="hero-eyebrow" style={{ justifyContent: "flex-start" }}>
                  Who We Are
                </span>
                <h2
                  id="story-heading"
                  className="text-4xl md:text-5xl mt-4 heading-accent"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  More Than a Way<br />
                  <span className="neon-text">to Get From A to B</span>
                </h2>
              </div>

              <div
                className="flex flex-col gap-5 text-base leading-relaxed"
                style={{ color: "#A0A6B0" }}
              >
                <p>
                  At Race3+, we know your vehicle is more than just a way to get from one place
                  to another — it&apos;s something you depend on every day.
                </p>
                <p>
                  Built from a passion for automotive excellence, Race3+ is committed to creating reliable
                  automotive solutions that protect your engine and help it perform at its best.
                  We believe every driver deserves products they can trust.
                </p>
                <p>
                  Every product is designed to keep engines running cooler, protect against wear
                  and corrosion, and deliver lasting performance when it matters most.
                </p>
                <p>
                  As Race3+ grows, our promise remains the same: to provide dependable automotive
                  products that give you confidence every time you turn the key.
                </p>
              </div>
            </div>

            {/* Right: decorative stat column */}
            <div className="flex flex-col gap-5" aria-hidden="true">
              {/* Large ghost word */}
              <div className="relative overflow-hidden rounded-lg p-8 flex flex-col gap-6"
                style={{ background: "#080808", border: "1px solid #1A1A1A" }}>
                <span
                  className="bg-word"
                  style={{ top: "-0.5rem", right: "-1rem", opacity: 0.6 }}
                  aria-hidden="true"
                >
                  RACE
                </span>

                {[
                  { num: "9 Month", label: "Replacement cycle" },
                  { num: "4x4", label: "Vehicle types covered" },
                  { num: "100%", label: "Performance focused" },
                ].map((s) => (
                  <div key={s.label} className="relative z-10 flex items-baseline gap-4 border-b last:border-0 pb-5 last:pb-0" style={{ borderColor: "#1F1F1F" }}>
                    <span
                      className="neon-text"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "2.5rem", lineHeight: 1 }}
                    >
                      {s.num}
                    </span>
                    <span
                      style={{ fontFamily: "var(--font-heading)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4B5563" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PULL-QUOTE BAND ──────────────────── */}
      <div className="pullquote-band" role="complementary" aria-label="Brand statement">
        <blockquote className="pullquote-text text-4xl md:text-6xl lg:text-7xl max-w-4xl mx-auto">
          Race3+{" "}
          <span className="block md:inline">—{" "}</span>
          <span className="accent">Keep Performance Alive.</span>
        </blockquote>
        <cite className="pullquote-source not-italic">Race3+ Brand Promise</cite>
      </div>

      {/* ── 4. OUR MISSION ──────────────────────── */}
      <section
        className="section-pad section-angled-reverse"
        style={{ background: "var(--color-brand-bg)" }}
        aria-labelledby="mission-heading"
      >
        <div className="container-r3">
          <div className="flex flex-col items-start gap-3 mb-10">
            <span className="hero-eyebrow">Our Mission</span>
            <h2
              id="mission-heading"
              className="text-4xl md:text-5xl heading-accent"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                id: "mission-reliable",
                title: "Reliable Solutions",
                body: "We build automotive products that work exactly as promised — every time, in every vehicle, in every condition. Reliability isn't a feature; it's the foundation.",
              },
              {
                id: "mission-protection",
                title: "Engine Protection First",
                body: "An engine is the heart of a vehicle. Our mission is to protect that heart — from heat, corrosion, wear, and the slow damage of neglect — so it keeps beating longer.",
              },
              {
                id: "mission-trust",
                title: "Performance You Can Trust",
                body: "Trust is built one drive at a time. We earn it by engineering products that deliver consistent performance, backed by transparent formulation and honest promises.",
              },
            ].map((m) => (
              <div key={m.id} id={m.id} className="mission-card">
                <h3
                  className="text-lg"
                  style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.06em" }}
                >
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SLASH DIVIDER ───────────────────────── */}
      <div className="divider-slash" aria-hidden="true" />

      {/* ── 5. WHY RACE3+ ───────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "#080808" }}
        aria-labelledby="why-heading"
      >
        <div className="container-r3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left: section label + heading + link */}
            <div className="flex flex-col gap-5 lg:sticky lg:top-[90px]">
              <span className="hero-eyebrow" style={{ justifyContent: "flex-start" }}>
                Why Race3+
              </span>
              <h2
                id="why-heading"
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                What Makes Us<br />
                <span className="neon-text">Different</span>
              </h2>
              <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#6B7280" }}>
                There are plenty of automotive fluids on the market. Here&apos;s why Race3+ is
                the one worth putting in your engine.
              </p>
              <Link href="/products" className="about-teaser-link mt-2">
                See our products <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right: why rows */}
            <div>
              {whyPoints.map((p) => (
                <div key={p.id} id={p.id} className="why-row">
                  <div className="why-icon-box">{p.icon}</div>
                  <div className="flex flex-col gap-1.5">
                    <h3
                      className="text-base"
                      style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.06em", color: "#E5E7EB" }}
                    >
                      {p.heading}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM CTA ───────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--color-brand-bg-deep)" }}
        aria-labelledby="about-cta-heading"
      >
        <div className="container-r3 flex flex-col items-center text-center gap-6">
          <div className="divider-accent-line" style={{ maxWidth: "160px" }} aria-hidden="true" />
          <h2
            id="about-cta-heading"
            className="text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to experience{" "}
            <span className="neon-text">Race3+?</span>
          </h2>
          <p className="max-w-sm text-sm" style={{ color: "var(--color-text-muted)" }}>
            Our Performance Engine Coolant Concentrate is coming soon. Get notified the moment
            it drops.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="btn-primary">
              View Products
            </Link>
            <a
              href={siteConfig.whatsappLaunchMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Get Launch Update
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
