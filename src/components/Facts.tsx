import './facts.scss'
import { funFacts } from '../data/facts'
import SectionHeadline from './SectionHeadline'
import AnimatedNumber from './AnimatedNumber'

type Facts = {
	children?: React.ReactNode
}

const Facts = ({ children }: Facts) => {
	return (
		<div className="facts container container--wide">
			<div className="facts__img-box">
				<img src="/images/facts/desk.jpg" alt="" className="facts__img" />
			</div>
			{children}
			<div className="facts__content">
				<SectionHeadline label="Fun Facts" title="Fascinating Facts" />
				<div className="facts__stats">
					{funFacts.map((fact, index) => {
						// Wyciąga samą liczbę z fact.amount
						const numericValue = parseInt(fact.amount.replace(/\D/g, '')) || 0

						// Wyciąga całą resztę jako sufiks
						const suffix = fact.amount.replace(/[0-9]/g, '')

						return (
							<div className="facts__number-box" key={fact.label}>
								<p className={fact.hasTextStroke ? 'facts__stroke' : 'facts__number'}>
									<AnimatedNumber value={numericValue} delay={index * 0.2} />
									{suffix}
								</p>
								<p className="facts__number-text">{fact.label}</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
export default Facts
