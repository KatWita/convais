import './nav-mobile.scss'
import { Link, NavLink, useLocation } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/navLinks'
import { IoIosArrowDown, IoIosArrowBack } from 'react-icons/io'
import { type NavLink as NavLinkType, type Link as LinkType } from '../utils/types'

const NavMobile = () => {
	const [scroll, setScroll] = useState(false)
	const [isNavShown, setIsNavShown] = useState(false)
	const [activeLink, setIsActiveLink] = useState<string | null>(null)
	const nav = useRef<HTMLInputElement>(null)
	const location = useLocation()

	useEffect(() => {
		if (isNavShown) {
			document.body.classList.add('hide-scroll-on-mobile')
		}
		return () => {
			document.body.classList.remove('hide-scroll-on-mobile')
		}
	}, [isNavShown])

	useEffect(() => {
		if (nav.current) {
			const navRect = nav.current.getBoundingClientRect()
			window.addEventListener('scroll', () => {
				setScroll(window.scrollY > 100 - navRect.height)
			})
		}
	}, [])

	const isParentActive = (link: NavLinkType) => {
		if (link.href === '/') return false

		if (link.href === '#') {
			return link.dropdown?.some((sub: LinkType) => location.pathname.startsWith(sub.href))
		}

		return location.pathname.startsWith(link.href)
	}

	const handleHideNav = () => {
		setIsNavShown(prev => !prev)
		setIsActiveLink(null)
	}

	const handleLogoClick = (e: React.MouseEvent) => {
		if (location.pathname === '/') {
			e.preventDefault()
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
	}

	const handleLinkClick = (link: NavLinkType) => {
		if (!link.hasDropdown) {
			setIsNavShown(false)
			setIsActiveLink(link.label)
		} else if (activeLink === link.label) {
			setIsActiveLink(null)
		} else {
			setIsActiveLink(link.label)
		}
	}

	return (
		<nav ref={nav} className={scroll ? 'nav-mobile on-scroll' : 'nav-mobile'}>
			<div className="nav-menu">
				<div className="container container--wide">
					<Link to="/" onClick={handleLogoClick}>
						<img className="nav-mobile__logo" src="/images/logo-nav.svg" alt="Convais Logo" />
					</Link>
					<button className={isNavShown ? 'hamburger active' : 'hamburger'} onClick={handleHideNav}>
						<div className="hamburger__bar"></div>
						<div className="hamburger__bar"></div>
						<div className="hamburger__bar"></div>
					</button>
				</div>
			</div>

			<div className={isNavShown ? 'nav-menu-on-show show' : 'nav-menu-on-show'}>
				<ul className="menu">
					{navLinks.map(link => {
						const parentActive = isParentActive(link)

						return (
							<li key={link.label} className={`menu__item ${activeLink === link.label ? 'show' : ''}`}>
								{/* 🔥 DROPDOWNY NIE UŻYWAJĄ NAVLINK */}
								{link.hasDropdown ? (
									<div
										className={`menu__item-link ${parentActive ? 'active' : ''}`}
										onClick={() => handleLinkClick(link)}
									>
										{link.label}
										<IoIosArrowDown size={15} />
									</div>
								) : (
									<NavLink
										to={link.href}
										className={({ isActive }) => `menu__item-link ${isActive ? 'active' : ''}`}
										onClick={() => handleLinkClick(link)}
									>
										{link.label}
									</NavLink>
								)}

								{link.hasDropdown && (
									<ul className={`menu__dropdown ${activeLink === link.label ? 'show' : ''}`}>
										{link.dropdown?.map(subLink => (
											<li key={subLink.label}>
												<NavLink
													to={subLink.href}
													className={({ isActive }) => (isActive ? 'active' : '')}
													onClick={handleHideNav}
												>
													<span>{subLink.label}</span>
													<IoIosArrowBack />
												</NavLink>
											</li>
										))}
									</ul>
								)}
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	)
}

export default NavMobile
