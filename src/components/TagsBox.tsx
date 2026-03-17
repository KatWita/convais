import './tags-box.scss'
import BoxHeadline from './BoxHeadline'
import ButtonTag from './ButtonTag'
import { uniqueTags } from '../data/blogs'
import { useNavigate, useSearchParams } from 'react-router'

const TagsBox = () => {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const activeTags = searchParams.getAll('tags')

	const handleTagClick = (tag: string) => {
		const current = searchParams.getAll('tags')
		const updated = current.includes(tag) ? current.filter(t => t !== tag) : [...current, tag]

		if (updated.length === 0) {
			navigate('/blog')
		} else {
			navigate(`/blog?${updated.map(t => `tags=${encodeURIComponent(t)}`).join('&')}`)
		}
	}

	return (
		<div className="tags-box side-box">
			<BoxHeadline title="Tags" />
			<div className="tags-box__tags">
				{uniqueTags.map(tag => (
					<ButtonTag
						label={tag}
						key={tag}
						option="br-8"
						onClick={() => handleTagClick(tag)}
						active={activeTags.includes(tag)}
					/>
				))}
			</div>
		</div>
	)
}
export default TagsBox
