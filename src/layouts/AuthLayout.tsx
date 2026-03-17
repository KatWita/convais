import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

const AuthLayout = () => {
	return (
		<>
			<Navigation />
			<main className="main">
				<Outlet />
			</main>
			<Footer option="bg" />
		</>
	)
}
export default AuthLayout
