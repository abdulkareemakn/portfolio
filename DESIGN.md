---
version: alpha
name: Abdul Kareem, portfolio
description: A typographic personal portfolio on warm paper. Monokai Pro hues mark the parts of one person's life, and colour-coded pills carry the voice.
---

# Abdul Kareem, portfolio

This file is the source of truth for the portfolio's look. It follows the DESIGN.md format described in `spec.md`. Tokens in the YAML blocks are normative; the prose explains how to apply them. The site is static Astro with plain CSS, so everything here must be buildable without client-side JavaScript beyond what the site already ships (hotkeys, the live clock and weather, the Lichess rating, the Cal.com embed).

## Overview

The mood is a **scorebook**: warm paper, ink-dark type, and a set of coloured scoring pencils. Each pencil belongs to one part of Abdul Kareem's life (code, books, training, football and cricket, writing, type), and it only ever appears where that part of his life does. The dark theme is the same book under floodlights. It follows the system preference; there is no in-page switcher.

Abdul is a software engineering student in Lahore and a freelance developer. He is privacy-conscious, runs his own servers, loves typefaces, and umpires cricket. The site should feel like *him*: tasteful and well typeset, with real personality, never cluttered. Visitors are prospective clients, collaborators and classmates, and they should know who he is within five seconds and have a reason to stay for ten more.

Personality comes from four things, in this order:

1. **Type.** Fonts are one of his favourite hobbies. Four families, each with one job, and hierarchy made from family, size and colour rather than weight.
2. **His name.** The Urdu name (عبدالکریم) sits beside the English one in rose, with the pronunciation line `[ʕab.dʊl ka'riːm]` beneath. These are the most personal things on the site.
3. **Hued pills.** A small coloured pill with an emoji or icon wraps facts in running text and in the Now row.
4. **Previews.** Project links show a screenshot card on hover.

Pages: Home, About, Projects, Kit, Library, Training, Blog (external), Connect, plus the Colophon (linked from the footer and About), the 404 and the resume. There is no Umpiring page and no Lahore Qalandars pill; both were cut on 2026-11-13. Umpiring still appears as a single line of personality in the Home intro and in About.

The site's only content rule is honesty. Use confirmed facts; anything unconfirmed is a placeholder, and placeholders never ship.

## Colors

Monokai Pro throughout: **Filter Sun** for light, **Filter Spectrum** for dark. The old site used only rose. Now every hue has a job.

- **Primary, rose (#b83a62 light, #fc618d dark):** type and fonts, the Urdu name, the quote mark, social links, the single solid call to action, text selection, and the nav items Home, About and Connect.
- **Blue (#2473b6 / #5ad4e6):** code and projects. Project titles, tech tags, the Projects and Kit nav items.
- **Yellow (#b16803 / #fce566):** books, shows and games. The reading pill, the Lichess pill, the Library nav item. Games sharing yellow is provisional.
- **Green (#218871 / #7bd88f):** training. The bench pill, the Training nav item. The contribution graph also runs on green.
- **Orange (#d4572b / #fd9353):** cricket and football. The Pakistan and Real Madrid pills, and the "cricket umpire" pill in the Home intro.
- **Purple (#6851a2 / #948ae3):** writing. The Blog nav item and blog pills.
- **Neutral (#f8efe7 / #222222):** the page. Surface (#fcf7f2 / #2b2b2c) is one step above it and is used only by the hover popover.
- **On-surface (#2c232e / #f7f1ff)** is body text, **muted (#6b6266 / #bab6c0)** is metadata and descriptions, **border (#ded5d0 / #363537)** is hairlines.

### Two values per hue in light mode

The Sun hues are too pale for small text on paper. Each hue therefore has a **graphic** value (the Sun original, for dots, borders, underlines and keycap outlines; it clears 3:1) and an **ink** value (a darker Sun-family shade, for any text under 24px). In dark mode the Spectrum hue is both, so there is no `-ink` token.

### Pill tints

A pill's fill is its hue mixed over the page: **12%** in light and **10%** in dark. Its border is the hue at 30% (`-line`). Hover and pressed raise the fill slightly (`-tint-hover`, 15% light and 11% dark) and turn the border solid in the hue. The ceiling is set by contrast: rose in light and purple in dark stay above 4.5:1 only up to about 16% and 11%, so do not tint harder than these values. The `-tint` and `-line` tokens are precomputed over the neutral of their own theme.

### Design Tokens

```yaml
colors:
  # Light: Monokai Pro Light (Filter Sun)
  neutral: "#f8efe7"
  surface: "#fcf7f2"
  on-surface: "#2c232e"
  muted: "#6b6266"
  border: "#ded5d0"
  on-primary: "#f8efe7"
  primary: "#b83a62"
  primary-ink: "#a8325a"
  primary-tint: "#f0d9d7"
  primary-tint-hover: "#eed4d3"
  primary-line: "#e5b9bf"
  blue: "#2473b6"
  blue-ink: "#17607f"
  blue-tint: "#dfe0e1"
  blue-tint-hover: "#d8dce0"
  blue-line: "#b8cad8"
  yellow: "#b16803"
  yellow-ink: "#7f4c00"
  yellow-tint: "#efdfcc"
  yellow-tint-hover: "#eddbc5"
  yellow-line: "#e3c6a3"
  green: "#218871"
  green-ink: "#156a55"
  green-tint: "#dee3d9"
  green-tint-hover: "#d8e0d5"
  green-line: "#b8d0c4"
  orange: "#d4572b"
  orange-ink: "#9e3f08"
  orange-tint: "#f4ddd0"
  orange-tint-hover: "#f3d8cb"
  orange-line: "#edc1af"
  purple: "#6851a2"
  purple-ink: "#5b4596"
  purple-tint: "#e7dcdf"
  purple-tint-hover: "#e2d7dd"
  purple-line: "#cdc0d2"
  contrib-1: "#cfe3d5"
  contrib-2: "#9ccbb1"
  contrib-3: "#4f9d7d"
  contrib-4: "#1a6f5d"
  # Dark: Monokai Pro (Filter Spectrum). Dark ink is the hue itself, so there is no -ink token.
  dark-neutral: "#222222"
  dark-surface: "#2b2b2c"
  dark-on-surface: "#f7f1ff"
  dark-muted: "#bab6c0"
  dark-border: "#363537"
  dark-on-primary: "#222222"
  dark-primary: "#fc618d"
  dark-primary-tint: "#38282d"
  dark-primary-tint-hover: "#3a292e"
  dark-primary-line: "#633542"
  dark-blue: "#5ad4e6"
  dark-blue-tint: "#283436"
  dark-blue-tint-hover: "#283638"
  dark-blue-line: "#33575d"
  dark-yellow: "#fce566"
  dark-yellow-tint: "#383629"
  dark-yellow-tint-hover: "#3a3729"
  dark-yellow-line: "#635c36"
  dark-green: "#7bd88f"
  dark-green-tint: "#2b342d"
  dark-green-tint-hover: "#2c362e"
  dark-green-line: "#3d5943"
  dark-orange: "#fd9353"
  dark-orange-tint: "#382d27"
  dark-orange-tint-hover: "#3a2e27"
  dark-orange-line: "#644431"
  dark-purple: "#948ae3"
  dark-purple-tint: "#2d2c35"
  dark-purple-tint-hover: "#2f2d37"
  dark-purple-line: "#44415c"
  dark-contrib-1: "#3d5a45"
  dark-contrib-2: "#4f7a58"
  dark-contrib-3: "#63a06f"
  dark-contrib-4: "#7bd88f"
```

### Contrast

All text pairs below are at or above WCAG AA (4.5:1). Graphics only need 3:1. Pill percentages are the fill tint over the page.

**Light contrast (WCAG 2.1, text role uses the ink value):**

| Hue | Ink on page | Ink on pill | Ink on pill, hover | Hue on page (graphics) |
|---|---|---|---|---|
| primary | 5.66 | 4.78 | 4.59 | 4.84 |
| blue | 6.13 | 5.27 | 5.05 | 4.40 |
| yellow | 6.30 | 5.48 | 5.29 | 3.81 |
| green | 5.73 | 4.99 | 4.82 | 3.83 |
| orange | 5.84 | 5.08 | 4.89 | 3.56 |
| purple | 6.76 | 5.74 | 5.48 | 5.63 |

Body text on page 13.33, muted on page 5.19, muted on surface 5.53, on-primary on primary 4.84.

**Dark contrast (WCAG 2.1, text role uses the ink value):**

| Hue | Ink on page | Ink on pill | Ink on pill, hover | Hue on page (graphics) |
|---|---|---|---|---|
| primary | 5.48 | 4.79 | 4.71 | 5.48 |
| blue | 9.09 | 7.34 | 7.16 | 9.09 |
| yellow | 12.53 | 9.57 | 9.41 | 12.53 |
| green | 9.14 | 7.39 | 7.20 | 9.14 |
| orange | 7.18 | 6.02 | 5.92 | 7.18 |
| purple | 5.31 | 4.60 | 4.51 | 5.31 |

Body text on page 14.38, muted on page 7.99, muted on surface 7.10, on-primary on primary 5.48.

`--gh-level-1` to `--gh-level-4` in the current CSS correspond to `contrib-1` to `contrib-4`. Text selection uses `primary` with `on-primary`.

## Typography

Four families, each with one job. Hierarchy comes from family, size and colour, **not weight**: everything is Regular (400), and no faux bold is ever synthesised.

- **Hedvig Letters Serif** for display, headings, the nav and quotes. It is a variable font with an optical-size axis; leave `font-optical-sizing: auto` on so large sizes get the display cut.
- **Vercetti** for body text, descriptions and pill labels. Only Regular ships.
- **0xProto** for hotkeys, labels, numbers and tech tags. Labels are uppercase with open tracking (`label-caps`); numbers use `font-variant-numeric: tabular-nums`.
- **Noto Nastaliq Urdu** for his name in Urdu and nowhere else. It descends far below its baseline, so it needs the generous line-height shown and must never sit directly above other text without that room.

Base size stays **15px** (`html { font-size: 15px }`); convert token sizes to rem as size ÷ 15. Fallbacks: Vercetti, then `BlinkMacSystemFont, "Segoe UI", sans-serif`; Hedvig, then `Georgia, serif`; 0xProto, then `ui-monospace, "SF Mono", Menlo, monospace`. Use `font-display: swap` for all families.

Use `display` once, for the name on Home. Pills use the `pill-*` levels at the size of their context, and `pill-inline` inherits the surrounding text size (1em) so a pill sits in a line of prose without changing its rhythm.

```yaml
typography:
  display:
    fontFamily: Hedvig Letters Serif
    fontSize: 76px
    fontWeight: 400
    lineHeight: 80px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Hedvig Letters Serif
    fontSize: 40px
    fontWeight: 400
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Hedvig Letters Serif
    fontSize: 28px
    fontWeight: 400
    lineHeight: 34px
  headline-sm:
    fontFamily: Hedvig Letters Serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 26px
  title:
    fontFamily: Hedvig Letters Serif
    fontSize: 26px
    fontWeight: 400
    lineHeight: 32px
  quote:
    fontFamily: Hedvig Letters Serif
    fontSize: 28px
    fontWeight: 400
    lineHeight: 38px
  nav:
    fontFamily: Hedvig Letters Serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
  menu-row:
    fontFamily: Hedvig Letters Serif
    fontSize: 22px
    fontWeight: 400
    lineHeight: 28px
  urdu-name:
    fontFamily: Noto Nastaliq Urdu
    fontSize: 52px
    fontWeight: 400
    lineHeight: 110px
  pronunciation:
    fontFamily: Vercetti
    fontSize: 18px
    fontWeight: 400
    lineHeight: 26px
  lead:
    fontFamily: Vercetti
    fontSize: 21px
    fontWeight: 400
    lineHeight: 32px
  body-lg:
    fontFamily: Vercetti
    fontSize: 17px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Vercetti
    fontSize: 15px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: Vercetti
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption:
    fontFamily: Vercetti
    fontSize: 13px
    fontWeight: 400
    lineHeight: 19px
  pill-sm:
    fontFamily: Vercetti
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1
  pill-md:
    fontFamily: Vercetti
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1
  pill-lg:
    fontFamily: Vercetti
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1
  label-caps:
    fontFamily: 0xProto
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0.08em
  mono-sm:
    fontFamily: 0xProto
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
  keycap:
    fontFamily: 0xProto
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1
```

## Layout

One centred column, **56rem** (840px at the 15px base), on every page. The sidebar is gone: navigation is a top bar that lives inside the same column, so the logo lines up with the page's left edge and the last nav item with its right edge. The bar's bottom border runs the full width of the viewport; its contents do not.

Rhythm is deliberate rather than gridded. Page sections are **56px** apart, a heading sits **20px** above its content, and the page starts **80px** below the bar. Related things sit tight (4 to 12px); sections breathe (40 to 80px). Layouts lean left: the project list occupies the left half of the column and leaves the right half empty for the hover preview.

The top bar is **72px** tall on desktop and **56px** on phones. It holds the logo mark, then the nav links, each preceded by a keycap that shows its hotkey. Links are `h` Home, `a` About, `p` Projects, `k` Kit, `l` Library, `t` Training, `b` Blog (opens in a new tab, marked with ↗) and `c` Connect. The active page gets a 2px rule in its own hue, flush with the bar's bottom border; hover recolours the label and keycap in that hue.

Breakpoints:

- **720px and up:** the full row. Keycaps appear only under `(hover: hover) and (pointer: fine)`, since a phone or tablet has no hotkeys to hint at.
- **Under 720px:** logo plus a Menu button that opens a full-width sheet. A few lines of script toggle it; without JavaScript the links simply stay visible. Rows are 52px tall for thumbs; a hue dot replaces the keycap, and the active row is filled with its hue's tint edge to edge. The page gutter is 16px.
- **900px and up with a hover-capable pointer:** project previews open to the right of the list. Below 900px they open under the link. With no hover, there is no preview and the link simply navigates.

Pills wrap in a flex row with a 10px gap. They need no particular tap size beyond the WCAG 2.2 minimum of 24px, but when a pill is a primary link on a coarse pointer, raise its height to 40px.

```yaml
spacing:
  base: 15px
  2xs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  section: 56px
  page-top: 80px
  column: 56rem
  nav-height: 72px
  nav-height-mobile: 56px
  gutter-mobile: 16px
  pill-gap: 10px
  breakpoint-nav: 720px
  breakpoint-preview: 900px
```

## Elevation & Depth

The design is flat. Hierarchy comes from type size, colour and hairline borders, not from cards or shadows. Do not wrap content in boxes; let it sit on the page.

There are two exceptions:

- **The hover popover** is the only floating element. It sits on `surface` with a 1px `border` and a soft shadow: `0 18px 40px -8px rgba(44, 35, 46, 0.24), 0 2px 6px rgba(44, 35, 46, 0.08)` in light, `0 18px 40px -8px rgba(0, 0, 0, 0.6), 0 2px 6px rgba(0, 0, 0, 0.3)` in dark. A 14px rotated square (the tail) points at the link.
- **Focus** is a two-ring outline, never a glow: 2px of the page colour, then 2px of the element's own hue (`box-shadow: 0 0 0 2px neutral, 0 0 0 4px hue`).

Hover on a pill also lifts it by 1px. Hover on text links thickens the underline from 1px to 2px, from a 40%-hue hairline to the full hue. Motion is limited to 120–150ms ease on colour, border and a 1px transform, and is removed entirely under `prefers-reduced-motion`.

## Shapes

Round and soft where things are small and interactive, quiet where they are large. Everything that is a pill is fully round. Keycaps are small rounded squares. The popover and the quote block use one larger radius. Screenshots inside the popover are rounded to sit concentrically within it.

```yaml
rounded:
  sm: 5px
  md: 8px
  lg: 14px
  full: 9999px
```

## Components

### Pill

The pill is the site's punctuation: an icon slot, a label, and an optional mono suffix. It wraps link text in running prose and groups the Now row.

- **Anatomy:** icon (emoji or a 15px stroke SVG, `aria-hidden`), label, and optionally a `mono-sm` suffix (for example the Lichess rating) or a ↗ for external links. The icon side has 3px less padding than the label side. The label is always real text; an emoji is never the only content.
- **Sizes:** `inline` is 22px tall and takes the surrounding text size; `sm` is 26px; `md` is 32px and is the default in rows; `lg` is 42px and is for a pill that stands alone.
- **Hue:** pick by area (see Colors). Fill is `<hue>-tint`, border is `<hue>-line`, text is `<hue>-ink` in light and `dark-<hue>` in dark. The tokens below show blue as the pattern; every hue follows it.
- **Default:** tint fill, 1px line border.
- **Hover:** `<hue>-tint-hover` fill, 1px solid hue border, 1px lift.
- **Focus-visible:** the two-ring outline.
- **Pressed:** hover colours, no lift.
- **Static** (not a link, such as a live rating): tint fill and no border, no hover.
- **In running text:** a pill takes a punctuation mark as part of its unit, so a comma or full stop after a pill stays attached to it, not floated in the flex gap.

### Navigation

Nav items are a keycap plus a `nav` label. Default is muted; hover and active turn the label and keycap into the page's hue (keycap tinted and outlined at 45% of the hue); active adds the 2px rule. The keycap is a 19px rounded square with a 1px `border`, holding a lowercase `keycap` letter. Blog carries a small ↗.

### Project list and preview

Each project is a row: a `title` in blue ink, underlined, a small `label-caps` status tag, and a one-line `body-md` description in muted. Rows are separated by hairlines. Hovering or focusing a title shows the popover: a 360px card with a 200px-high screenshot cropped from the top, the project name, its host, one sentence, and tech tags. The screenshots live in `src/assets/projects/` (`ayak-preview.png`, `cursus.png`). Projects without a screenshot get no popover until one is supplied.

### Home details

The name block pairs `display` (name) with `urdu-name` in rose, `pronunciation` in muted underneath, then the `lead` intro. The quote block has a large rose opening quote mark and `quote` text. The live status is a 48px avatar circle holding the logo mark with a rose presence dot, the place and weather, and the time in `mono-sm`. Social links are rose pills with a stroke icon; "Book a call" is the one solid rose pill.

```yaml
components:
  top-bar:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    height: 72px
  top-bar-dark:
    backgroundColor: "{colors.dark-neutral}"
    textColor: "{colors.dark-on-surface}"
    height: 72px
  nav-item:
    textColor: "{colors.muted}"
    typography: "{typography.nav}"
  nav-item-active:
    textColor: "{colors.on-surface}"
    typography: "{typography.nav}"
  keycap:
    textColor: "{colors.muted}"
    typography: "{typography.keycap}"
    rounded: "{rounded.sm}"
    size: 19px
  keycap-active-blue:
    backgroundColor: "{colors.blue-tint}"
    textColor: "{colors.blue-ink}"
    typography: "{typography.keycap}"
    rounded: "{rounded.sm}"
    size: 19px
  menu-row:
    textColor: "{colors.on-surface}"
    typography: "{typography.menu-row}"
    height: 52px
  pill-inline:
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    height: 22px
    padding: 9px
  pill-sm:
    typography: "{typography.pill-sm}"
    rounded: "{rounded.full}"
    height: 26px
    padding: 10px
  pill-md:
    typography: "{typography.pill-md}"
    rounded: "{rounded.full}"
    height: 32px
    padding: 14px
  pill-lg:
    typography: "{typography.pill-lg}"
    rounded: "{rounded.full}"
    height: 42px
    padding: 20px
  pill-blue:
    backgroundColor: "{colors.blue-tint}"
    textColor: "{colors.blue-ink}"
  pill-blue-hover:
    backgroundColor: "{colors.blue-tint-hover}"
    textColor: "{colors.blue-ink}"
  pill-blue-static:
    backgroundColor: "{colors.blue-tint}"
    textColor: "{colors.blue-ink}"
  pill-blue-dark:
    backgroundColor: "{colors.dark-blue-tint}"
    textColor: "{colors.dark-blue}"
  pill-blue-dark-hover:
    backgroundColor: "{colors.dark-blue-tint-hover}"
    textColor: "{colors.dark-blue}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    height: 36px
    padding: 16px
  button-primary-dark:
    backgroundColor: "{colors.dark-primary}"
    textColor: "{colors.dark-on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    height: 36px
    padding: 16px
  social-pill:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    height: 36px
    padding: 16px
  project-title:
    textColor: "{colors.blue-ink}"
    typography: "{typography.title}"
  project-description:
    textColor: "{colors.muted}"
    typography: "{typography.body-md}"
  status-tag:
    textColor: "{colors.muted}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: 8px
  popover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 8px
    width: 360px
  popover-dark:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.dark-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 8px
    width: 360px
  quote-block:
    textColor: "{colors.on-surface}"
    typography: "{typography.quote}"
    rounded: "{rounded.lg}"
    padding: 28px
  avatar:
    backgroundColor: "{colors.border}"
    rounded: "{rounded.full}"
    size: 48px
```

## Do's and Don'ts

- Do use a hue only for the area of life it stands for. A new fact picks its pill colour from the Colors list, not from taste.
- Do use ink values for any text under 24px in light mode, and graphic values for dots, borders and underlines.
- Do keep every pill at or above 4.5:1 for its label on its own fill. Any new hue or new tint must be checked first.
- Do keep one solid rose element per screen at most (the "Book a call" pill). Everything else uses a tint.
- Do let type carry hierarchy: switch family, size or colour before reaching for weight.
- Do show the Urdu name with enough line-height that its descenders never touch the line below.
- Do keep a pill's trailing punctuation attached to it.
- Do show weight loss in the Training page as a trend only, never as an absolute body weight.
- Do make the hover preview optional. The link must work and make sense without it, and it must appear on keyboard focus as well as hover.
- Do respect `prefers-color-scheme`, `prefers-reduced-motion` and `(hover: hover)`.
- Don't ship placeholders. In design comps they are dashed and bracketed; in the site they are replaced by confirmed content or removed.
- Don't invent facts, scores, lifts, book lists or quotes. The homepage quote is his to choose.
- Don't add an Umpiring page or a Lahore Qalandars pill. Cricket and football appear through Pakistan, Real Madrid and the one-line mention of umpiring.
- Don't synthesise bold or italic, and don't introduce a fifth typeface.
- Don't wrap content in cards, add gradients, or add shadows beyond the popover.
- Don't use an emoji as the only content of a pill, and don't rely on colour alone to tell areas apart: the label always says what it is.
- Don't tint pills harder than 15% in light or 11% in dark.
- Don't add an in-page theme switcher.
