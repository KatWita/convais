import './blog-details-page.scss'
import { useLoaderData, useSearchParams, useLocation, useFetcher, useNavigation } from 'react-router'
import { useEffect, useRef, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { Blog as BlogEntry, Comment } from '../db/schema'
import { useScrollToChange } from '../hooks/useScrollToChange'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

import FilmModal from '../components/FilmModal'
import ButtonsPage from '../components/ButtonsPage'
import BlogComments from '../components/BlogComments'
import BlogCommentForm from '../components/BlogCommentForm'
import BlogHeaderSection from '../components/BlogHeaderSection'
import BlogContent from '../components/BlogContent'
import BlogTagsAndShare from '../components/BlogTagsAndShare'
import SearchBox from '../components/SearchBox'
import LatestPostsBox from '../components/LatestPostsBox'
import ExclusiveServicesBox from '../components/ExclusiveServicesBox'
import TagsBox from '../components/TagsBox'
import RequestCallback from '../components/RequestCallback'

type CommentActionData = { ok?: boolean; errors?: { comment?: string; name?: string; email?: string } }

type BlogWithComments = BlogEntry & {
	comments: Comment[]
}

type LoaderResult = {
	blog: BlogWithComments | { error?: string } | null
	allBlogs: BlogEntry[]
}

function isBlog(b: unknown): b is BlogWithComments {
	return typeof b === 'object' && b !== null && 'id' in b
}

const BlogDetails = () => {
	const { blog, allBlogs } = useLoaderData() as LoaderResult
	const { hash } = useLocation()
	const [searchParams, setSearchParams] = useSearchParams()
	const blogId = isBlog(blog) ? blog.id : null
	const fetcher = useFetcher<CommentActionData>({ key: `comments-${blogId}` })
	const navigation = useNavigation()
	const isBlogNavigation = navigation.state === 'loading' && navigation.location?.pathname.includes('/blog/')

	const blogRef = useRef<HTMLDivElement>(null)
	const commentsRef = useRef<HTMLDivElement>(null)
	const formRef = useRef<HTMLDivElement>(null)

	// ID komentarza, na który odpowiadam
	const [replyTo, setReplyTo] = useState<string | null>(null)

	const isVideoOpen = searchParams.get('video') === 'vid'
	useLockBodyScroll(isVideoOpen)

	useScrollToChange((fetcher.state as string) === 'idle' ? blogId : null, blogRef)

	// Scroll i blokada wysokości
	useEffect(() => {
		const state = fetcher.state as string

		if (state === 'idle' && fetcher.data?.ok) {
			const wasReply = fetcher.formData?.get('parentId')
			setTimeout(
				() => {
					commentsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
				},
				wasReply ? 200 : 100,
			)
		}
	}, [fetcher.state, fetcher.data, fetcher.formData])

	useEffect(() => {
		if (hash === '#comments') {
			setTimeout(() => {
				commentsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
				window.history.replaceState(null, '', window.location.pathname)
			}, 100)
		}
	}, [hash])

	// Scroll do formularza przy wejściu w tryb reply
	useEffect(() => {
		if (replyTo && formRef.current) {
			setTimeout(() => {
				formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
			}, 150)
		}
	}, [replyTo])

	const replyingToAuthor = useMemo(() => {
		if (!isBlog(blog)) return null
		if (!replyTo) return null
		return blog.comments.find(c => c.id === replyTo)?.author || null
	}, [replyTo, blog])

	if (!isBlog(blog)) {
		return (
			<section className="section container container--narrow">
				<h2 className="page-not-found">Sorry! There's no such blog.</h2>
			</section>
		)
	}

	const toggleVideo = (show: boolean) => {
		setSearchParams(
			prev => {
				if (show) prev.set('video', 'vid')
				else prev.delete('video')
				return prev
			},
			{ replace: true },
		)
	}

	const getEmbedUrl = (url: string | null | undefined) => {
		if (url?.includes('watch?v=')) return url.replace('watch?v=', 'embed/')
		return url || ''
	}

	const scrollToComments = () => {
		if (commentsRef.current) {
			commentsRef.current.scrollIntoView({ behavior: 'smooth' })
		} else {
			const element = document.getElementById('comments')
			element?.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const handleReply = (id: string) => {
		setReplyTo(prev => (prev === id ? null : id))
	}

	return (
		<>
			<motion.div animate={{ opacity: isBlogNavigation ? 0.3 : 1 }} transition={{ duration: 0.3 }}>
				<section ref={blogRef} className="blog-d-page section container container--narrow">
					<div className="blog-d-page__right">
						<SearchBox />
						<LatestPostsBox />
						<ExclusiveServicesBox />
						<TagsBox />
						<RequestCallback />
					</div>

					<div className="blog-d-page__left">
						<BlogHeaderSection blogDetails={blog} scrollToComments={scrollToComments} />
						<BlogContent blogDetails={blog} toggleVideo={toggleVideo} />
						<BlogTagsAndShare blogDetails={blog} />
						<ButtonsPage array={allBlogs} />

						<BlogComments
							ref={commentsRef}
							comments={isBlog(blog) ? blog.comments : []}
							fetcher={fetcher}
							onReply={handleReply}
							replyTo={replyTo}
						/>

						<div ref={formRef}>
							<BlogCommentForm
								blogId={blog.id}
								fetcher={fetcher}
								parentId={replyTo}
								replyingTo={replyingToAuthor}
								onCancelReply={() => setReplyTo(null)}
								onCommentAdded={() => setReplyTo(null)}
							/>
						</div>
					</div>
				</section>
			</motion.div>

			<AnimatePresence>
				{isVideoOpen && (
					<FilmModal onClose={() => toggleVideo(false)}>
						<iframe src={getEmbedUrl(blog.video)} title={blog.title} frameBorder="0" allowFullScreen />
					</FilmModal>
				)}
			</AnimatePresence>
		</>
	)
}

export default BlogDetails
