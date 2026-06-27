import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";
import { pageMetadata } from "@/lib/seo";

export default function Page() {
  return (
    <StubPage
      eyebrow="Legal · Security"
      title="Responsible disclosure"
      lead="Found a vulnerability? We want to hear from you. This page describes how to report security issues to Nebbos safely."
      todo="add the disclosure policy details — contact (security@nebbos.ai), PGP key, scope, safe-harbour language, and SLA — once confirmed."
    />
  );
}

export const metadata: Metadata = pageMetadata({
  title: "Responsible disclosure",
  description: "How to report security vulnerabilities to Nebbos.",
  path: "/legal/responsible-disclosure",
});
