import { useNavigate } from 'react-router'
import { features } from '../../data/features'
import ButtonCta from '../ButtonCta'
import SectionHeadline from '../SectionHeadline'
import './about-features.scss'

const AboutFeatures = () => {
	const navigate = useNavigate()

	return (
		<div className="about-features">
			<SectionHeadline label="our features" title="Our Core Consulting Features" />

			<div className="about-features__cards">
				{features.map(({ id, title, text, icons: { light }, link }) => (
					<div className="card" key={id}>
						{id == 1 && (
							<img src="/images/about/page/features/strategic-insight-about-bg.png" alt="" className="card__img" />
						)}
						{id == 2 && (
							<img src="/images/about/page/features/operational-efficiency-about-bg.jpg" alt="" className="card__img" />
						)}
						{id == 3 && (
							<img src="/images/about/page/features/business-solution-about-bg.png" alt="" className="card__img" />
						)}
						<div className="card__content">
							<div className="card__headline" key={id}>
								<img src={light} alt="" className="card__icon" />
								<h3 className="card__title">{title}</h3>
							</div>
							{id === 3 && <div className="card__text">{text.substring(0, 115)} ...</div>}
							{id === 3 && <ButtonCta label="Read more" onClick={() => navigate(link)} />}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default AboutFeatures
