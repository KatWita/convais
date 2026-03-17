import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import './expertise-slider-absolute.scss'
import { latestProject } from '../data/projects'
import { useEffect, useRef, useState } from 'react'
import ButtonArrow from './ButtonArrow'
import { useNavigate } from 'react-router'

const ExpertiseSliderAbsolute = () => {
	const [active, setActive] = useState(0)
	const [ready, setReady] = useState(false)
	const leftRef = useRef<HTMLDivElement>(null)
	const centerRef = useRef<HTMLDivElement>(null)
	const rightRef = useRef<HTMLDivElement>(null)
	const navigate = useNavigate()

	const total = latestProject.length

	// PRELOAD WSZYSTKICH OBRAZKÓW zanim są w ODM
	useEffect(() => {
		let loaded = 0

		latestProject.forEach(p => {
			const img = new Image()
			img.src = p.images.webp
			img.onload = () => {
				loaded++
				if (loaded === latestProject.length) {
					setReady(true)
				}
			}
		})
	}, [])

	const resetAnimation = (el: Element | null | undefined) => {
		if (!el) return
		const node = el as HTMLElement
		node.classList.remove('anim')
		void node.offsetWidth
		node.classList.add('anim')
	}

	useEffect(() => {
		resetAnimation(leftRef.current?.querySelector('.expertise__slide-inner'))
		resetAnimation(centerRef.current?.querySelector('.expertise__slide-inner'))
		resetAnimation(rightRef.current?.querySelector('.expertise__slide-inner'))
	}, [active])

	if (!ready)
		return (
			<div className="expertise">
				<div className="expertise__viewport" />
				<div className="expertise__dots" />
			</div>
		) // slider pojawia się dopiero gdy obrazy się załadowały

	const getLeft = (i: number) => latestProject[(i - 1 + total) % total]
	const getCenter = (i: number) => latestProject[i]
	const getRight = (i: number) => latestProject[(i + 1) % total]

	return (
		<div className="expertise">
			<div className="expertise__viewport">
				<Swiper
					modules={[Autoplay, Pagination]}
					slidesPerView={1}
					loop={true}
					allowTouchMove={true}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
					pagination={{ clickable: true, el: '.expertise__dots' }}
					onRealIndexChange={swiper => setActive(swiper.realIndex)}
					className="expertise__swiper"
				>
					{latestProject.map((_, i) => (
						<SwiperSlide key={i}></SwiperSlide>
					))}
				</Swiper>

				<div className="expertise__layout">
					<div ref={leftRef} className="expertise__slide expertise__slide--left">
						<div className="expertise__slide-inner">
							<img src={getLeft(active).images.webp} alt="" loading="eager" className="slide__img" />
						</div>
					</div>

					<div ref={centerRef} className="expertise__slide expertise__slide--center">
						<div className="expertise__slide-inner">
							<img src={getCenter(active).images.webp} alt="" loading="eager" className="slide__img" />
						</div>
						<div className="strategy">
							<p className="strategy__tag">Strategy</p>
							<p className="strategy__text">Prime Strategy Creative Solutions Group</p>

							<ButtonArrow onClick={() => navigate('/projects/prime-strategy-creative-solutions-group')} />
						</div>
					</div>

					<div ref={rightRef} className="expertise__slide expertise__slide--right">
						<div className="expertise__slide-inner">
							<img src={getRight(active).images.webp} alt="" loading="eager" className="slide__img" />
						</div>
					</div>
				</div>

				<div className="expertise__preload">
					{latestProject.map((p, i) => (
						<img key={i} src={p.images.webp} alt="" />
					))}
				</div>
			</div>

			<div className="expertise__dots"></div>
		</div>
	)
}

export default ExpertiseSliderAbsolute
