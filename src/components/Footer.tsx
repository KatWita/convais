import './footer.scss'
import { useState } from 'react'
import FooterLinks from './FooterLinks'
import { footerOffices, footerResourcesLinks, footerServicesLinks } from '../data/footer'
import FooterHeadline from './FooterHeadline'
import FooterSocials from './FooterSocials'
import FooterGallery from './FooterGallery'
import { emailRegex } from '../utils/regex'
import { MdError } from 'react-icons/md'

type FooterProps = {
	option: 'bg' | 'no-bg'
}

const Footer = ({ option }: FooterProps) => {
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!email) {
			setError('Email is required')
			return
		}

		if (!emailRegex.test(email)) {
			setError('Please enter a valid email address')
			return
		}

		setError('')
		console.log(`${email} has been sent to db.`)
	}

	return (
		<footer className={option === 'bg' ? 'footer-box' : 'footer-box footer-box--white'}>
			<div className={option === 'bg' ? 'footer' : 'footer footer--no-bg'}>
				<div className="container container--narrow">
					<div className="footer__left">
						<div>
							<img src="/images/footer/logo-footer.svg" alt="Convais logo" className="footer__logo" />
							<p className="footer__text">
								Refresh your skills, our team of experienced instructors will guide you every step the way. Our
								comprehensive ...
							</p>
						</div>
						<div className="footer__newsletter-box">
							<div className="footer__newsletter">
								<h3 className="footer__headline footer__headline--newsletter">Newsletter</h3>
								<form
									className={error ? 'footer__input-box error' : 'footer__input-box'}
									onSubmit={handleSubmit}
									onBlur={e => {
										if (!e.currentTarget.contains(e.relatedTarget)) {
											setError('')
										}
									}}
								>
									<input
										type="text"
										placeholder="email address"
										className="footer__input"
										value={email}
										onChange={e => {
											setEmail(e.target.value)
											if (error) setError('')
										}}
									/>
									<button type="submit" className="footer__input-icon">
										<img src="/images/email-arrow.svg" alt="send email icon" />
									</button>
									<p className={`footer__error ${error ? 'footer__error--visible' : ''}`}>
										<MdError fill="hsl(0, 81%, 61%)" /> {error}
									</p>
								</form>
							</div>
							<FooterSocials />
						</div>
					</div>
					<div className="footer__right">
						<div className="footer__link-box">
							<FooterLinks label="Our Services" links={footerServicesLinks} />
							<FooterLinks label="Resources" links={footerResourcesLinks} />
							<div className="footer__offices">
								<FooterHeadline label="Our Offices" />
								{footerOffices.map(office => (
									<div className="footer__office" key={office.name}>
										<p className="footer__office-name">{office.name}</p>
										<p className="footer__office-place">{office.place}</p>
									</div>
								))}
							</div>
						</div>
						<FooterGallery />
					</div>
				</div>
				<div className="blur-bg blur-bg--one"></div>
				<div className="blur-bg blur-bg--two"></div>
				<div className="footer__copy">
					<p>&copy; {new Date().getFullYear()} Convais of business consulting. All Right Reserved.</p>
				</div>
			</div>
		</footer>
	)
}
export default Footer
