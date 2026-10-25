# Portfolio — abdulkareem.tech

Personal portfolio and resume site for Abdul Kareem. Built with Astro as a
static site, styled from a single global stylesheet, and deployed to Cloudflare
Workers.

## Pages

| Route       | Description                                    |
| :---------- | :--------------------------------------------- |
| `/`         | Intro, live status block, tech marquee, socials, GitHub contributions |
| `/about`    | Background, tooling, and working preferences   |
| `/projects` | Engineering dossier of selected projects       |
| `/kit`      | Directory of daily-use software and tools      |
| `/resume`   | Print-ready resume (Print / Save as PDF)       |
| `/connect`  | Link grid to profiles across platforms         |
| `/_404_`    | Custom 404 page served by Cloudflare Workers   |

## Stack

- **Framework:** Astro (static, no server runtime on the edge)
- **Fonts:** Vercetti (body), Hedvig Letters Serif (serif), Google Sans Code (mono), Noto Nastaliq Urdu (Arabic name)
- **Icons:** `astro-icon` (Simple Icons) + `@lucide/astro`
- **Data feeds at runtime:** Open-Meteo weather, Lichess rating, GitHub contributions
- **Deploy:** Cloudflare Workers (`wrangler`) with sitemap + robots.txt baked in

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
pnpm run deploy   # astro build + wrangler deploy
```

`wrangler.jsonc` serves `./dist` as static assets with `404-page` not-found
handling, so the custom 404 page is served from the edge.

## Design system

All styling lives in `src/styles/global.css` — the single source of truth. No
CSS is written in component files.

```css
:root {
  --bg: #f8efe7;           /* Monokai Pro Light (Filter Sun) background */
  --text: #2c232e;         /* body text */
  --muted: #6b6266;        /* secondary text */
  --accent: #b83a62;       /* links, hover, filled surfaces */
  --accent-text: #f8efe7;  /* text on an --accent fill */
  --border: #ded5d0;       /* borders, placeholders */
}
```

Dark mode is Monokai Pro (Filter Spectrum), applied by
`@media (prefers-color-scheme: dark)`; there is no manual theme switcher.
Base font size is `15px`.

## Structure

```
├── public/                 # static assets (fonts, favicon, robots.txt)
├── src/
│   ├── components/         # Sidebar, Socials, LocationStatus, TechConveyor, GitHubContributions, Footer, Logo
│   ├── layouts/Layout.astro
│   ├── pages/              # one .astro file per route (500: 404.astro)
│   └── styles/global.css   # the only stylesheet
├── astro.config.mjs        # site URL, sitemap, astro-icon
└── wrangler.jsonc          # Cloudflare Workers deploy config
```

## Inspired by

The layout structure (centered max-width, sidebar inside `<main>`) is
influenced by https://hecker.vc.