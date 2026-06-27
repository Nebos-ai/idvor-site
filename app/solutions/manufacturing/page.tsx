import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Manufacturing",
  path: "/solutions/manufacturing",
  description: "Production runs on dependencies — between teams, shifts and suppliers. Nebbos reads the signal those handoffs emit and predicts where the crunch is forming.",
});

export default function ManufacturingPage() {
  return (
    <StubPage
      eyebrow="Manufacturing"
      title="Catch the capacity crunch before it reaches the line."
      lead="Production runs on dependencies — between teams, shifts and suppliers. Nebbos reads the signal those handoffs emit and predicts where the crunch is forming."
      sections={[
        { heading: "Handoff and capacity signal", body: "Cross-team handoffs sitting past threshold and overlapping deadline pressure across a dependency — surfaced early." },
        { heading: "Cascade risk across the chain", body: "One team's commitment a dependent team can't meet, caught before it stops the line." },
        { heading: "Reads your existing stack", body: "Nebbos reads events from the systems you already run — no rip-and-replace on the floor." },
      ]}
    />
  );
}
