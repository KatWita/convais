import './pricing-section.scss'
import { useSearchParams, useLocation } from 'react-router'
import { useState } from 'react'
import SectionHeadline from './SectionHeadline'
import { pricing } from '../data/pricing'
import PricingPlanCard from './PricingPlanCard'

type Plan = 'monthly' | 'yearly'

const PricingSection = () => {
	const location = useLocation()
	const isPricingPage = location.pathname === '/pricing'

	const [params, setSearchParams] = useSearchParams()
	const urlPlanParam = params.get('plan')

	const urlPlan: Plan = urlPlanParam === 'yearly' ? 'yearly' : 'monthly'

	const [localPlan, setLocalPlan] = useState<Plan>('monthly')

	const plan: Plan = isPricingPage ? urlPlan : localPlan

	return (
		<section className="pricing section container container--narrow">
			<div className="pricing__left">
				<SectionHeadline label="pricing plan" title="Flexible Pricing Plans for Every Business" />
				<p className="pricing__text">True success comes from the right strategy and the right support.</p>

				<div className="pricing__btns">
					{isPricingPage ? (
						<>
							<button
								onClick={() => setSearchParams({ plan: 'monthly' }, { preventScrollReset: true, replace: true })}
								className={`pricing__btn pricing__btn--monthly ${plan === 'monthly' ? 'active' : ''}`}
							>
								<span>Monthly</span>
							</button>

							<button
								onClick={() => setSearchParams({ plan: 'yearly' }, { preventScrollReset: true, replace: true })}
								className={`pricing__btn pricing__btn--yearly ${plan === 'yearly' ? 'active' : ''}`}
							>
								<span>Yearly</span>
							</button>
						</>
					) : (
						<>
							<button
								onClick={() => setLocalPlan('monthly')}
								className={`pricing__btn pricing__btn--monthly ${plan === 'monthly' ? 'active' : ''}`}
							>
								<span>Monthly</span>
							</button>

							<button
								onClick={() => setLocalPlan('yearly')}
								className={`pricing__btn pricing__btn--yearly ${plan === 'yearly' ? 'active' : ''}`}
							>
								<span>Yearly</span>
							</button>
						</>
					)}
				</div>
			</div>

			<div className="pricing__right">
				{pricing.map(card => (
					<PricingPlanCard {...card} key={card.id} activePlan={plan} />
				))}
			</div>
		</section>
	)
}

export default PricingSection
