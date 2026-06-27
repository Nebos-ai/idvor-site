import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";
import { pageMetadata } from "@/lib/seo";

export default function Page() {
  return (
    <StubPage
      eyebrow="Legal"
      title="Sub-processors"
      lead="The third-party sub-processors Nebbos uses to deliver the service, and what each one does. To be confirmed before publishing."
      todo="add the sub-processor table (name, purpose, region) and a subscribe-to-changes mechanism once confirmed by engineering and counsel."
    />
  );
}

export const metadata: Metadata = pageMetadata({
  title: "Subprocessors",
  description: "The third-party sub-processors Nebbos uses to deliver the service.",
  path: "/legal/subprocessors",
});
