import type { Link } from '../utils/types'

type Office = {
	name: string
	place: string
}

export type GalleryImage = {
	id: number
	images: {
		webp: string
		jpg: string
	}
	desc: string
}

export const footerServicesLinks: Link[] = [
	{
		label: 'Business Process',
		href: '/services/business-optimization',
	},
	{
		label: 'Financial Management',
		href: '/services/financial-planning-analysis',
	},
	{
		label: 'Market Research',
		href: '/services/market-entry-expansion-strategy',
	},
	{
		label: 'Change Management',
		href: '/services/change-management',
	},
	{
		label: 'Strategic Planning',
		href: '/services/strategic-planning',
	},
	{
		label: 'Leadership',
		href: '/services/leadership-development-program',
	},
]

export const footerResourcesLinks: Link[] = [
	{
		label: 'Contact Us',
		href: '/contact',
	},
	{
		label: 'Privacy Policy',
		href: '/privacy-policy',
	},
	{
		label: 'Blog Post',
		href: '/blog',
	},
	{
		label: 'Clients Feedback',
		href: '/testimonials',
	},
	{
		label: 'Projects',
		href: '/projects',
	},
]

export const footerOffices: Office[] = [
	{
		name: 'Headquarters - USA',
		place: 'Seattle (Major City In The State Washington).',
	},
	{
		name: 'Operations - China',
		place: "Shanghai (Major Global Financial Hub & China's Largest Cities).",
	},
]

export const gallery: GalleryImage[] = [
	{
		id: 1,
		images: {
			webp: '/images/gallery/gallery-1.webp',
			jpg: '/images/gallery/gallery-1.jpg',
		},
		desc: 'Gallery 1 image',
	},
	{
		id: 2,
		images: {
			webp: '/images/gallery/gallery-2.webp',
			jpg: '/images/gallery/gallery-2.jpg',
		},
		desc: 'Gallery 2 image',
	},
	{
		id: 3,
		images: {
			webp: '/images/gallery/gallery-3.webp',
			jpg: '/images/gallery/gallery-3.jpg',
		},
		desc: 'Gallery 3 image',
	},
	{
		id: 4,
		images: {
			webp: '/images/gallery/gallery-4.webp',
			jpg: '/images/gallery/gallery-4.jpg',
		},
		desc: 'Gallery 4 image',
	},
	{
		id: 5,
		images: {
			webp: '/images/gallery/gallery-5.webp',
			jpg: '/images/gallery/gallery-5.jpg',
		},
		desc: 'Gallery 5 image',
	},
]
