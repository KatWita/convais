import './latest-blog-card.scss'

import type { Blog } from '../data/blogs'
import { Link, useNavigate } from 'react-router'
import ButtonRead from './ButtonRead'

const LatestBlogCard = ({ category, image, title, slug, date, comments }: Blog) => {
	const navigate = useNavigate()
	const [dateDay, postCreatedAtMonth] = date.split(' ')

	let postCreatedAtDay

	if (dateDay.length === 1) {
		postCreatedAtDay = `0${dateDay}`
	} else {
		postCreatedAtDay = dateDay
	}

	return (
		<div className="card">
			<img src={image} alt="" className="card__img" />

			<div className="card__content">
				<img src="/images/blog/blog-box.png" alt="" className="card__bg" />
				<div className="card__bottom-content">
					<div className="card__category-box">
						<img src="/images/blog/folder-icon.svg" alt="" />
						<p className="category">{category}</p>
					</div>
					<Link to={`/blog/${slug}#comments`} className="card__comments">
						<img src="/images/blog/comment-icon.svg" alt="" />
						<p>
							Comments <span className="card__comments-num">({comments?.length})</span>
						</p>
					</Link>
					<h3 className="card__title">
						<Link to={`/blog/${slug}`}>{title}</Link>
					</h3>

					<ButtonRead label="read more" option="yellow" onClick={() => navigate(`/blog/${slug}`)} />

					<div className="card__date">
						<p className="card__date-num">{postCreatedAtDay}</p>
						<p className="card__date-month">{postCreatedAtMonth.slice(0, 3)}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default LatestBlogCard
