export type Pricing = {
	id: string
	option: string
	forWho: string
	plan: string
	profits: string[]
	price: { monthly: string; yearly: string }
}

export const pricing: Pricing[] = [
	{
		id: '1',
		option: 'premium',
		forWho: 'companies',
		plan: 'Premium Plan',
		profits: [
			'Dedicated consultant',
			'Unlimited calls',
			'Reply in 2–4 h',
			'Progress reviews',
			'Quick email support',
			'24/7 support',
		],
		price: {
			monthly: '59.9',
			yearly: '639.9',
		},
	},
	{
		id: '2',
		option: 'basic',
		forWho: 'private individuals',
		plan: 'Basic Plan',
		profits: [
			'Consulting online only',
			'4–8 h consulting/month',
			'Reply within 1 business day',
			'Progress reviews',
			'Quick email support',
			'24/7 support (online)',
		],
		price: {
			monthly: '49.9',
			yearly: '539.9',
		},
	},
]
