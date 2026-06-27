import type { Metadata } from "next";
import { PageHero } from "@/components/primitives";
import { CollectionList } from "@/components/collection-list";
import { getCollection } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Customers",
  description: "How teams put a Pearl on their hardest department and turned signal into foresight.",
  path: "/customers",
});

export default function CustomersIndex() {
  const entries = getCollection("customers");
  return (
    <>
      <PageHero eyebrow="Customers" title="Put a Pearl on your hardest department." />
      <CollectionList collection="customers" entries={entries} label="Story" />
    </>
  );
}
