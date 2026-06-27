# nebbos-site

Marketing site for **Nebbos** — Operations Intelligence. `nebbos.ai` is the
canonical, indexed production host.

> **Status: SCAFFOLD.** This is a Next.js App Router rebuild of the marketing
> site that **replaces the previous static HTML site pending ratification of
> governance ADR #1401 and a founder Figma.** It ships the full **structure +
> information architecture** with the real marketing copy ported in — it is
> **not** the final visual design.
>
> - **Visuals are TEMP placeholder**, seeded from the old site's aesthetic, and
>   wait on the founder Figma.
> - **Brand tokens are TEMP placeholder** (`lib/brand/tokens.css`) and will be
>   replaced by the `@nebbos/brand` package (**ADR-270**).
> - The **Pages → Railway cutover is a separate, gated step**. The live
>   `nebbos.ai` (currently Cloudflare Pages, static site) is **untouched**.

## Stack

- Next.js (App Router, RSC-first), TypeScript, ESLint
- MDX content collections via `@next/mdx` + `gray-matter`
- Package manager: **npm**

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
npm start        # serve the production build (honours $PORT)
```

## Layout

```
app/                 # routes (App Router) — full IA, see below
components/           # TEMP marketing primitives + nav/footer
lib/
  brand/tokens.css   # TEMP design tokens — swap for @nebbos/brand (ADR-270)
  nav.ts             # single nav config (drives nav + footer)
  seo.ts             # per-page metadata / canonical / noindex helpers
  site.ts            # canonical host, product name, app URL
  solutions.ts       # industries + functions taxonomy
  content.ts         # MDX collection reader (blog/customers/changelog/careers)
  routes.ts          # canonical route list for the sitemap
content/             # MDX entries for the collections
legacy/              # the previous static HTML site (kept for reference)
Dockerfile,railway.json  # Railway deploy config (cutover is a separate step)
```

## The TEMP token layer (how to swap for `@nebbos/brand`)

All visual styling reads CSS custom properties (`--nb-*`) defined in a single
file, `lib/brand/tokens.css`, imported once by `app/globals.css`. To adopt the
real brand: have `@nebbos/brand` emit the same custom properties (or replace the
import) — the primitives and pages re-theme with no component changes.

## Information architecture

See `lib/routes.ts` and `lib/nav.ts` for the canonical lists. Marketing pages
are TSX; `blog`, `customers`, `changelog` and `careers` are MDX collections.

## Notes

- `app/sitemap.ts` + `app/robots.ts` point canonical/OG URLs at `nebbos.ai`.
- Non-production hosts emit `noindex` (env-gated via `NEXT_PUBLIC_SITE_URL`).
- See `AGENTS.md` for repo rules (notably: product name is always "Nebbos").
