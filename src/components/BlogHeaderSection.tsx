import { formatNumberWithZero } from '../utils/helpers'
import type { BlogWithComments } from '../utils/types'
import byWhoIcon from '../assets/icons/blogs/bywho-y-icon.svg'
import categoryIcon from '../assets/icons/blogs/category-y-icon.svg'
import commentsIcon from '../assets/icons/blogs/comments-y-icon.svg'

type BlogHeaderSectionProps = {
	blogDetails: BlogWithComments
	scrollToComments: () => void
}

const BlogHeaderSection = ({ blogDetails, scrollToComments }: BlogHeaderSectionProps) => {
	const safeDate = blogDetails.date || '01 Jan'
	const [dateDay, postCreatedAtMonth = 'Jan'] = safeDate.split(' ')

	return (
		<>
			<div className="blog-d-page__img-box">
				<img src={blogDetails.image || ''} alt={blogDetails.title} className="blog-d-page__img" />
				<div className="blog-d-page__date">
					<p className="blog-d-page__date-num">{formatNumberWithZero(dateDay)}</p>
					<p className="blog-d-page__date-month">{postCreatedAtMonth.slice(0, 3)}</p>
				</div>
			</div>

			<div className="blog-d-page__content">
				<div className="blog-d-page__info">
					<div className="blog-d-page__info-box">
						<img src={byWhoIcon} alt="by who icon" />
						<p>By {blogDetails.byWho || 'Admin'}</p>
					</div>
					<div className="blog-d-page__info-box">
						<img src={categoryIcon} alt="category icon" className="blog-d-page__icon" />
						<p>{blogDetails.category}</p>
					</div>
					<button className="blog-d-page__info-box blog-d-page__info-box--btn" onClick={scrollToComments}>
						<img src={commentsIcon} alt="comments icon" />
						<p>Comments({blogDetails.comments?.length || 0})</p>
					</button>
				</div>

				<h3 className="blog-d-page__title">{blogDetails.title}</h3>
				<p className="blog-d-page__text">{blogDetails.description}</p>
			</div>
		</>
	)
}
export default BlogHeaderSection
