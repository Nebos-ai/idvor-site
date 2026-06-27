import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";
import { pageMetadata } from "@/lib/seo";

export default function Page() {
  return (
    <StubPage
      eyebrow="Legal"
      title="Acceptable use policy"
      lead="The boundaries on how Nebbos may be used. Template — to be completed and reviewed by counsel before publishing."
      todo="add the acceptable-use terms (prohibited uses, enforcement) — counsel to draft."
    />
  );
}

export const metadata: Metadata = pageMetadata({
  title: "Acceptable use",
  description: "The boundaries on how Nebbos may be used.",
  path: "/legal/acceptable-use",
});
