import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aacos.dev',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
