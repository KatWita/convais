import quoteIcon from '../assets/icons/blogs/quote-b-icon.svg'
import playIcon from '../assets/icons/play-w-icon.svg'
import type { BlogWithComments } from '../utils/types'

type BlogContentProps = {
	blogDetails: BlogWithComments
	toggleVideo: (show: boolean) => void
}

const BlogContent = ({ blogDetails, toggleVideo }: BlogContentProps) => {
	return (
		<>
			<h4 className="blog-d-page__h4">{blogDetails.sub}</h4>
			<p className="blog-d-page__text blog-d-page__text--subdesc">{blogDetails.subDesc}</p>

			<div className="blog-d-page__quote">
				<img src={quoteIcon} alt="quote icon" className="blog-d-page__quote-icon" />
				<p className="blog-d-page__text blog-d-page__text--quote">{blogDetails.quote}</p>
			</div>

			{blogDetails.features && blogDetails.features.length > 0 && (
				<div className="blog-d-page__features">
					<h4 className="blog-d-page__h4">Key Features</h4>
					<ul className="list">
						{blogDetails.features.map((el, idx) => (
							<li className="list__elem" key={idx}>
								{el}
							</li>
						))}
					</ul>
				</div>
			)}

			{blogDetails.video && (
				<div className="blog-d-page__video">
					<img src={blogDetails.videoImg || ''} alt="video img" className="blog-d-page__img-vid" />
					<button onClick={() => toggleVideo(true)} className="blog-d-page__btn-play">
						<img src={playIcon} alt="play video icon" className="blog-d-page__btn-play-img" />
					</button>
				</div>
			)}

			<div className="blog-d-page__conclusion">
				<h4 className="blog-d-page__h4">Conclusion</h4>
				<p className="blog-d-page__text blog-d-page__text--conclusion">{blogDetails.conclusions}</p>
			</div>
		</>
	)
}
export default BlogContent
