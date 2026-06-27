import type { Metadata } from "next";
import { SITE, siteUrl, isProductionHost } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Path-only canonical, e.g. "/platform". Defaults to "/". */
  path?: string;
  /** Force noindex regardless of host (e.g. pricing while not public). */
  noindex?: boolean;
};

/**
 * Build per-page metadata with canonical + OpenGraph wired to the production
 * host. Pages are `noindex` when this deploy is NOT the production host
 * (env-gated) or when `noindex` is set explicitly.
 */
export function pageMetadata({ title, description, path = "/", noindex }: PageMetaInput): Metadata {
  const canonicalPath = path === "/" ? "/" : path.replace(/\/$/, "");
  const fullTitle = path === "/" ? `${SITE.name} — ${SITE.tagline}` : `${title} — ${SITE.name}`;
  const shouldNoindex = noindex || !isProductionHost();

  return {
    title: fullTitle,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: fullTitle,
      description,
      url: `${SITE.productionUrl}${canonicalPath === "/" ? "" : canonicalPath}`,
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
    robots: shouldNoindex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

/** metadataBase for the app — resolves relative OG/canonical URLs. */
export function metadataBase(): URL {
  return new URL(siteUrl());
}
