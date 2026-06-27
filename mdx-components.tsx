import type { MDXComponents } from "mdx/types";

/**
 * Required by @next/mdx in the App Router. Maps MDX elements onto the site's
 * prose styling so MDX content (blog, customers, changelog, careers) inherits
 * the TEMP token-driven look. Replace/extend when the real design system lands.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
