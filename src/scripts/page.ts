/*
 * The only client JS on the page. Animation itself is CSS (global.css);
 * this file just flips classes and handles behaviour CSS can't:
 *
 *   data-reveal           element fades + lifts in once when scrolled into view
 *   data-reveal-group     same, for each direct child, staggered
 *   data-reveal-words     manifesto words brighten in sequence, once
 *   data-section          sets aria-current on the matching [data-nav] link
 *   data-clock            Lahore local time (HH:MM)
 *   data-copy="text"      button copies text; its [data-copy-label] shows "Copied"
 *   a[href^="#"]          scrolls without writing #hash to the URL
 */

const $$ = <T extends HTMLElement = HTMLElement>(sel: string) => Array.from(document.querySelectorAll<T>(sel));

/*
 * Focus moves to the target so keyboard and screen-reader users land where
 * the eye does. Offset comes from scroll-margin-top; smoothness from CSS
 * scroll-behavior (disabled under reduced motion).
 */
function scrollToTarget(target: HTMLElement) {
	target.scrollIntoView();
	if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
	target.focus({ preventScroll: true });
}

function initAnchors() {
	document.addEventListener('click', (e) => {
		if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
		const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
		const target = link && document.getElementById(link.hash.slice(1));
		if (!target) return;
		e.preventDefault();
		scrollToTarget(target);
	});

	// Shared links like /#work still work: scroll once, then clean the URL.
	const initial = location.hash && document.getElementById(location.hash.slice(1));
	if (initial) {
		history.replaceState(null, '', location.pathname + location.search);
		scrollToTarget(initial);
	}
}

function initNavState() {
	const links = $$('[data-nav]');
	// A section is "current" while it crosses a line 45% down the viewport.
	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const id = (entry.target as HTMLElement).id;
				links.forEach((a) => a.setAttribute('aria-current', String(a.dataset.nav === id)));
			}
		},
		{ rootMargin: '-45% 0px -55% 0px' },
	);
	$$('[data-section]').forEach((s) => io.observe(s));
}

function initReveals() {
	$$('[data-reveal-group]').forEach((group) => {
		Array.from(group.children).forEach((child, i) => (child as HTMLElement).style.setProperty('--i', String(i)));
	});
	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				// Entering from above means it was skipped past (e.g. a shared #link): show it, don't animate.
				if (entry.boundingClientRect.top < 0) entry.target.classList.add('is-instant');
				entry.target.classList.add('is-in');
				io.unobserve(entry.target); // one-shot
			}
		},
		{ rootMargin: '0px 0px -10% 0px' },
	);
	$$('[data-reveal], [data-reveal-group], [data-reveal-words]').forEach((el) => io.observe(el));
}

function initCopy() {
	$$<HTMLButtonElement>('[data-copy]').forEach((btn) => {
		const label = btn.querySelector('[data-copy-label]');
		if (!label) return;
		const initial = label.textContent;
		let timer: number | undefined;
		btn.addEventListener('click', async () => {
			const value = btn.dataset.copy ?? '';
			try {
				await navigator.clipboard.writeText(value);
				label.textContent = 'Copied';
			} catch {
				// Clipboard blocked (insecure context / permissions): show the address to copy manually.
				label.textContent = value;
			}
			clearTimeout(timer);
			timer = window.setTimeout(() => (label.textContent = initial), 2000);
		});
	});
}

function initClock() {
	const el = document.querySelector('[data-clock]');
	if (!el) return;
	const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', hour12: false });
	const tick = () => (el.textContent = fmt.format(new Date()));
	tick();
	setInterval(tick, 30_000);
}

initReveals();
document.documentElement.classList.add('motion-ready');
initAnchors();
initNavState();
initCopy();
initClock();
