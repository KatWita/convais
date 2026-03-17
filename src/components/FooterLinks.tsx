import './footer-links.scss'
import type { Link } from '../utils/types'
import FooterHeadline from './FooterHeadline'
import { Link as RouterLink, useLocation } from 'react-router'

type FooterLinkProps = {
	label: string
	links: Link[]
}

const FooterLinks = ({ label, links }: FooterLinkProps) => {
	const { pathname } = useLocation()

	return (
		<nav>
			<FooterHeadline label={label} />
			<ul className="footer__links">
				{links.map(link => {
					const isActive = link.href === pathname

					return (
						<li key={link.label}>
							{isActive ? (
								<a
									href="#"
									className="footer__link"
									onClick={e => {
										e.preventDefault()
										window.scrollTo({ top: 0, behavior: 'smooth' })
									}}
								>
									<span>&gt;&gt;</span>
									{link.label}
								</a>
							) : (
								<RouterLink to={link.href} className="footer__link">
									<span>&gt;&gt;</span>
									{link.label}
								</RouterLink>
							)}
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
export default FooterLinks
