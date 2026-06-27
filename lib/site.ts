/**
 * Site-wide constants. Single source of truth for canonical host, product
 * name, and external app URL — referenced by metadata, sitemap, robots, nav.
 */
export const SITE = {
  name: "Nebbos",
  tagline: "Operations Intelligence",
  /** Canonical production host. All canonical/OG/sitemap URLs point here. */
  productionUrl: "https://nebbos.ai",
  /** External product app (login). */
  appUrl: "https://app.nebbos.ai",
  contactEmail: "hello@nebbos.ai",
  description:
    "Your tools tell you what already broke. Nebbos reads the signal your operation emits, predicts what's about to go wrong, explains why, and acts under your approval — model-agnostic, and governed by design.",
} as const;

/**
 * Resolve the canonical base URL for metadata. Defaults to the production host.
 * NEXT_PUBLIC_SITE_URL can override for a preview/staging deploy.
 */
export function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? SITE.productionUrl;
}

/**
 * Whether this deploy is the canonical production host. Used to env-gate
 * indexing: preview/staging hosts emit `noindex`. Default false unless the
 * resolved site URL matches the production host (so previews are safe).
 */
export function isProductionHost(): boolean {
  return siteUrl() === SITE.productionUrl;
}
