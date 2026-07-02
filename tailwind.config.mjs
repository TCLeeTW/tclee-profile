/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        accent: '#2563eb',
        'accent-light': '#eff6ff',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '68ch',
            a: { color: '#2563eb', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
          },
        },
      },
    },
  },
  plugins: [],
};
