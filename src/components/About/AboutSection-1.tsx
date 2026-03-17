import './about-section-1.scss'
import SectionHeadline from '../SectionHeadline'
import ButtonCta from '../ButtonCta'
import { useNavigate } from 'react-router'
import { aboutChecks } from '../../data/about'

const AboutSection = () => {
	const navigate = useNavigate()

	return (
		<section className="about">
			<div className="container container--narrow">
				<div className="about__content">
					<SectionHeadline label="About Us" title="Focused on Results, Built on Trust & Experience" />
					<p className="about__text">
						Our mission is to empower businesses by transforming challenges into opportunities. With a data-driven
						approach and years of industry experience, we help companies streamline ...
					</p>
					<div className="about__stats">
						<div className="about__stat">
							<div className="about__stat-img">
								<img src="/images/about/award-box.png" alt="" />
								<img className="about__stat-icon" src="/images/about/award-icon.svg" alt="" />
							</div>
							<p className="about__stat-label">Award Winning Time</p>
						</div>
						<div className="about__stat">
							<div className="about__stat-img">
								<img src="/images/about/award-box.png" alt="" />
								<img className="about__stat-icon" src="/images/about/success-rates-icon.svg" alt="" />
							</div>
							<p className="about__stat-label">Highest Success Rates</p>
						</div>
					</div>
					<div className="about__sign-box">
						<div className="about__ceo">
							<img className="about__ceo-sign" src="/images/about/signature.png" alt="ceo's signature" />
							<p className="about__ceo-job">CEO Co-Founder</p>
						</div>
						<ul className="about__checks">
							{aboutChecks.slice(3).map((elem, i) => (
								<li className="about__check" key={elem[i]}>
									<img src="/images/check-icon.svg" alt="" />
									<p>{elem}</p>
								</li>
							))}
						</ul>
					</div>

					<ButtonCta label="Get Enrolled" option="yellow" onClick={() => navigate('/contact')} />
				</div>
				<div className="about__img-box">
					<img src="/images/about/right-image.jpg" alt="" className="about__img" />
					<img src="/images/about/right-img-border.png" alt="" className="about__img-border" />
					<div className="about__seal">
						<img src="/images/about/spinning-text.png" alt="" className="about__seal-text" />
						<div className="about__seal-logo-box">
							<img src="/images/about/logo.svg" alt="Convais logo" className="about__seal-logo" />
						</div>
					</div>
				</div>
			</div>
			<div className="blur-bg"></div>
		</section>
	)
}
export default AboutSection
