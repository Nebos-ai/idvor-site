import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Integrations",
  description:
    "Nebbos reads events from the tools your teams already use — tasks, messages, calendars, tickets, handoffs, deploys — through secure connectors. No rip-and-replace.",
  path: "/platform/integrations",
});

export default function Page() {
  return (
    <StubPage
      eyebrow="Integrations"
      title="Reads from the stack you already run."
      lead="Secure connectors normalise the events your tools already emit — tasks, messages, calendars, tickets, handoffs, deploys, approvals, incidents — into one operational stream."
      todo="add the connector catalogue / logo grid and per-connector detail once the integration list is confirmed by engineering."
    />
  );
}
