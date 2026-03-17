import './service-details-page.scss'
import { useParams, useSearchParams } from 'react-router'
import { allServices } from '../data/services'
import ServicesAccordion from '../components/ServicesAccordion'
import ExclusiveServicesBox from '../components/ExclusiveServicesBox'
import { AnimatePresence } from 'motion/react'
import FilmModal from '../components/FilmModal'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import playIcon from '../assets/icons/play-w-icon.svg'
import tickIcon from '../assets/icons/service-tick.svg'

const ServiceDetails = () => {
	const { service } = useParams()
	const serviceDetails = allServices.find(p => p.slug === service)
	const [searchParams, setSearchParams] = useSearchParams()

	const isVideoOpen = searchParams.get('video') === 'vid'
	useLockBodyScroll(isVideoOpen)

	const toggleVideo = (show: boolean) => {
		setSearchParams(
			prev => {
				if (show) prev.set('video', 'vid')
				else prev.delete('video')
				return prev
			},
			{ replace: true },
		)
	}

	if (!serviceDetails) {
		return (
			<section className="service-details section container container--narrow">
				<h2 className="page-not-found">Sorry! There's no such service.</h2>
			</section>
		)
	}

	return (
		<>
			<div className="service-d-page section container container--narrow">
				<div className="service-d-page__right">
					<ExclusiveServicesBox />
				</div>

				<div className="service-d-page__left">
					<div className="service-d-page__header">
						<h4 className="blog-d-page__h4">{serviceDetails.title}</h4>
						<p className="service-d-page__text service-d-page__text--desc">{serviceDetails.desc}</p>
					</div>

					<div className="service-d-page__mistakes">
						<img src={serviceDetails.mistakeImg} alt={serviceDetails.title} className="service-d-page__mist-img" />

						<ul className="list">
							<h4 className="blog-d-page__h4 service-d-page__h4 service-d-page__h4--mistakes">Mistakes to avoid</h4>
							{serviceDetails.mistakes.map((el, i) => (
								<li className="list__elem" key={i}>
									{el}
								</li>
							))}
						</ul>
					</div>

					<div className="service-d-page__documents">
						<h4 className="blog-d-page__h4">Documents Required</h4>

						<div className="service-d-page__docs">
							{serviceDetails.documents.map(({ title, desc }, i) => (
								<div className="service-d-page__doc" key={i}>
									<img src={tickIcon} alt="tick icon" />

									<div className="service-d-page__content">
										<p className="service-d-page__doc-title bold">{title}</p>
										<p className="service-d-page__text">{desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="service-d-page__features">
						<h4 className="blog-d-page__h4">Key Features</h4>

						<ul className="list">
							{serviceDetails.features.map((el, i) => (
								<li className="list__elem" key={i}>
									{el}
								</li>
							))}
						</ul>

						<div className="blog-d-page__video">
							<img src={serviceDetails.featuresImg || ''} alt="video img" className="blog-d-page__img-vid" />
							<button onClick={() => toggleVideo(true)} className="blog-d-page__btn-play">
								<img src={playIcon} alt="play video icon" className="blog-d-page__btn-play-img" />
							</button>
						</div>

						<p className="service-d-page__text service-d-page__text--feature">{serviceDetails.featuresDesc}</p>
					</div>

					<ServicesAccordion />
				</div>
			</div>

			<AnimatePresence>
				{isVideoOpen && (
					<FilmModal onClose={() => toggleVideo(false)}>
						<iframe src={serviceDetails.featuresVideo} title={serviceDetails.title} frameBorder="0" allowFullScreen />
					</FilmModal>
				)}
			</AnimatePresence>
		</>
	)
}
export default ServiceDetails
