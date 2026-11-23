# Portfolio — abdulkareem.me

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

- **Framework:** Astro
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`
- **Fonts:** Geist Sans, Geist Mono, Geist Serif, Noto Nastaliq Urdu
- **Icons:** SimpleIcons and RuneIcons
- **Deployment:** Cloudflare Workers

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
