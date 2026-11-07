import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pelotalibre.life',
  compressHTML: false,
  build: { format: 'preserve' },
});
