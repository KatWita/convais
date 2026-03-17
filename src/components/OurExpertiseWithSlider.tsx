import './our-expertise-with-slider.scss'
import SectionHeadline from './SectionHeadline'
import ExpertiseSliderAbsolute from './ExpertiseSliderAbsolute'

const OurExpertiseWithSlider = () => {
	return (
		<section className="expertise-section section-top">
			<SectionHeadline label="our latest project" title="A Showcase Of Our Expertise" />

			<ExpertiseSliderAbsolute />
		</section>
	)
}
export default OurExpertiseWithSlider
