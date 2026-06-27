import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/primitives";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms",
  description: "The terms that govern access to and use of Nebbos.",
  path: "/legal/terms",
});

/* Ported from legacy/terms.html. Template — to be completed by counsel. */
export default function TermsPage() {
  return (
    <>
      <section className="nb-page-hero" style={{ paddingBottom: 30 }}>
        <div className="nb-container">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="nb-h1">Terms of service</h1>
          <p className="nb-lead nb-page-hero-lead">
            The terms that govern access to and use of Nebbos.{" "}
            <span className="nb-faint">
              Template — to be completed and reviewed by counsel before publishing.
            </span>
          </p>
        </div>
      </section>
      <Section>
        <div className="nb-prose">
          <p className="nb-mono nb-faint" style={{ fontSize: 12 }}>
            Last updated: [DATE]
          </p>
          <h2>Agreement</h2>
          <p>
            These terms form an agreement between you and [legal entity] governing your use of the
            Nebbos service. By accessing the service you agree to them. [Reference the order form /
            MSA where applicable.]
          </p>
          <h2>The service</h2>
          <p>
            Nebbos provides Operations Intelligence: it reads operational events from systems you
            connect and produces predictions, explanations and proposed actions. Consequential
            actions require human approval. [Define availability targets and support in your SLA.]
          </p>
          <h2>Your responsibilities</h2>
          <ul>
            <li>Ensure you have the right to connect the systems and data you connect.</li>
            <li>Keep credentials secure and manage your users&apos; access.</li>
            <li>Use the service in line with applicable law.</li>
          </ul>
          <h2>Fees</h2>
          <p>
            Fees are charged per Pearl as set out in your order form, with included AI Action
            allowances and overage as described at the time of purchase. [State billing cycle, taxes,
            and renewal terms.]
          </p>
          <h2>Data &amp; confidentiality</h2>
          <p>
            Each party protects the other&apos;s confidential information. Processing of personal data
            is governed by our <a href="/legal/privacy">Privacy policy</a> and any Data Processing
            Agreement. [Reference the DPA.]
          </p>
          <h2>Warranties &amp; liability</h2>
          <p>[Insert warranty disclaimers, limitation of liability, and indemnities as advised by counsel.]</p>
          <h2>Term &amp; termination</h2>
          <p>
            [Describe term, termination for cause/convenience, and what happens to data on
            termination.]
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href="mailto:hello@nebbos.ai">hello@nebbos.ai</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
