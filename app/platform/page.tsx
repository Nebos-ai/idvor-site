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
  title: "Platform",
  description:
    "One platform that answers the five questions every operation runs on: signal, prediction, explanation, action and knowledge — built on the Operational Graph.",
  path: "/platform",
});

/* Ported from legacy/platform.html. */
export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="The platform"
        title="One platform. Five questions. One source of operational truth."
        lead="Nebbos watches the work your organisation already does and turns it into foresight — predicting where things break, explaining why, and acting under your oversight. It all runs on one thing: the Operational Graph."
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

      {/* OPERATIONAL GRAPH */}
      <Section divided>
        <div className="nb-split nb-center-grid">
          <div>
            <Eyebrow>The mechanism</Eyebrow>
            <h2 className="nb-h2 nb-mt" style={{ maxWidth: "16ch" }}>
              The Operational Graph.
            </h2>
            <Lead className="nb-mt" style={{ maxWidth: "52ch" }}>
              Underneath every answer is a living map of how your organisation actually operates —
              who depends on whom, how work moves between teams, where it tends to stall. Nebbos
              builds it from the events your tools already emit, keeps it current, and reasons over
              it.
            </Lead>
            <Lead className="nb-mt" style={{ maxWidth: "52ch" }}>
              It&apos;s a <em>temporal</em> map — it holds not just how things stand today but how
              they got there. And it stores structured signal — patterns, thresholds, relationships
              — never the raw contents of your messages.
            </Lead>
          </div>
          <Panel>
            <div className="nb-card-meta">What the graph holds</div>
            <div className="nb-grid nb-grid-2 nb-mt">
              <div>
                <b>Entities</b>
                <br />
                <span style={{ color: "var(--nb-text-mist)" }}>
                  teams, people, projects, commitments
                </span>
              </div>
              <div>
                <b>Relationships</b>
                <br />
                <span style={{ color: "var(--nb-text-mist)" }}>
                  dependencies, handoffs, ownership
                </span>
              </div>
              <div>
                <b>Signal</b>
                <br />
                <span style={{ color: "var(--nb-text-mist)" }}>velocity, capacity, thresholds</span>
              </div>
              <div>
                <b>Time</b>
                <br />
                <span style={{ color: "var(--nb-text-mist)" }}>how all of it changes, tracked</span>
              </div>
            </div>
          </Panel>
        </div>
      </Section>

      {/* SIX DETECTORS */}
      <Section divided>
        <Eyebrow>Prediction</Eyebrow>
        <h2 className="nb-h2 nb-mt" style={{ maxWidth: "18ch" }}>
          Six deterministic detectors run before any model call.
        </h2>
        <Lead className="nb-mt" style={{ maxWidth: "58ch" }}>
          Detection is cheap math, not inference — most checks never cost a token. Only when a
          pattern fires does Nebbos reason about it.
        </Lead>
        <div className="nb-grid nb-grid-3 nb-mt">
          <Tile label="01" heading="Deadline risk">
            Completion gap against capacity and a stalling velocity.
          </Tile>
          <Tile label="02" heading="Capacity crunch">
            Overlapping deadline pressure across a dependency.
          </Tile>
          <Tile label="03" heading="Velocity drop">
            A sharp week-on-week fall with deadlines still live.
          </Tile>
          <Tile label="04" heading="Handoff stall">
            A cross-team handoff sitting past its threshold.
          </Tile>
          <Tile label="05" heading="Absence signal">
            No activity where there should be, no leave on record.
          </Tile>
          <Tile label="06" heading="Cascade risk">
            One team&apos;s commitment that a dependent team can&apos;t meet.
          </Tile>
        </div>
      </Section>

      <CtaBand
        title="See the platform on your own data."
        lead="Connect your stack and your first Pearl starts watching. Predictions begin as soon as there's enough signal."
        actions={
          <>
            <Button href={SITE.appUrl} external>
              Log in →
            </Button>
            <Button href="/demo" variant="ghost">
              Get a demo
            </Button>
          </>
        }
      />
    </>
  );
}
