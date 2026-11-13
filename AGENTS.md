# Portfolio — Abdul Kareem

The visual design lives in **[DESIGN.md](./DESIGN.md)**: tokens, type scale,
components and do's and don'ts. Read it before changing anything visual, and
keep the CSS tokens in `src/styles/global.css` in step with it.

## Stack

- **Framework:** Astro (static site), pnpm
- **Fonts:** Hedvig Letters Serif (headings, nav, quotes), Vercetti (body),
  0xProto (mono), Noto Nastaliq Urdu (his name only). Only Regular ships;
  `font-synthesis: none` is set, so never rely on bold or italic.
- **Base font-size:** 15px (`html { font-size: 15px }`); sizes are in rem
- **Theme:** Monokai Pro Light (Filter Sun) by default, Monokai Pro (Filter
  Spectrum) when the system prefers dark. There is no in-page switcher.

## Layout

```
body[data-hue]
  header.topbar            sticky; logo, hotkey keycaps, nav links
  div.page
    div.column             56rem, centred
      main                 page content
      footer.site-footer
```

There is no sidebar. The top bar lives inside the same 56rem column as the
page. Under 720px it collapses to a Menu button and a full-width sheet.

## Hues

Each part of the site owns one hue, set with `<Layout hue="…">`, which becomes
`body[data-hue]`. Components read `--hue` and `--hue-ink`; any element can opt
in with `.hue-<name>`.

| Hue | Area | Pages |
|---|---|---|
| rose | type, primary accent | Home, About, Connect, Colophon, 404 |
| blue | code and projects | Projects, Kit |
| yellow | books, shows, games | Library |
| green | training | Training |
| orange | cricket and football | pills only |
| purple | writing | Blog (external) |

In light mode use `--*-ink` for any text under 24px; the plain hue is for
dots, borders and underlines.

## Components

- `Pill.astro` — the site's punctuation. Link or static, sizes `inline`/`sm`/
  `md`/`lg`, `icon` (emoji) or an `icon` slot, `suffix`, `after` for trailing
  punctuation that must stay attached.
- `TopBar.astro` — nav and hotkeys (`h a p k l t b c`). Add a page by adding a
  row to `links` and, if it needs a hotkey, a unique `key`.
- `ProjectList.astro` — project rows with a CSS-only hover/focus preview.
  Data is in `src/data/projects.ts`. A project without `preview` gets no card.
- `Quote.astro`, `LocationStatus.astro`, `Socials.astro`, `Footer.astro`.

## Content rules

- Only confirmed facts. Unconfirmed content is **omitted**, never shown as a
  placeholder. `src/data/site.ts` (Home quote), `library.ts` and `training.ts`
  render nothing for empty fields; fill them in and the sections appear.
- Training shows weight loss as a trend only, never an absolute body weight.
- There is no Umpiring page and no Lahore Qalandars pill.

## Development

```sh
pnpm dev            # dev server
pnpm run build      # verify the build succeeds
```

## Inspired by

https://hecker.vc — the centred 56rem column.
