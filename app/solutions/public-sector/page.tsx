import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Public Sector",
  path: "/solutions/public-sector",
  description: "Public bodies are accountable for every decision. Nebbos surfaces the coordination risk early and records the full reasoning behind every action it proposes.",
});

export default function PublicSectorPage() {
  return (
    <StubPage
      eyebrow="Public Sector"
      title="Accountable, sourced, reversible — built for the transparency you're held to."
      lead="Public bodies are accountable for every decision. Nebbos surfaces the coordination risk early and records the full reasoning behind every action it proposes."
      sections={[
        { heading: "Coordination across agencies and teams", body: "Cross-team handoffs, deadline risk and capacity crunch surfaced while there's still time to act." },
        { heading: "Transparent by design", body: "Every decision is sourced and queryable. Oversight is enforced in the architecture, not promised in a policy." },
        { heading: "A human on every consequential move", body: "Nothing that affects a citizen or a service happens without a person signing off." },
      ]}
    />
  );
}
