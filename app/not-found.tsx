import { PageHero, Button } from "@/components/primitives";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This page isn't here."
        lead="The link may be old, or the page may have moved. Head back to the home page or talk to us."
      >
        <div className="nb-actions">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="ghost">
            Contact us
          </Button>
        </div>
      </PageHero>
    </>
  );
}
