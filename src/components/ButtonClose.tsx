import { VscChromeClose } from 'react-icons/vsc'

type ButtonCloseProps = {
	onClick: () => void
	size: number
}

const ButtonClose = ({ onClick, size }: ButtonCloseProps) => {
	return (
		<button className="btn-close">
			<VscChromeClose onClick={onClick} size={size} />
		</button>
	)
}
export default ButtonClose
