import './testimonials-page.scss'
import Testimonials from '../components/Testimonials'
import SectionHeadline from '../components/SectionHeadline'

const TestimonialsPage = () => {
	return (
		<section className="testimonials-page container container--narrow">
			<SectionHeadline label="clients feedback" title="What Our Clients Talking About Us" />
			<Testimonials mode="light" rows={2} />
		</section>
	)
}
export default TestimonialsPage
