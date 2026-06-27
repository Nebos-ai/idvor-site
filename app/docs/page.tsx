import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Docs",
  path: "/docs",
  description: "Connectors, the agent interface, and how to get started with Nebbos.",
});

export default function DocsPage() {
  return (
    <StubPage
      eyebrow="Documentation"
      title="Get started with Nebbos."
      lead="Connect your stack, stand up your first Pearl, and drive Nebbos's signal from your own agents over a standard interface."
      cta={{ label: "Book a demo →", href: "/demo" }}
      sections={[
        { heading: "Connectors", body: "Link the tools you already run through secure connectors. Nebbos reads events — it never replaces the systems they live in. The full connector reference lands here." },
        { heading: "The agent interface", body: "The same intelligence is available to your own agents and tools over a standard MCP interface. API reference and examples land here." },
        { heading: "Governance & approvals", body: "How the approval gate, governance tiers and simulation gate work in practice, and how to configure earned autonomy." },
      ]}
    />
  );
}
