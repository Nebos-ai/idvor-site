import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "People",
  path: "/solutions/people",
  description: "Unaccounted absence and coverage risk, raised to the manager who can act on it, with the discretion the function demands.",
});

export default function PeoplePage() {
  return (
    <StubPage
      eyebrow="Function · People"
      title="Coverage gaps, surfaced to the lead — never the person."
      lead="Unaccounted absence and coverage risk, raised to the manager who can act on it, with the discretion the function demands."
      sections={[
        { heading: "Coverage and absence signal", body: "No activity where there should be, no leave on record — flagged to the lead, never broadcast to peers." },
        { heading: "Scoped by role", body: "Sensitive signal goes only to the person who can act on it. Access is enforced at the database." },
        { heading: "It asks about data, never feelings", body: "Pearl asks about the one data point it can't account for — never how anyone feels." },
      ]}
    />
  );
}
