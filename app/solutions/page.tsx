import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, Lead, PageHero, CtaBand, Button } from "@/components/primitives";
import { INDUSTRIES, FUNCTIONS } from "@/lib/solutions";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Solutions",
  description:
    "Operations Intelligence for your industry and your function — one Operational Graph, read the way each team needs it.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="One signal. Read the way your team needs it."
        lead="The same Operational Graph answers the question each industry and each function is actually asking. Start where the pain is sharpest."
      />

      <Section divided>
        <Eyebrow>By industry</Eyebrow>
        <h2 className="nb-h2 nb-mt">Built for how your sector runs.</h2>
        <div className="nb-card-list">
          {INDUSTRIES.map((ind) => (
            <Link key={ind.slug} href={`/solutions/${ind.slug}`} className="nb-card-link">
              <div className="nb-card-meta">Industry</div>
              <h3>{ind.name}</h3>
              <p>{ind.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section divided>
        <Eyebrow>By function</Eyebrow>
        <h2 className="nb-h2 nb-mt">Built for what your team owns.</h2>
        <div className="nb-card-list">
          {FUNCTIONS.map((fn) => (
            <Link key={fn.slug} href={`/solutions/${fn.slug}`} className="nb-card-link">
              <div className="nb-card-meta">Function</div>
              <h3>{fn.name}</h3>
              <p>{fn.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Find your starting department."
        actions={<Button href="/demo">Get a demo →</Button>}
      />
    </>
  );
}
