// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// TODO: replace with your real domain. Drives canonical URLs, Open Graph URLs, sitemap, and robots.txt.
	site: 'https://dawooodhussain.vercel.app',
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
