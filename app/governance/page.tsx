import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Governance",
  description:
    "Four governance tiers — Constitutional, Canon-constrained, Convention, Ephemeral — plus a simulation gate that rehearses every consequential action before it runs.",
  path: "/governance",
});

export default function Page() {
  return (
    <StubPage
      eyebrow="Governance"
      title="Not everything earns the same scrutiny. Nothing skips it."
      lead="Nebbos runs four governance tiers — routine, reversible work on a light lane; anything that can change how the organisation runs on the heavy one. The red lines bind every tier."
      todo="expand the governance model — the four tiers (G0–G3) and the Simulation Gate (source copy ported into /security) — into a standalone governance page."
    />
  );
}
