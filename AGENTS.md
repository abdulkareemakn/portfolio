# Portfolio — Abdul Kareem

## Stack

- **Framework:** Astro (static site)
- **Fonts:** Vercetti (body), Hedvig Letters Serif (serif headings/nav), Google Sans Code (mono)
- **Base font-size:** 15px (`html { font-size: 15px }`)
- **Layout:** Centered max-width (56rem), sidebar + content flex row on desktop

## Layout structure

```
body (centered, max-width: 56rem, padding: 2rem 1.5rem 6rem 0)
  main.page (flex row, gap: 0 on desktop)
    aside.sidebar (150px, sticky, top: 2rem)
    div.content (flex: 1, padding-left: 1.5rem)
      <slot />
```

Sidebar is a child of `<main>`, not a sibling. Logo is on the left, nav below it.

## Logo

`src/components/Logo.astro` — custom "A" letter mark SVG (abstract monogram).
- Uses `fill="currentColor"` 
- Link wrapping it is `color: #000` in light mode, `color: #fff` in dark mode

## Sidebar

- Logo link: `margin-bottom: 2rem`, color inherits black/white by theme
- Nav: serif font, `1.125rem`, `gap: 0.5rem`, link `opacity: 0.65`
- Hover: `opacity: 1`, `color: var(--accent)`

## Typography

| Element | Font | Weight | Size | Color |
|---------|------|--------|------|-------|
| Headline | Hedvig Letters Serif | 700 | `clamp(2rem, 5vw, 3rem)` | `var(--text)` |
| Tagline | inherit (body) | — | `1.05rem` | `var(--text)` |
| Status text | inherit | — | `0.9rem` | `var(--text)` |
| Bio | inherit | — | `0.95rem` | `var(--text)` |
| Nav links | Hedvig Letters Serif | — | `1.125rem` | `var(--text)` |

## Colors

Monokai Pro — Light (Filter Sun) by default, Dark (Filter Spectrum) when the
system prefers dark. Matches the palette used in `~/code/blog`.

```css
/* Light — Monokai Pro Light (Filter Sun) */
--bg: #f8efe7;
--text: #2c232e;
--muted: #6b6266;
--accent: #b83a62;
--accent-text: #f8efe7;
--border: #ded5d0;
```

Dark (`prefers-color-scheme: dark`):
```css
--bg: #222222;
--text: #f7f1ff;
--muted: #bab6c0;
--accent: #fc618d;
--accent-text: #222222;
--border: #363537;
```

There is no in-page theme switcher — dark mode follows the system preference
only. `--gh-level-1..4` is the contribution-graph ramp, built on Monokai green.

## Status block

Avatar (3rem circle, `background: var(--border)`) + inline status text (no list bullets). Uses `flex-start` alignment.

## Development

```sh
astro dev --background   # start dev server in background
astro dev stop           # stop it
pnpm run build          # verify build succeeds
```

## Inspired by

https://hecker.vc — layout structure (sidebar inside main, 150px sidebar, centered max-width).
