import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

/* ── Metadata ── */
export const metadata: Metadata = {
  title: "Race 3 Plus Engine Coolant | Performance Coolant Concentrate",
  description:
    "Race 3 Plus Performance Engine Coolant Concentrate — a high-performance automotive coolant engineered to maximize cooling efficiency, prevent overheating, and protect against corrosion. Race 3 Plus car coolant is available for bikes, SUVs, and commercial vehicles. Coming soon.",
  keywords: [
    "Race 3 Plus",
    "Race 3 Plus Coolant",
    "Race 3 Plus engine coolant",
    "automotive coolant",
    "engine coolant",
    "car coolant",
    "performance coolant concentrate",
    "engine coolant concentrate",
    "radiator coolant",
    "anti-corrosion coolant",
    "MEG coolant",
    "engine protection fluid",
  ],
  alternates: {
    canonical: "https://race3plus.com/products",
  },
  openGraph: {
    title: "Race 3 Plus Performance Engine Coolant Concentrate — Coming Soon",
    description:
      "Race 3 Plus high-performance engine coolant concentrate with 1:4 dilution formula. Advanced anti-corrosion additives for cars, bikes, SUVs & commercial vehicles.",
    url: `${siteConfig.url}/products`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Race 3 Plus Performance Engine Coolant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Race 3 Plus Performance Engine Coolant Concentrate — Coming Soon",
    description:
      "Race 3 Plus high-performance 1:4 concentrate coolant. Engineered to protect your engine against heat, wear, and corrosion.",
    images: ["/og-image.png"],
  },
};

/* ── Product JSON-LD (pre-launch / coming soon) ── */
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Race 3 Plus Performance Engine Coolant Concentrate",
  description:
    "Race 3 Plus is a high-performance engine coolant concentrate designed to maximize cooling efficiency and protect your engine under demanding conditions. Its 1:4 dilution formula uses a low MEG formulation combined with advanced anti-corrosion additives to promote efficient heat transfer while helping protect critical cooling system components.",
  brand: {
    "@type": "Brand",
    name: "Race 3 Plus",
  },
  url: `${siteConfig.url}/products`,
  image: `${siteConfig.url}/og-image.png`,
  dateModified: "2025-07-18",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    url: siteConfig.whatsappLaunchMsg,
    priceCurrency: "INR",
    seller: {
      "@type": "Organization",
      name: "Race 3 Plus",
    },
  },
};

/* ── Key benefits data ── */
const benefits = [
  {
    id: "dilution",
    text: "1:4 concentrate formula",
  },
  {
    id: "heat-transfer",
    text: "Enhanced heat transfer for improved engine cooling",
  },
  {
    id: "protection",
    text: "Protects against overheating, corrosion, rust, and harmful deposits",
  },
  {
    id: "vehicles",
    text: "Suitable for cars, motorcycles, SUVs, and commercial vehicles",
  },
  {
    id: "cycle",
    text: "Recommended replacement every 9 months for optimal performance",
  },
];

/* ── Order WhatsApp URL ── */
const orderUrl =
  "https://wa.me/919164911163?text=Hi%20Race3%2B%2C%20I%27m%20interested%20in%20the%20Performance%20Engine%20Coolant%20Concentrate.";

/* ── Icons ── */
function CheckIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="2 6 5 9 10 3" />
    </svg>
  );
}

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

function InfoIcon({ size = 14 }: { size?: number }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════ */
export default function ProductsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* ── Page Header ─────────────────────────── */}
      <section
        className="page-header-band section-angled"
        style={{ paddingTop: "6rem", paddingBottom: "5rem" }}
        aria-label="Products page header"
      >
        <div className="container-r3 relative z-10 text-center flex flex-col items-center gap-4">
          <span className="hero-eyebrow">Our Products</span>
          <h1
            className="text-5xl md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Products
          </h1>
          <p
            className="text-lg max-w-md"
            style={{ color: "var(--color-text-muted)", fontStyle: "italic" }}
          >
            Engineered for performance. Built to protect.
          </p>
        </div>
      </section>

      {/* ── Product Card Section ─────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--color-brand-bg)" }}
        aria-labelledby="product-card-heading"
      >
        <div className="container-r3" style={{ maxWidth: "1000px" }}>

          {/* ── Hero Product Card ── */}
          <article className="product-hero-card" aria-label="Race3+ Performance Engine Coolant Concentrate">
            <div className="flex flex-col lg:flex-row">

              {/* LEFT — Ribbon image pane */}
              <div
                className="product-ribbon-pane lg:w-[42%] shrink-0"
                aria-label="Product reveal image"
              >
                <Image
                  src="/ribbon.webp"
                  alt="Race3+ Performance Engine Coolant — product reveal box with red ribbon"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  style={{ objectFit: "contain", opacity: 0.9 }}
                  priority
                />
                {/* "Coming Soon" overlay on image */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                  }}
                >
                  <span className="badge-pulse">Coming Soon</span>
                </div>
              </div>

              {/* RIGHT — Product details */}
              <div className="flex flex-col gap-6 p-8 lg:p-10 flex-1">

                {/* Top row: category + spec tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{
                      color: "#4B5563",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                    }}
                  >
                    Performance Series
                  </span>
                  <span style={{ color: "#2A2A2A" }}>·</span>
                  <span className="spec-tag">Coolant Concentrate</span>
                  <span className="spec-tag">1:4 Dilution</span>
                  <span className="spec-tag">Low MEG</span>
                </div>

                {/* Product name */}
                <div>
                  <h2
                    id="product-card-heading"
                    className="text-3xl md:text-4xl leading-tight"
                    style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase" }}
                  >
                    Race3+{" "}
                    <span className="block text-2xl md:text-3xl" style={{ color: "var(--color-text-muted)" }}>
                      Performance Engine
                    </span>
                    <span className="neon-text">Coolant Concentrate</span>
                  </h2>
                </div>

                {/* TODO: price + product image go here after launch */}

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#A0A0A0", borderLeft: "2px solid #6DC13530", paddingLeft: "0.875rem" }}
                >
                  Race3+ is a high-performance engine coolant concentrate designed to maximize
                  cooling efficiency and protect your engine under demanding conditions. Its 1:4
                  dilution formula uses a low MEG formulation combined with advanced anti-corrosion
                  additives to promote efficient heat transfer while helping protect critical cooling
                  system components.
                </p>

                {/* Key Benefits */}
                <div>
                  <h3
                    className="text-xs uppercase tracking-widest mb-3"
                    style={{
                      color: "var(--color-text-muted)",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                    }}
                  >
                    Key Benefits
                  </h3>
                  <ul className="flex flex-col" role="list">
                    {benefits.map((b) => (
                      <li key={b.id} className="benefit-row">
                        <span className="benefit-check" aria-hidden="true">
                          <CheckIcon />
                        </span>
                        <span className="text-sm" style={{ color: "#D1D5DB", lineHeight: 1.5 }}>
                          {b.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href={orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    id="order-now-cta"
                    aria-label="Order Race3+ Performance Engine Coolant Concentrate via WhatsApp"
                  >
                    <WhatsAppIcon size={18} />
                    Order Now
                  </a>

                  {/* Launch note */}
                  <p className="launch-note">
                    <InfoIcon size={13} />
                    Product image &amp; pricing will be added at launch.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ── Note below card ── */}
          <p
            className="text-center text-sm mt-6"
            style={{ color: "#6B7280" }}
          >
            More products coming soon. Follow{" "}
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-text-sm"
              style={{ fontWeight: 600 }}
            >
              {siteConfig.instagramHandle}
            </a>{" "}
            on Instagram for launch updates.
          </p>
        </div>
      </section>

      {/* ── Specs Strip ─────────────────────────── */}
      <section
        className="section-angled-reverse"
        style={{ background: "#080808", paddingTop: "4rem", paddingBottom: "6rem" }}
        aria-labelledby="specs-heading"
      >
        <div className="container-r3" style={{ maxWidth: "1000px" }}>
          <h2
            id="specs-heading"
            className="text-2xl md:text-3xl mb-8 heading-accent"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Technical Specs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Formula", value: "Low MEG Concentrate" },
              { label: "Dilution Ratio", value: "1:4 (concentrate : deionised water)" },
              { label: "Primary Function", value: "Engine Cooling &amp; Protection" },
              { label: "Anti-corrosion", value: "Advanced Additive Package" },
              { label: "Compatible Vehicles", value: "Cars, Bikes, SUVs, Commercial" },
              { label: "Replacement Cycle", value: "Every 9 Months" },
            ].map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col gap-1 p-4 rounded-lg"
                style={{ background: "#0F0F0F", border: "1px solid #1A1A1A" }}
              >
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#4B5563", fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  {spec.label}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#E5E7EB" }}
                  dangerouslySetInnerHTML={{ __html: spec.value }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA band ─────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--color-brand-bg-deep)" }}
        aria-labelledby="product-cta-heading"
      >
        <div className="container-r3 flex flex-col items-center text-center gap-6">
          <div className="divider-accent-line" style={{ maxWidth: "180px" }} aria-hidden="true" />
          <h2
            id="product-cta-heading"
            className="text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to{" "}
            <span className="neon-text">order?</span>
          </h2>
          <p className="max-w-sm text-sm" style={{ color: "var(--color-text-muted)" }}>
            Reach out via WhatsApp and our team will get back to you with availability and pricing details.
          </p>
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            aria-label="Contact Race3+ to order via WhatsApp"
          >
            <WhatsAppIcon size={18} />
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
