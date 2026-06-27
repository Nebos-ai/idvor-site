import type { ReactNode } from "react";
import { PageHero, Section, Button } from "@/components/primitives";
import { SITE } from "@/lib/site";

/**
 * Placeholder page body for routes whose final copy is a marketing concern that
 * waits on the founder Figma / content pass. Renders the real IA (hero + a clear
 * TODO marker + a standard CTA) so the route exists, is crawlable, and is wired
 * into nav/sitemap — without inventing final copy.
 */
export function StubPage({
  eyebrow,
  title,
  lead,
  todo,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** What content still needs to be written here. */
  todo: string;
  children?: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />
      <Section>
        {children}
        {/* TODO: content */}
        <div className="nb-todo">TODO: content — {todo}</div>
        <div className="nb-actions">
          <Button href="/demo">Get a demo →</Button>
          <Button href={SITE.appUrl} variant="ghost" external>
            Log in
          </Button>
        </div>
      </Section>
    </>
  );
}
