import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Trust Center",
  path: "/trust",
  description:
    "Security, governance and compliance at Nebbos — accountability built into the architecture, not retrofitted to it.",
});

export default function TrustPage() {
  return (
    <StubPage
      eyebrow="Trust center"
      title="Accountable by architecture."
      lead="A system that watches how people work is high-risk under the EU AI Act. Nebbos answers that with how it's built. Start here, then go deep on the area you need."
      cta={{ label: "Talk to us →", href: "/contact" }}
      sections={[
        { heading: "Security", body: "A human on every consequential move, every decision sourced, tenant isolation at the database, five enforcement layers. Read the guarantees on the Security page." },
        { heading: "Governance", body: "Four governance tiers and a simulation gate decide what's even allowed to change anything — and what gets rehearsed before it runs." },
        { heading: "Compliance", body: "Built to the EU AI Act high-risk bar, GDPR-aligned, with SOC 2 and ISO 27001 status confirmed before publishing. Compliance documentation and the live trust portal land here." },
      ]}
    />
  );
}
