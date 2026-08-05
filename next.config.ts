import type { NextConfig } from "next";

const repo = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: repo ? `/\${repo}` : "",
  assetPrefix: repo ? `/\${repo}/` : "",
};

export default nextConfig;
