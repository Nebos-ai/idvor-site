import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Architecture",
  path: "/platform/architecture",
  description:
    "Model-agnostic by design, cheap to run by architecture: deterministic detection first, governance-tiered routing, and a simulation gate before any consequential action.",
});

export default function ArchitecturePage() {
  return (
    <StubPage
      eyebrow="Architecture"
      title="Model-agnostic by design. Cheap to run by architecture."
      lead="Most AI products spend a model call on everything and hope the bill stays reasonable. Nebbos is built the other way around."
      sections={[
        {
          heading: "Deterministic first",
          body: "Six detectors run continuously and cost nothing to watch — most of what happens never touches a model. A model call is the exception, never the default.",
        },
        {
          heading: "Tiered routing",
          body: "When a pattern fires, governance-tiered routing sends the reasoning to the right model at the right price. Heavy reasoning goes to a capable model; routine work to a cheaper one. You set the policy.",
        },
        {
          heading: "Any provider",
          body: "Works across LLMs and providers — no vendor lock-in, no single bill holding you hostage. Swap your model next quarter; nothing downstream breaks.",
        },
        {
          heading: "The simulation gate",
          body: "Before any consequential action runs, Nebbos forks your current operational state, runs the action forward against that private copy, checks the outcome, and throws the copy away — so the real thing only ever sees a move that's already been tested.",
        },
      ]}
    />
  );
}
