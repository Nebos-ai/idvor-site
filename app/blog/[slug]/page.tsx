import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, Eyebrow } from "@/components/primitives";
import { getCollectionSlugs, getEntry } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return getCollectionSlugs("blog");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry("blog", slug);
  if (!entry) return pageMetadata({ title: "Blog", description: "", path: "/blog" });
  return pageMetadata({
    title: entry.frontmatter.title,
    description: entry.frontmatter.description ?? "",
    path: `/blog/${slug}`,
  });
}

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = getEntry("blog", slug);
  if (!entry) notFound();

  const { default: Body } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <article>
      <section className="nb-page-hero">
        <div className="nb-container">
          <Eyebrow>{entry.frontmatter.meta ?? "Article"}</Eyebrow>
          <h1 className="nb-h1">{entry.frontmatter.title}</h1>
          {entry.frontmatter.date ? (
            <p className="nb-faint nb-mono nb-mt" style={{ fontSize: 12 }}>
              {entry.frontmatter.date}
            </p>
          ) : null}
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
