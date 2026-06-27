import { Section } from "@/components/ui/Section";
import { Tile, Chip } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "K-12 Education",
  path: "/solutions/k12",
  description:
    "Operations Intelligence for K-12 districts and schools. Nebbos surfaces the coverage gap, the missed compliance deadline and the stalled support case before they reach a family — with a human on every consequential call.",
});

// K-12 is the lead vertical (ADR-278 AD-6) — most-developed industry page.

const pearls = [
  { dep: "Operations / Facilities", title: "Coverage & coordination", body: "Substitute coverage gaps, transport and facilities handoffs going cold, and the schedule conflict forming across buildings — surfaced to the lead while there's still time to fix it." },
  { dep: "Compliance", title: "Deadlines that can't slip", body: "IEP review dates, mandated reporting windows and accreditation milestones tracked against the work actually happening — so a deadline never surprises you the week it's due." },
  { dep: "Student Support", title: "Cases before they escalate", body: "A support case stalled past its threshold, an attendance pattern with no note on record — flagged to the right staff member, never broadcast to peers." },
  { dep: "District Office", title: "One read across schools", body: "Every school on the same live read of how the work is moving, instead of a dozen spreadsheets reconciled the night before a board meeting." },
];

const proof = [
  ["Surfaced to leads, not peers.", "Sensitive signal — absence, a struggling case — goes to the staff member who can act on it, never to a colleague. Access is scoped by role at the database."],
  ["FERPA-minded by construction.", "Nebbos reads the shape of work — patterns, thresholds, deadlines — not the contents of student records or messages. It stores structured signal, not an archive."],
  ["A human on every consequential call.", "Nothing that affects a student or a family happens without a person signing off. Autonomy is earned, bounded, and reversible."],
];

export default function K12Page() {
  return (
    <>
      <PageHero
        eyebrow="K-12 Education · Lead vertical"
        title="See the coverage gap before it reaches a family."
        lead="Districts and schools run on coordination — staff, schedules, compliance deadlines, student support — and the early signs of a problem are already in the tools you use. Nebbos reads that signal and puts the fix in front of the right person while it can still be used."
      >
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <ButtonLink href="/demo" variant="primary">Book a demo →</ButtonLink>
          <ButtonLink href="/security" variant="ghost">How we handle student data</ButtonLink>
        </div>
      </PageHero>

      <Section divider>
        <p className="eyebrow">The problem</p>
        <h2 style={{ marginTop: 20, fontSize: "clamp(26px,3.6vw,44px)", maxWidth: "20ch" }}>
          In a district, what slips is rarely the big thing. It&rsquo;s the handoff nobody owned.
        </h2>
        <p className="mist" style={{ marginTop: 24, fontSize: 18, maxWidth: "60ch" }}>
          A substitute who never confirmed. A compliance review whose deadline moved when the case did.
          A support escalation that sat in someone&rsquo;s inbox over a long weekend. None of it shows
          up on a dashboard until it&rsquo;s already a problem for a student, a parent, or an auditor.
          Nebbos watches for exactly these patterns and raises them early — with the reasoning attached.
        </p>
      </Section>

      <Section divider>
        <p className="eyebrow">A Pearl per function</p>
        <h2 style={{ marginTop: 20, fontSize: "clamp(26px,3.6vw,44px)" }}>What Nebbos watches in a district.</h2>
        <div className="grid grid-2" style={{ marginTop: 48 }}>
          {pearls.map((p) => (
            <Tile key={p.dep} label={p.dep} title={p.title}>{p.body}</Tile>
          ))}
        </div>
      </Section>

      <Section divider>
        <p className="eyebrow">Built for the trust a school is held to</p>
        <h2 style={{ marginTop: 20, fontSize: "clamp(26px,3.6vw,44px)", maxWidth: "22ch" }}>
          Student data is the most sensitive signal there is. We treat it that way.
        </h2>
        <div className="grid grid-3" style={{ marginTop: 48 }}>
          {proof.map(([t, d]) => (
            <Tile key={t} title={t}>{d}</Tile>
          ))}
        </div>
        <div style={{ marginTop: 32, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Chip lead>Role-scoped access · RLS</Chip>
          <Chip>Structured signal, not records</Chip>
          <Chip>Human approval gate</Chip>
          <Chip>Full audit trail</Chip>
        </div>
        <p className="mono faint" style={{ marginTop: 20, fontSize: 12 }}>
          FERPA alignment is by design; formal attestation and district reference customers are
          confirmed before publishing.
        </p>
      </Section>

      <Section divider>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(26px,3.6vw,44px)", maxWidth: "22ch", marginInline: "auto" }}>
            Put a Pearl on the function that keeps you up at night.
          </h2>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <ButtonLink href="/demo" variant="primary">Book a demo →</ButtonLink>
            <ButtonLink href="/solutions" variant="ghost">See all solutions</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
