# Blog Reference — Inventory for greenfield `~/Projects/portfolio` blog

Status: **reference only — nothing built yet.** Inspected rendered output of `~/Projects/astro-paper` (reference theme) and `~/Projects/blog` (the fork, Astro 6 era) against the existing portfolio design system in `~/Projects/portfolio` (Astro 7, no Tailwind).

Color values are intentionally excluded (Part 1) — the scheme is under separate review. Everything here is spacing / layout / typography / behavior, written to be portable to any palette.

---

## Part 1 — Visual reference (design decisions to reinterpret, not code)

> Source of truth for "what's rendered": `blog/src/styles/{global,theme,typography}.css`, `blog/src/components/*.astro`, `blog/src/pages/**`. The fork is AstroPaper + modifications; where the two differ it's noted. All rem values assume a browser base of **16px** in the fork (Tailwind), which **differs** from the portfolio's `html { font-size: 15px }` — called out as a reconciliation item in Part 3.

### Overall page frame

- Blog page **content column is centered and narrow**: `max-w-3xl` (48rem), horizontal padding `px-4`. Header bar, main, footer all share this width (`app-layout` utility).
- The fork's header is a **top nav bar**, not a left sidebar: site title left, nav (posts/tags/about/search/theme) right, `border-b` separator, `py-4`/`py-6`. This is the biggest structural difference from the portfolio, which is a **sticky left sidebar (150px) inside a 56rem max-width flex row**.

### Post list / card layout (`Card.astro`, `index.astro`, `Main.astro`)

- Cards are plain `<li>` items in a `<ul>` — **no card box, no border, no background**. A list is just stacked rows.
- Item order and spacing:
  - **Title** — `<h2>`/`<h3>`, `text-lg` (1.125rem), medium weight, inline link. Single clickable title, `decoration-dashed underline-offset-4` on hover.
  - **Date row** — below title, `text-sm` (0.875rem), calendar icon + formatted date (`D MMM, YYYY`). Muted.
  - **Description** — plain paragraph, default body size, no explicit max-line.
  - Vertical rhythm between items: `my-6` (1.5rem top/bottom).
- **What's NOT on a card:** no tag pills, **no reading time**, no thumbnail per card. Cards carry title + date + description only. (Author is not shown on cards either.)
- Home page groups cards into two sections — **Featured** (any post flagged `featured`) then **Recent** — each with its own `<h2>` section header (`text-2xl`, semibold, wide tracking) and `padding: 2rem top / 1.5rem bottom`. Sections separated from the hero and from each other by `border-b`. Home shows `perIndex` (= **4**) recent posts.
- Hero section on home: `pt-8`, `pb-6`, `border-b`, an `<h1>` (`text-4xl`/`text-5xl`, bold) + intro paragraph + a social row.
- "All posts" CTA link centered beneath the lists with `my-8`.

### Article page layout (`posts/[...slug]/index.astro`)
- Order down the article page (all inside the centered 48rem column):
  1. Back button (`BackButton`).
  2. **H1 title** — `text-2xl` → `sm:text-3xl`, bold.
  3. **Meta row** (`my-2`): Datetime (lg) + optional vertical bar `|` + optional Edit-post link (hidden on <sm).
  4. `<article class="app-prose max-w-3xl">` — content (prose below).
  5. `<hr class="my-8 border-dashed">`.
  6. Back-to-top button.
  7. **Tag row** — bottom of article: `<ul class="flex wrap gap-4 mt-4 mb-8">` of `Tag` pills (sm size).
  8. Share links block.
  9. Second `<hr class="my-8 border-dashed">`.
  10. **Prev / Next post nav** (`AdjacentPostNav`).
  11. **Comments** (Giscus).

- **Article content width / measure:** text flows in a `max-w-3xl` (48rem) container — this is narrower than the portfolio page body (56rem). Headings have `scroll-margin-block: 1rem` and auto-generated `id`s so anchor jumps land just below a sticky header.
- **Spacing rhythm:** headings carry `mb-3` (0.75rem) below; the main article block has `mt-8` (2rem) above. Sections are split with **dashed horizontals** `hr` + `my-8` (2rem), not tight dividers.
- **Reading-time:** not rendered on article pages either.
- **Author:** present only in JSON-LD structured data (`author` schema.org block), not in visible layout.

### Prose type / content typography (`typography.css`, `@tailwindcss/typography`)
The fork applies Tailwind's **`prose`** defaults, overridden:
- Headings h1–h4: colored foreground, `mb-3`; **h3 set to `italic`** — a distinctive, worth-preserving quirk.
- Body: default prose size; colors foreground.
- Lists: default; list markers take the accent color.
- Inline `code`: `bg-muted/75`, `rounded`, `p-1`, no surrounding backtick pseudo-content.
- `blockquote`: left accent border, muted at `opacity-80`.
- `hr`: border color, defaults to prose's vertical rhythm.
- `img`: centered, `mx-auto`, `border` frame; `figcaption` muted at 75%.
- `table`: bordered cells (`border`, `p-2`), `th`/`td` with `py-1.5`.
- **This is a 16px-base prose scale** — the most important reconciliation point against the portfolio's 15px base and serif/sans split (see Part 3).

### Tag page + tag pill
- **Tag pill** = an inline link, **not a filled chip**: a `#`/hash icon + tag name, `border-b-2 border-dashed` underline, `sm`/`lg` sizes. Hover: underline/foreground → accent, slight `-mt-0.5` lift. Default `lg` = `text-lg` + larger `#`; article bottom uses `sm`.
- **Tag index page** (`/tags`): `Main` header (`h1` title + italic `pageDesc`), then a `<ul class="flex flex-wrap gap-6">` of `lg` tag pills (so ~1.5rem gap between pills).
- **Tag listing page** (`/tags/[tag]/[...page]`): same `Main` header titled `Tag: <name>`, stack of `Card` items, `Pagination` underneath.

### Meta row / dividers / pagination (recurring patterns)
- **Meta rows:** flex rows with `gap`, muted `text-sm`; optional `|` vertical separators (article date ↔ edit link). Calendar icon `<svg>` (size-6, scaled 0.9 for small) precedes dates.
- **Dividers:** `border-b` on block-level section boxes (hero/featured/recent); `hr border-dashed my-8` as in-flow horizontal rules.
- **Breadcrumb:** `Home` » segment » (last active), `font-light`, `li:inline`, `»` separators, trailing `opacity-75`. Shown on `/posts`, `/tags`, `/tags/[tag]`, `/about`, etc. Not on the homepage or an article (articles use `BackButton` instead).
- **Pagination:** centered, `justify-center gap-4`, **`< Prev` `current / last` `Next >`** with arrow SVGs; btn `disabled` + `opacity-50` at the edges; only rendered when `lastPage > 1`. Page size `perPage` = **4**.
- **Active nav:** an **underline wavy decoration** (`underline decoration-wavy decoration-2 underline-offset-8`) marks the current section.
- **Reading progress bar:** fixed `top-0 h-1`, full-width, fill = scroll % (accent bar over background track) — only on article pages.

---

## Part 2 — Functional features to preserve (behavioral spec)

### Table of Contents
- **Two ToCs coexist in the fork:**
  1. **In-body ToC** — generated by `remark-toc` remark plugin at build, producing a "Table of contents" section from document headings, **collapsed** into a `<details>` by `remark-collapse` (`test: "Table of contents"`). This one lives *inside* the markdown body.
  2. **Sidebar ToC** — the fork's own `components/TableOfContents.astro`. Rendered from `headings` (Astro's `MarkdownHeading[]`, output of `render(post)`) filtered to **depth 2–4**. Positioning: an **absolute rail to the right of the article column** (`left-full`, `ml-4/8`), hidden below `xl` width (`hidden xl:block`), `sticky top-24`, with a `border-l-2` vertical rule. So it floats in the empty gutter to the right of the 48rem text column on wide screens — NOT inside the column.
- It is **hand-built** (custom .astro + script, added by the fork). Not a package.

### Scroll-spy on ToC links
- **Hand-built** with a single `IntersectionObserver` (no library) in `TableOfContents.astro`.
- Behavior:
  - Observes `article h2,h3,h4[id]`; `threshold: 0`, `rootMargin: "-10% 0px -80% 0px"` → a heading becomes active when it enters the **top 10–20% band** of the viewport.
  - **Fallback while between headings:** walks all headings computing distance to a 150px header offset and picks the closest one above, so the active link tracks naturally during fast scrolling.
  - Active styling toggled by adding/removing `.text-accent`, `.font-medium`, `.opacity-…` classes on the matching `.toc-link` (indent by depth: h3 `pl-4`, h4 `pl-8`).
  - **Re-initialized on every `astro:page-load`** to survive Astro View Transitions.

### Code blocks (`astro-expressive-code`)
- Fork config (`ec.config.mjs`) + custom VS Code–style themes:
  - `themes`: from `src/styles/light.json` + `dark.json` (`ExpressiveCodeTheme.fromJSONString`), `removeUnusedThemes: true`.
  - **Line numbers:** `@expressive-code/plugin-line-numbers`, but `defaultProps.showLineNumbers: false` (off by default, opt-in per-block).
  - **Copy button:** built into expressive-code (not separately configured).
  - `useThemedScrollbars: false`.
  - `themeCssSelector: (theme) => [data-theme='…']` — EC swaps theme using the site's existing `data-theme` attribute on html (dark ↔ light).
  - `styleOverrides`: transparent `codeBackground` + borderless frames + `terminalBackground` etc. so EC blends with the page background.
- **Astro 7 compatibility: CONFIRMED.** `astro-expressive-code@0.44.0` (released 2026-06) adds `astro: ^7.0.0` to its peer range and supports Sätteri v0.9 (the Astro 7 default Markdown processor). It also covers Astro 6. Safe to add fresh.
- Note: Astro 7 re-architects the Markdown pipeline into a single `unified()` processor (`@astrojs/markdown-remark`); remark/rehype plugin arrays now live in that processor instead of `markdown.remarkPlugins`. EC remains an **integration** (`expressiveCode()` in `integrations`), still valid.

### Giscus comments (`Comments.astro`)
- **Data binding (fork):**
  - `data-repo="abdulkareemakn/blog"`,
  - `data-repo-id="R_kgDOSMO_1w"`,
  - category **"Announcements"** / `data-category-id="DIC_kwDOSMO_184C78w-"`,
  - `data-mapping="pathname"`,
  - `data-strict="0"`, `data-reactions-enabled="1"`, `data-emit-metadata="0"`, `data-input-position="top"`, `data-lang="en"`, `crossorigin="anonymous"`, `async`.
- **Theme sync behavior:** `data-theme="preferred_color_scheme"` → Giscus follows the **browser/OS color scheme**, **NOT the site's own dark/light toggle**. So when a user flips the in-site theme opposite to their OS, the comment box won't match the page. This is a known mismatch worth deciding in Part 3.
- **Self-contained / actively maintained:** the site pulls the **official `https://giscus.app/client.js`** script. Adding it fresh in the portfolio is a drop-in — no package to install, no framework dependency.

---

### Feature package-vs-hand-built summary

| Feature | Source | Safe to add fresh? |
|---------|--------|--------------------|
| `astro-expressive-code` (+ line-numbers plugin) | External, Astro-7 peer-confirmed | ✅ Yes — install 0.44+ |
| Giscus (client.js script) | External, official | ✅ Yes — drop the script |
| In-body ToC (`remark-toc` + `remark-collapse`) | External plugins (old, Astro-6-flavored) | ⚠️ remark-collapse is old; verify it still works under Astro-7 `unified()`; consider dropping the in-body ToC in favour of the rail |
| Sidebar ToC `components/TableOfContents.astro` | **Hand-built** (fork) | ❌ Re-author fresh |
| Scroll-spy (`IntersectionObserver`) | **Hand-built JS** (fork) | ❌ Re-author fresh |
| `Datetime` (`dayjs` timezone formatting) | External lib (dayjs) | ✅ but tiny — decide: keep `dayjs` or a small custom formatter |
| pagefind search (`Pagefind.ui`) | External, self-maintained | ✅ if search is desired |

---

## Part 3 — Open questions / decisions needed before the build starts

1. **Prose type scale — biggest conflict.** Portfolio: `html { font-size: 15px }`, body = DM Sans (1rem), headlines serif (Libre Baskerville) with its own `clamp(2rem,5vw,3rem)` hero. Fork: 16px base, `@tailwindcss/typography` prose defaults, headings share the body font. Decide the blog's **content measure & type ramp** and whether to ship a CSS override that respects the 15px root (a `prose`-like scale authored against the portfolio's tokens) rather than Tailwind's default.
2. **Page structure.** Fork/blog: full-width **top header bar** + single 48rem column. Portfolio: **left sticky sidebar (150px) + 56rem row**. Decide whether to reuse the portfolio `Sidebar + content` frame (with blog as new routes under it), or give it its own top-nav layout. This is the single biggest structural decision.
3. **Article / body width.** `48rem` (blog) vs portfolio `body`'s wider row. If a blog post is dropped inside `.content` today, the prose column would span wider than the fork intends. Decide a measure for prose (e.g. ~65–70ch or 48rem) independent of the app frame.
4. **Heading style for blog.** Keep the fork's quirks (h3 italic, all prose headings in body font) or adapt to the portfolio's serif headings? Also whether the `#` hover heading-links pattern (anchor on the right of headings) carries over.
5. **ToC + scroll-spy: one component or two.** Recommend: **one component** (rail render + observer in a single `.astro` with inline `<script>`), scoped to `article h2/h3/h4`. But also answer whether to **keep the in-body `remark-toc` section** at all (fork shows both a context rail AND an in-body collapsed agenda) — two different ToCs may be redundant.
6. **Where the ToC rail sits.** Fork absolutely positions it to the **right** of a 48rem column on `xl+` screens. Inside the portfolio's sidebar frame that rail has no natural gutter. Decide: right-rail (as-is), left rail next to the sidebar, or abandon the rail for top-of-post TOC/anchor list.
7. **URLs change → comments break.** The fork serves the blog at `base: "/blog"` (`https://…/blog/…`). Portfolio is at the root. **This breaks Giscus `pathname`-keyed comments** — the same URL will no longer map to the same thread.
8. **Giscus binding.** Keep the same GitHub repo/category (`abdulkareemakn/blog`, "Announcements") or rebind to a new repo/category for the portfolio URLs? If the blog moves under the portfolio domain, the `pathname` mapping will produce clean separate threads — decide once URLs are final.
9. **Giscus theme sync.** `preferred_color_scheme` tracks OS only. Decide whether to accept that, or wire Giscus to the portfolio's `data-theme` toggle (e.g. via the official `giscus.setConfig`/theme message on toggle — a small hand-added snippet).
10. **Search & reading time.** Blog shows **no reading-time** and uses **Pagefind** for fulltext search. Decide whether the portfolio blog wants reading time (not currently present) and whether search is in scope.
11. **Paginated list size.** Fork uses **4 posts/page** and 4 on-home. Confirm the same density for portfolio lists.
12. **Divider vocabulary.** The fork uses dashed `hr` + `border-b` section rules. Decide whether to reuse those (spacing/typography only, colors excluded here) as the blog's quoted divider pattern or align to the portfolio's existing hairline `--border` style.

---

*Colors are excluded by contract. This document stops here — no routes, components, or content were created.*
