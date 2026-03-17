import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import './modal.scss'

type ModalTypes = {
	option: 'gallery' | 'film'
	children: React.ReactNode
}

const Modal = ({ option, children }: ModalTypes) => {
	return createPortal(
		<motion.div
			className={`modal modal--${option}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<motion.div
				className="modal__container"
				initial={{ scale: 0.8, opacity: 0, y: 20 }}
				animate={{ scale: 1, opacity: 1, y: 0 }}
				exit={{ scale: 0.8, opacity: 0, y: 20 }}
				transition={{ type: 'spring', damping: 25, stiffness: 300 }}
			>
				{children}
			</motion.div>
		</motion.div>,
		document.body,
	)
}
export default Modal
