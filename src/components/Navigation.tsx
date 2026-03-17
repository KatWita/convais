import { useDeviceType } from '../hooks/useDeviceType'
import Nav from './Nav'
import NavMobile from './NavMobile'

const Navigation = () => {
	const device = useDeviceType()

	return (
		<>
			{device === 'mobile' && <NavMobile />}
			{device === 'desktop' && <Nav />}
		</>
	)
}
export default Navigation
