import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, PageHero, CtaBand, Button } from "@/components/primitives";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Trust center",
  description:
    "Oversight, security, governance and compliance — accountability by architecture, not by promise. The Nebbos trust center.",
  path: "/trust",
});

const AREAS = [
  { href: "/security", title: "Security", blurb: "Four guarantees true by construction, enforced in five layers." },
  { href: "/governance", title: "Governance", blurb: "Four governance tiers and a simulation gate before any consequential action." },
  { href: "/compliance", title: "Compliance", blurb: "Built to the EU AI Act high-risk bar; GDPR, SOC 2 and ISO 27001 posture." },
  { href: "/legal/responsible-disclosure", title: "Responsible disclosure", blurb: "How to report a vulnerability to us." },
];

export default function TrustPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust center"
        title="Accountability by architecture — not by promise."
        lead="A system that observes how people work is high-risk under the EU AI Act. Nebbos answers that with how it's built. Start here."
      />
      <Section divided>
        <Eyebrow>Explore</Eyebrow>
        <div className="nb-card-list">
          {AREAS.map((a) => (
            <Link key={a.href} href={a.href} className="nb-card-link">
              <div className="nb-card-meta">Trust</div>
              <h3>{a.title}</h3>
              <p>{a.blurb}</p>
            </Link>
          ))}
        </div>
        {/* TODO: content — add the live trust-center surface (status, certs, sub-processor list, downloadable reports) once available. */}
        <div className="nb-todo">
          TODO: content — wire the live trust center (cert status, sub-processor list, downloadable
          reports) once confirmed.
        </div>
      </Section>
      <CtaBand
        title="Bring the security questionnaire. We built for it."
        actions={<Button href="/contact">Talk to us →</Button>}
      />
    </>
  );
}
