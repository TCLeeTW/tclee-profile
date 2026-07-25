# tclee.dev

Personal site for TC Lee. Built with Astro, deployed to Firebase Hosting
(project `personal-profile-c4e82`, site `tclee-dev`).

This repo is the deploy target — push to `master` and GitHub Actions builds
and deploys automatically (see `.github/workflows/deploy.yml`).

Content is authored in TC's Obsidian vault (`OV-Personal` repo,
`Projects/tclee.dev/`) and synced here when ready to publish. The vault also
holds design references (`_mockup/v3/`) and unreviewed drafts (`drafts/`).

## Setup

```bash
npm install
npm run dev        # localhost:4321
npm run build      # outputs to dist/
```

## Content

- `src/content/articles/*.md` — Thoughts. Each keeps its own original
  language (`lang: en | zh`); the site does not force-translate articles.
- `src/content/projects/*.md` — Projects. `ready: true` gives it a live
  detail page; otherwise it shows as a card with "Write-up coming". Optional
  `zh` block holds the Chinese translation.
- `src/content/startups/*.md` — same pattern as projects, shown in the
  Startups section.

## i18n

English is the default at `/`, Chinese lives under `/zh/`. UI strings live
in `src/i18n/strings.ts`, About-page copy in `src/i18n/about.ts`.
