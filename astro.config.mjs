import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // Asegúrate de que esté configurado correctamente para proyectos dinámicos
  adapter: vercel(),
});