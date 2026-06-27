import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";
import { pageMetadata } from "@/lib/seo";

export default function Page() {
  return (
    <StubPage
      eyebrow="Press"
      title="Press & media."
      lead="Brand assets, company facts and media contact for Nebbos."
      todo="add the press kit (logos, brand guidelines once @nebbos/brand lands), company boilerplate, recent coverage and a media contact."
    />
  );
}

export const metadata: Metadata = pageMetadata({
  title: "Press",
  description: "Brand assets, company facts and media contact for Nebbos.",
  path: "/press",
});
