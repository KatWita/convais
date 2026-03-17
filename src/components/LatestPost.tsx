import './latest-post.scss'
import type { Blog } from '../data/blogs'
import { formatNumberWithZero } from '../utils/helpers'
import calendarIcon from '../assets/icons/calendar.svg'
import { Link } from 'react-router'

const LatestPost = ({ image, title, slug, date }: Blog) => {
	const safeDate = date || '01 Jan'
	const [dateDay, postCreatedAtMonth = 'Jan'] = safeDate.split(' ')

	return (
		<Link to={`/blog/${slug}`} className="latest-post-link">
			<div className="latest-post">
				<img src={image || ''} alt={`${title} img`} className="latest-post__img" />
				<div className="latest-post__content">
					<div className="latest-post__date-box">
						<img src={calendarIcon} alt="calendar icon" className="latest-post__icon" />
						<p className="latest-post__date">
							<span>{formatNumberWithZero(dateDay)} </span>
							<span>{postCreatedAtMonth.slice(0, 3)}</span>, 2026
						</p>
					</div>
					<h4 className="latest-post__title">{title}</h4>
				</div>
			</div>
		</Link>
	)
}
export default LatestPost
