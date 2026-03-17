import ExclusiveServices from '../components/ExclusiveServices'
import OurExpertiseWithSlider from '../components/OurExpertiseWithSlider'
import PricingSection from '../components/PricingSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'

const Services = () => {
	return (
		<>
			<ExclusiveServices mode="light" />
			<OurExpertiseWithSlider />
			<PricingSection />
			<WhyChooseUsSection option="light" className="section-bottom" />
		</>
	)
}
export default Services
