import './button-tag.scss'

type ButtonTagProps = React.ComponentPropsWithoutRef<'button'> & {
	label: string
	option?: 'pill' | 'br-8'
	active: boolean
}

const ButtonTag = ({ label, option = 'br-8', active, ...rest }: ButtonTagProps) => {
	return (
		<button className={`btn-tag btn-tag--${option} ${active ? 'active' : ''}`} {...rest}>
			{label}
		</button>
	)
}
export default ButtonTag
