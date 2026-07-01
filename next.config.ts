import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — generates an `out/` directory for S3 + CloudFront hosting
  output: "export",
  // Disable the image optimisation server (not available in static export)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
