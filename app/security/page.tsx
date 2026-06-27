import type { Metadata } from "next";
import {
  Section,
  Eyebrow,
  Lead,
  Button,
  Tile,
  Panel,
  PageHero,
  CtaBand,
} from "@/components/primitives";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Security & Compliance",
  description:
    "A system that observes how people work is high-risk under the EU AI Act. Nebbos answers that with architecture — a human approval gate, every decision sourced, isolation at the database.",
  path: "/security",
});

/* Ported from legacy/security.html. */
export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Oversight & compliance"
        title="Oversight isn't a setting. It's the architecture."
        lead="A system that observes how people work is high-risk under the EU AI Act. Most vendors answer that with a policy document. Nebbos answers with how it's built — and you can read the guarantees below."
      >
        <div className="nb-chips">
          <span className="nb-chip nb-chip-lead">EU AI Act · high-risk ready</span>
          <span className="nb-chip">GDPR</span>
          <span className="nb-chip">SOC 2</span>
          <span className="nb-chip">ISO 27001</span>
        </div>
        <p className="nb-faint nb-mono nb-mt" style={{ fontSize: 12 }}>
          Certification status to be confirmed before publishing.
        </p>
      </PageHero>

      {/* GUARANTEES */}
      <Section divided>
        <Eyebrow>The guarantees</Eyebrow>
        <h2 className="nb-h2 nb-mt" style={{ maxWidth: "20ch" }}>
          Four things that are true by construction.
        </h2>
        <div className="nb-grid nb-grid-2 nb-mt">
          <Tile label="Guarantee 01" heading="A human on every consequential move">
            Changes to how work runs route through an approval gate — there is no path that lets the
            system act on the consequential things without sign-off.
          </Tile>
          <Tile label="Guarantee 02" heading="Every decision is sourced">
            What was decided, by whom, on what evidence, and why — all recorded and queryable, all the
            time.
          </Tile>
          <Tile label="Guarantee 03" heading="Bounded, reversible autonomy">
            Pearl only acts within limits it has demonstrably earned, and any action it takes can be
            undone.
          </Tile>
          <Tile label="Guarantee 04" heading="Your data, your tenant">
            Isolation is enforced at the database for every row — not promised in a clause.
          </Tile>
        </div>
      </Section>

      {/* ENFORCEMENT LAYERS */}
      <Section divided>
        <Eyebrow>Defence in depth</Eyebrow>
        <h2 className="nb-h2 nb-mt" style={{ maxWidth: "20ch" }}>
          The approval gate is enforced in five places.
        </h2>
        <Lead className="nb-mt" style={{ maxWidth: "54ch" }}>
          Oversight that lives in one layer can be bypassed in another. Nebbos enforces the human
          checkpoint at every level of the stack.
        </Lead>
        <div className="nb-grid nb-grid-3 nb-mt">
          <Tile label="Layer 1" heading="Interface">
            Changes are submitted to an approval flow, not pushed straight through.
          </Tile>
          <Tile label="Layer 2" heading="API">
            Workflow changes require a valid approval token, or they&apos;re refused.
          </Tile>
          <Tile label="Layer 3" heading="Agent policy">
            The agent pauses on consequential tools and cannot proceed without a human resume.
          </Tile>
          <Tile label="Layer 4" heading="Tool permissions">
            Tools check the approval context before any logic runs.
          </Tile>
          <Tile label="Layer 5" heading="Database">
            Unauthorised writes to workflow tables are caught — with alert and rollback.
          </Tile>
          <Tile label="Break-glass" heading="Emergency override">
            Requires two senior approvers, a priority alert, and an automatic post-incident review.
          </Tile>
        </div>
      </Section>

      {/* GOVERNANCE TIERS */}
      <Section divided>
        <Eyebrow>Layers of governance</Eyebrow>
        <h2 className="nb-h2 nb-mt" style={{ maxWidth: "20ch" }}>
          Not everything earns the same scrutiny. Nothing skips it.
        </h2>
        <Lead className="nb-mt" style={{ maxWidth: "58ch" }}>
          Nebbos runs four tiers: routine, reversible work moves on a light lane; anything that can
          change how the organisation runs takes the heavy one. The red lines bind every tier.
        </Lead>
        <div className="nb-grid nb-grid-4 nb-mt">
          <Tile label="G0" heading="Constitutional">
            The only tier that can change the system of record. Full review, full audit.
          </Tile>
          <Tile label="G1" heading="Canon-constrained">
            Reasoning and drafting against approved context. Binding only once promoted through a G0
            gate.
          </Tile>
          <Tile label="G2" heading="Convention">
            Routine production work under standing rules. Human sign-off, light weight.
          </Tile>
          <Tile label="G3" heading="Ephemeral">
            Read-only and exploratory. Produces findings, never changes anything on its own.
          </Tile>
        </div>
        <Lead className="nb-mt" style={{ maxWidth: "58ch" }}>
          And before any consequential action runs, the <b>Simulation Gate</b> rehearses it against a
          private copy of your operation, checks the outcome, and throws the copy away.
        </Lead>
      </Section>

      {/* DATA HANDLING */}
      <Section divided>
        <div className="nb-split">
          <div>
            <Eyebrow>Data handling</Eyebrow>
            <h2 className="nb-h2 nb-mt" style={{ maxWidth: "18ch" }}>
              It reads the shape of work — not the contents.
            </h2>
            <Lead className="nb-mt" style={{ maxWidth: "50ch" }}>
              Nebbos stores structured signal — patterns, thresholds, relationships, timing — rather
              than the raw text of your messages and documents. The Operational Graph is a map of how
              work moves, not an archive of what everyone said.
            </Lead>
          </div>
          <Panel>
            <div className="nb-card-meta">What&apos;s stored vs. what isn&apos;t</div>
            <div style={{ marginTop: 16, color: "var(--nb-text-mist)", fontSize: 15 }}>
              <p>
                <b className="nb-accent">KEEPS</b> — events, patterns, thresholds, relationships,
                outcomes
              </p>
              <p style={{ marginTop: 10 }}>
                <b className="nb-faint">SKIPS</b> — raw message bodies and document contents
              </p>
              <p style={{ marginTop: 10 }}>
                <b className="nb-accent">SCOPES</b> — access by role; surfaces sensitive gaps to
                leads, not peers
              </p>
            </div>
          </Panel>
        </div>
      </Section>

      <CtaBand
        title="Bring the security questionnaire. We built for it."
        actions={
          <>
            <Button href="/contact">Talk to us →</Button>
            <Button href="/platform" variant="ghost">
              How the platform works
            </Button>
          </>
        }
      />
    </>
  );
}
