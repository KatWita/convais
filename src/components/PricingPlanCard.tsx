import './pricing-plan-card.scss'
import ButtonCta from './ButtonCta'
import type { Pricing } from '../data/pricing'

type Props = Pricing & {
	activePlan: 'monthly' | 'yearly'
}

const PricingPlanCard = ({ option, forWho, plan, profits, price: { monthly, yearly }, activePlan }: Props) => {
	return (
		<div className={`card card--${option}`}>
			<div className="card__price">
				{option === 'premium' && (
					<picture>
						<source media="(min-width: 1536px)" srcSet="/images/pricing/price-premium-desktop.png" />
						<img src="/images/pricing/price-premium-mobile.png" alt="" className="card__price-img" />
					</picture>
				)}

				{option === 'basic' && (
					<picture>
						<source media="(min-width: 1536px)" srcSet="/images/pricing/price-basic-desktop.png" />
						<img src="/images/pricing/price-basic-mobile.png" alt="" className="card__price-img" />
					</picture>
				)}

				<div className="card__price-content">
					<p className="card__amount">
						<span className="card__dolar">$</span>
						{activePlan === 'monthly' ? monthly : yearly}
					</p>
					<p className="card__option">/ per month</p>
				</div>
			</div>

			<div className="card__plan">
				{option === 'premium' && (
					<picture>
						<source media="(min-width: 1536px)" srcSet="/images/pricing/plan-premium-desktop.png" />
						<img src="/images/pricing/plan-premium-mobile.png" alt="" className="card__plan-img" />
					</picture>
				)}

				{option === 'basic' && (
					<picture>
						<source media="(min-width: 1536px)" srcSet="/images/pricing/plan-basic-desktop.png" />
						<img src="/images/pricing/plan-basic-mobile.png" alt="" className="card__plan-img" />
					</picture>
				)}

				<div className="card__plan-content">
					<div className="card__plan-left">
						<div className="card__headline">
							<h3 className="card__title">{plan}</h3>
							<p className="card__content-text">Great for {forWho}</p>
						</div>
						<div className="card__diamond">
							<img src="/images/pricing/diamond-icon.svg" alt="diamond icon" />
						</div>
					</div>

					<ul className="about__checks">
						{profits.map((profit, i) => (
							<li className="about__check" key={i}>
								<img src="/images/check-icon.svg" alt="" />
								<p>{profit}</p>
							</li>
						))}
					</ul>

					{option === 'premium' && <ButtonCta label="Purchase Now" />}
					{option === 'basic' && <ButtonCta label="Purchase Now" option="grey" />}
				</div>
			</div>
		</div>
	)
}

export default PricingPlanCard
