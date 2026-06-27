/**
 * TEMP marketing primitives — minimal, token-driven, replaceable.
 *
 * These exist only so the IA scaffold has consistent layout/typography while we
 * wait on the founder Figma + the @nebbos/brand package (ADR-270). They read all
 * styling from lib/brand/tokens.css via the classes in app/globals.css. Keep this
 * intentionally small — do NOT grow it into a full design system. When the real
 * DS lands, these become thin adapters or are replaced outright.
 */
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`nb-container ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  divided = false,
}: {
  children: ReactNode;
  className?: string;
  /** Draw a hairline top border (section separator). */
  divided?: boolean;
}) {
  return (
    <section className={`${divided ? "nb-hairline" : ""} ${className}`}>
      <Container className="nb-section">{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="nb-eyebrow">{children}</p>;
}

export function Lead({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <p className={`nb-lead ${className}`} style={style}>
      {children}
    </p>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  external?: boolean;
};

export function Button({ href, children, variant = "primary", external }: ButtonProps) {
  const cls = `nb-btn nb-btn-${variant}`;
  if (external || href.startsWith("http")) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}

/**
 * Standard subpage hero: eyebrow + h1 + lead. Marketing pages share this so the
 * IA reads consistently before the real design lands.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="nb-page-hero">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="nb-h1">{title}</h1>
        {lead ? <Lead className="nb-page-hero-lead">{lead}</Lead> : null}
        {children}
      </Container>
    </section>
  );
}

/** Simple card/panel used across the scaffold. */
export function Panel({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`nb-panel ${className}`} style={style}>
      {children}
    </div>
  );
}

/** Feature tile (dept label + heading + body). */
export function Tile({
  label,
  heading,
  children,
}: {
  label: string;
  heading: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="nb-tile">
      <div className="nb-tile-label">{label}</div>
      <h3>{heading}</h3>
      <p>{children}</p>
    </div>
  );
}

/** A simple CTA band used at the foot of most marketing pages. */
export function CtaBand({
  title,
  lead,
  actions,
}: {
  title: ReactNode;
  lead?: ReactNode;
  actions: ReactNode;
}) {
  return (
    <Section divided className="nb-center">
      <h2 className="nb-h2 nb-measure-mx">{title}</h2>
      {lead ? <Lead className="nb-measure-mx nb-mt">{lead}</Lead> : null}
      <div className="nb-actions nb-center-actions">{actions}</div>
    </Section>
  );
}
