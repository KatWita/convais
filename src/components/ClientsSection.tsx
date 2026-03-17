import CompanyLogos from './CompanyLogos'
import SectionHeadline from './SectionHeadline'
import Testimonials from './Testimonials'
import './clients-section.scss'

const ClientsSection = () => {
	return (
		<section className="clients">
			<div className="container container--narrow">
				<SectionHeadline label="Clients Feedback" title="See What Our Clients Talking About Us" />
				<Testimonials mode="dark" />
				<CompanyLogos />
			</div>
			<div className="blur-bg"></div>
		</section>
	)
}
export default ClientsSection
