import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";
import { pageMetadata } from "@/lib/seo";

export default function Page() {
  return (
    <StubPage
      eyebrow="Compliance"
      title="Built to the bar, not retrofitted to it."
      lead="Designed for the EU AI Act's high-risk requirements from the start, with GDPR, SOC 2 and ISO 27001 posture. Certification status to be confirmed before publishing."
      todo="add the compliance matrix (frameworks, status, regions, data-residency) and downloadable evidence once certifications are confirmed."
    />
  );
}

export const metadata: Metadata = pageMetadata({
  title: "Compliance",
  description:
    "Designed for the EU AI Act's high-risk requirements, with GDPR, SOC 2 and ISO 27001 posture.",
  path: "/compliance",
});
