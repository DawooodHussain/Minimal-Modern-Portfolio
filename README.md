# Daud — Portfolio

Personal portfolio of Daud, full stack developer. A static [Astro](https://astro.build) site styled with Tailwind CSS v4. All animation is CSS; the only client JavaScript is a ~1.5 KB inline script.

## Local setup

Requires Node.js 22+.

```sh
npm install
npm run dev       # http://localhost:4321
```

| Command           | What it does                                   |
| :---------------- | :--------------------------------------------- |
| `npm run dev`     | Dev server with hot reload                     |
| `npm run build`   | Production build to `dist/`                    |
| `npm run preview` | Serve the production build locally             |

Run Lighthouse against `npm run preview`, not `npm run dev`. The dev server adds the Astro toolbar and unminified Vite modules, which tank the scores but never ship.

## Editing content

All copy lives in **`src/data/content.ts`**: profile and links, About text and facts, skills, projects, the "Off the clock" cards, and resume data. Components render from it, so you rarely need to touch markup.

Fields left as an empty string are hidden on the site:

| Field              | When empty                                   |
| :----------------- | :------------------------------------------- |
| `profile.resume`   | Resume links (header, footer, Contact) are hidden |
| `profile.linkedin` | LinkedIn action is hidden                    |
| `profile.chess`    | Chess card is shown, but not as a link       |
| project `href`     | Project row is plain text, not a link        |
| project `outcome`  | "Outcome" line is hidden                     |

Search for `TODO` to find everything still waiting on real details.

## Resume

The resume is a page at **`/resume`**, built from `resume` in `content.ts` and laid out for one A4 page.

To export the PDF, run `npm run build && npm run preview`, then either:

- open `http://localhost:4321/resume/` and click **Save as PDF** (choose "Save as PDF" in the print dialog, margins "None"), or
- run headless Chrome:
  ```sh
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --no-pdf-header-footer \
    --virtual-time-budget=8000 --print-to-pdf=public/resume.pdf http://localhost:4321/resume/
  ```

The site links to the `/resume` page itself (`profile.resume: '/resume'`), which has a **Save as PDF** button. To link a static PDF instead, export it to `public/resume.pdf` and set `profile.resume: '/resume.pdf'`.

## Brand assets

- Favicons: `node scripts/generate-brand-assets.mjs` regenerates `public/favicon.svg`, `favicon-32.png`, and `apple-touch-icon.png`.
- Share image (`public/og.png`, 1200×630): rendered in a browser with the site fonts and screenshotted. It isn't scripted, because sharp can't render the web fonts.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project**, import the repo. If the Astro project sits in a subfolder, set **Root Directory** to `frontend`.
3. Vercel detects Astro automatically (build `npm run build`, output `dist`). No environment variables are needed.
4. After the first deploy, set `site` in `astro.config.mjs` to the real URL (it drives canonical URLs, social previews, the sitemap, and `robots.txt`), then redeploy.

## Unknown URLs

Any path that isn't a page is served `404.html`, which sends visitors straight to the home page. The response keeps its 404 status, so search engines don't index broken links.

## npm registry

`.npmrc` pins the public npm registry, so `package-lock.json` resolves the same packages on Vercel and on any machine, even one whose user-level npm config points at a private registry.

## SEO

`src/layouts/Layout.astro` sets the title, description, canonical URL, Open Graph and Twitter tags, and Person structured data. `@astrojs/sitemap` writes `sitemap-index.xml`, and `src/pages/robots.txt.ts` points crawlers to it.
