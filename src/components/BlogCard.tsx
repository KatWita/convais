import './blog-card.scss'
import ButtonCta from './ButtonCta'
import byWhoIcon from '../assets/icons/blogs/bywho-y-icon.svg'
import categoryIcon from '../assets/icons/blogs/category-y-icon.svg'
import commentsIcon from '../assets/icons/blogs/comments-y-icon.svg'
import { Link } from 'react-router'
import type { Blog as BlogEntry, Comment } from '../db/schema'
import { formatNumberWithZero } from '../utils/helpers'

type BlogWithComments = BlogEntry & {
	comments?: Comment[]
}

const BlogCard = ({ image, date, byWho, category, title, description, comments, slug }: BlogWithComments) => {
	const safeDate = date || '01 Jan'
	const [dateDay, postCreatedAtMonth = 'Jan'] = safeDate.split(' ')

	return (
		<article className="blog">
			<div className="blog__img-box">
				<img src={image || ''} alt={title} className="blog__img" />
				<div className="blog__date">
					<p className="blog__date-num">{formatNumberWithZero(dateDay)}</p>
					<p className="blog__date-month">{postCreatedAtMonth.slice(0, 3)}</p>
				</div>
			</div>
			<div className="blog__content">
				<div className="blog__info">
					<div className="blog__info-box">
						<img src={byWhoIcon} alt="by who icon" />
						<p>By {byWho || 'Admin'}</p>
					</div>
					<div className="blog__info-box">
						<img src={categoryIcon} alt="category icon" className="blog__icon" />
						<p>{category || 'General'}</p>
					</div>
					<Link to={`/blog/${slug}#comments`} className="blog__info-box blog__info-box--btn">
						<img src={commentsIcon} alt="comments icon" />
						<p>Comments({comments?.length || 0})</p>
					</Link>
				</div>
				<h3 className="blog__title">
					<Link to={`/blog/${slug}`}>{title}</Link>
				</h3>
				<p className="blog__text">{description}</p>
				<Link to={`/blog/${slug}`} className="blog__btn-link">
					<ButtonCta label="Read More" option="white-border" />
				</Link>
			</div>
		</article>
	)
}

export default BlogCard
