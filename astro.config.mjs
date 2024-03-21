import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  // ...
  output: "static",
  adapter: vercel(),
  i18n:{
    defaultLocale: "en",
    locales:["en", "es"]
  }
});