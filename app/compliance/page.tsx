import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Compliance",
  path: "/compliance",
  description:
    "Built to the EU AI Act high-risk bar, GDPR-aligned, with SOC 2 and ISO 27001. Compliance posture and documentation.",
});

export default function CompliancePage() {
  return (
    <StubPage
      eyebrow="Compliance"
      title="Built for the rules that govern AI that observes people."
      lead="Nebbos is designed for the high-risk bar from day one — not retrofitted to it. Certification status is confirmed before publishing."
      cta={{ label: "Request documentation →", href: "/contact" }}
      sections={[
        { heading: "EU AI Act — high-risk ready", body: "A system that observes how people work is high-risk under the EU AI Act. The human approval gate, sourced decisions, and bounded autonomy answer that requirement by architecture." },
        { heading: "GDPR", body: "Nebbos stores structured signal, not raw message contents, and scopes access by role. Data processing terms and the DPA are available on request." },
        { heading: "SOC 2 & ISO 27001", body: "Certification status to be confirmed before publishing. Reports and the security package are available under NDA for active evaluations." },
      ]}
    />
  );
}
