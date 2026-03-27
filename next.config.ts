import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/*": ["./content/**/*"],
    },
  },
};

export default nextConfig;
