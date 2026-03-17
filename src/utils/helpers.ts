export const wait = (ms: number) => new Promise(res => setTimeout(res, ms))

export const formatNumberWithZero = (value: number | string | undefined | null): string => {
	if (value === undefined || value === null) return '00'

	const num = typeof value === 'string' ? parseInt(value, 10) : value

	if (isNaN(num)) return '00'

	return num.toString().padStart(2, '0')
}

export const formatCommentDate = (date: Date | string | null | undefined): string => {
	if (!date) return ''

	const d = new Date(date)

	// Formatowanie daty: Oct-25-2025
	const datePart = new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: '2-digit',
		year: 'numeric',
	})
		.format(d)
		.replace(/ /g, '-')
		.replace(',', '')

	// Formatowanie czasu: 10.45 am
	const timePart = new Intl.DateTimeFormat('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	})
		.format(d)
		.toLowerCase()
		.replace(':', '.')

	return `${datePart}, at ${timePart}`
}

export const slugify = (str: string): string =>
	str
		.normalize('NFD') // znaki diakrytyczne
		.replace(/[\u0300-\u036f]/g, '') // akcenty (ą na a, ł na l)
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, '') // znaki specjalne
		.replace(/\s+/g, '-') // spacje i myślniki
		.replace(/-+/g, '-') // wiele myślników zamienia na jeden jeden
