import './share-on-social.scss'
import { useState, useEffect, useRef } from 'react'
import fbIcon from '../assets/icons/blogs/facebook-icon.svg'
import xIcon from '../assets/icons/blogs/x-icon.svg'
import instIcon from '../assets/icons/blogs/instagram-icon.svg'
import lnIcon from '../assets/icons/blogs/linkedin-icon.svg'

const ShareOnSocial = ({ title }: { title: string }) => {
	const [activeId, setActiveId] = useState<string | null>(null)
	const [copied, setCopied] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	const currentUrl = window.location.href
	const shareUrl = encodeURIComponent(currentUrl)
	const encodedTitle = encodeURIComponent(title)

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 1024)
		checkMobile()
		window.addEventListener('resize', checkMobile)

		// Zamykanie przy kliku poza komponentem
		const handleClickOutside = (e: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
				setActiveId(null)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			window.removeEventListener('resize', checkMobile)
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const socialIcons = [
		{ id: 'fb', icon: fbIcon, alt: 'Facebook', link: `https://www.facebook.com/${shareUrl}` },
		{
			id: 'x',
			icon: xIcon,
			alt: 'X (Twitter)',
			link: `https://twitter.com/share?url=${shareUrl}&text=${encodedTitle}`,
		},
		{ id: 'inst', icon: instIcon, alt: 'Instagram', link: null },
		{ id: 'ln', icon: lnIcon, alt: 'LinkedIn', link: `https://www.linkedin.com/shareArticle?url=${shareUrl}` },
	]

	const handleAction = (id: string, link: string | null) => {
		if (id === 'inst') {
			setActiveId(activeId === 'inst' ? null : 'inst')
			return
		}
		if (link) window.open(link, '_blank', 'width=600,height=450')
	}

	const handleCopy = async (e: React.MouseEvent) => {
		e.stopPropagation()
		try {
			await navigator.clipboard.writeText(currentUrl)
			setCopied(true)
			setTimeout(() => {
				setCopied(false)
				setActiveId(null)
			}, 1500)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div className="share-socials" ref={containerRef}>
			{socialIcons.map(({ id, icon, alt, link }) => {
				const shouldShowTooltip = activeId === id && (!isMobile || id === 'inst')

				return (
					<div
						key={id}
						className="share-socials__wrapper"
						onMouseEnter={() => !isMobile && setActiveId(id)}
						onMouseLeave={() => {
							if (!isMobile) {
								setActiveId(null)
								setCopied(false)
							}
						}}
					>
						<button className="share-socials__btn" onClick={() => handleAction(id, link)}>
							<img src={icon} alt={alt} className={id === 'inst' && activeId === 'inst' ? 'is-active' : ''} />
						</button>

						{shouldShowTooltip && (
							<div className={`tooltip ${id === 'inst' ? 'is-inst' : ''}`}>
								{id === 'inst' ? (
									<div className="tooltip__copy-box">
										<span className="tooltip__label">Skopiuj link:</span>
										<div className="tooltip__row">
											<input readOnly value={currentUrl} className="tooltip__input" />
											<button className={`tooltip__copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
												{copied ? '✓' : 'Kopiuj'}
											</button>
										</div>
									</div>
								) : (
									<span className="tooltip__text">Udostępnij na {alt}</span>
								)}
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}

export default ShareOnSocial
