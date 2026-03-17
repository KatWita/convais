import 'dotenv/config'
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from '../db/schema'
import { blogs } from '../data/blogs'

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

async function main() {
	console.log('Rozpoczynam migrację...')

	try {
		await db.delete(schema.comments)
		await db.delete(schema.blogs)
		console.log('Baza wyczyszczona.')

		for (const blog of blogs) {
			console.log(`Wstawiam bloga: ${blog.title}`)

			const [insertedBlog] = await db
				.insert(schema.blogs)
				.values({
					category: blog.category,
					title: blog.title,
					slug: blog.slug,
					description: blog.description,
					sub: blog.sub,
					subDesc: blog.subDesc,
					quote: blog.quote,
					conclusions: blog.conclusions,
					features: blog.features,
					tags: blog.tags,
					date: blog.date,
					image: blog.image,
					byWho: blog.byWho,
					video: blog.video,
					videoImg: blog.videoImg,
				})
				.returning({ newId: schema.blogs.id })

			if (blog.comments?.length) {
				await db.insert(schema.comments).values(
					blog.comments.map(c => ({
						blogId: insertedBlog.newId,
						author: c.author,
						avatar: c.avatar,
						comment: c.comment,
					})),
				)
			}
		}
		console.log('Migracja zakończona sukcesem!')
	} catch (error) {
		console.error('BŁĄD PODCZAS MIGRACJI:', error)
	}
}

main().catch(console.error)
