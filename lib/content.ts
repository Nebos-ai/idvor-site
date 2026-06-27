import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Tiny in-repo content layer for the MDX collections (blog, customers,
 * changelog, careers). Each collection is a folder of `.mdx` files under
 * /content/<collection>/. Frontmatter is parsed with gray-matter; the MDX body
 * is rendered per-slug page via dynamic import (see the collection [slug] pages).
 *
 * Deliberately minimal — swap for Content Collections / Velite / a CMS later
 * without touching the page components, which only consume these helpers.
 */

const CONTENT_ROOT = path.join(process.cwd(), "content");

export type Frontmatter = {
  title: string;
  description?: string;
  date?: string;
  /** customers: company name; careers: team/location, etc. */
  meta?: string;
  draft?: boolean;
  [key: string]: unknown;
};

export type ContentEntry = {
  slug: string;
  frontmatter: Frontmatter;
};

export type Collection = "blog" | "customers" | "changelog" | "careers";

function collectionDir(collection: Collection): string {
  return path.join(CONTENT_ROOT, collection);
}

/** List all (non-draft) entries in a collection, newest first when dated. */
export function getCollection(collection: Collection): ContentEntry[] {
  const dir = collectionDir(collection);
  if (!fs.existsSync(dir)) return [];
  const entries = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      return { slug, frontmatter: data as Frontmatter };
    })
    .filter((e) => !e.frontmatter.draft);

  return entries.sort((a, b) => {
    const da = a.frontmatter.date ?? "";
    const db = b.frontmatter.date ?? "";
    return db.localeCompare(da);
  });
}

/** Slugs for generateStaticParams. */
export function getCollectionSlugs(collection: Collection): { slug: string }[] {
  return getCollection(collection).map((e) => ({ slug: e.slug }));
}

/** Read a single entry's frontmatter (body is imported by the page directly). */
export function getEntry(collection: Collection, slug: string): ContentEntry | null {
  const file = path.join(collectionDir(collection), `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data } = matter(fs.readFileSync(file, "utf8"));
  return { slug, frontmatter: data as Frontmatter };
}
