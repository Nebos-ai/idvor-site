import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow .md / .mdx pages and components alongside .ts(x).
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  // Lean, self-contained server bundle for the Railway Docker image (ADR #1401 AD-4).
  output: "standalone",
  // legacy/ holds the previous static site; it is not part of the build.
  outputFileTracingExcludes: {
    "*": ["./legacy/**"],
  },
};

const withMDX = createMDX({
  // Add remark/rehype plugins here when content needs them.
  options: {},
});

export default withMDX(nextConfig);
