type WhyChoose = {
	id: string
	title: string
	text: string
	icon: { dark: string; light: string }
	link: string
}

export const whyChoose: WhyChoose[] = [
	{
		id: '1',
		title: 'Professional & Trust-Building',
		text: 'Choosing the right consulting partner can makes all the difference.',
		icon: {
			dark: '/images/why-us/trust-building-icon-dark.svg',
			light: '/images/why-us/trust-building-icon-light.svg',
		},
		link: '/blog/how-consultants-help-build-powerful-brand-identities',
	},
	{
		id: '2',
		title: 'Focused & Benefit-Driven',
		text: 'Choosing the right consulting partner can makes all the difference.',
		icon: {
			dark: '/images/why-us/benefit-driven-icon-dark.svg',
			light: '/images/why-us/benefit-driven-icon-light.svg',
		},
		link: '/blog/consulting-advice-for-develop-strong-leadership',
	},
	{
		id: '3',
		title: 'Results-Oriented',
		text: 'Choosing the right consulting partner can makes all the difference.',
		icon: {
			dark: '/images/why-us/result-oriented-icon-dark.svg',
			light: '/images/why-us/result-oriented-icon-light.svg',
		},
		link: '/blog/cutting-operational-costs-with-smart-consulting',
	},
	{
		id: '4',
		title: 'Client Centric & Personalized',
		text: 'Choosing the right consulting partner can makes all the difference.',
		icon: {
			dark: '/images/why-us/client-centric-icon-dark.svg',
			light: '/images/why-us/client-centric-icon-light.svg',
		},
		link: '/blog/maximizing-operational-throughput-via-lean-frameworks',
	},
]
