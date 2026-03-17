import './request-callback.scss'
import { useNavigate } from 'react-router'
import BoxHeadline from './BoxHeadline'
import ButtonCta from './ButtonCta'

const RequestCallback = () => {
	const navigate = useNavigate()

	return (
		<div className="callback side-box">
			<BoxHeadline title="Request a Call Back" />
			<p className="callback__text">
				In today’s fast-paced business environment, having clear strategy more important than ever. Business
				consultants.
			</p>
			<a href="tel:+00123456789" className="callback__phone">
				+ 00 (123) 456 - 789
			</a>

			<ButtonCta label="Contact Us" onClick={() => navigate('/contact')} />
		</div>
	)
}
export default RequestCallback
