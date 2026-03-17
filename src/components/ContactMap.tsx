export default function ContactMap() {
	return (
		<div className="contact-page__map">
			<div className="contact-page__map-mask">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1271.9077938516893!2d-73.98273302716889!3d40.69327551903402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1769792797049!5m2!1spl!2spl"
					width="536"
					height="650"
					style={{ border: 0 }}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>

			<div className="contact-page__map-marker">
				<img src="/images/contact/map-marker.png" alt="map marker" />
			</div>
		</div>
	)
}
