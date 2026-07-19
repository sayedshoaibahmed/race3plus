import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import ContactForm from "@/components/ContactForm";

/* ── Metadata ── */
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Race3+ — call, WhatsApp, or email us. We're based in Kodagu, Karnataka. Enquiries about our Performance Engine Coolant Concentrate welcome.",
  openGraph: {
    title: "Contact Race3+ — We'd Love to Hear from You",
    description:
      "Reach the Race3+ team by phone, WhatsApp, or email. Questions about products, trade enquiries, and launch updates welcome.",
    url: `${siteConfig.url}/contact`,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Race3+" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Race3+",
    description: "Phone, WhatsApp, email — reach us any way you prefer.",
    images: ["/logo.png"],
  },
};

/* ─────────────────────────────────
   SVG Icons (server-safe)
   ───────────────────────────────── */
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ─────────────────────────────────
   Contact channels data
   ───────────────────────────────── */
const channels = [
  {
    id: "phone",
    icon: <PhoneIcon />,
    label: "Phone",
    primary: (
      <a
        href="tel:+919164911163"
        className="text-base font-semibold text-white hover:neon-text-sm transition-colors"
        style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.04em" }}
      >
        +91 91649 11163
      </a>
    ),
    secondary: (
      <a
        href="https://wa.me/919164911163"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
        style={{ padding: "0.4rem 1rem", fontSize: "0.8rem", marginTop: "0.5rem", alignSelf: "flex-start" }}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
    ),
  },
  {
    id: "email",
    icon: <MailIcon />,
    label: "Email",
    primary: (
      <a
        href="mailto:race3plus@gmail.com"
        className="text-base font-semibold text-white footer-link"
        style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.04em" }}
      >
        race3plus@gmail.com
      </a>
    ),
    secondary: (
      <span className="text-xs" style={{ color: "#4B5563" }}>
        We reply within 24 hours
      </span>
    ),
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    label: "Instagram",
    primary: (
      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-base font-semibold footer-link"
        style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.04em", color: "white" }}
      >
        {siteConfig.instagramHandle}
      </a>
    ),
    secondary: (
      <span className="text-xs" style={{ color: "#4B5563" }}>
        Follow for product updates &amp; launch news
      </span>
    ),
  },
];

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function ContactPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────── */}
      <section
        className="page-header-band section-angled"
        style={{ paddingTop: "6rem", paddingBottom: "5rem" }}
        aria-label="Contact page header"
      >
        <div className="container-r3 relative z-10 text-center flex flex-col items-center gap-4">
          <span className="hero-eyebrow">Get in Touch</span>
          <h1
            className="text-5xl md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact Us
          </h1>
          <p
            className="text-base md:text-lg max-w-md"
            style={{ color: "var(--color-text-muted)" }}
          >
            Questions, product enquiries, or just want to say hello — we&apos;re easy to reach.
          </p>
        </div>
      </section>

      {/* ── Main content ────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--color-brand-bg-deep)" }}
        aria-label="Contact details and form"
      >
        <div className="container-r3" style={{ maxWidth: "1040px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* ── LEFT: Channel cards ─────────────── */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="hero-eyebrow" style={{ justifyContent: "flex-start" }}>
                  Reach Us
                </span>
                <h2
                  className="text-3xl md:text-4xl mt-3 heading-accent"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  We&apos;d Love to<br />
                  <span className="neon-text">Hear from You</span>
                </h2>
              </div>

              {/* Channel cards */}
              <div className="flex flex-col gap-4 mt-2">
                {channels.map((ch) => (
                  <div key={ch.id} id={`contact-${ch.id}`} className="contact-card">
                    <div className="contact-icon">{ch.icon}</div>
                    <div className="flex flex-col gap-1">
                      <span
                        className="text-xs uppercase tracking-widest"
                        style={{ color: "#4B5563", fontFamily: "var(--font-heading)", fontWeight: 700 }}
                      >
                        {ch.label}
                      </span>
                      {ch.primary}
                      {ch.secondary}
                    </div>
                  </div>
                ))}
              </div>

              {/* Location — quiet, low-weight */}
              <div
                className="flex items-center gap-1.5 mt-1"
                style={{ color: "#6B7280" }}
                aria-label="Location"
              >
                <MapPinIcon />
                <span className="text-xs">
                  Kodagu, Madikeri, 571201
                </span>
              </div>
            </div>

            {/* ── RIGHT: Contact form ─────────────── */}
            <div
              className="rounded-xl p-8"
              style={{ background: "#0A0A0A", border: "1px solid #1F1F1F" }}
            >
              <h2
                className="text-2xl md:text-3xl mb-6"
                style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase" }}
              >
                Send a <span className="neon-text">Message</span>
              </h2>
              {/* Client component */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Instagram band ──────────────────────── */}
      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-band"
        aria-label="Follow Race3+ on Instagram"
      >
        <InstagramIcon />
        <span>Follow {siteConfig.instagramHandle} on Instagram</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </>
  );
}
