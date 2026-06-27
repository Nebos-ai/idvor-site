import { INDUSTRIES, FUNCTIONS } from "@/lib/solutions";
import { getCollectionSlugs } from "@/lib/content";

/**
 * Canonical list of indexable static routes. Single source for the sitemap.
 * Dynamic collection routes (blog/customers/changelog/careers) and solution
 * routes are appended programmatically below.
 */
export const STATIC_ROUTES: string[] = [
  "/",
  "/platform",
  "/platform/how-it-works",
  "/platform/architecture",
  "/platform/integrations",
  "/pearl",
  "/solutions",
  "/trust",
  "/security",
  "/governance",
  "/compliance",
  "/pricing",
  "/resources",
  "/blog",
  "/customers",
  "/changelog",
  "/about",
  "/careers",
  "/contact",
  "/press",
  "/demo",
  "/legal/privacy",
  "/legal/terms",
  "/legal/dpa",
  "/legal/subprocessors",
  "/legal/cookies",
  "/legal/acceptable-use",
  "/legal/responsible-disclosure",
];

/** All routes that should appear in the sitemap. */
export function allSitemapRoutes(): string[] {
  const solutionRoutes = [
    ...INDUSTRIES.map((i) => `/solutions/${i.slug}`),
    ...FUNCTIONS.map((f) => `/solutions/${f.slug}`),
  ];
  const blog = getCollectionSlugs("blog").map((s) => `/blog/${s.slug}`);
  const customers = getCollectionSlugs("customers").map((s) => `/customers/${s.slug}`);
  const careers = getCollectionSlugs("careers").map((s) => `/careers/${s.slug}`);

  return [...STATIC_ROUTES, ...solutionRoutes, ...blog, ...customers, ...careers];
}
