import './blog-page.scss'
import BlogCard from '../components/BlogCard'
import { useLoaderData, useNavigation, useSearchParams } from 'react-router'
import { useRef } from 'react'
import { motion } from 'motion/react'
import Pagination from '../components/Pagination'
import type { Blog as BlogType } from '../db/schema'
import SearchBox from '../components/SearchBox'
import LatestPostBox from '../components/LatestPostsBox'
import ExclusiveServicesBox from '../components/ExclusiveServicesBox'
import TagsBox from '../components/TagsBox'

const Blog = () => {
	const {
		data: currentBlogs,
		totalItems,
		page,
		limit,
		tags,
	} = useLoaderData() as {
		data: BlogType[]
		totalItems: number
		page: number
		limit: number
		tags: string[]
	}

	const [, setSearchParams] = useSearchParams()
	const blogListRef = useRef<HTMLDivElement>(null)
	const navigation = useNavigation()
	const isPageNavigation = navigation.state === 'loading' && navigation.location?.search.includes('page=')

	const handlePageChange = (pageNumber: number) => {
		const params = new URLSearchParams({ page: pageNumber.toString() })
		tags.forEach(tag => params.append('tags', tag))
		setSearchParams(params, { preventScrollReset: true })
		blogListRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
		<div
			ref={blogListRef}
			className="blog-page section container container--narrow"
			style={{ scrollMarginTop: '2rem' }}
		>
			<div className="blog-page__right">
				<SearchBox />
				<LatestPostBox />
				<ExclusiveServicesBox />
				<TagsBox />
			</div>

			<div className="blog-page__left">
				<motion.div
					animate={{ opacity: isPageNavigation ? 0.3 : 1 }}
					transition={{ duration: 0.3 }}
					className="blog-page__blogs"
				>
					{currentBlogs.length === 0 ? (
						<p className="blog-page__no-results">No posts found for the selected filters.</p>
					) : (
						currentBlogs.map(blog => <BlogCard {...blog} key={blog.id} />)
					)}
				</motion.div>

				<Pagination totalItems={totalItems} itemsPerPage={limit} currentPage={page} onPageChange={handlePageChange} />
			</div>
		</div>
	)
}

export default Blog
