import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack root because the parent path contains spaces with no
  // parent package.json, which Turbopack tries to infer and rejects.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
