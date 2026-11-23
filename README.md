# Portfolio — abdulkareem.tech

Personal portfolio and resume site for Abdul Kareem. Built with Astro as a
static site, styled with Tailwind CSS v4 over a small token layer, and deployed
to Cloudflare Workers.

## Pages

| Route       | Description                                 |
| :---------- | :------------------------------------------ |
| `/`         | Intro and GitHub contributions              |
| `/projects` | Selected projects                           |
| `/kit`      | Directory of daily-use software and tools   |
| `/resume`   | Print-ready resume (Print / Save as PDF)    |
| `/connect`  | Link grid to profiles across platforms      |
| `/404`      | Custom 404 page served by the assets router |

## Stack

- **Framework:** Astro (static, no server runtime on the edge)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`
- **Fonts:** Geist Sans (body) + Geist Mono (code) via Fontsource variable packages, Geist Serif (headings, self-hosted), Noto Nastaliq Urdu (Arabic name)
- **Icons:** `astro-icon` (Simple Icons for brands) + `runeicons-astro` (UI icons)
- **Data fetched at build time:** GitHub contributions
- **Deploy:** Cloudflare Workers static assets (`cf`) with sitemap + robots.txt baked in

## Getting started

Requires Node.js >= 22.12 and pnpm.

```sh
pnpm install   # install dependencies
pnpm dev       # local dev server at localhost:4321
pnpm build     # output static site to ./dist/
pnpm preview   # preview the production build locally
```

## Deploy

```sh
pnpm run deploy   # astro build + cf deploy
```

`cf deploy` uploads `./dist` as an assets-only Worker named `portfolio`, which
owns the `abdulkareem.tech` custom domain. `cloudflare.config.ts` sets the
`404-page` not-found behavior, so the custom 404 page is served from the edge;
per-file headers live in `public/_headers`.

Authenticate once with `cf auth login` before deploying locally. Pushes to
`main` are still built and deployed by Cloudflare Workers Builds, which reads
`wrangler.jsonc`; delete that file once the pipeline is switched to `cf`.

## Design system

Tailwind CSS v4 is wired in through `@tailwindcss/vite`. Pages and components
are styled with utility classes; `src/styles/global.css` is only the Tailwind
entry point plus the shared design tokens.

- The palette and fonts are plain CSS variables in `:root`, exposed to Tailwind
  through `@theme inline` as `bg-bg`, `text-text`, `text-muted`, `bg-accent`,
  `text-accent-text`, `border-border`, and the `gh-*` contribution ramp.
- Light and dark resolve through `color-scheme` plus `light-dark()`.
  `data-theme="dark"` on `<html>` pins the palette; Ctrl/Cmd+B toggles it and
  the choice is stored in `localStorage`.
- Base font size is `16px`.
- The utility scanner is limited to `src/**/*.astro` through `@source`, so
  class-like strings in docs and agent skill files never reach the build.

## Structure

```
├── public/                 # static assets (fonts, favicon, robots.txt)
├── src/
│   ├── components/         # Topbar, Socials, GitHubContributions, Footer, Logo
│   ├── layouts/Layout.astro
│   ├── pages/              # one .astro file per route (404.astro for the 404 page)
│   └── styles/global.css   # Tailwind entry + design tokens
├── astro.config.mjs        # site URL, sitemap, astro-icon, Tailwind Vite plugin
├── cloudflare.config.ts    # cf project config (Worker name, 404 handling)
├── wrangler.config.ts      # Wrangler build settings used by cf (asset directory)
└── wrangler.jsonc          # still read by Workers Builds on push
```

## Inspired by

The centered max-width container and restrained navigation are influenced by
https://hecker.vc.
