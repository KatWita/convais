import './btn-arrow.scss'

type ButtonArrowProps = React.ComponentPropsWithoutRef<'button'> & {
	option?: 'yellow' | 'dark-blue' | 'dark-blue-skew'
}

const ButtonArrow = ({ option = 'yellow', ...rest }: ButtonArrowProps) => {
	return (
		<button className={`btn-arrow btn-arrow--${option}`} {...rest}>
			<img
				src={option === 'yellow' ? '/images/arrow-icon.svg' : '/images/arrow-icon-white.svg'}
				alt=""
				className="btn-arrow__img btn-arrow__img--left"
			/>
			<img
				src={option === 'yellow' ? '/images/arrow-icon.svg' : '/images/arrow-icon-white.svg'}
				alt=""
				className="btn-arrow__img btn-arrow__img--right"
			/>
		</button>
	)
}
export default ButtonArrow
