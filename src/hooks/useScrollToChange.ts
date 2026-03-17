import { useEffect, useRef } from 'react'

export function useScrollToChange<T>(value: T | null, ref: React.RefObject<HTMLElement | null>) {
	const prevValueRef = useRef<T | null>(null)

	useEffect(() => {
		// brak wartości → nic nie rób
		if (value === null) {
			prevValueRef.current = value
			return
		}

		// brak refa → nic nie rób
		if (!ref.current) {
			prevValueRef.current = value
			return
		}

		// pierwszy raz → zapamiętaj
		if (prevValueRef.current === null) {
			prevValueRef.current = value
			return
		}

		// zmiana → scroll
		if (prevValueRef.current !== value) {
			ref.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}

		prevValueRef.current = value
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value])
}
