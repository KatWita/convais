import type { BlogWithComments } from '../utils/types'
import ButtonTag from './ButtonTag'
import ShareOnSocial from './ShareOnSocial'

type BlogTagsAndShareProps = {
	blogDetails: BlogWithComments
}

const BlogTagsAndShare = ({ blogDetails }: BlogTagsAndShareProps) => {
	return (
		<>
			<div className="blog-d-page__tags-cont">
				<div className="blog-d-page__tags">
					<h4 className="blog-d-page__h4">Tags :</h4>
					<div className="blog-d-page__tags-btns">
						{blogDetails.tags?.map((tag, idx) => (
							<ButtonTag label={tag || ''} option="pill" key={idx} />
						))}
					</div>
				</div>
				<div className="blog-d-page__share">
					<p className="blog-d-page__share-title">Share:</p>
					<ShareOnSocial title={blogDetails.title} />
				</div>
			</div>
		</>
	)
}
export default BlogTagsAndShare
