import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, Eyebrow } from "@/components/primitives";
import { getCollectionSlugs, getEntry } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return getCollectionSlugs("changelog");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry("changelog", slug);
  if (!entry) return pageMetadata({ title: "Changelog", description: "", path: "/changelog" });
  return pageMetadata({
    title: entry.frontmatter.title,
    description: entry.frontmatter.description ?? "",
    path: `/changelog/${slug}`,
  });
}

export default async function ChangelogEntry({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = getEntry("changelog", slug);
  if (!entry) notFound();

  const { default: Body } = await import(`@/content/changelog/${slug}.mdx`);

  return (
    <article>
      <section className="nb-page-hero">
        <div className="nb-container">
          <Eyebrow>{entry.frontmatter.meta ?? "Release"}</Eyebrow>
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
