import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How it works",
  description:
    "From connecting your stack to your first prediction — how Nebbos turns the work you already do into operational foresight, in days.",
  path: "/platform/how-it-works",
});

export default function Page() {
  return (
    <StubPage
      eyebrow="How it works"
      title="Connect, observe, predict, act."
      lead="Nebbos reads from the stack you already run. Nothing for your teams to adopt, no new place for them to log work — predictions begin as soon as there's enough signal."
      todo="expand the four-step Connect → Observe → Predict → Act walkthrough (ported summary lives on /platform and the home page) into a full how-it-works narrative with connector flow and a sample timeline."
    />
  );
}
