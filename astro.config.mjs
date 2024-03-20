import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import auth from "auth-astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), auth()],
  output: "server",
  adapter: vercel()
});