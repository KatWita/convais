import './footer-gallery.scss'
import { gallery } from '../data/footer'
import FooterHeadline from './FooterHeadline'
import GalleryModal from './GalleryModal'
import { AnimatePresence } from 'motion/react'
import { useSearchParams } from 'react-router'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

const FooterGallery = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const photoParam = searchParams.get('footerGallery')
	const parsedIndex = photoParam ? parseInt(photoParam, 10) - 1 : -1

	const isModalShown = parsedIndex >= 0 && parsedIndex < gallery.length
	const activeImage = isModalShown ? parsedIndex : 0

	const updatePhotoUrl = (index: number | null) => {
		setSearchParams(
			(prev: URLSearchParams) => {
				if (index === null) {
					prev.delete('footerGallery')
				} else {
					prev.set('footerGallery', (index + 1).toString())
					prev.delete('video')
				}
				return prev
			},
			{ replace: true },
		)
	}

	const handleImageClick = (i: number) => {
		updatePhotoUrl(i)
	}

	const handlePrevPicClick = () => {
		const newIndex = activeImage === 0 ? gallery.length - 1 : activeImage - 1
		updatePhotoUrl(newIndex)
	}

	const handleNextPicClick = () => {
		const newIndex = activeImage + 1 === gallery.length ? 0 : activeImage + 1
		updatePhotoUrl(newIndex)
	}

	const handleCloseModal = () => {
		updatePhotoUrl(null)
	}

	useLockBodyScroll(isModalShown)

	const preloadImage = (src: string) => {
		const img = new Image()
		img.src = src
	}

	return (
		<div className="gallery">
			<FooterHeadline label="Our Gallery" />
			<div className="gallery__imgs">
				{gallery.map((img, i) => (
					<div
						className="gallery__img"
						key={img.id}
						onClick={() => handleImageClick(i)}
						onMouseEnter={() => preloadImage(img.images.webp)}
					>
						<img src={img.images.webp} alt={img.desc} />
					</div>
				))}
				<AnimatePresence>
					{isModalShown && (
						<GalleryModal
							onClose={handleCloseModal}
							onPrevPicClick={handlePrevPicClick}
							onNextPicClick={handleNextPicClick}
							activeImage={activeImage}
						>
							<img src={gallery[activeImage].images.webp} alt={gallery[activeImage].desc} />
						</GalleryModal>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default FooterGallery
