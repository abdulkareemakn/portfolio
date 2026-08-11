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

```css
--bg: #fafaf8;       /* light background */
--text: #17171a;     /* near-black text */
--muted: #6b6b70;    /* secondary text */
--accent: #15803d;   /* links, hover */
--border: #e4e4e1;   /* borders/placeholders */
```

Dark mode (`@media (prefers-color-scheme: dark)`):
```css
--bg: #0d0d0f;
--text: #ececec;
--muted: #8a8a90;
--accent: #4ade80;
--border: #232326;
```

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
