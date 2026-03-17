import './latest-blog-section.scss'
import { useNavigate } from 'react-router'
import ButtonCta from './ButtonCta'
import SectionHeadline from './SectionHeadline'
import LatestBlogList from './LatestBlogList'

const LatestBlogsSection = () => {
	const navigate = useNavigate()

	return (
		<section className="blog">
			<div className="container container--narrow">
				<div className="blog__header">
					<SectionHeadline label="News & Updates" title="Latest News From The Blog" />

					<ButtonCta label="View More Post" onClick={() => navigate('/blog')} />
				</div>
				<LatestBlogList className="blog__blogs" />
			</div>
			<div className="blur-bg"></div>
		</section>
	)
}
export default LatestBlogsSection
