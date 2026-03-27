import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/": ["./content/**/*"],
    "/blog": ["./content/**/*"],
    "/blog/[slug]": ["./content/**/*"],
  },
};

export default nextConfig;
