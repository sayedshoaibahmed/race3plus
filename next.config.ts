import type { NextConfig } from "next";

const securityHeaders = [
  // Enforce HTTPS for 1 year, include subdomains
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // Prevent MIME-type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Prevent clickjacking — only allow same-origin framing
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Send full URL referrer to same-origin; only origin to cross-origin
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Limit access to browser features
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  // Suppress X-Powered-By: Next.js header
  poweredByHeader: false,
  // Explicit no-trailing-slash (Next.js default, stated for clarity)
  trailingSlash: false,
  // Allow next/image to serve optimized images from the public directory
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [48, 96, 144, 220, 480],
  },
  // Typed routes for App Router
  typedRoutes: true,
  // Apply security headers to all routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
