import { redirect, type LoaderFunctionArgs } from 'react-router'

export function pricingLoader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url)
	const plan = url.searchParams.get('plan')

	if (!plan) {
		return redirect('/pricing?plan=monthly')
	}

	return null
}
