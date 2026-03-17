import type { LoaderFunctionArgs } from 'react-router'
import { wait } from '../utils/helpers'

export const blogsLoader = async ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url)
	const page = url.searchParams.get('page') || '1'
	const tags = url.searchParams.getAll('tags')
	const search = url.searchParams.get('search') || ''

	const params = new URLSearchParams({ page, limit: '4' })
	tags.forEach(tag => params.append('tags', tag))
	if (search) params.set('search', search)

	const [response] = await Promise.all([fetch(`/.netlify/functions/api/api/blogs?${params}`), wait(300)])

	if (!response.ok) {
		throw new Error('Blogs fetching error.')
	}

	return { ...(await response.json()), page: parseInt(page, 10), limit: 4, tags, search }
}

export const singleBlogLoader = async ({ params }: LoaderFunctionArgs) => {
	const { title } = params
	if (!title) throw new Response('Missing slug', { status: 400 })

	const [blogRes, allRes] = await Promise.all([
		fetch(`/.netlify/functions/api/api/blogs?slug=${title}`),
		fetch(`/.netlify/functions/api/api/blogs?limit=0`),
		wait(300),
	])

	if (!blogRes.ok) throw new Response('Not Found', { status: 404 })

	const blogData = await blogRes.json()
	const allBlogsData = await allRes.json()

	return {
		blog: blogData,
		allBlogs: allBlogsData.data || [],
	}
}
