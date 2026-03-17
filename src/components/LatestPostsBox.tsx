import './latest-posts-box.scss'
import BoxHeadline from './BoxHeadline'
import { blogs } from '../data/blogs'
import LatestPost from './LatestPost'

const LatestPostsBox = () => {
	const latestBlogs = blogs.slice(0, 3)

	return (
		<div className="latest-posts side-box">
			<BoxHeadline title="Latest Post" />

			<div className="latest-posts__posts">
				{latestBlogs.map(blog => (
					<LatestPost {...blog} key={blog.title} />
				))}
			</div>
		</div>
	)
}
export default LatestPostsBox
