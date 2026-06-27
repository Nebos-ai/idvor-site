import type { Metadata } from "next";
import { PageHero, Section, Eyebrow, Lead, Button } from "@/components/primitives";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Get a demo",
  description:
    "See what your operations are about to do. Request a Nebbos demo and we'll get your first Pearl watching your data.",
  path: "/demo",
});

/* Self-serve demo entry — placeholder. The actual guided/self-serve demo flow
   is a separate build; for now this is the 'Get a demo' CTA surface. */
export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a demo"
        title="See what your operations are about to do."
        lead="Request a demo and we'll walk you through Nebbos on a real operational signal — then get your first Pearl watching your own data."
      >
        <div className="nb-actions">
          <Button href="/contact">Request a demo →</Button>
          <Button href={SITE.appUrl} variant="ghost" external>
            Log in
          </Button>
        </div>
      </PageHero>
      <Section>
        <Eyebrow>Coming soon</Eyebrow>
        <Lead className="nb-mt" style={{ maxWidth: "54ch" }}>
          A self-serve, guided demo lives here. Until then, request access and we&apos;ll set you up
          directly.
        </Lead>
        {/* TODO: content — build the self-serve demo flow (separate, gated build). */}
        <div className="nb-todo">
          TODO: content — the interactive self-serve demo flow is a separate build; this page is the
          entry CTA only.
        </div>
      </Section>
    </>
  );
}
