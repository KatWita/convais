import './expertise-slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import { projects } from '../data/projects'

const ExpertiseSlider = () => {
	return (
		<div className="expertise__slider">
			<Swiper
				modules={[Pagination, Autoplay]}
				loop={true}
				grabCursor={true}
				spaceBetween={24}
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				pagination={{ clickable: true, el: '.expertise__dots' }}
				watchSlidesProgress={true}
				resizeObserver={true}
				breakpoints={{
					0: {
						slidesPerView: 1,
						centeredSlides: true,
					},
					768: {
						slidesPerView: 2,
						centeredSlides: true,
					},

					1200: {
						slidesPerView: 3,
						centeredSlides: true,
					},
				}}
				className="expertise__swiper"
			>
				{projects.map(slide => (
					<SwiperSlide key={slide.id}>
						<div className="expertise__slide">
							<img src={slide.images.large} alt="" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="expertise__dots"></div>
		</div>
	)
}
export default ExpertiseSlider
