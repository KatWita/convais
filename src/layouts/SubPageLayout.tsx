import { Outlet } from 'react-router'
import SubPageHeader from '../components/Header/SubPageHeader/SubPageHeader'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

const SubPageLayout = () => {
	return (
		<>
			<SubPageHeader />
			<main className="main--white">
				<Outlet />
			</main>
			<Footer option="no-bg" />
			<ScrollTop />
		</>
	)
}

export default SubPageLayout
