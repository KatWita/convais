import './why-choose-us-section.scss'
import SectionHeadline from './SectionHeadline'

import ButtonRead from './ButtonRead'
import { whyChoose } from '../data/whyChooseUs'
import { useNavigate } from 'react-router'

type WhyChooseUsSectionProps = {
	option: 'dark' | 'light'
	className?: string
}

const WhyChooseUsSection = ({ option, className }: WhyChooseUsSectionProps) => {
	const navigate = useNavigate()

	return (
		<section className={`why-choose-us why-choose-us--${option} container container--narrow ${className}`}>
			<SectionHeadline label="why choose us" title="Excellence You Can Count On" />
			<div className="why-choose-us__boxes">
				{whyChoose.map(({ id, icon: { dark, light }, title, text, link }) => (
					<div className="why-choose-us__card" key={id}>
						{option === 'dark' && (
							<img src="/images/why-us/why-choose-us-box-dark.png" alt="" className="why-choose-us__img" />
						)}
						{option === 'light' && (
							<img src="/images/why-us/why-choose-us-box-light.png" alt="" className="why-choose-us__img" />
						)}
						<div className="why-choose-us__bg" />
						<div className="why-choose-us__content">
							<div className="why-choose-us__headline">
								<div className="why-choose-us__icon-box">
									<img src={option === 'dark' ? dark : light} alt="" className="why-choose-us__icon" />
								</div>
								<p className="why-choose-us__title bold">{title}</p>
							</div>
							<p className="why-choose-us__text">{text}</p>
							{option === 'dark' && (
								<ButtonRead label="read more" option="white" noUnderline onClick={() => navigate(link)} />
							)}
							{option === 'light' && (
								<ButtonRead label="read more" option="dark-blue" noUnderline onClick={() => navigate(link)} />
							)}
						</div>
					</div>
				))}
				<div className="why-choose-us__main-img">
					<img src="/images/why-us/why-us-main-img.jpg" alt="why choose us img" />
				</div>
			</div>
		</section>
	)
}
export default WhyChooseUsSection
