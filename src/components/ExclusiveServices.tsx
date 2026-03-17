import './exclusive-services.scss'
import { exclusiveServices } from '../data/services'
import ButtonCta from './ButtonCta'
import SectionHeadline from './SectionHeadline'
import ButtonArrow from './ButtonArrow'
import { useNavigate } from 'react-router'

type ExclusiveServices = {
	mode: 'dark' | 'light'
}

const ExclusiveServices = ({ mode }: ExclusiveServices) => {
	const navigate = useNavigate()

	return (
		<section
			className={
				mode === 'dark' ? 'exclusive-services section-top' : 'exclusive-services exclusive-services--light section-top'
			}
		>
			<div className="container container--narrow">
				<SectionHeadline label="our services" title="Get Our Exclusive Services" />

				{exclusiveServices.map(({ id, icon: { dark, light }, title, slug, text }) => (
					<div className="exclusive-services__box" key={id}>
						{mode === 'dark' && (
							<img
								src="/images/exclusive-services/exclusive-services-box-dark.png"
								alt=""
								className="exclusive-services__img"
							/>
						)}
						{mode === 'light' && id === '3' && (
							<img
								src="/images/exclusive-services/exclusive-services-box-middle-light.png"
								alt=""
								className="exclusive-services__img"
							/>
						)}
						{mode === 'light' && id !== '3' && (
							<img
								src="/images/exclusive-services/exclusive-services-box-light.png"
								alt=""
								className="exclusive-services__img"
							/>
						)}

						<div
							className={
								id === '3'
									? 'exclusive-services__icon-box exclusive-services__icon-box--middle'
									: 'exclusive-services__icon-box'
							}
						>
							<img src={mode === 'dark' ? dark : light} alt={`${title} icon`} className="exclusive-services__icon" />
						</div>
						<div className="exclusive-services__content">
							<h3 className="exclusive-services__title">{title}</h3>
							<p className="exclusive-services__text">{text.substring(0, 66)} ...</p>
							{mode === 'dark' && <ButtonCta label="get enrolled" option="grey-light" onClick={() => navigate(slug)} />}
							{mode === 'light' && id === '3' && (
								<ButtonCta label="get enrolled" option="white" onClick={() => navigate(slug)} />
							)}
							{mode === 'light' && id !== '3' && (
								<ButtonCta label="get enrolled" option="light" onClick={() => navigate(slug)} />
							)}
						</div>
						<span className="exclusive-services__num">0{id}</span>
					</div>
				))}
				<div className="exclusive-services__box exclusive-services__box--view-more">
					{mode === 'dark' && (
						<img
							src="/images/exclusive-services/exclusive-services-box-more-dark.png"
							alt=""
							className="exclusive-services__img"
						/>
					)}
					{mode === 'light' && (
						<img
							src="/images/exclusive-services/exclusive-services-box-more-light.png"
							alt=""
							className="exclusive-services__img"
						/>
					)}

					<ButtonArrow option={mode === 'dark' ? 'yellow' : 'dark-blue-skew'} onClick={() => navigate('all')} />

					<h3 className="exclusive-services__view-title">view more services</h3>
				</div>
			</div>
		</section>
	)
}
export default ExclusiveServices
