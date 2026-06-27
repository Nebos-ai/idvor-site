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
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Pearl",
  description:
    "Pearl is the agent at the heart of Nebbos — one per department. It watches your signal, explains what it sees, and acts within bounds you set, with a human on every consequential call.",
  path: "/pearl",
});

/* Ported from legacy/pearl.html. */
export default function PearlPage() {
  return (
    <>
      <PageHero
        eyebrow="The agent"
        title="Meet Pearl. One per department."
        lead="Pearl is the agent that turns your operational signal into foresight. It watches a single department, surfaces only what's worth your attention, explains what it sees, and acts within bounds you set — never without a human on the calls that matter."
      >
        <div className="nb-actions">
          <Button href={SITE.appUrl} external>
            Log in →
          </Button>
          <Button href="/demo" variant="ghost">
            Get a demo
          </Button>
        </div>
      </PageHero>

      {/* HOW PEARL WORKS */}
      <Section divided>
        <Eyebrow>How Pearl works</Eyebrow>
        <h2 className="nb-h2 nb-mt" style={{ maxWidth: "18ch" }}>
          Sharp where it counts. Quiet everywhere else.
        </h2>
        <div className="nb-grid nb-grid-3 nb-mt">
          <Tile label="Arrives prepared" heading="Researched before day one">
            Each Pearl launches having studied best practice for its department and your industry, so
            it&apos;s useful from the first signal — not after months of training.
          </Tile>
          <Tile label="Asks rarely" heading="One sharp question">
            When it genuinely can&apos;t explain something, Pearl asks the one person who can — about
            the specific data point, never about how anyone feels.
          </Tile>
          <Tile label="Shows its work" heading="Confidence you can see">
            Every prediction carries a confidence score and a &quot;why&quot; you can open. Pearl
            would rather say &quot;I&apos;m not sure yet&quot; than guess.
          </Tile>
        </div>
      </Section>

      {/* HITL */}
      <Section divided>
        <div className="nb-split">
          <div>
            <Eyebrow>Human in the loop</Eyebrow>
            <h2 className="nb-h2 nb-mt" style={{ maxWidth: "16ch" }}>
              Autonomy is earned, bounded, and reversible.
            </h2>
            <Lead className="nb-mt" style={{ maxWidth: "50ch" }}>
              Pearl starts by suggesting. As its predictions prove out, you can let it act on the
              smaller things on its own — within limits you set. Before it acts on anything that
              matters, it can rehearse the move against a private copy of your data; anything
              consequential then pauses for a person, and any action it takes can be undone.
            </Lead>
          </div>
          <Panel>
            <div className="nb-card-meta">Pearl · Delivery</div>
            <p style={{ marginTop: 10, color: "var(--nb-text-mist)" }}>
              The Riverside handoff has waited 51 hours — past your 48-hour threshold. A downstream
              team&apos;s Friday commitment now can&apos;t be met. I can flag both leads and propose a
              revised date.
            </p>
            <p style={{ marginTop: 14, color: "var(--nb-accent)", fontSize: 13 }}>
              Approved · logged to your Operational Graph
            </p>
          </Panel>
        </div>
      </Section>

      {/* DEPARTMENTS */}
      <Section divided>
        <Eyebrow>One per department</Eyebrow>
        <h2 className="nb-h2 nb-mt">A Pearl that knows your function.</h2>
        <Lead className="nb-mt" style={{ maxWidth: "54ch" }}>
          Each Pearl is scoped to one department, so its attention is narrow and its judgement is
          specific. Add Pearls as you grow — they share what they learn where it&apos;s relevant.
        </Lead>
        <div className="nb-grid nb-grid-4 nb-mt">
          <Tile label="Engineering" heading="Velocity & risk">
            Velocity drops, stalled reviews, and cascade risk across delivery.
          </Tile>
          <Tile label="Sales" heading="Pipeline signal">
            Slipping commitments and capacity crunch, before the quarter shows it.
          </Tile>
          <Tile label="Operations" heading="Handoff health">
            Cross-team handoffs going cold past their threshold.
          </Tile>
          <Tile label="HR" heading="Coverage gaps">
            Unaccounted absence and coverage risk — surfaced to the lead, never the person.
          </Tile>
        </div>
      </Section>

      <CtaBand
        title="Put a Pearl on your hardest department."
        actions={
          <>
            <Button href={SITE.appUrl} external>
              Log in →
            </Button>
            <Button href="/platform" variant="ghost">
              How the platform works
            </Button>
          </>
        }
      />
    </>
  );
}
