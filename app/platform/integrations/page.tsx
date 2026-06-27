import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Integrations",
  path: "/platform/integrations",
  description:
    "Nebbos reads from the stack you already run — tasks, messages, calendars, tickets, deploys — through secure connectors. No rip-and-replace.",
});

export default function IntegrationsPage() {
  return (
    <StubPage
      eyebrow="Integrations"
      title="Reads from the stack you already run."
      lead="Nebbos turns the daily exhaust of work into one normalised stream of operational events — through secure connectors, never by replacing the systems they live in."
      sections={[
        {
          heading: "Live signal sources",
          body: "Tasks, messages, calendars, handoffs, tickets, deploys, approvals and incidents — read as events, normalised into your Operational Graph.",
        },
        {
          heading: "Agent interface",
          body: "The same intelligence is available to your own agents and tools over a standard MCP interface, so Nebbos's signal can drive workflows you already run.",
        },
        {
          heading: "Connector catalogue",
          body: "The full, named connector catalogue and setup guides land with the founder content pass. Need a specific integration today? Tell us in your demo and we'll confirm coverage.",
        },
      ]}
    />
  );
}
