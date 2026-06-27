import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Governance",
  path: "/governance",
  description:
    "Four governance tiers and a simulation gate: not everything earns the same scrutiny, and nothing skips it.",
});

export default function GovernancePage() {
  return (
    <StubPage
      eyebrow="Layers of governance"
      title="Not everything earns the same scrutiny. Nothing skips it."
      lead="Governance that treats every action the same is either too slow to live with or too loose to trust. Nebbos runs four tiers — and the red lines bind every tier without exception."
      sections={[
        { heading: "G0 — Constitutional", body: "The only tier that can change the system of record. Full review, full audit." },
        { heading: "G1 — Canon-constrained", body: "Reasoning and drafting against approved context. Binding only once promoted through a G0 gate." },
        { heading: "G2 — Convention", body: "Routine production work under standing rules. Human sign-off, light weight." },
        { heading: "G3 — Ephemeral", body: "Read-only and exploratory. Produces findings, never changes anything on its own." },
        { heading: "The simulation gate", body: "Before any consequential action runs, the Simulation Gate rehearses it against a private copy of your operation, checks the outcome, and throws the copy away — so the real thing only ever sees a move that's already been tested." },
      ]}
    />
  );
}
