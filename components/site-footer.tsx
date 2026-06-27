import Link from "next/link";
import { Container } from "@/components/primitives";
import { FOOTER_NAV } from "@/lib/nav";
import { SITE } from "@/lib/site";

/** Footer — driven entirely by FOOTER_NAV in lib/nav.ts. */
export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="nb-hairline">
      <Container>
        <div className="nb-foot-top">
          <div className="nb-foot-brand">
            <span className="nb-brand">{SITE.name.toLowerCase()}</span>
            <p className="nb-foot-tag">{SITE.tagline}</p>
          </div>
          <div className="nb-foot-grid">
            {FOOTER_NAV.map((col) => (
              <div key={col.heading} className="nb-foot-col">
                <h4>{col.heading}</h4>
                {col.links.map((link) =>
                  link.external ? (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
                      {link.label}
                    </a>
                  ) : (
                    <Link key={link.href} href={link.href}>
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="nb-foot-note">
          <span>
            © {year} {SITE.name}. All rights reserved.
          </span>
          <span>{SITE.contactEmail}</span>
        </div>
      </Container>
    </footer>
  );
}
