// Nebbos marketing brand tokens.
//
// TODO(AD-3): migrate to @nebbos/brand package once ADR-270 confirms its home.
// Per ADR-278 AD-3, the shared @nebbos/brand package is BLOCKED (ownership
// unresolved). Until then these tokens live locally and are the single source
// of truth for the marketing design system. Every value below is mirrored to a
// CSS custom property in app/globals.css; change them in lockstep.
//
// The palette is carried over verbatim from the legacy static-site Tailwind
// config so the rebuild starts on-brand. The founder Figma is PENDING — this is
// a restrained, editorial, dark placeholder aesthetic (Palantir.com inspired),
// driven entirely by these tokens so it is trivial to re-skin later.

export const color = {
  // Ink — dark surfaces, deepest to lightest.
  ink: {
    900: "#0B0B10",
    800: "#121219",
    700: "#1A1A23",
    600: "#24242F",
  },
  paper: "#F4F4F5", // primary text on dark
  mist: "#A6A6B2", // secondary text
  faint: "#6A6A77", // tertiary text / captions
  blue: {
    DEFAULT: "#637DFF",
    deep: "#3B4ACB",
    soft: "#8FA1FF",
  },
  sky: "#C9D3FF",
  tomato: "#F6926C", // accent / "about to go wrong"
  hairline: "rgba(255,255,255,0.08)",
} as const;

export const font = {
  sans: '"DM Sans", system-ui, -apple-system, sans-serif',
  mono: '"DM Mono", ui-monospace, SFMono-Regular, monospace',
} as const;

export const layout = {
  contentMax: "1160px",
  letterSpacingTightest: "-0.04em",
} as const;

export const brand = { color, font, layout } as const;
export default brand;
