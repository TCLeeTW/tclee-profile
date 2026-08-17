import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';

export default defineConfig({
  site: 'https://tclee.dev',
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
  markdown: {
    // Single line breaks in article bodies render as real <br>, not a soft
    // no-op — TC writes one sentence per line, and wants that to actually
    // show, without turning every sentence into its own <p>.
    remarkPlugins: [remarkBreaks],
  },
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
