/**
 * Solutions taxonomy — drives /solutions index, the [industry] dynamic routes,
 * and generateStaticParams. Sensible placeholder copy; mark new pages with a
 * TODO until marketing fills them in.
 */

export type Industry = {
  slug: string;
  name: string;
  blurb: string;
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "tech",
    name: "Technology",
    blurb: "Catch velocity drops, stalled reviews and cascade risk across delivery before they slip a release.",
  },
  {
    slug: "k12",
    name: "K-12 education",
    blurb: "Operational foresight for districts and schools — coverage gaps, deadlines and handoffs, surfaced in aggregate.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    blurb: "Read the shape of operational work — staffing coverage, hand-offs and capacity — without touching clinical content.",
  },
  {
    slug: "financial-services",
    name: "Financial services",
    blurb: "Governed, auditable operations intelligence built to the bar regulators expect.",
  },
  {
    slug: "public-sector",
    name: "Public sector",
    blurb: "Accountability by architecture — every decision sourced, every action reversible, tenant-isolated.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    blurb: "Spot capacity crunch and cross-team handoff stalls across the line before they cost a shift.",
  },
];

export type Function_ = {
  slug: string;
  name: string;
  blurb: string;
};

export const FUNCTIONS: Function_[] = [
  {
    slug: "operations",
    name: "Operations",
    blurb: "Stop finding out on Friday — stalled handoffs and slipping deadlines surface while you can still move.",
  },
  {
    slug: "finance",
    name: "Finance",
    blurb: "Predictable cost on top of any model, and a tool that compounds in value instead of depreciating.",
  },
  {
    slug: "people",
    name: "People",
    blurb: "Coverage gaps and unaccounted absence surfaced to the lead, never the person.",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export function getFunction(slug: string): Function_ | undefined {
  return FUNCTIONS.find((f) => f.slug === slug);
}
