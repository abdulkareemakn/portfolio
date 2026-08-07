# Portfolio — Abdul Kareem

The portfolio is a static Astro site deployed with Cloudflare Workers. Its
production build also stages the separate sibling blog at `/blog`.

## Repository layout

```text
Projects/
├── portfolio/  # this repository
└── blog/       # separate AstroPaper repository; base must be /blog
```

The repositories remain independent. The portfolio build copies the blog's
generated output into `portfolio/dist/blog` immediately before deployment.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Run the portfolio only at `localhost:4321`. |
| `pnpm build:portfolio` | Build the portfolio only. |
| `pnpm build` | Build the portfolio and sibling blog, then stage the blog at `/blog`. |
| `pnpm preview` | Preview the combined production build. |
| `pnpm deploy` | Build the combined site and deploy `dist` with Wrangler. |

`pnpm build` runs the blog's own `pnpm build`, including its Pagefind indexing
step. Do not replace it with `astro build` when preparing a combined deploy.

The deployment directory is a single static tree:

```text
dist/
├── index.html       # portfolio
└── blog/            # generated blog build
```

The blog path defaults to `../blog`. To use a different checkout location, set
`PORTFOLIO_BLOG_DIR` to its absolute path. Keep the blog's Astro configuration
at `base: "/blog"`; the build checks this before staging files.
