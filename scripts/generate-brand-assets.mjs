// Regenerates favicons in public/: node scripts/generate-brand-assets.mjs
// Uses sharp (already installed by Astro).
//
// public/og.png (1200×630 share card) is NOT generated here: sharp's text renderer
// can't load the @fontsource web fonts and falls back to Helvetica. It was rendered
// in a browser with the site fonts loaded and screenshotted at 1200×630.
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('..', import.meta.url);
const pub = (f) => fileURLToPath(new URL(`public/${f}`, root));

const INK = '#0A0A0A';
const PAPER = '#FAFAFA';

// Geometric "D" drawn as a path so the favicon never depends on a font.
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="${INK}"/>
  <path fill="${PAPER}" fill-rule="evenodd" d="M8 7h8.5a9 9 0 0 1 0 18H8zm4.5 4.5v9h4a4.5 4.5 0 0 0 0-9z"/>
</svg>
`;

await writeFile(pub('favicon.svg'), favicon);
await sharp(Buffer.from(favicon)).resize(32, 32).png().toFile(pub('favicon-32.png'));
await sharp(Buffer.from(favicon)).resize(180, 180).png().toFile(pub('apple-touch-icon.png'));

console.log('Wrote favicon.svg, favicon-32.png, apple-touch-icon.png');
