import type { MetadataRoute } from "next";
import { SITE, isProductionHost } from "@/lib/site";

/**
 * robots.txt — production host allows indexing and advertises the sitemap.
 * Any non-production (preview/staging) host disallows all crawling, matching
 * the env-gated `noindex` in page metadata.
 */
export default function robots(): MetadataRoute.Robots {
  if (!isProductionHost()) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.productionUrl}/sitemap.xml`,
    host: SITE.productionUrl,
  };
}
