import type { Metadata } from "next";
import { Section, Eyebrow, Lead, Button, Panel, PageHero, CtaBand } from "@/components/primitives";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  description:
    "Nebbos is priced per Pearl — one per department — not per user. Lite, Growth and Scale tiers, with included AI Actions and annual savings.",
  path: "/pricing",
  // Ported from legacy/pricing.html which carried noindex (pricing not yet public).
  noindex: true,
});

type Tier = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

const TIERS: Tier[] = [
  {
    name: "Lite",
    price: "€649",
    desc: "One department, getting its first foresight.",
    features: ["1 department Pearl", "5,000 AI Actions / mo", "Connectors & dashboard", "Full audit trail"],
    cta: "Start with Lite",
  },
  {
    name: "Growth",
    price: "€1,499",
    desc: "For departments running on Nebbos day to day.",
    features: [
      "Everything in Lite",
      "15,000 AI Actions / mo",
      "Earned, bounded autonomy",
      "Agent interface access",
    ],
    featured: true,
    cta: "Choose Growth",
  },
  {
    name: "Scale",
    price: "€2,299",
    desc: "High-volume departments and cross-team signal.",
    features: [
      "Everything in Growth",
      "50,000 AI Actions / mo",
      "Priority signal processing",
      "Extended retention options",
    ],
    cta: "Choose Scale",
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Why per Pearl and not per user?",
    a: "Because the value is the department being watched, not the number of people logging in. One Pearl covers a whole department, and everyone on that team benefits from it. You scale by adding departments, not seats.",
  },
  {
    q: "What's an AI Action?",
    a: "An AI Action is one unit of Pearl's reasoning work — explaining a prediction, drafting a next step, answering a question. Watching your signal and running the deterministic detectors doesn't consume Actions; only the reasoning does.",
  },
  {
    q: "Can I start with one department?",
    a: "Yes — most teams do. Put a Pearl on your hardest department, prove the value on your own data, then expand. Pearls share what they learn where it's relevant as you add them.",
  },
  {
    q: "How does annual billing work?",
    a: "Annual plans are billed once a year and save 12% versus monthly. The audit trail and your Operational Graph live in the system, so an annual commitment keeps your regulatory record continuous.",
  },
  {
    q: "Do prices include onboarding?",
    a: "Connecting your stack and standing up your first Pearl is part of getting started. For org-wide rollouts with procurement, DPA and security review, talk to us about Enterprise.",
  },
];

/* Ported from legacy/pricing.html. */
export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Priced per Pearl. Not per seat."
        lead="You pay for the departments you put a Pearl on — and the work it does for them. Everyone on the team can use it. Annual plans save 12%."
      />

      <Section>
        <div className="nb-grid nb-grid-3">
          {TIERS.map((tier) => (
            <Panel
              key={tier.name}
              className={tier.featured ? "nb-tier-featured" : ""}
            >
              <div className="nb-card-meta">{tier.name}</div>
              <div style={{ fontSize: 42, fontWeight: 700, marginTop: 12, letterSpacing: "-0.04em" }}>
                {tier.price}
                <small style={{ fontSize: 14, fontWeight: 500, color: "var(--nb-text-mist)" }}>
                  {" "}
                  / Pearl / mo
                </small>
              </div>
              <p style={{ color: "var(--nb-text-mist)", fontSize: 14.5, marginTop: 6 }}>{tier.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, marginTop: 22 }}>
                {tier.features.map((f) => (
                  <li key={f} style={{ color: "#cfcfd8", fontSize: 14.5, padding: "6px 0" }}>
                    {f}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 24 }}>
                <Button href="/contact" variant={tier.featured ? "primary" : "ghost"}>
                  {tier.cta} {tier.featured ? "→" : ""}
                </Button>
              </div>
            </Panel>
          ))}
        </div>

        <Panel className="nb-mt">
          <div className="nb-card-meta">Enterprise</div>
          <h3 style={{ fontSize: 22, marginTop: 8 }}>
            Many departments, custom retention, procurement & DPA support
          </h3>
          <p style={{ color: "var(--nb-text-mist)", marginTop: 8, maxWidth: "60ch" }}>
            Volume pricing across Pearls, extended audit retention, regulator-export support, and
            security review. Built for organisations adopting Nebbos org-wide.
          </p>
          <div className="nb-actions">
            <Button href="/contact" variant="light">
              Talk to us →
            </Button>
          </div>
        </Panel>
        <p className="nb-faint nb-mono nb-mt" style={{ fontSize: 12 }}>
          Figures reflect current internal pricing — confirm before publishing. Overage on AI Actions
          billed per pack; annual plans −12%.
        </p>
      </Section>

      {/* FAQ */}
      <Section divided>
        <Eyebrow>Questions</Eyebrow>
        <h2 className="nb-h2 nb-mt">Pricing, answered.</h2>
        <div className="nb-mt">
          {FAQ.map((item) => (
            <details key={item.q} className="nb-faq">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Start with one Pearl. See it pay for itself."
        actions={
          <>
            <Button href="/contact">Request access →</Button>
            <Button href={SITE.appUrl} variant="ghost" external>
              Log in
            </Button>
          </>
        }
      />
    </>
  );
}
