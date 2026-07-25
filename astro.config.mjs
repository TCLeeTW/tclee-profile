import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tclee.dev',
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
