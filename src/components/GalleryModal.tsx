import { motion, AnimatePresence } from 'framer-motion'
import Modal from './Modal'
import { NextArrow, PrevArrow } from './TestimonialsArrows'
import ButtonClose from './ButtonClose'
import type { Modals } from '../utils/types'

type GalleryModalProps = Modals & {
	onPrevPicClick: () => void
	onNextPicClick: () => void
	activeImage: number
}

const GalleryModal = ({ onClose, onPrevPicClick, onNextPicClick, activeImage, children }: GalleryModalProps) => {
	return (
		<Modal option="gallery">
			<div className="modal__actions">
				<div className="modal__arrows">
					<NextArrow onClick={onNextPicClick} />
					<PrevArrow onClick={onPrevPicClick} />
				</div>
				<ButtonClose onClick={onClose} size={40} />
			</div>

			<div className="modal__content" style={{ position: 'relative' }}>
				<AnimatePresence mode="wait">
					<motion.div
						key={activeImage}
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.1 }}
					>
						{children}
					</motion.div>
				</AnimatePresence>
			</div>
		</Modal>
	)
}
export default GalleryModal
