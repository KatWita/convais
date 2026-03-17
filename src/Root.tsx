import Header from './components/Header/Header-1/Header'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/About/AboutSection-1'
import ServicesSection from './components/ServicesSection'
import FunFactsSection from './components/FunFactsSection'
import TeamSection from './components/TeamSection'
import ClientsSection from './components/ClientsSection'
import ProjectsSection from './components/ProjectsSection'
import HowItsWorkSection from './components/HowItsWorkSection'
import LatestBlogsSection from './components/LatestBlogsSection'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router'

function Root() {
	const { pathname } = useLocation()
	const navType = useNavigationType()

	useEffect(() => {
		if (pathname !== '/') return

		// Jeśli kliknięto w nawigację/logo (PUSH) - wymuś górę
		if (navType === 'PUSH') {
			window.scrollTo(0, 0)
		}
	}, [pathname, navType])
	return (
		<>
			<Header />
			<main className="main">
				<FeaturesSection />
				<AboutSection />
				<ServicesSection />
				<FunFactsSection />
				<TeamSection />
				<ClientsSection />
				<ProjectsSection />
				<HowItsWorkSection />
				<LatestBlogsSection />
			</main>
			<Footer option="bg" />
			<ScrollTop />
		</>
	)
}

export default Root
