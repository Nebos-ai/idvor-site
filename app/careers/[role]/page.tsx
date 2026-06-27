import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, Eyebrow, Button } from "@/components/primitives";
import { getCollectionSlugs, getEntry } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type Params = { role: string };

export function generateStaticParams(): Params[] {
  return getCollectionSlugs("careers").map(({ slug }) => ({ role: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { role } = await params;
  const entry = getEntry("careers", role);
  if (!entry) return pageMetadata({ title: "Careers", description: "", path: "/careers" });
  return pageMetadata({
    title: entry.frontmatter.title,
    description: entry.frontmatter.description ?? "",
    path: `/careers/${role}`,
  });
}

export default async function RolePage({ params }: { params: Promise<Params> }) {
  const { role } = await params;
  const entry = getEntry("careers", role);
  if (!entry) notFound();

  const { default: Body } = await import(`@/content/careers/${role}.mdx`);

  return (
    <article>
      <section className="nb-page-hero">
        <div className="nb-container">
          <Eyebrow>{entry.frontmatter.meta ?? "Open role"}</Eyebrow>
          <h1 className="nb-h1">{entry.frontmatter.title}</h1>
        </div>
      </section>
      <Section>
        <div className="nb-prose">
          <Body />
        </div>
        <div className="nb-actions">
          <Button href="/contact">Apply →</Button>
        </div>
      </Section>
    </article>
  );
}
