import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Finance",
  path: "/solutions/finance",
  description: "Predictable cost on top of whatever model you run, and the rare tool that's worth more next year than it is today.",
});

export default function FinancePage() {
  return (
    <StubPage
      eyebrow="Function · Finance"
      title="Predictable cost. A tool that compounds."
      lead="Predictable cost on top of whatever model you run, and the rare tool that's worth more next year than it is today."
      sections={[
        { heading: "Built for the cost of AI", body: "Six deterministic detectors run before any model call — most checks never cost a token. Governance-tiered routing sends reasoning to the right model at the right price." },
        { heading: "Model-agnostic", body: "Works across any LLM or provider, so you're never locked to one vendor's bill." },
        { heading: "Compounds instead of depreciating", body: "Every prediction, resolution and correction feeds back in — the system you run at month 24 has been shaped around how your organisation works." },
      ]}
    />
  );
}
