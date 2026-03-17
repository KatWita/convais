import './about-page.scss'
import AboutFeatures from '../components/About/AboutFeatures'
import AboutLogos from '../components/About/AboutLogos'
import AboutSection from '../components/About/AboutSection-2'
import Facts from '../components/Facts'
import FactsSkills from '../components/FactsSkills'
import TeamSection from '../components/TeamSection'
import SectionHeadline from '../components/SectionHeadline'
import Testimonials from '../components/Testimonials'

const About = () => {
	return (
		<>
			<section className="about__features section container container--narrow">
				<AboutFeatures />
				<AboutLogos />
			</section>
			<AboutSection />
			<section className="about__fun-facts section">
				<Facts>
					<FactsSkills />
				</Facts>
			</section>
			<TeamSection />
			<section className="about__clients clients container container--narrow">
				<SectionHeadline label="Clients Feedback" title="See What Our Clients Talking About Us" />
				<Testimonials mode="light" />
			</section>
		</>
	)
}
export default About
