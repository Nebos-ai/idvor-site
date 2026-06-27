import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";
import { pageMetadata } from "@/lib/seo";

export default function Page() {
  return (
    <StubPage
      eyebrow="Legal"
      title="Cookie policy"
      lead="What cookies and similar technologies Nebbos uses, and how to manage them. Template — to be completed and reviewed by counsel before publishing."
      todo="document the cookie categories and consent mechanism once analytics/consent tooling is decided."
    />
  );
}

export const metadata: Metadata = pageMetadata({
  title: "Cookies",
  description: "What cookies and similar technologies Nebbos uses, and how to manage them.",
  path: "/legal/cookies",
});
