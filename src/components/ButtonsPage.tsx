import './buttons-page.scss'
import { Link, useParams } from 'react-router'
import { useRef } from 'react'
import ButtonArrow from './ButtonArrow'

interface Sluggable {
	slug: string
}

type ButtonsPageProps = {
	array: Sluggable[]
}

const ButtonsPage = ({ array }: ButtonsPageProps) => {
	const { project, title } = useParams()

	const currentIndex = array.findIndex(el => el.slug === (project || title))

	const prevEl = array[currentIndex - 1]
	const nextEl = array[currentIndex + 1]

	const path = project ? 'projects' : 'blog'

	const prevBtnRef = useRef<HTMLAnchorElement | null>(null)
	const nextBtnRef = useRef<HTMLAnchorElement | null>(null)

	const scrollIfAbove = (ref: React.RefObject<HTMLAnchorElement | null>) => {
		const el = ref.current
		if (!el) return

		const rect = el.getBoundingClientRect()

		// Jeśli przycisk jest powyżej viewportu → przewija w górę do niego
		if (rect.top < 0) {
			el.scrollIntoView({
				behavior: 'auto',
				block: 'start',
			})
		}
	}

	return (
		<div className="page-buttons">
			<Link
				ref={prevBtnRef}
				to={prevEl ? `/${path}/${prevEl.slug}` : '#'}
				onClick={e => {
					if (!prevEl) {
						e.preventDefault()
						return
					}

					scrollIfAbove(prevBtnRef)
				}}
				className={`page-buttons__nav-btn page-buttons__nav-btn--prev ${!prevEl ? 'disabled' : ''}`}
			>
				<ButtonArrow option="dark-blue" />
				Previous
			</Link>

			<Link
				ref={nextBtnRef}
				to={nextEl ? `/${path}/${nextEl.slug}` : '#'}
				onClick={e => {
					if (!nextEl) {
						e.preventDefault()
						return
					}

					scrollIfAbove(nextBtnRef)
				}}
				className={`page-buttons__nav-btn page-buttons__nav-btn--next ${!nextEl ? 'disabled' : ''}`}
			>
				Next
				<ButtonArrow />
			</Link>
		</div>
	)
}

export default ButtonsPage
