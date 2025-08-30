import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import { robots } from "vite-plugin-robots";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://studentsolution.netlify.app/", // अपनी वेबसाइट का डोमेन बदलें
      // अन्य विकल्प यहां जोड़े जा सकते हैं, जैसे sitemapOutFile
      sitemapOutFile: "public/sitemap.xml", // जेनरेट की गई फ़ाइल का पथ
    }),
    robots(),
  ],
});
