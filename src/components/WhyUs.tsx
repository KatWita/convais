import ButtonRead from './ButtonRead'
import './why-us.scss'
import { whyChoose } from '../data/whyChooseUs'
import { useNavigate } from 'react-router'

const WhyUs = () => {
	const navigate = useNavigate()

	return (
		<div className="why-us">
			{whyChoose.map(({ id, icon, title, link }) => (
				<div className="why-us__card" key={id}>
					<img src="/images/team/why-choose-card.png" alt="" className="why-us__img" />
					<div className="why-us__bg" />
					<div className="why-us__content">
						<div className="why-us__headline">
							<img src={icon.light} alt="" className="why-us__icon" />
							<p className="why-us__title bold">{title}</p>
						</div>

						<ButtonRead label="read more" option="grey" noUnderline onClick={() => navigate(link)} />
					</div>
				</div>
			))}
		</div>
	)
}
export default WhyUs
