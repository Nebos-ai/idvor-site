import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Financial Services",
  path: "/solutions/financial-services",
  description: "Controls, approvals and operational risk run on coordination. Nebbos predicts where a control workflow is about to stall, explains why, and keeps every decision audit-ready.",
});

export default function FinancialServicesPage() {
  return (
    <StubPage
      eyebrow="Financial Services"
      title="Operational risk, surfaced and sourced before it's an incident."
      lead="Controls, approvals and operational risk run on coordination. Nebbos predicts where a control workflow is about to stall, explains why, and keeps every decision audit-ready."
      sections={[
        { heading: "Control and approval workflows", body: "Stalled approvals, slipping deadlines and cascade risk across operational controls — caught early, with the reasoning attached." },
        { heading: "Audit-ready by construction", body: "What was decided, by whom, on what evidence, and why — all recorded and queryable, all the time. Bring the examiner; we built for it." },
        { heading: "Bounded autonomy", body: "Pearl acts only within limits it has demonstrably earned, and any action it takes can be undone." },
      ]}
    />
  );
}
