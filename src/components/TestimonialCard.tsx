import './testimonial-card.scss'

import type { Testimonial } from '../data/clientsFeedback'
import StarsRating from './StarsRating'
import TestimonialCardBg from './TestimonialCardBg'

type TestimonialProps = Testimonial & {
	mode?: 'dark' | 'light'
}

const TestimonialCard = ({ rate, opinion, fullName, job, avatar, mode = 'dark' }: TestimonialProps) => {
	let rateNum

	if (rate.toString().length > 1) {
		rateNum = rate
	} else {
		rateNum = `${rate}.0`
	}

	let opinionToShow

	if (opinion.length > 119) {
		opinionToShow = `${opinion.substring(0, 119)} ...`
	} else {
		opinionToShow = opinion
	}

	return (
		<div className={mode === 'light' ? `card card--light` : `card`}>
			{mode === 'dark' ? (
				<TestimonialCardBg color="#1E1E1E" className="card__box" />
			) : (
				<TestimonialCardBg color="#F5F5F5" className="card__box" />
			)}
			{mode === 'dark' ? (
				<img src="/images/clients/testimonial-box-stroke-dark.png" alt="" className="card__box card__box--stroke" />
			) : (
				<img src="/images/clients/testimonial-box-stroke-light.png" alt="" className="card__box card__box--stroke" />
			)}
			<div className="card__rating">
				<div className="card__quote">
					<img src="/images/clients/quote.svg" alt="" />
				</div>
				<div className="card__star-box">
					<StarsRating rating={rate} mode={mode} />
					<p className="card__rate-text">
						<span className="card__rate-num">{rateNum}</span> out of 5.0
					</p>
				</div>
			</div>
			<p className="card__opinion">{opinionToShow}</p>
			<div className="card__user">
				<div className="card__user-info">
					<p className="card__user-job">{job}</p>
					<p className="card__user-name">{fullName}</p>
				</div>
				<div className="card__user-img-box">
					<img src={avatar} alt="" className="card__user-img" />
				</div>
			</div>
		</div>
	)
}
export default TestimonialCard
