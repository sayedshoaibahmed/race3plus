import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow next/image to serve optimized images from the public directory
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [48, 96, 144, 220, 480],
  },
  // Typed routes for App Router
  typedRoutes: true,
};

export default nextConfig;
