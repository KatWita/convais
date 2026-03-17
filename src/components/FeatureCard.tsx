import './feature-card.scss'

import type { Feature } from '../data/features'
import ButtonCta from './ButtonCta'
import { useNavigate } from 'react-router'

const FeatureCardImg = ({ title, text, link, icons: { dark } }: Feature) => {
	const navigate = useNavigate()

	return (
		<div className="card">
			<div className="card__bg">
				<img src="/images/features/box-bg.png" alt="" className="card__bg--main" />
				<img src="/images/features/box-top-bg-small.png" alt="" className="card__bg--top" />
			</div>

			<div className="card__content">
				<h3 className="card__title">{title}</h3>

				<ButtonCta label="Read more" option="grey" onClick={() => navigate(link)} />

				<div className="card__text">{text.substring(0, 110)} ...</div>

				<img src={dark} alt="" className="card__icon" />
			</div>
		</div>
	)
}
export default FeatureCardImg
