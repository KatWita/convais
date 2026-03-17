import './footer-socials.scss'
import { FaFacebook, FaPinterestP } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GrInstagram } from 'react-icons/gr'

const FooterSocials = () => {
	const socialIconStyle = { color: '#fff', fontSize: '1em' }

	return (
		<div className="footer__socials">
			<a href="https://www.facebook.com/" target="_blank" className="footer__social-icon">
				<FaFacebook style={socialIconStyle} />
			</a>
			<a href="https://www.x.com/" target="_blank" className="footer__social-icon">
				<FaXTwitter style={socialIconStyle} />
			</a>
			<a href="https://www.pinterest.com/" target="_blank" className="footer__social-icon">
				<FaPinterestP style={socialIconStyle} />
			</a>
			<a href="https://www.instagram.com/" target="_blank" className="footer__social-icon">
				<GrInstagram style={socialIconStyle} />
			</a>
		</div>
	)
}
export default FooterSocials
