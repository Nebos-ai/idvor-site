import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";
import { pageMetadata } from "@/lib/seo";

export default function Page() {
  return (
    <StubPage
      eyebrow="Legal"
      title="Data Processing Agreement"
      lead="The DPA that governs Nebbos's processing of personal data on your behalf. Template — to be completed and reviewed by counsel before publishing."
      todo="add the full DPA (or a request flow) — counsel to draft; reference from Terms once final."
    />
  );
}

export const metadata: Metadata = pageMetadata({
  title: "DPA",
  description: "The Data Processing Agreement that governs Nebbos's processing of personal data.",
  path: "/legal/dpa",
});
