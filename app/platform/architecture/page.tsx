import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Architecture",
  description:
    "Model-agnostic by design, cheap to run by architecture: deterministic detection first, governance-tiered routing, a simulation gate, and a dual dashboard / agent interface.",
  path: "/platform/architecture",
});

export default function Page() {
  return (
    <StubPage
      eyebrow="Architecture"
      title="Model-agnostic by design. Cheap to run by architecture."
      lead="Six deterministic detectors run continuously; only a firing pattern spends a model call, routed by governance tier to the right model at the right price. Consequential moves rehearse in a sandbox first."
      todo="document the architecture in depth — deterministic-first detection, governance-tiered routing, the simulation/rehearsal gate, and the dual people-dashboard / agent-MCP interface (source copy ported from legacy/platform.html sections 'Efficiency', 'Rehearse', 'Dual interface')."
    />
  );
}
