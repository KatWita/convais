import './nav.scss'
import { Link, NavLink, useLocation } from 'react-router'
import { navLinks } from '../data/navLinks'
import { IoIosArrowDown, IoIosArrowBack } from 'react-icons/io'
import { useContext, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { type NavLink as NavLinkType, type Link as LinkType } from '../utils/types'
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { ScrollContext } from '../contexts/ScrollContext'

const Nav = () => {
	const nav = useRef<HTMLElement>(null)
	const location = useLocation()
	const isAuthPage = location.pathname === '/login' || location.pathname === '/signup'
	const { isSignedIn, user } = useUser()
	const scroll = useContext(ScrollContext)
	const [showScrollNav, setShowScrollNav] = useState(scroll)
	const [openDropdown, setOpenDropdown] = useState<string | null>(null)

	useEffect(() => {
		document.body.classList.add('nav-transitioning')
		setTimeout(() => document.body.classList.remove('nav-transitioning'), 400)

		let timeout: ReturnType<typeof setTimeout>

		if (scroll) {
			setShowScrollNav(true)
		} else {
			timeout = setTimeout(() => setShowScrollNav(false), 50)
		}

		return () => clearTimeout(timeout)
	}, [scroll])

	useEffect(() => {
		if (scroll) {
			document.body.classList.add('scroll-nav-active')
		} else {
			document.body.classList.remove('scroll-nav-active')
		}
	}, [scroll])

	useEffect(() => {
		if (user && !user.hasImage) {
			fetch('/images/blog/default-user-avatar.jpg')
				.then(res => res.blob())
				.then(blob => {
					const file = new File([blob], 'avatar.png', { type: 'image/png' })
					user.setProfileImage({ file })
				})
		}
	}, [user])

	const isParentActive = (link: NavLinkType) => {
		if (location.pathname.startsWith(link.href)) return true
		if (link.dropdown?.some((sub: LinkType) => location.pathname.startsWith(sub.href))) return true
		if (link.dropdown?.some((sub: LinkType) => location.pathname.startsWith(sub.href + '/'))) return true
		return false
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

	const handleDropdownKeyDown = (e: React.KeyboardEvent, label: string) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			setOpenDropdown(prev => (prev === label ? null : label))
		}
		if (e.key === 'Escape') {
			setOpenDropdown(null)
		}
	}

	const handleDropdownBlur = (e: React.FocusEvent) => {
		if (!e.currentTarget.contains(e.relatedTarget)) {
			setOpenDropdown(null)
		}
	}

	const renderNav = () => (
		<div className="container container--wide">
			<Link to="/" onClick={handleLogoClick}>
				<img src="/images/logo-nav.svg" alt="Convais Logo" className="nav-desktop__logo" />
			</Link>

			<ul className="nav-desktop__links">
				{navLinks.map(link => (
					<li
						key={link.label}
						className={`${link.hasDropdown ? 'nav-desktop__links-item nav-desktop__links-item--dropdown' : 'nav-desktop__links-item'} ${isParentActive(link) ? 'active' : ''} ${openDropdown === link.label ? 'dropdown-open' : ''}`}
						onBlur={link.hasDropdown ? handleDropdownBlur : undefined}
					>
						{link.hasDropdown ? (
							<a
								className="nav-desktop__link dropdown"
								tabIndex={0}
								role="button"
								aria-expanded={openDropdown === link.label}
								aria-haspopup="true"
								onKeyDown={e => handleDropdownKeyDown(e, link.label)}
								onClick={() => setOpenDropdown(prev => (prev === link.label ? null : link.label))}
							>
								{link.label}
								<IoIosArrowDown size={15} />
							</a>
						) : (
							<NavLink
								to={link.href}
								className={({ isActive }) => (isActive ? 'nav-desktop__link active' : 'nav-desktop__link')}
							>
								{link.label}
							</NavLink>
						)}

						{link.hasDropdown && (
							<ul className="nav-desktop__submenu" role="menu">
								{link.dropdown?.map(subLink => (
									<li key={subLink.label} role="none">
										<NavLink
											to={subLink.href}
											role="menuitem"
											tabIndex={openDropdown === link.label ? 0 : -1}
											className={({ isActive }) => (isActive ? 'active' : '')}
											onClick={() => setOpenDropdown(null)}
										>
											<span>{subLink.label}</span>
											<IoIosArrowBack />
										</NavLink>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>

			<div>
				{isSignedIn ? (
					<div className="user-logged">
						<div className="user-logged-placeholder" />
						<UserButton key={showScrollNav ? 'scroll-nav' : 'top-nav'} />
					</div>
				) : !isAuthPage ? (
					<SignInButton mode="modal">
						<button className="btn-search">Login / Sign up</button>
					</SignInButton>
				) : (
					<div className="btn-placeholder" /> // szerokość przycisku login/signup
				)}
			</div>
		</div>
	)

	return (
		<>
			<nav className="nav-desktop" ref={nav} style={{ visibility: scroll ? 'hidden' : 'visible' }}>
				{renderNav()}
			</nav>

			<AnimatePresence>
				{showScrollNav && (
					<motion.nav
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						exit={{ y: -100 }}
						transition={{ duration: 0.3 }}
						className="nav-desktop on-scroll"
					>
						{renderNav()}
					</motion.nav>
				)}
			</AnimatePresence>
		</>
	)
}

export default Nav
