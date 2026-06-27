import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, Eyebrow } from "@/components/primitives";
import { getCollectionSlugs, getEntry } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return getCollectionSlugs("customers");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry("customers", slug);
  if (!entry) return pageMetadata({ title: "Customers", description: "", path: "/customers" });
  return pageMetadata({
    title: entry.frontmatter.title,
    description: entry.frontmatter.description ?? "",
    path: `/customers/${slug}`,
  });
}

export default async function CustomerStory({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = getEntry("customers", slug);
  if (!entry) notFound();

  const { default: Body } = await import(`@/content/customers/${slug}.mdx`);

  return (
    <article>
      <section className="nb-page-hero">
        <div className="nb-container">
          <Eyebrow>{entry.frontmatter.meta ?? "Customer story"}</Eyebrow>
          <h1 className="nb-h1">{entry.frontmatter.title}</h1>
        </div>
      </section>
      <Section>
        <div className="nb-prose">
          <Body />
        </div>
      </Section>
    </article>
  );
}
