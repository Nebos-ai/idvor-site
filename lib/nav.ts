/**
 * Single nav config — drives the top nav and the footer. Editing this file
 * re-wires the whole site's navigation. `children` render as dropdown / column
 * groupings; top-level `href` entries are primary nav links.
 */

export type NavLink = {
  label: string;
  href: string;
  /** External links open in a new tab and are excluded from the sitemap. */
  external?: boolean;
  children?: NavLink[];
};

/** Primary top-nav (left cluster). */
export const PRIMARY_NAV: NavLink[] = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Overview", href: "/platform" },
      { label: "How it works", href: "/platform/how-it-works" },
      { label: "Architecture", href: "/platform/architecture" },
      { label: "Integrations", href: "/platform/integrations" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "By industry", href: "/solutions" },
      { label: "Operations", href: "/solutions/operations" },
      { label: "Finance", href: "/solutions/finance" },
      { label: "People", href: "/solutions/people" },
    ],
  },
  { label: "Pearl", href: "/pearl" },
  {
    label: "Trust",
    href: "/trust",
    children: [
      { label: "Trust center", href: "/trust" },
      { label: "Security", href: "/security" },
      { label: "Governance", href: "/governance" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Resource hub", href: "/resources" },
      { label: "Blog", href: "/blog" },
      { label: "Customers", href: "/customers" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

/** Right-side nav actions. */
export const NAV_ACTIONS = {
  demo: { label: "Get a demo", href: "/demo" },
  login: { label: "Log in", href: "https://app.nebbos.ai", external: true },
} as const;

/** Footer columns. */
export const FOOTER_NAV: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "Pearl", href: "/pearl" },
      { label: "How it works", href: "/platform/how-it-works" },
      { label: "Architecture", href: "/platform/architecture" },
      { label: "Integrations", href: "/platform/integrations" },
      { label: "Pricing", href: "/pricing" },
      { label: "Get a demo", href: "/demo" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Technology", href: "/solutions/tech" },
      { label: "K-12 education", href: "/solutions/k12" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Financial services", href: "/solutions/financial-services" },
      { label: "Public sector", href: "/solutions/public-sector" },
      { label: "Manufacturing", href: "/solutions/manufacturing" },
    ],
  },
  {
    heading: "Trust",
    links: [
      { label: "Trust center", href: "/trust" },
      { label: "Security", href: "/security" },
      { label: "Governance", href: "/governance" },
      { label: "Compliance", href: "/compliance" },
      { label: "Responsible disclosure", href: "/legal/responsible-disclosure" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Resource hub", href: "/resources" },
      { label: "Blog", href: "/blog" },
      { label: "Customers", href: "/customers" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "DPA", href: "/legal/dpa" },
      { label: "Subprocessors", href: "/legal/subprocessors" },
      { label: "Cookies", href: "/legal/cookies" },
      { label: "Acceptable use", href: "/legal/acceptable-use" },
    ],
  },
];
