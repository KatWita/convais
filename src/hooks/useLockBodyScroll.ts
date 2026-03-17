import { useEffect } from 'react'

export function useLockBodyScroll(isLocked: boolean) {
	useEffect(() => {
		const className = 'scroll-hidden'

		if (isLocked) {
			document.body.classList.add(className)
		} else {
			document.body.classList.remove(className)
		}

		// Cleanup: usuwa klasę, gdy komponent jest odmontowywany
		// lub gdy zmienia się wartość isLocked
		return () => {
			document.body.classList.remove(className)
		}
	}, [isLocked])
}
