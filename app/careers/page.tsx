import type { Metadata } from "next";
import { PageHero } from "@/components/primitives";
import { CollectionList } from "@/components/collection-list";
import { getCollection } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description: "Help build Operations Intelligence — open roles at Nebbos.",
  path: "/careers",
});

export default function CareersIndex() {
  const entries = getCollection("careers");
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the software that sees what's coming."
        lead="We're building Operations Intelligence — accountable by architecture, useful from the first signal. Come build it with us."
      />
      <CollectionList collection="careers" entries={entries} label="Open role" />
    </>
  );
}
