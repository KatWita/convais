import { motion, AnimatePresence } from 'motion/react'
import { Outlet, useNavigation } from 'react-router'
import Navigation from '../components/Navigation'

const AppLayout = () => {
	const navigation = useNavigation()
	const isLoading = navigation.state === 'loading'

	return (
		<>
			<AnimatePresence>
				{isLoading && (
					<motion.div
						key="progress-bar"
						initial={{ width: '0%', opacity: 1 }}
						animate={{ width: '80%' }}
						exit={{ width: '100%', opacity: 0 }}
						transition={{ duration: 0.2, ease: 'easeOut' }}
						style={{
							position: 'fixed',
							top: 0,
							left: 0,
							right: 0,
							height: '2px',
							backgroundColor: '#bef74a',
							zIndex: 9999,
							pointerEvents: 'none',
						}}
					/>
				)}
			</AnimatePresence>
			<Navigation />
			<Outlet />
		</>
	)
}

export default AppLayout
