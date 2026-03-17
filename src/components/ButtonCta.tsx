import './btn-cta.scss'
import { GoArrowRight } from 'react-icons/go'

type ButtonCtaProps = React.ComponentPropsWithoutRef<'button'> & {
	label: string
	option?: 'yellow' | 'white' | 'white-border' | 'light' | 'grey' | 'grey-light' | 'underline'
	size?: string
}

const ButtonCta = ({ label, option = 'yellow', size = '1.4rem', ...rest }: ButtonCtaProps) => {
	return (
		<button className={option ? `btn-cta btn-cta--${option}` : 'btn-cta'} {...rest}>
			<span className="btn-cta__arrow btn-cta__arrow--left">
				<GoArrowRight style={{ fontSize: size }} />
			</span>
			<span className="btn-cta__label">{label}</span>
			<span className="btn-cta__arrow btn-cta__arrow--right">
				<GoArrowRight style={{ fontSize: size }} />
			</span>
		</button>
	)
}
export default ButtonCta
