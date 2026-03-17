import './search-box.scss'
import BoxHeadline from './BoxHeadline'
import magnifyingGlassIcon from '../assets/icons/magnifying-glass.svg'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import type { Blog } from '../db/schema'

const SearchBox = () => {
	const [query, setQuery] = useState('')
	const [suggestions, setSuggestions] = useState<Blog[]>([])
	const [isOpen, setIsOpen] = useState(false)
	const navigate = useNavigate()
	const wrapperRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	useEffect(() => {
		if (query.trim().length < 2) {
			setSuggestions([])
			setIsOpen(false)
			return
		}

		const timeout = setTimeout(async () => {
			const res = await fetch('/.netlify/functions/api/api/blogs?search=${encodeURIComponent(query)}`)
			const json = await res.json()
			setSuggestions(json.data?.slice(0, 5) ?? [])
			setIsOpen(true)
		}, 400)

		return () => clearTimeout(timeout)
	}, [query])

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!query.trim()) return
		setIsOpen(false)
		navigate(`/blog?search=${encodeURIComponent(query)}`)
	}

	const handleSuggestionClick = (slug: string) => {
		setIsOpen(false)
		setQuery('')
		navigate(`/blog/${slug}`)
	}

	return (
		<div className="search-box side-box" ref={wrapperRef}>
			<BoxHeadline title="Search" />
			<form className="search-box__form" onSubmit={handleSubmit}>
				<input
					type="text"
					className="search-box__input"
					placeholder="search here"
					value={query}
					onChange={e => setQuery(e.target.value)}
					onFocus={() => suggestions.length > 0 && setIsOpen(true)}
				/>
				<button type="submit" className="search-box__btn-submit">
					<img src={magnifyingGlassIcon} alt="search icon" />
				</button>

				{isOpen && suggestions.length > 0 && (
					<ul className="search-box__suggestions">
						{suggestions.map(blog => (
							<li
								key={blog.id}
								className="search-box__suggestion-item"
								onMouseDown={() => handleSuggestionClick(blog.slug)}
							>
								{blog.image && <img src={blog.image} alt={blog.title} className="search-box__suggestion-img" />}
								<div className="search-box__suggestion-info">
									<span className="search-box__suggestion-title">{blog.title}</span>
									{blog.tags && <span className="search-box__suggestion-tags">{blog.tags.join(', ')}</span>}
								</div>
							</li>
						))}
					</ul>
				)}
			</form>
		</div>
	)
}

export default SearchBox
