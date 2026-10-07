import type { NextConfig } from "next";

// Browser security headers. These control how OTHER sites may interact with
// this one; they do not affect the Google Form we embed on Get Involved.
const securityHeaders = [
  // Nobody may show this site inside an iframe (clickjacking protection).
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Pin Turbopack root because the parent path contains spaces with no
  // parent package.json, which Turbopack tries to infer and rejects.
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Volunteer page was renamed; keep previously shared links working.
      { source: "/volunteer", destination: "/get-involved", permanent: true },
      // The Resources page was removed; its "Related organizations" now
      // live in the side panel on Get Involved.
      { source: "/resources", destination: "/get-involved", permanent: true },
      // The Press page was removed; the articles now live at the bottom of About.
      { source: "/press", destination: "/about#press", permanent: true },
    ];
  },
};

export default nextConfig;
