import './services-card.scss'
import type { Service } from '../data/services'
import { useNavigate } from 'react-router'
import ButtonRead from './ButtonRead'

const ServicesCard = ({ id, image, icon, title, text, slug }: Service) => {
	const navigate = useNavigate()

	return (
		<div className="card">
			<div className="card__top">
				<img src={image} alt="" className="card__img" />
				<div className="card__icon">
					<img src={icon} alt="" className="card__icon-img" />
				</div>
			</div>
			<div className="card__bottom">
				<img src="/images/services/services-box.png" alt="" className="card__box" />
				<img src="/images/services/services-box-border.png" alt="" className="card__box card__box--border" />
				<div className="card__content">
					<h2 className="card__title">{title}</h2>
					<div className="card__text">{text.substring(0, 81)} ...</div>

					<ButtonRead label="get enrolled" onClick={() => navigate(`services/${slug}`)} />

					<div className="card__num-bg">0{id}</div>
				</div>
			</div>
		</div>
	)
}
export default ServicesCard
