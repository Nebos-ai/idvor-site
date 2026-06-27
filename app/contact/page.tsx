import type { Metadata } from "next";
import { Section, Eyebrow, Panel, PageHero } from "@/components/primitives";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Request access to Nebbos and we'll get your first Pearl watching your data.",
  path: "/contact",
});

/* Ported from legacy/contact.html. The form is a static placeholder — wiring it
   to a real handler/mailto is a separate build (the legacy site used a mailto). */
export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get started"
        title="Let's get your first Pearl watching."
        lead="Tell us a little about your team and the department you'd start with. We'll be in touch to set up access and connect your stack."
      />

      <Section>
        <div className="nb-split">
          <Panel>
            {/* TODO: content — wire this form to a real submission handler (legacy used mailto to hello@nebbos.ai). */}
            <form>
              <label className="nb-field">
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" />
              </label>
              <label className="nb-field">
                <span>Work email</span>
                <input type="email" name="email" autoComplete="email" />
              </label>
              <label className="nb-field">
                <span>Company</span>
                <input type="text" name="company" autoComplete="organization" />
              </label>
              <label className="nb-field">
                <span>Which department would you start with?</span>
                <textarea
                  name="message"
                  placeholder="e.g. Delivery — handoffs keep slipping between two teams"
                />
              </label>
              <button type="submit" className="nb-btn nb-btn-primary" style={{ marginTop: 18 }}>
                Request access →
              </button>
            </form>
          </Panel>

          <div>
            <Eyebrow>Or reach us directly</Eyebrow>
            <h3 style={{ fontSize: 22, marginTop: 12 }}>{SITE.contactEmail}</h3>
            <p style={{ marginTop: 12, color: "var(--nb-text-mist)", maxWidth: "42ch" }}>
              Prefer email? Write to us and we&apos;ll route you to the right person. Already a
              customer?{" "}
              <a href={SITE.appUrl} className="nb-accent" target="_blank" rel="noreferrer noopener">
                Log in here
              </a>
              .
            </p>
            <div style={{ marginTop: 36, color: "var(--nb-text-mist)" }}>
              <p style={{ marginTop: 12 }}>
                <b style={{ color: "var(--nb-text)" }}>No rip-and-replace.</b> We read from the tools
                you already use.
              </p>
              <p style={{ marginTop: 12 }}>
                <b style={{ color: "var(--nb-text)" }}>Live in days.</b> Predictions begin as soon as
                there&apos;s enough signal.
              </p>
              <p style={{ marginTop: 12 }}>
                <b style={{ color: "var(--nb-text)" }}>Built for your security review.</b> Oversight
                enforced in the architecture.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
