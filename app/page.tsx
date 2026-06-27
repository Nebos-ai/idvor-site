import type { Metadata } from "next";
import {
  Container,
  Section,
  Eyebrow,
  Lead,
  Button,
  Tile,
  Panel,
  CtaBand,
} from "@/components/primitives";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: SITE.name,
  description: SITE.description,
  path: "/",
});

/* Home — ported from legacy/index.html. Copy is real; the animated scroll
   narrative, canvas backdrop and kinetic line from the static site are
   intentionally dropped for now (they're a design-time concern that returns
   with the Figma). Structure + copy preserved. */
export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="nb-page-hero">
        <Container>
          <Eyebrow>Operations Intelligence</Eyebrow>
          <h1 className="nb-h1">
            Dashboards tell you what already broke. Nebbos tells you what&apos;s{" "}
            <span className="nb-accent">about to</span>.
          </h1>
          <Lead className="nb-page-hero-lead">
            Your tools already emit the early signs of how your company really runs. Nebbos reads
            that signal as it happens — the stalled handoff, the slipping deadline, the capacity
            crunch forming three teams away — and puts the fix in front of you while you can still
            use it.
          </Lead>
          <div className="nb-actions">
            <Button href={SITE.appUrl} external>
              Log in to Nebbos →
            </Button>
            <Button href="/demo" variant="ghost">
              Get a demo ▸
            </Button>
          </div>
          <p className="nb-faint nb-mt" style={{ fontSize: 13 }}>
            No login yet? <a href="/contact" className="nb-accent">Request access</a>.
          </p>
        </Container>
      </section>

      {/* THESIS */}
      <Section>
        <Eyebrow>The idea</Eyebrow>
        <h2 className="nb-h2 nb-mt" style={{ maxWidth: "16ch" }}>
          Most software remembers. <span className="nb-accent">Nebbos predicts.</span>
        </h2>
        <Lead className="nb-mt" style={{ maxWidth: "60ch" }}>
          Every organisation runs on five questions: what&apos;s happening, what&apos;s about to go
          wrong, why, what to do, and what it just learned. Nebbos answers them in order — each built
          on the one beneath it — and shows its work as it goes.
        </Lead>
      </Section>

      {/* FIVE QUESTIONS */}
      <Section divided>
        <Eyebrow>End to end</Eyebrow>
        <h2 className="nb-h2 nb-mt">The five questions, in order.</h2>
        <div className="nb-grid nb-grid-3 nb-mt">
          <Tile label="Q1 — Signal" heading="What's happening right now">
            Connect the tools your teams already use. Nebbos turns the daily exhaust of work into one
            clean, normalised stream of operational events. No rip-and-replace.
          </Tile>
          <Tile label="Q2 — Prediction" heading="What's about to go wrong">
            Deterministic pattern detection runs first — deadline risk, capacity crunch, stalled
            handoffs, cascade risk. Only when a pattern fires does Nebbos reason about it.
          </Tile>
          <Tile label="Q3 — Explanation" heading="Why it's going wrong">
            A dedicated agent for each department works through the signal and tells you the cause in
            plain language, with the evidence attached.
          </Tile>
          <Tile label="Q4 — Action" heading="What to do about it">
            Nebbos can act — but the riskier moves are rehearsed in a sandbox first, then passed to a
            human checkpoint. Autonomy is earned, bounded, and always reversible.
          </Tile>
          <Tile label="Q5 — Knowledge" heading="What you've learned">
            Everything observed and resolved compounds into your Operational Graph — a living record
            of how your organisation actually runs, richer every week it&apos;s on.
          </Tile>
        </div>
      </Section>

      {/* WHO IT'S FOR */}
      <Section divided>
        <Eyebrow>Who it&apos;s for</Eyebrow>
        <h2 className="nb-h2 nb-mt" style={{ maxWidth: "20ch" }}>
          Everyone in the company needs something different.
        </h2>
        <Lead className="nb-mt" style={{ maxWidth: "56ch" }}>
          One signal, read five ways. The same Operational Graph answers the question each person is
          actually asking.
        </Lead>
        <div className="nb-grid nb-grid-3 nb-mt">
          <Tile label="Operations / COO" heading="Stop finding out on Friday.">
            The stalled handoff and the slipping deadline surface while you can still move on them —
            not in next week&apos;s post-mortem.
          </Tile>
          <Tile label="Engineering / CTO" heading="Six checks before one token.">
            Model-agnostic by design. Deterministic detection runs first; it works with any LLM,
            locked to none — over a dashboard and an MCP interface.
          </Tile>
          <Tile label="Finance / CFO" heading="Worth more next year.">
            Predictable cost on top of whatever model you run, and the rare tool that compounds
            instead of depreciating.
          </Tile>
          <Tile label="Risk / Legal" heading="It never acts alone.">
            Five enforcement layers, every decision sourced, built to the EU AI Act&apos;s high-risk
            bar — not retrofitted to it.
          </Tile>
          <Tile label="Department leads" heading="A colleague who did the homework.">
            Pearl arrives caught up and asks why the date moved — never how you feel. One agent per
            team.
          </Tile>
          <Tile label="The whole company" heading="One source of operational truth.">
            Everyone acting on the same live read of how the work is actually moving — not five
            conflicting dashboards.
          </Tile>
        </div>
      </Section>

      {/* PEARL teaser */}
      <Section divided>
        <div className="nb-split">
          <div>
            <Eyebrow>The agent</Eyebrow>
            <h2 className="nb-h2 nb-mt" style={{ maxWidth: "14ch" }}>
              Meet Pearl — one per department.
            </h2>
            <Lead className="nb-mt" style={{ maxWidth: "46ch" }}>
              Pearl watches a single department&apos;s signal, surfaces only what&apos;s worth your
              attention, and asks at most a couple of sharp questions when it genuinely can&apos;t
              explain something. It never asks how you feel — it asks about the one data point it
              can&apos;t account for, then learns from your answer.
            </Lead>
            <div className="nb-actions">
              <Button href="/pearl" variant="ghost">
                Explore Pearl →
              </Button>
            </div>
          </div>
          <Panel>
            <div className="nb-card-meta">Pearl · Delivery</div>
            <p style={{ marginTop: 10, color: "var(--nb-text-mist)" }}>
              The Riverside handoff has waited 51 hours — past your 48-hour threshold. A downstream
              team&apos;s Friday commitment now can&apos;t be met. I can flag both leads and propose a
              revised date.
            </p>
          </Panel>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section divided>
        <Eyebrow>Getting started</Eyebrow>
        <h2 className="nb-h2 nb-mt">Live in days, not quarters.</h2>
        <Lead className="nb-mt" style={{ maxWidth: "54ch" }}>
          Nebbos reads from the stack you already run. Nothing for your teams to adopt, no new place
          for them to log work.
        </Lead>
        <div className="nb-grid nb-grid-4 nb-mt">
          <Tile label="01" heading="Connect">
            Link existing tools through secure connectors. Nebbos reads events — never replaces the
            systems they live in.
          </Tile>
          <Tile label="02" heading="Observe">
            Your Operational Graph builds itself from day-one data, learning how work really moves.
          </Tile>
          <Tile label="03" heading="Predict">
            As soon as there&apos;s enough signal, your first Pearl surfaces what&apos;s about to go
            wrong — with reasoning attached.
          </Tile>
          <Tile label="04" heading="Act">
            You approve, edit or decline. Every decision and its rationale is recorded — and the
            system sharpens.
          </Tile>
        </div>
      </Section>

      <CtaBand
        title="See what your operations are about to do."
        lead="Log in to pick up where you left off, or request access and we'll get your first Pearl watching your data."
        actions={
          <>
            <Button href={SITE.appUrl} variant="light" external>
              Log in to Nebbos →
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
