import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/": ["./content/**/*"],
      "/blog": ["./content/**/*"],
      "/blog/[slug]": ["./content/**/*"],
    },
  },
};

export default nextConfig;
