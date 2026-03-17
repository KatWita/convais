import Slider, { type Settings } from 'react-slick'
import { testimonials } from '../data/clientsFeedback'
import TestimonialCard from './TestimonialCard'
import { NextArrow, PrevArrow } from './TestimonialsArrows'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './testimonials.scss'

type TestimonialsProps = {
	mode: 'dark' | 'light'
	rows?: 1 | 2
}

const Testimonials = ({ mode, rows = 1 }: TestimonialsProps) => {
	const SliderTyped = Slider as unknown as React.ComponentClass<Settings>

	let slidesToScroll: number

	if (rows === 1) {
		slidesToScroll = 3
	} else {
		slidesToScroll = 1
	}

	const settings = {
		customPaging: function () {
			return <button className="slider__dot"></button>
		},
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: slidesToScroll,
		rows: rows,
		initialSlide: 0,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 5000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<div className={`slider-container slider-container--${mode}`}>
			<SliderTyped {...settings}>
				{testimonials.map(testimonial => (
					<TestimonialCard {...testimonial} key={testimonial.id} mode={mode} />
				))}
			</SliderTyped>
		</div>
	)
}

export default Testimonials
