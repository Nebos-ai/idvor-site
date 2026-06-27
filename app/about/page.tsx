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
  title: "About",
  description:
    "Nebbos builds Operations Intelligence — software that helps organisations see what's about to happen and act with their judgement intact.",
  path: "/about",
});

/* Ported from legacy/about.html. */
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We help organisations see what's about to happen."
        lead="Most software is a record of the past. We think the more useful thing is a clear, honest read of what's coming — early enough to do something about it, and explained well enough that a person can decide what."
      />

      {/* THE NAME */}
      <Section divided>
        <div className="nb-split nb-center-grid">
          <div>
            <Eyebrow>The name</Eyebrow>
            <h2 className="nb-h2 nb-mt" style={{ maxWidth: "16ch" }}>
              Why &quot;Nebbos&quot;.
            </h2>
            <Lead className="nb-mt" style={{ maxWidth: "52ch" }}>
              Nebbos is a small village in Vojvodina — the birthplace of Mihajlo Pupin, who spent his
              life on a single problem: how to carry a faint signal across great distance without
              losing what it held. His work let a weak voice travel further and arrive intact.
            </Lead>
            <Lead className="nb-mt" style={{ maxWidth: "52ch" }}>
              That&apos;s the idea we build on. Every organisation is full of faint operational signal
              that fades before anyone acts on it. Nebbos carries that signal further — and makes sure
              the meaning survives the trip.
            </Lead>
          </div>
          <Panel className="nb-center" style={{ padding: "56px 26px" }}>
            <div className="nb-mono nb-faint" style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Signal, carried
            </div>
            <div style={{ marginTop: 20, fontSize: 36, fontWeight: 700, letterSpacing: "-0.04em" }}>
              faint → <span className="nb-accent">clear</span>
            </div>
            <p style={{ marginTop: 16, color: "var(--nb-text-mist)", maxWidth: "34ch", marginInline: "auto" }}>
              From the noise of everyday work to a decision someone can actually make.
            </p>
          </Panel>
        </div>
      </Section>

      {/* PRINCIPLES */}
      <Section divided>
        <Eyebrow>What we believe</Eyebrow>
        <h2 className="nb-h2 nb-mt">How we build.</h2>
        <div className="nb-grid nb-grid-3 nb-mt">
          <Tile label="Principle 01" heading="Keep the human in the loop">
            Software should sharpen judgement, not replace it. The consequential calls stay with
            people, always.
          </Tile>
          <Tile label="Principle 02" heading="Show your work">
            A prediction without its reasoning is just a guess with confidence. Every answer comes
            with its evidence.
          </Tile>
          <Tile label="Principle 03" heading="Earn trust slowly">
            Autonomy is something a system earns by being right over time — not a switch you flip on
            day one.
          </Tile>
        </div>
      </Section>

      <CtaBand
        title="Want to see what your operations are about to do?"
        actions={
          <>
            <Button href="/contact">Get in touch →</Button>
            <Button href={SITE.appUrl} variant="ghost" external>
              Log in
            </Button>
          </>
        }
      />
    </>
  );
}
