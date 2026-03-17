import type { Blog as BlogEntry, Comment } from '../db/schema'

export type Modals = {
	onClose: () => void
	children: React.ReactNode
}

export type Link = {
	label: string
	href: string
}

export type NavLink = Link & {
	hasDropdown?: boolean
	dropdown?: Link[]
}

export type BlogWithComments = BlogEntry & {
	comments?: Comment[]
}
