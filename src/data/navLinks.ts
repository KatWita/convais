import type { NavLink } from '../utils/types'

export const navLinks: NavLink[] = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Pages',
		href: '#',
		hasDropdown: true,
		dropdown: [
			{
				label: 'Services',
				href: '/services',
			},
			{
				label: 'Team',
				href: '/team',
			},
		],
	},
	{
		label: 'Portfolio',
		href: '#',
		hasDropdown: true,
		dropdown: [
			{
				label: 'Projects',
				href: '/projects',
			},
			{
				label: 'Pricing Plan',
				href: '/pricing',
			},
			{
				label: 'Testimonials',
				href: '/testimonials',
			},
		],
	},
	{
		label: 'Blog',
		href: '/blog',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
]
