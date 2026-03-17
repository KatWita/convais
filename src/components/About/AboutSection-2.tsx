import './about-section-2.scss'
import ButtonCta from '../ButtonCta'
import SectionHeadline from '../SectionHeadline'
import { aboutChecks } from '../../data/about'
import { useNavigate } from 'react-router'

const AboutSection = () => {
	const navigate = useNavigate()

	const firstCheckList = aboutChecks.slice(0, 3)
	const secondCheckList = aboutChecks.slice(3)

	return (
		<section className="about-us">
			<div className="container container--narrow">
				<div className="about-us__left">
					<SectionHeadline label="About Us" title="Trusted Advisors for Your Business Journey" />
					<p className="about-us__text">
						Our mission is to empower businesses by transforming challenges into opportunities. With a data-driven
						approach and years of industry experience, we help companies streamline ...
					</p>
					<div className="about-us__saas">
						<img
							src="/images/about/page/about-sass.jpg"
							alt="pioneering scalable sass since 1997"
							className="about-us__saas-img"
						/>
						<p className="about-us__saas-text">Pioneering Scalable SaaS Service Since 1997</p>
					</div>
					<div className="about-us__lists">
						<ul className="about__checks">
							{firstCheckList.map((elem, i) => (
								<li className="about__check" key={i}>
									<img src="/images/black-check-icon.svg" alt="" />
									<p>{elem}</p>
								</li>
							))}
						</ul>
						<ul className="about__checks">
							{secondCheckList.map((elem, i) => (
								<li className="about__check" key={i}>
									<img src="/images/black-check-icon.svg" alt="" />
									<p>{elem}</p>
								</li>
							))}
						</ul>
					</div>

					<ButtonCta label="get enrolled" onClick={() => navigate('/contact')} />
				</div>
				<img src="/images/about/page/about-us-right-img.png" alt="" className="about-us__right" />
			</div>
		</section>
	)
}
export default AboutSection
