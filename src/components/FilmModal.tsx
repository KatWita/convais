import { useState } from 'react'
import type { Modals } from '../utils/types'
import ButtonClose from './ButtonClose'
import Modal from './Modal'
import { motion, AnimatePresence } from 'framer-motion'

const FilmModal = ({ onClose, children }: Modals) => {
	const [isLoaded, setIsLoaded] = useState(false)

	return (
		<Modal option="film">
			<div className="modal__actions">
				<ButtonClose onClick={onClose} size={40} />
			</div>
			<div className="modal__content" style={{ position: 'relative', backgroundColor: '#000' }}>
				<AnimatePresence>
					{!isLoaded && (
						<motion.div
							key="simple-loader"
							exit={{ opacity: 0 }}
							style={{
								position: 'absolute',
								inset: 0,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								zIndex: 10,
								background: '#000',
							}}
						>
							<motion.div
								animate={{ rotate: 360 }}
								transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
								style={{
									width: 50,
									height: 50,
									borderRadius: '50%',
									border: '3px solid rgba(190, 247, 74, 0.1)',
									borderTop: '3px solid #bef74a',
									boxShadow: '0 0 5px rgba(190, 247, 74, 0.2)',
								}}
							/>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Ukrywa iframe dopóki się nie załaduje */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoaded ? 1 : 0 }} transition={{ duration: 0.6 }}>
					{/* Używa React.cloneElement, aby dopiąć onLoad do iframe - iframe musi być bezpośrednio jako children*/}
					<div onLoad={() => setIsLoaded(true)}>{children}</div>
				</motion.div>
			</div>
		</Modal>
	)
}
export default FilmModal
