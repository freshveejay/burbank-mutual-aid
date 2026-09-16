import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack root because the parent path contains spaces with no
  // parent package.json, which Turbopack tries to infer and rejects.
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      // Volunteer page was renamed; keep previously shared links working.
      { source: "/volunteer", destination: "/get-involved", permanent: true },
      // The Resources page was removed; its "Related organizations" now
      // live in the side panel on Get Involved.
      { source: "/resources", destination: "/get-involved", permanent: true },
    ];
  },
};

export default nextConfig;
