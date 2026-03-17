import './header.scss'

import ButtonCta from '../../ButtonCta'
import { useNavigate } from 'react-router'

const Header = () => {
	const navigate = useNavigate()

	return (
		<header className="header">
			<div className="container container--header">
				<div className="header__content">
					<p className="header__tag">
						<span className="header__tag-line"></span>
						Welcome to our convais
					</p>
					<h1 className="header__headline">Smart Strategies. Real Success.</h1>
					<ButtonCta label="Get Enrolled" onClick={() => navigate('/services/all')} />
				</div>
				<img
					height={600}
					width={400}
					src="/images/header/header-1-one.jpg"
					alt=""
					className="header__img header__img--one"
				/>

				<img
					height={810}
					width={550}
					src="/images/header/header-1-two.jpg"
					alt=""
					className="header__img header__img--two"
				/>
			</div>
		</header>
	)
}
export default Header
