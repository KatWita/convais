import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

type AnimatedNumberProps = {
	value: number
	delay: number
}

const AnimatedNumber = ({ value, delay }: AnimatedNumberProps) => {
	const ref = useRef<HTMLSpanElement>(null)
	const isInView = useInView(ref, { once: true })

	const motionValue = useMotionValue(0)
	const springValue = useSpring(motionValue, {
		stiffness: 40,
		damping: 25,
		restDelta: 0.01,
	})

	useEffect(() => {
		if (isInView) {
			setTimeout(() => {
				motionValue.set(value)
			}, delay * 1000)
		}
	}, [isInView, value, motionValue, delay])

	useEffect(() => {
		const unsubscribe = springValue.on('change', latest => {
			if (ref.current) {
				ref.current.textContent = Math.round(latest).toString()
			}
		})
		return () => unsubscribe()
	}, [springValue])

	return <span ref={ref}>0</span>
}

export default AnimatedNumber
