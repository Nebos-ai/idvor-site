import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StubPage } from "@/components/stub-page";
import { pageMetadata } from "@/lib/seo";
import { INDUSTRIES, FUNCTIONS, getIndustry, getFunction } from "@/lib/solutions";

/**
 * Single dynamic segment under /solutions covers both industries
 * (tech, k12, healthcare, financial-services, public-sector, manufacturing)
 * and functions (operations, finance, people) — one route, generated for every
 * solution slug.
 */

type Params = { industry: string };

export function generateStaticParams(): Params[] {
  return [
    ...INDUSTRIES.map((i) => ({ industry: i.slug })),
    ...FUNCTIONS.map((f) => ({ industry: f.slug })),
  ];
}

function resolve(slug: string) {
  const ind = getIndustry(slug);
  if (ind) return { kind: "Industry" as const, name: ind.name, blurb: ind.blurb };
  const fn = getFunction(slug);
  if (fn) return { kind: "Function" as const, name: fn.name, blurb: fn.blurb };
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { industry } = await params;
  const sol = resolve(industry);
  if (!sol) return pageMetadata({ title: "Solutions", description: "", path: "/solutions" });
  return pageMetadata({
    title: `${sol.name} — Solutions`,
    description: sol.blurb,
    path: `/solutions/${industry}`,
  });
}

export default async function SolutionPage({ params }: { params: Promise<Params> }) {
  const { industry } = await params;
  const sol = resolve(industry);
  if (!sol) notFound();

  return (
    <StubPage
      eyebrow={`Solutions · ${sol.kind}`}
      title={`Nebbos for ${sol.name}.`}
      lead={sol.blurb}
      todo={`write the full ${sol.name} solution narrative — sector/function-specific patterns, proof points and a relevant Pearl example.`}
    />
  );
}
