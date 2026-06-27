import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { allSitemapRoutes } from "@/lib/routes";

/**
 * Sitemap — always points at the canonical production host, regardless of the
 * deploy host (preview hosts are noindex anyway).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return allSitemapRoutes().map((route) => ({
    url: `${SITE.productionUrl}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
