import './privacy-policy.scss'
import { privacyPolicy } from '../data/privacyPolicy'

const PrivacyPolicy = () => {
	return (
		<section className="privacy section container container--narrow">
			<div className="privacy__card">
				<header className="privacy__header">
					<p className="privacy__company">Convais</p>
					<p className="privacy__date">Effective: February 31, 2026</p>
				</header>

				<div className="privacy__body">
					<p className="privacy__text">
						Welcome to <strong>Convais</strong>. We value your privacy almost as much as we value high-level synergy.
					</p>

					{privacyPolicy.map((section, index) => (
						<article key={index} className="privacy__section">
							<h2>{section.title}</h2>
							<ul className="list">
								{section.content.map((item, i) => (
									<li key={i} className="list__elem">
										{item}
									</li>
								))}
							</ul>
						</article>
					))}

					<div className="privacy__contact">
						<h3>Contact Us</h3>
						<p>
							Email: <a href="mailto:privacy@convais.net">privacy@convais.net</a>
						</p>
					</div>
				</div>

				<footer className="privacy__footer">© {new Date().getFullYear()} Convais.</footer>
			</div>
		</section>
	)
}
export default PrivacyPolicy
