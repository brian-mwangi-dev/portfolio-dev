import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Disable image optimization for static export (no server to process images)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
