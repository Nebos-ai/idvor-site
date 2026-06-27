import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Healthcare",
  path: "/solutions/healthcare",
  description: "Care runs on handoffs, coverage and compliance. Nebbos reads the signal those workflows already emit and surfaces the gap before it reaches a patient — with the data handling a clinical setting demands.",
});

export default function HealthcarePage() {
  return (
    <StubPage
      eyebrow="Healthcare"
      title="Coordination you can account for, shift after shift."
      lead="Care runs on handoffs, coverage and compliance. Nebbos reads the signal those workflows already emit and surfaces the gap before it reaches a patient — with the data handling a clinical setting demands."
      sections={[
        { heading: "Handoff and coverage health", body: "Shift handoffs going cold, coverage gaps forming across units, and the deadline that slipped when a case changed — surfaced to the lead, never the floor." },
        { heading: "Built for sensitive data", body: "Nebbos stores structured signal — patterns, thresholds, relationships — not the contents of clinical records. Access is scoped by role at the database." },
        { heading: "Sourced and reversible", body: "A human on every consequential move, every decision sourced, any action reversible — the bar a clinical environment requires." },
      ]}
    />
  );
}
