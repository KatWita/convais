import './how-its-work-card.scss'

import type { HowItsWorkElem } from '../data/howItsWork'

type HowItsWorkProps = HowItsWorkElem & {
	index: number
}

const HowItsWorkCard = ({ title, text, icon, index }: HowItsWorkProps) => {
	return (
		<div className="card">
			<img src="/images/how/how-it-works-box.png" alt="" className="card__img" />
			<div className="card__content">
				<p className="card__num">0{index + 1}</p>
				<h3 className="card__title">{title}</h3>
				<p className="card__text">{text.substring(0, 66)} ...</p>

				<div className="card__icon">
					<img src={icon} alt="" />
				</div>
			</div>
			{index === 1 && <img src="/images/how/mid-bg.png" alt="" className="card__mid-bg" />}
			{index === 1 && <div className="card__mid-line card__mid-line--one"></div>}
			{index === 1 && <div className="card__mid-line card__mid-line--two"></div>}
		</div>
	)
}
export default HowItsWorkCard
