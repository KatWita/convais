export type Feature = {
	id: number
	title: string
	text: string
	icons: {
		dark: string
		light: string
	}
	link: string
}

export const features: Feature[] = [
	{
		id: 1,
		title: 'Strategic Insight',
		text: 'Key features include in-depth market to analysis, financial, risk assessment, process optimization, leadership ..',
		icons: {
			dark: '/images/features/strategic-insight-icon.svg',
			light: '/images/about/page/features/strategic-insight-about-icon.svg',
		},
		link: '/blog/predictive-modeling-the-future-of-strategic-foresight',
	},
	{
		id: 2,
		title: 'Operational Efficiency',
		text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio officiis hic ex dolore reiciendis velit dolorem, neque illo sint rerum!',
		icons: {
			dark: '/images/features/operational-efficiency-icon.svg',
			light: '/images/about/page/features/operational-efficiency-about-icon.svg',
		},
		link: '/blog/maximizing-operational-throughput-via-lean-frameworks',
	},
	{
		id: 3,
		title: 'Business Solutions',
		text: 'Looking to refresh your skills, our team of experienced instructors will guide you every step of the way Our comprehensive ..',
		icons: {
			dark: '/images/features/business-solutions-icon.svg',
			light: '/images/about/page/features/business-solution-about-icon.svg',
		},
		link: '/blog/cutting-operational-costs-with-smart-consulting',
	},
]
