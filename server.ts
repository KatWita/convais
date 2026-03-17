import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { db } from './src/db/db'
import { comments } from './src/db/schema'
import { arrayContains, and, ilike, or } from 'drizzle-orm'
import { blogs } from './src/db/schema'

const app = new Hono()

app.use(
	'/api/*',
	cors({
		origin: 'http://localhost:5173',
		allowMethods: ['POST', 'GET', 'OPTIONS'],
		allowHeaders: ['Content-Type', 'Authorization'],
	}),
)

app.get('/api/blogs', async c => {
	const slug = c.req.query('slug')
	const pageQuery = c.req.query('page')
	const limitQuery = c.req.query('limit')

	try {
		if (slug) {
			const post = await db.query.blogs.findFirst({
				where: (blogs, { eq }) => eq(blogs.slug, slug),
			})

			if (!post) return c.json(null, 200)

			const postComments = await db.query.comments.findMany({
				where: (comments, { eq }) => eq(comments.blogId, post.id),
				orderBy: (comments, { desc }) => [desc(comments.createdAt)],
			})

			return c.json({ ...post, comments: postComments })
		}

		// PAGINACJA
		// Jeśli w URL nie ma page/limit, nie tnie wyników
		const page = pageQuery ? parseInt(pageQuery, 10) : null
		const limit = limitQuery ? parseInt(limitQuery, 10) : null

		const searchQuery = c.req.query('search')
		const tagsQuery = c.req.queries('tags')
		const tagWhere = tagsQuery?.length ? and(...tagsQuery.map(tag => arrayContains(blogs.tags, [tag]))) : undefined

		const searchWhere = searchQuery
			? or(ilike(blogs.title, `%${searchQuery}%`), ilike(blogs.description, `%${searchQuery}%`))
			: undefined

		const combinedWhere = tagWhere && searchWhere ? and(tagWhere, searchWhere) : (tagWhere ?? searchWhere)

		const allBlogs = await db.query.blogs.findMany({ where: combinedWhere })
		const totalItems = allBlogs.length

		let results
		if (page && limit) {
			const offset = (page - 1) * limit
			results = await db.query.blogs.findMany({
				where: combinedWhere,
				limit: limit,
				offset: offset,
			})
		} else {
			results = allBlogs
		}

		const blogsWithComments = await Promise.all(
			results.map(async blog => {
				const blogComments = await db.query.comments.findMany({
					where: (comments, { eq }) => eq(comments.blogId, blog.id),
					orderBy: (comments, { desc }) => [desc(comments.createdAt)],
				})

				return { ...blog, comments: blogComments }
			}),
		)

		return c.json({
			data: blogsWithComments,
			totalItems: totalItems,
		})
	} catch (e) {
		const errorMessage = e instanceof Error ? e.message : 'Unknown error'
		console.error(errorMessage)
		return c.json({ error: 'DB Error', details: errorMessage }, 500)
	}
})

app.post('/api/comments', async c => {
	try {
		const body = await c.req.json()

		const { blogId, author, comment, avatar, parentId } = body

		let finalParentId = null
		let finalComment = comment

		if (parentId) {
			const parentComment = await db.query.comments.findFirst({
				where: (comments, { eq }) => eq(comments.id, parentId),
			})

			if (parentComment) {
				if (parentComment.parentId) {
					finalParentId = parentComment.parentId
					finalComment = `@${parentComment.author} ${comment}`
				} else {
					finalParentId = parentId
				}
			}
		}

		const newComment = await db
			.insert(comments)
			.values({
				blogId,
				author,
				comment: finalComment,
				avatar,
				parentId: finalParentId,
				createdAt: new Date(),
			})
			.returning()

		return c.json(newComment[0], 201)
	} catch (e) {
		const errorMessage = e instanceof Error ? e.message : 'Unknown error'
		console.error(errorMessage)
		return c.json({ error: 'DB Error', details: errorMessage }, 500)
	}
})

console.log('🚀 Server runs at ')
serve({ fetch: app.fetch, port: 3000 })
