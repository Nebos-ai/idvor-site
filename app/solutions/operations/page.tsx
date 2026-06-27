import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Operations",
  path: "/solutions/operations",
  description: "The stalled handoff and the slipping deadline surface while you can still move on them — not in next week's post-mortem.",
});

export default function OperationsPage() {
  return (
    <StubPage
      eyebrow="Function · Operations"
      title="Stop finding out on Friday."
      lead="The stalled handoff and the slipping deadline surface while you can still move on them — not in next week's post-mortem."
      sections={[
        { heading: "Handoff health", body: "Cross-team handoffs going cold past their threshold, raised to the owner who can move on them." },
        { heading: "Deadline and capacity risk", body: "Completion gaps against capacity and overlapping deadline pressure, caught before they cascade." },
        { heading: "One source of operational truth", body: "Everyone acting on the same live read of how the work is actually moving — not five conflicting dashboards." },
      ]}
    />
  );
}
