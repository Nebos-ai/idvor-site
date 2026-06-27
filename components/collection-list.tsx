import Link from "next/link";
import { Section, Eyebrow } from "@/components/primitives";
import type { Collection, ContentEntry } from "@/lib/content";

/** Renders a collection index as a list of linked cards. */
export function CollectionList({
  collection,
  entries,
  label,
}: {
  collection: Collection;
  entries: ContentEntry[];
  label: string;
}) {
  return (
    <Section divided>
      <Eyebrow>{label}</Eyebrow>
      {entries.length === 0 ? (
        <div className="nb-todo">TODO: content — no published {collection} entries yet.</div>
      ) : (
        <div className="nb-card-list">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/${collection}/${entry.slug}`}
              className="nb-card-link"
            >
              <div className="nb-card-meta">
                {entry.frontmatter.meta ?? label}
                {entry.frontmatter.date ? ` · ${entry.frontmatter.date}` : ""}
              </div>
              <h3>{entry.frontmatter.title}</h3>
              {entry.frontmatter.description ? <p>{entry.frontmatter.description}</p> : null}
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}
