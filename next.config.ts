import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export — required for S3/CloudFront deployment
  // This produces an `out/` directory with all static assets
  output: "export",

  // Disable Next.js image optimization (not supported in static export)
  // Use standard <img> tags or a third-party image CDN if needed
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
