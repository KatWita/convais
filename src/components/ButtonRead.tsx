import { GoArrowRight } from 'react-icons/go'
import './btn-read.scss'

type ButtonReadProps = React.ComponentPropsWithoutRef<'button'> & {
	label: string
	option?: 'white' | 'yellow' | 'grey' | 'dark-blue'
	arrowSize?: string
	noUnderline?: boolean
}

const ButtonRead = ({
	label,
	option = 'white',
	arrowSize = '1.4rem',
	noUnderline = false,
	...rest
}: ButtonReadProps) => {
	return (
		<button className={`btn-read btn-read--${option}`} {...rest}>
			<span style={noUnderline ? { textDecoration: 'none' } : { textDecoration: 'underline' }}>{label}</span>
			<GoArrowRight style={{ fontSize: arrowSize }} />
		</button>
	)
}
export default ButtonRead
