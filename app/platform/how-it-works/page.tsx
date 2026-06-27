import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How it works",
  path: "/platform/how-it-works",
  description:
    "From connecting your stack to your first prediction: how Nebbos goes live in days, not quarters.",
});

export default function HowItWorksPage() {
  return (
    <StubPage
      eyebrow="How it works"
      title="Live in days, not quarters."
      lead="Nebbos reads from the stack you already run. Nothing for your teams to adopt, no new place for them to log work."
      sections={[
        {
          heading: "Connect",
          body: "Link existing tools through secure connectors. Nebbos reads events — never replaces the systems they live in.",
        },
        {
          heading: "Observe",
          body: "Your Operational Graph builds itself from day-one data, learning how work really moves between teams.",
        },
        {
          heading: "Predict",
          body: "As soon as there's enough signal, your first Pearl surfaces what's about to go wrong — with reasoning attached.",
        },
        {
          heading: "Act",
          body: "You approve, edit or decline. Every decision and its rationale is recorded — and the system sharpens with each one.",
        },
      ]}
    />
  );
}
