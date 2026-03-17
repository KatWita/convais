import './features-section.scss'
import { features } from '../data/features'
import FeatureCard from './FeatureCard'

const FeaturesSection = () => {
	return (
		<section className="features">
			<div className="container container--narrow">
				{features.map(feature => (
					<FeatureCard {...feature} key={feature.id} />
				))}
			</div>
		</section>
	)
}
export default FeaturesSection
