# Portfolio

Personal portfolio website for a senior software engineer: a fast, static site with a dark, minimal developer aesthetic. All content (profile, projects, work history) lives in the repository as typed MDX and YAML files.

## Tech stack

- [Astro](https://astro.build) (static output) with TypeScript in strict mode
- [Tailwind CSS v4](https://tailwindcss.com) and `@tailwindcss/typography`
- Astro content collections with Zod schemas, MDX and YAML
- Self-hosted [Geist](https://vercel.com/font) fonts
- [Biome](https://biomejs.dev) for linting and formatting
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com)

## Getting started

Requires Node.js 22.12 or newer and [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:4321`.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Build the static site into `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm check` | Type-check Astro and TypeScript files |
| `pnpm lint` | Run Biome in CI mode (no writes) |
| `pnpm format` | Format and fix lint issues with Biome |

## Project structure

```text
public/                     Static assets (favicon, optional cv.pdf)
src/
  components/               Reusable Astro components
  content/
    experience/             Work history, one YAML file per role
    projects/               Case studies, one MDX file per project
  data/profile.ts           Name, bio, contact links, skills
  layouts/BaseLayout.astro  Page shell, SEO meta, navigation
  lib/                      Small helpers
  pages/                    Routes (home, projects, project detail, 404)
  styles/global.css         Tailwind import and design tokens
  content.config.ts         Collection schemas
astro.config.mjs
biome.json
```

## Editing content

**Profile and skills:** edit [src/data/profile.ts](src/data/profile.ts). To show a "Download CV" button, put the file at `public/cv.pdf` and set `cv: '/cv.pdf'`.

**Experience:** add a YAML file to `src/content/experience/`.

```yaml
company: Example Corp
role: Senior Software Engineer
start: "2022-03"       # YYYY-MM
end: "2024-01"         # optional; omit for a current role
location: Remote       # optional
summary: One-line description of the role.
highlights:
  - Something you achieved.
stack: [Python, PostgreSQL]
```

**Projects:** add an MDX file to `src/content/projects/`. The file name becomes the URL (`/projects/<name>/`).

```mdx
---
title: My Project
summary: One-line description shown on the card.
date: 2025-06-01
tags: [Backend]
stack: [Python, PostgreSQL]
repo: https://github.com/you/my-project   # optional
live: https://example.com                 # optional
featured: true                            # show on the home page
draft: false                              # true hides it from the site
---

## Overview

Write the case study in Markdown.
```

Content is validated against the schemas in [src/content.config.ts](src/content.config.ts) at build time, so mistakes fail the build.

## Deployment

The site is a static build, deployed on Cloudflare Pages:

1. Push the repository to GitHub.
2. In Cloudflare, create a project and connect the repository.
3. Use these build settings:
   - Build command: `pnpm build`
   - Deploy command: `npx wrangler deploy` (reads [wrangler.jsonc](wrangler.jsonc), which serves `dist/` as static assets)
   - Environment variable: `NODE_VERSION` set to `22` or higher
4. Set `site` in [astro.config.mjs](astro.config.mjs) to the final URL so the sitemap and canonical links are correct.

Every branch and pull request gets its own preview deployment.

## Notes

Placeholder content (profile details, sample projects and jobs) is included and should be replaced with real information.
