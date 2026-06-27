import type { Metadata } from "next";
import { PageHero } from "@/components/primitives";
import { CollectionList } from "@/components/collection-list";
import { getCollection } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description: "Notes on operations intelligence, prediction and governed AI from the Nebbos team.",
  path: "/blog",
});

export default function BlogIndex() {
  const entries = getCollection("blog");
  return (
    <>
      <PageHero eyebrow="Blog" title="Notes on operations intelligence." />
      <CollectionList collection="blog" entries={entries} label="Article" />
    </>
  );
}
