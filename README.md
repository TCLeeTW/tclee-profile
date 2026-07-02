# tclee.dev

Personal site for TC Lee. Built with Astro, deployed to Firebase Hosting.

## Setup

```bash
npm install
npm run dev        # localhost:4321
npm run build      # outputs to dist/
```

## Deploy (Firebase)

CI/CD is wired via GitHub Actions (`.github/workflows/deploy.yml`).
Every push to `master` that touches `Projects/tclee.dev/site/**` triggers a rebuild and deploy.

### First-time setup
1. Create a Firebase project at console.firebase.google.com
2. Enable Hosting
3. Add three secrets to the GitHub repo:
   - `FIREBASE_SERVICE_ACCOUNT` — JSON key from Firebase console → Project Settings → Service accounts
   - `FIREBASE_PROJECT_ID` — your Firebase project ID
   - `GITHUB_TOKEN` — auto-provided by GitHub Actions

### Custom domain
Firebase Hosting → Add custom domain → follow DNS instructions for `tclee.dev`

## Content

Articles live at `src/content/articles/*.md`.
Frontmatter:
```yaml
---
title: string
description: string
date: YYYY-MM-DD
tags: [tag1, tag2]
lang: en | zh
draft: true | false   # set false when ready to publish
---
```

Draft articles (`draft: true`) are built but not shown in any listing. Set `draft: false` to publish.

## Adding content from vault

Staging area: `../articles/` (vault layer, not built by Astro)
When ready to publish: copy file → `src/content/articles/` → set draft: false → commit
Log it in `../publishing-log.md`
