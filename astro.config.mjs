// @ts-check
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, sessionDrivers } from "astro/config";

export default defineConfig({
  site: "https://hishivam.com",
  output: "static",
  // Fully prerendered site: compile images at build time and keep sessions off KV,
  // so the adapter doesn't provision an Images binding or a KV namespace.
  adapter: cloudflare({ imageService: "compile" }),
  session: { driver: sessionDrivers.lruCache() },
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  prefetch: { prefetchAll: true },
  devToolbar: { enabled: false },
});
