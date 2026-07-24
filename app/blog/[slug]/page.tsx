import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import { siteConfig } from "@/lib/site-config";

/* ── Static params for prerendering ── */
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

/* ── Dynamic metadata per post ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://race3plus.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Race 3 Plus Blog`,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Race 3 Plus"],
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${post.title} | Race 3 Plus Blog` }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/og-image.png"],
    },
  };
}

/* ── Helpers ── */
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ── Icons ── */
function ArrowLeft({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M12 19l-7-7 7-7" />
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

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  /* BlogPosting JSON-LD */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}/og-image.png`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Race 3 Plus",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Race 3 Plus",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/og-image.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    url: `${siteConfig.url}/blog/${post.slug}`,
  };

  /* Other posts for sidebar / next-up */
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── Post Header ─────────────────────────── */}
      <header className="post-header-band" aria-label="Article header">
        <div className="container-r3 relative z-10" style={{ maxWidth: "860px" }}>

          {/* Back nav */}
          <Link href="/blog" className="back-link mb-8 inline-flex">
            <ArrowLeft />
            Back to Blog
          </Link>

          {/* Category + read time */}
          <div className="post-dateline mt-4">
            <span className="post-category">{post.category}</span>
            <span className="flex items-center gap-1.5 post-readtime">
              <ClockIcon />
              {post.readMinutes} min read
            </span>
            <span className="flex items-center gap-1.5 post-readtime">
              <CalendarIcon />
              {formatDate(post.publishedAt)}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl mt-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase" }}
          >
            {post.title}
          </h1>

          {/* Excerpt lead */}
          <p
            className="text-base md:text-lg mt-5 max-w-2xl leading-relaxed"
            style={{ color: "var(--color-text-muted)", borderLeft: "3px solid var(--color-brand-accent)", paddingLeft: "1rem" }}
          >
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* ── Article body ────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--color-brand-bg-deep)" }}
        aria-label="Article content"
      >
        <div className="container-r3 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start" style={{ maxWidth: "1040px" }}>

          {/* Main text */}
          <article className="post-body flex-1">
            {post.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {/* Accent divider */}
            <div className="divider-accent-line my-10" aria-hidden="true" />

            {/* Products CTA inside article */}
            <div
              className="flex flex-col gap-4 p-6 rounded-lg"
              style={{ background: "#0D0D0D", border: "1px solid #1F1F1F" }}
            >
              <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.08em", color: "#E5E7EB" }}>
                Ready to protect your engine?
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                Race3+ Performance Engine Coolant Concentrate is engineered for exactly the
                challenges described here — heat transfer, corrosion protection, and dependable
                performance across cars, bikes, SUVs, and commercial vehicles.
              </p>
              <Link
                href="/products"
                className="btn-primary"
                style={{ alignSelf: "flex-start" }}
              >
                View Products <ArrowRight size={14} />
              </Link>
            </div>
          </article>

          {/* Sidebar: other posts */}
          <aside
            className="lg:w-72 flex-shrink-0"
            aria-label="Other articles"
          >
            <h2
              className="text-xs uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "#4B5563" }}
            >
              More from the Blog
            </h2>
            <div className="flex flex-col gap-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="flex flex-col gap-2 p-4 rounded-lg group"
                  style={{ background: "#0D0D0D", border: "1px solid #1F1F1F" }}
                  aria-label={`Read: ${p.title}`}
                >
                  <span className="post-category" style={{ alignSelf: "flex-start" }}>{p.category}</span>
                  <span
                    className="text-sm font-bold leading-snug group-hover:text-[var(--color-brand-accent)] transition-colors"
                    style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.03em" }}
                  >
                    {p.title}
                  </span>
                  <span className="post-read-more" style={{ fontSize: "0.7rem" }}>
                    Read <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>

            {/* Back to blog */}
            <Link href="/blog" className="back-link mt-6 inline-flex">
              <ArrowLeft size={13} />
              All Posts
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
