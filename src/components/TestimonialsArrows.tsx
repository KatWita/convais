type TestimonialsArrowsProps = {
	onClick?: () => void
}

export function NextArrow({ onClick }: TestimonialsArrowsProps) {
	return (
		<button className="slider__next" onClick={onClick}>
			<img src="/images/arrow-icon.svg" />
		</button>
	)
}

export function PrevArrow({ onClick }: TestimonialsArrowsProps) {
	return (
		<button className="slider__prev" onClick={onClick}>
			<img src="/images/arrow-icon.svg" />
		</button>
	)
}
