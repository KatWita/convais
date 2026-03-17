import { useEffect, useState } from 'react'

type DeviceType = 'mobile' | 'desktop'

function debounce(fn: () => void, delay: number) {
	let timeout: ReturnType<typeof setTimeout>
	return () => {
		clearTimeout(timeout)
		timeout = setTimeout(fn, delay)
	}
}

export function useDeviceType(): DeviceType {
	const [device, setDevice] = useState<DeviceType>('mobile')

	useEffect(() => {
		const evaluate = () => {
			const hasHover = window.matchMedia('(hover: hover)').matches
			const isFinePointer = window.matchMedia('(pointer: fine)').matches
			const width = window.innerWidth

			if (hasHover && isFinePointer && width >= 1024) {
				setDevice('desktop')
			} else {
				setDevice('mobile')
			}
		}

		const debounced = debounce(evaluate, 150)

		evaluate()

		window.addEventListener('resize', debounced)
		return () => window.removeEventListener('resize', debounced)
	}, [])

	return device
}
