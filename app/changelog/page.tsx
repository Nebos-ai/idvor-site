import type { Metadata } from "next";
import { PageHero } from "@/components/primitives";
import { CollectionList } from "@/components/collection-list";
import { getCollection } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Changelog",
  description: "What's new in Nebbos, release by release.",
  path: "/changelog",
});

export default function ChangelogIndex() {
  const entries = getCollection("changelog");
  return (
    <>
      <PageHero eyebrow="Changelog" title="What's new in Nebbos." />
      <CollectionList collection="changelog" entries={entries} label="Release" />
    </>
  );
}
