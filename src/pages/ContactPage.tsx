import './contact-page.scss'
import SectionHeadline from '../components/SectionHeadline'
import { contactInfo } from '../data/contact'
import ContactMap from '../components/ContactMap'
import ContactForm from '../components/ContactForm'

const Contact = () => {
	return (
		<section className="contact-page section container container--narrow">
			<div className="contact-page__top-box">
				<SectionHeadline label="get in touch" title="Contact Our Consulting Team" />
				<p className="contact-page__text">
					Whether you're a first-time driver or looking to refresh your skills, our team of experienced instructors will
					guide you every step of the way.
				</p>
			</div>
			<div className="contact-page__contact-box">
				{contactInfo.map(({ id, icon, info, label }) => (
					<div className="contact-page__contact-info" key={id}>
						<div className="contact-page__contact-icon-box">
							<img src={icon} alt={`${label} icon`} />
						</div>
						<div className="contact-page__contact-content">
							<p className="contact-page__contact-label">{label}</p>
							<p className="contact-page__contact-way">{info}</p>
						</div>
					</div>
				))}
			</div>
			<div className="contact-page__bottom-box">
				<ContactMap />
				<ContactForm />
			</div>
		</section>
	)
}
export default Contact
