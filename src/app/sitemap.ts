import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://burbankmutualaid.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ["", "/about", "/volunteer", "/resources", "/press"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
