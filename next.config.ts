import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow next/image to serve optimized images from the public directory
  images: {
    remotePatterns: [],
  },
  // Typed routes for App Router
  typedRoutes: true,
};

export default nextConfig;
