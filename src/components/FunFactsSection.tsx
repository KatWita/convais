import './fun-facts-section.scss'
import FilmModal from './FilmModal.tsx'
import Facts from './Facts.tsx'
import playIcon from '../assets/icons/play-icon.svg'
import { AnimatePresence } from 'motion/react'
import { useSearchParams } from 'react-router'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll.ts'

const FunFactsSection = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const VIDEO_ID = 'facts'
	const isModalShown = searchParams.get('video') === VIDEO_ID

	const textToSpin = 'Consulting Business'
	const spinningText = textToSpin.split('')

	const updateVideoUrl = (show: boolean) => {
		setSearchParams(
			(prev: URLSearchParams) => {
				if (show) {
					prev.set('video', VIDEO_ID)
				} else {
					prev.delete('video')
				}
				return prev
			},
			{ replace: true },
		)
	}

	const handleOpenModal = () => {
		updateVideoUrl(true)
	}

	const handleCloseModal = () => {
		updateVideoUrl(false)
	}

	useLockBodyScroll(isModalShown)

	return (
		<section className="fun-facts">
			<Facts>
				<button className="facts__button" onClick={handleOpenModal}>
					<div className="facts__button-text">
						{spinningText.map((char, i) => (
							<span style={{ transform: `rotate(${i * 18.3}deg)` }} key={i}>
								{char}
							</span>
						))}
					</div>
					<img src={playIcon} alt="play movie icon" className="facts__button-img" />
				</button>
			</Facts>
			<div className="blur-bg blur-bg--one"></div>
			<div className="blur-bg blur-bg--two"></div>

			<AnimatePresence>
				{isModalShown && (
					<FilmModal onClose={handleCloseModal}>
						<iframe
							src="https://www.youtube.com/embed/txuWGoZF3ew?si=cj_4K3wkZVSnJsZ1"
							title="Dillon!"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
					</FilmModal>
				)}
			</AnimatePresence>
		</section>
	)
}

export default FunFactsSection
