import './how-its-work-section.scss'
import { howItsWork } from '../data/howItsWork'

import HowItsWorkCard from './HowItsWorkCard'
import SectionHeadline from './SectionHeadline'

const HowItsWorkSection = () => {
	return (
		<section className="how">
			<div className="container container--narrow">
				<SectionHeadline label="How It's Work" title="Step-By-Step Business Process" />
				<div className="how__cards">
					{howItsWork.map((item, index) => (
						<HowItsWorkCard {...item} index={index} key={item.id} />
					))}
				</div>
			</div>
			<div className="blur-bg"></div>
		</section>
	)
}
export default HowItsWorkSection
