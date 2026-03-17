import './about-logos.scss'
import { aboutLogos } from '../../data/about'

const AboutLogos = () => {
	return (
		<div className="about-logos">
			{aboutLogos.map(({ img, company }) => (
				<img src={img} alt={`${company} logo`} key={company} />
			))}
		</div>
	)
}
export default AboutLogos
