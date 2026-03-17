import './all-services.scss'
import { allServices } from '../data/services'
import { Link } from 'react-router'
import { formatNumberWithZero } from '../utils/helpers'

const AllServicesPage = () => {
	return (
		<section className="all-services section container container--narrow">
			<div className="all-services__services">
				{allServices.map(({ id, title, slug }) => (
					<Link to={`/services/${slug}`} className="all-services__btn router-link">
						<span className="all-services__num">{formatNumberWithZero(id)}</span>
						{title}
					</Link>
				))}
			</div>
		</section>
	)
}
export default AllServicesPage
