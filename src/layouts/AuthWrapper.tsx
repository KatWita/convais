import '../scss/clerk.scss'
import { Outlet, ScrollRestoration, useLocation, useNavigate, useNavigationType } from 'react-router'
import { ClerkProvider } from '@clerk/clerk-react'
import { useEffect, useRef, useState } from 'react'
import { clerkTheme } from '../utils/clerkTheme'
import { ScrollContext } from '../contexts/ScrollContext'

const AuthWrapper = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const navType = useNavigationType()
	const [scroll, setScroll] = useState(false)
	const checkScroll = () => setScroll(window.scrollY > 500)

	const pathname = location.pathname

	const prevPathRef = useRef<string>(location.pathname)

	useEffect(() => {
		window.addEventListener('scroll', checkScroll)
		return () => window.removeEventListener('scroll', checkScroll)
	}, [])

	useEffect(() => {
		const observer = new MutationObserver(() => {
			if (document.body.style.paddingRight) {
				document.body.style.paddingRight = ''
			}
		})

		observer.observe(document.body, { attributes: true, attributeFilter: ['style'] })

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		const currentPath = pathname
		const prevPath = prevPathRef.current

		if (currentPath === prevPath) {
			prevPathRef.current = currentPath
			return
		}

		// Scrolluj do góry tylko jeśli faktycznie zmienił się URL strony (pathname)
		// i nie jest to nawigacja wstecz (POP) ani przejście między postami.
		if (currentPath !== prevPath && navType !== 'POP' && navType !== 'REPLACE') {
			const isBlogPrevNext = prevPath?.startsWith('/blog/') && currentPath.startsWith('/blog/')
			const isProjectPrevNext = prevPath?.startsWith('/projects/') && currentPath.startsWith('/projects/')

			if (!isBlogPrevNext && !isProjectPrevNext) {
				window.scrollTo(0, 0)
				checkScroll()
			}
		}

		prevPathRef.current = currentPath

		const t1 = setTimeout(checkScroll, 50)
		const t2 = setTimeout(checkScroll, 150)
		const t3 = setTimeout(checkScroll, 400)

		return () => {
			clearTimeout(t1)
			clearTimeout(t2)
			clearTimeout(t3)
		}
	}, [pathname, navType])

	return (
		<ScrollContext.Provider value={scroll}>
			<ClerkProvider
				publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
				routerPush={to => navigate(to)}
				routerReplace={to => navigate(to, { replace: true })}
				appearance={{
					variables: clerkTheme,
				}}
			>
				<ScrollRestoration
					getKey={location => {
						const path = location.pathname

						if (path.startsWith('/blog/')) return 'blog-details'
						if (path.startsWith('/projects/')) return 'project-details'
						// dla działania paginacji location.key zapamiętuje pozycje dla każdego osobnego wejścia
						if (path === '/blog') return location.key

						// Ignoruj searchParams - klucz oparty tylko o pathname - path to ten sam klucz dla każdej wizyty na tym samym roucie
						return path
					}}
				/>

				<Outlet />
			</ClerkProvider>
		</ScrollContext.Provider>
	)
}

export default AuthWrapper
