import './services-section.scss'
import SectionHeadline from './SectionHeadline'
import ServicesCard from './ServicesCard'
import { services } from '../data/services'

const ServicesSection = () => {
	return (
		<section className="services">
			<div className="container container--narrow">
				<SectionHeadline label="Our Services" title="Get Our Exclusive Services" />
				<div className="services__cards">
					{services.map(service => (
						<ServicesCard {...service} key={service.id} />
					))}
				</div>
			</div>
			<div className="blur-bg"></div>
		</section>
	)
}
export default ServicesSection
