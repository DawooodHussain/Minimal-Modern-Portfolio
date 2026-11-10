// Single source for all portfolio copy. Components render from here.

export const profile = {
	name: 'Daud',
	role: 'Full Stack Developer',
	company: 'BrickxAI',
	specialty: 'Modern web apps & motion',
	location: 'Lahore, Pakistan / Open to remote',
	email: 'hm.davidhussain@gmail.com',
	github: 'https://github.com/dawooodhussain',
	linkedin: 'https://linkedin.com/in/dawoood-hussain-dev',
	chess: '', // TODO: chess.com or lichess profile URL (chess card becomes a link once set)
	resume: '/resume',
	year: 2026,
};

export const about = {
	headline: 'I care about clean code and building apps people love to use.',
	lead: 'Hi, I’m Daud — a full stack developer and college student in Lahore, currently working as a Java developer at BrickxAI.',
	body: 'For the past two years I’ve built web apps end to end: React and Next.js interfaces, Java, Node.js, and Python back ends, and the databases behind them. I care about readable code, fast pages, and interfaces that feel simple to use. College keeps my fundamentals sharp; my work at BrickxAI keeps me shipping real products.',
};

// Right-hand facts column in About. Keep every entry verifiable.
export const facts = [
	{ label: 'Currently', value: 'Java developer at BrickxAI' },
	{ label: 'Experience', value: '2 years' },
	{ label: 'Education', value: 'Frontier Group of Colleges, Arifwala' }, // TODO: add program (e.g. BS Computer Science)
	{ label: 'Based in', value: 'Lahore, Pakistan' },
];

// Matches on-page section order.
export const nav = [
	{ id: 'services', label: 'What I do' },
	{ id: 'work', label: 'Work' },
	{ id: 'about', label: 'About' },
	{ id: 'contact', label: 'Contact' },
];

export const capabilities = [
	{
		title: 'Frontend & motion',
		tag: 'UI',
		body: 'Reactive, high-performance interfaces with React, Next.js, and TypeScript. Micro-interactions and GSAP choreography that feel physical, not decorative.',
		tools: ['React', 'Next.js', 'GSAP', 'Tailwind'],
	},
	{
		title: 'Backend & APIs',
		tag: 'Core',
		body: 'REST and GraphQL APIs, event queues, and microservices in Node.js, Python FastAPI, and Java Spring Boot — designed to stay boring under load.',
		tools: ['Node.js', 'Python', 'Java', 'Express'],
	},
	{
		title: 'Data & DevOps',
		tag: 'Infra',
		body: 'Schema design, query tuning in PostgreSQL and MongoDB, automated test pipelines, and containerized deploys that ship on every merge.',
		tools: ['PostgreSQL', 'MongoDB', 'Docker', 'CI/CD'],
	},
];

export const toolkit = [
	'React & Next.js',
	'Node.js / Express',
	'Python / FastAPI',
	'Java / Spring Boot',
	'PostgreSQL & MongoDB',
	'GSAP & Framer Motion',
	'TypeScript',
	'Docker & AWS',
];

export const projects = [
	{
		title: 'Real-time analytics platform',
		stack: ['Python', 'FastAPI', 'React'],
		body: 'Live analytics engine with WebSocket telemetry, interactive dashboards, and sub-10ms responses on high-volume streams.',
		role: 'Lead backend & data engineer',
		outcome: 'Sub-10ms p95 responses',
		href: '', // TODO: case study or live URL; row becomes a link once set
	},
	{
		title: 'Full-stack e-commerce platform',
		stack: ['MERN', 'Next.js', 'Stripe'],
		body: 'Storefront and inventory system with fast checkout, custom product configurators, and automated webhook workflows.',
		role: 'Full-stack engineer',
		outcome: '40% faster checkout',
		href: '', // TODO: case study or live URL; row becomes a link once set
	},
	{
		title: 'High-performance financial data service',
		stack: ['Spring Boot', 'PostgreSQL', 'Redis'],
		body: 'Microservice processing millions of ledger events daily with strict ACID guarantees, automated reconciliation, and Redis caching.',
		role: 'Backend architect',
		outcome: '99.99% service uptime',
		href: '', // TODO: case study or live URL; row becomes a link once set
	},
	{
		title: 'Interactive studio web experience',
		stack: ['React', 'GSAP', 'Lenis'],
		body: 'Animated studio site with scroll choreography, 60fps page transitions, and keyboard-accessible interactive modules.',
		role: 'Creative technologist',
		outcome: '', // TODO: real, verifiable outcome (hidden while empty)
		href: '', // TODO: case study or live URL; row becomes a link once set
	},
];

// "Off the clock" grid in About. `href` turns a card into a link.
export const offTheClock = [
	{ label: 'Chess', title: 'Plays most days', note: 'Openings, endgames, and the occasional blunder', href: profile.chess },
	{ label: 'Reading', title: 'Philosophy & books', note: 'Big questions, good arguments', href: '' },
	{ label: 'Watching', title: 'Series & movies', note: 'Always mid-season on something', href: '' },
	{ label: 'Learning', title: 'Spanish & Hindi', note: 'One word at a time', href: '' },
];

// /resume page (and public/resume.pdf exported from it). Only verified facts; no mock projects.
export const resume = {
	fullName: 'Daud', // TODO: full name as it should appear on the resume (GitHub shows "Dawood Hussain")
	summary:
		'Full stack developer with 2 years of experience building web applications with React, Next.js, Java, Node.js, and Python. Currently a Java developer at BrickxAI, while studying at Frontier Group of Colleges, Arifwala. Open to freelance work.',
	experience: [
		{
			org: 'BrickxAI',
			role: 'Java Developer',
			detail: '',
			dates: '', // TODO: e.g. '2024 — Present'
			points: [
				'Develop and maintain Java applications for an enterprise retail client.',
				// TODO: 2–3 specific achievements (what you built, stack, measurable impact)
			],
		},
	],
	education: [
		{
			org: 'Frontier Group of Colleges, Arifwala',
			role: 'Currently enrolled', // TODO: program, e.g. 'BS Computer Science'
			dates: '', // TODO: e.g. '2023 — 2027'
		},
	],
	skills: [
		{ group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
		{ group: 'Backend', items: ['Java (Spring Boot)', 'Node.js', 'Express', 'Python (FastAPI)'] },
		{ group: 'Data & DevOps', items: ['PostgreSQL', 'MongoDB', 'Docker', 'AWS'] },
	],
	languages: 'Learning Spanish and Hindi', // TODO: add the languages you speak fluently
	interests: 'Chess, philosophy, reading, series and movies',
};
