/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Static export for GitHub Pages ──────────────────────────────────────
  output: "export",

  // GitHub Pages serves from a sub-path when the repo isn't username.github.io
  // Set NEXT_PUBLIC_BASE_PATH=/your-repo-name in the Actions workflow.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ?? "",

  // Required for static export — Next.js image optimisation needs a server
  images: { unoptimized: true },

  // GitHub Pages serves /about/ not /about — trailingSlash fixes 404s
  trailingSlash: true,
};

export default nextConfig;
