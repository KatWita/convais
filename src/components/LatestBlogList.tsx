import { blogs } from '../data/blogs'
import LatestBlogCard from './LatestBlogCard'

const latestBlogs = blogs.slice(0, 3)

const BlogList = ({ className }: { className?: string }) => {
	return (
		<div className={`blogs ${className}`}>
			{latestBlogs.map(blog => (
				<LatestBlogCard {...blog} key={blog.title} />
			))}
		</div>
	)
}
export default BlogList
