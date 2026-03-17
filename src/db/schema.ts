import { pgTable, text, varchar, uuid, timestamp } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import type { AnyPgColumn } from 'drizzle-orm/pg-core'

export const blogs = pgTable('blogs', {
	id: uuid('id').primaryKey().defaultRandom(),
	category: varchar('category', { length: 100 }),
	title: text('title').notNull(),
	slug: text('slug').unique().notNull(),
	description: text('description'),
	sub: text('sub'),
	subDesc: text('sub_desc'),
	quote: text('quote'),
	conclusions: text('conclusions'),
	date: varchar('date', { length: 50 }),
	image: text('image'),
	byWho: varchar('by_who', { length: 100 }),
	features: text('features').array(),
	tags: text('tags').array(),
	video: text('video'),
	videoImg: text('video_img'),
})

// Tabela komentarzy (powiązana z blogiem)
export const comments = pgTable('comments', {
	id: uuid('id').primaryKey().defaultRandom(),
	blogId: uuid('blog_id').references(() => blogs.id, { onDelete: 'cascade' }),
	author: text('author').notNull(),
	comment: text('comment').notNull(),
	avatar: text('avatar'),
	parentId: uuid('parent_id').references((): AnyPgColumn => comments.id, { onDelete: 'cascade' }),
	createdAt: timestamp('created_at').defaultNow(),
})

// Relacje dla tabeli blogs
export const blogsRelations = relations(blogs, ({ many }) => ({
	comments: many(comments),
}))

// Relacje dla tabeli comments
export const commentsRelations = relations(comments, ({ one }) => ({
	blog: one(blogs, {
		fields: [comments.blogId],
		references: [blogs.id],
	}),
}))

export type Blog = typeof blogs.$inferSelect
export type Comment = typeof comments.$inferSelect
