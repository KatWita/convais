import './exclusive-services-box.scss'
import { exclServicesBox } from '../data/services'
import BoxHeadline from './BoxHeadline'
import arrowIcon from '../assets/icons/arrow-icon.svg'
import { useNavigate } from 'react-router'

const ExclusiveServicesBox = () => {
	const navigate = useNavigate()

	return (
		<div className="exclusive-s-box side-box">
			<BoxHeadline title="Exclusive Services" />
			<div className="exclusive-s-box__services">
				{exclServicesBox.map(({ id, slug, serviceName }) => (
					<button type="button" key={id} className="exclusive-s-box__btn" onClick={() => navigate(`/services/${slug}`)}>
						<span>{serviceName}</span>
						<div className="exclusive-s-box__icon-box">
							<img src={arrowIcon} alt="arrow icon" />
						</div>
					</button>
				))}
			</div>
		</div>
	)
}
export default ExclusiveServicesBox
