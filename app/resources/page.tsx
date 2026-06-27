import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, PageHero } from "@/components/primitives";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Resources",
  description: "Guides, the blog, customer stories and the product changelog — the Nebbos resource hub.",
  path: "/resources",
});

const HUB = [
  { href: "/blog", title: "Blog", blurb: "Notes on operations intelligence, prediction and governed AI." },
  { href: "/customers", title: "Customers", blurb: "How teams put a Pearl on their hardest department." },
  { href: "/changelog", title: "Changelog", blurb: "What's new in Nebbos, release by release." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Everything to go deeper."
        lead="The blog, customer stories and the changelog — in one place."
      />
      <Section divided>
        <Eyebrow>Browse</Eyebrow>
        <div className="nb-card-list">
          {HUB.map((h) => (
            <Link key={h.href} href={h.href} className="nb-card-link">
              <div className="nb-card-meta">Resource</div>
              <h3>{h.title}</h3>
              <p>{h.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
