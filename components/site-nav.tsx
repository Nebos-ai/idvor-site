import Link from "next/link";
import { Container } from "@/components/primitives";
import { PRIMARY_NAV, NAV_ACTIONS } from "@/lib/nav";
import { SITE } from "@/lib/site";

/**
 * Top navigation. RSC — no client interactivity yet (dropdowns/mobile menu are
 * a design-time concern that waits on the Figma). For now every group exposes
 * its top-level link plus a static set of sub-links, so the full IA is
 * crawlable and reachable.
 */
export function SiteNav() {
  return (
    <header className="nb-nav">
      <Container className="nb-nav-inner">
        <Link href="/" className="nb-brand">
          {SITE.name.toLowerCase()}
        </Link>

        <nav className="nb-nav-links" aria-label="Primary">
          {PRIMARY_NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nb-nav-right">
          <Link className="nb-btn nb-btn-primary nb-btn-sm" href={NAV_ACTIONS.demo.href}>
            {NAV_ACTIONS.demo.label}
          </Link>
          <a
            className="nb-btn nb-btn-ghost nb-btn-sm"
            href={NAV_ACTIONS.login.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {NAV_ACTIONS.login.label}
          </a>
        </div>
      </Container>
    </header>
  );
}
