import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { siteConfig } from "@/lib/site-config";

/* ── Metadata ── */
export const metadata: Metadata = {
  title: "Blog — Engine Care & Performance Tips",
  description:
    "The Race3+ blog: practical guides on engine coolant, cooling system maintenance, and what makes high-performance automotive fluids different. Written for car, bike, and SUV owners.",
  openGraph: {
    title: "Race3+ Blog — Engine Care & Performance Tips",
    description:
      "Learn how engine coolant works, how to spot cooling system problems early, and what the 1:4 concentrate formula in Race3+ actually does for your engine.",
    url: `${siteConfig.url}/blog`,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Race3+" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Race3+ Blog — Engine Care & Performance Tips",
    description:
      "Coolant education, maintenance tips, and product deep-dives — written for drivers who care about their engines.",
    images: ["/logo.png"],
  },
};

/* ── Icons ── */
function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

/* ── Helpers ── */
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function BlogPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────── */}
      <section
        className="page-header-band section-angled"
        style={{ paddingTop: "6rem", paddingBottom: "5rem" }}
        aria-label="Blog page header"
      >
        <div className="container-r3 relative z-10 text-center flex flex-col items-center gap-4">
          <span className="hero-eyebrow">Knowledge Base</span>
          <h1
            className="text-5xl md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Blog
          </h1>
          <p
            className="text-base md:text-lg max-w-md"
            style={{ color: "var(--color-text-muted)" }}
          >
            Engine care, cooling system tips, and the science behind Race3+ — written
            for drivers who take their engines seriously.
          </p>
        </div>
      </section>

      {/* ── Post Grid ───────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--color-brand-bg-deep)" }}
        aria-labelledby="posts-heading"
      >
        <div className="container-r3" style={{ maxWidth: "1040px" }}>
          <h2
            id="posts-heading"
            className="sr-only"
          >
            All Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="post-card"
                aria-label={`Read: ${post.title}`}
              >
                {/* Top meta row */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="post-category">{post.category}</span>
                  <span className="post-readtime">{post.readMinutes} min read</span>
                </div>

                {/* Title */}
                <h2 className="post-card-title">{post.title}</h2>

                {/* Excerpt */}
                <p className="post-card-excerpt">{post.excerpt}</p>

                {/* Date + Read more */}
                <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: "1px solid #1A1A1A" }}>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: "#6B7280" }}>
                    <CalendarIcon />
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="post-read-more">
                    Read more <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center text-sm mt-10" style={{ color: "#6B7280" }}>
            More posts coming soon. Follow{" "}
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-text-sm"
              style={{ fontWeight: 600 }}
            >
              {siteConfig.instagramHandle}
            </a>{" "}
            on Instagram for updates.
          </p>
        </div>
      </section>

      {/* ── CTA band ────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--color-brand-bg)" }}
        aria-labelledby="blog-cta-heading"
      >
        <div className="container-r3 flex flex-col items-center text-center gap-6">
          <div className="divider-accent-line" style={{ maxWidth: "160px" }} aria-hidden="true" />
          <h2
            id="blog-cta-heading"
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to protect{" "}
            <span className="neon-text">your engine?</span>
          </h2>
          <Link href="/products" className="btn-primary">
            See Our Products
          </Link>
        </div>
      </section>
    </>
  );
}
