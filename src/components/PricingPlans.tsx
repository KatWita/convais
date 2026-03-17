import { pricing } from '../data/pricing'
import PricingPlanCard from './PricingPlanCard'

const PricingPlans = () => {
	return (
		<>
			{pricing.map(card => (
				<PricingPlanCard {...card} key={card.id} />
			))}
		</>
	)
}
export default PricingPlans
