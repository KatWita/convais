import './company-logos.scss'
import { clientsLogos } from '../data/clientsFeedback'

const CompanyLogos = () => {
	return (
		<div className="logos container container--narrow">
			{clientsLogos.map((logo, i) => (
				<img src={logo} key={i} />
			))}
		</div>
	)
}
export default CompanyLogos
