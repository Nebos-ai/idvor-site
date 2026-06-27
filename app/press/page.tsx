import { StubPage } from "@/components/ui/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Press",
  path: "/press",
  description: "Press resources, brand assets and media contact for Nebbos.",
});

export default function PressPage() {
  return (
    <StubPage
      eyebrow="Press"
      title="Press & media."
      lead="Nebbos builds Operations Intelligence — software that helps organisations see what's about to happen and act with their judgement intact."
      cta={{ label: "Contact us →", href: "/contact" }}
      sections={[
        { heading: "About Nebbos", body: "Nebbos reads the operational signal your tools already emit, predicts what's about to go wrong, explains why, and acts under your approval — model-agnostic, and governed by design." },
        { heading: "Media contact", body: "For press enquiries, reach us at hello@nebbos.ai. Brand assets and a press kit land here." },
      ]}
    />
  );
}
