import './sub-page-header.scss'
import { Link, useLocation, useParams } from 'react-router'
import { allServices } from '../../../data/services'
import { teamMembers } from '../../../data/team'
import { projects } from '../../../data/projects'
import { blogs } from '../../../data/blogs'

type BreadCrumbs = string | undefined

const SubPageHeader = () => {
	const params = useParams()
	const { pathname } = useLocation()
	const path = pathname.slice(1)

	const entities = {
		service: allServices.find(s => s.slug === params.service),
		member: teamMembers.find(m => m.id === params.member),
		project: projects.find(p => p.slug === params.project),
		blog: blogs.find(b => b.slug === params.title),
	}

	const staticPages: Record<string, string> = {
		about: 'about us',
		contact: 'contact us',
		'services/all': 'our services',
	}

	let pageName: BreadCrumbs = staticPages[path] || path
	let prevPage: BreadCrumbs
	let lastBread: BreadCrumbs

	// All services
	if (path === 'services/all') {
		prevPage = 'services'
		lastBread = 'all services'
	}
	// Dynamiczne ścieżki
	else if (path.includes('/')) {
		const [root] = path.split('/')
		prevPage = root

		const config: Record<string, { name: string; val: string | undefined }> = {
			services: { name: 'service details', val: entities.service?.title },
			team: { name: 'team member', val: entities.member?.fullName },
			projects: { name: 'project details', val: entities.project?.projectName },
			blog: { name: 'blog details', val: entities.blog?.title },
		}

		const current = config[root]

		if (current) {
			pageName = current.name
			lastBread = current.val ? `${current.val.slice(0, 6)} ...` : 'Not Found'
			if (root === 'team') lastBread = entities.member?.fullName || 'Not Found'
		}
	} else if (path.startsWith('pricing')) {
		pageName = 'pricing plan'
	}

	return (
		<header className="sub-header">
			<div className="container container--narrow">
				<div className="sub-header__breadbox">
					<div className="sub-header__line" />
					<div className="sub-header__breadcrumbs">
						<Link to="/" className="sub-header__link">
							Home
						</Link>
						<span>-</span>
						{prevPage ? (
							<Link to={`/${prevPage}`} className="sub-header__link">
								{prevPage}
							</Link>
						) : (
							<span>{pageName}</span>
						)}
						{prevPage && <span>-</span>}
						{prevPage && <span>{lastBread}</span>}
					</div>
				</div>
				<h1 className="sub-header__headline">{pageName}</h1>
			</div>
		</header>
	)
}
export default SubPageHeader

// let pageName: BreadCrumbs
// let prevPage: BreadCrumbs
// let lastBread: BreadCrumbs

// const service = allServices.find(service => service.slug === params.service)
// const member = teamMembers.find(member => member.id === params.member)
// const project = projects.find(project => project.slug === params.project)
// const blog = blogs.find(blog => blog.slug === params.title)

// if (path === 'about') {
// 	pageName = 'about us'
// } else if (path.startsWith('pricing')) {
// 	pageName = 'pricing plan'
// } else if (path === 'contact') {
// 	pageName = 'contact us'
// } else if (path === 'services/all') {
// 	pageName = 'our services'
// 	prevPage = 'services'
// 	lastBread = 'all services'
// } else if (path.startsWith('services') && path.includes('/')) {
// 	pageName = 'service details'
// 	prevPage = 'services'

// 	if (lastBread) {
// 		lastBread = `${service?.title.slice(0, 6)} ...`
// 	} else {
// 		lastBread = 'Not Found'
// 	}
// } else if (path.startsWith('team') && path.includes('/')) {
// 	pageName = 'team member'
// 	prevPage = 'team'

// 	if (lastBread) {
// 		lastBread = member?.fullName
// 	} else {
// 		lastBread = 'Not Found'
// 	}
// } else if (path.startsWith('projects') && path.includes('/')) {
// 	pageName = 'project details'
// 	prevPage = 'projects'

// 	if (lastBread) {
// 		lastBread = `${project?.projectName.slice(0, 6)} ...`
// 	} else {
// 		lastBread = 'Not Found'
// 	}
// } else if (path.startsWith('blog') && path.includes('/')) {
// 	pageName = 'blog details'
// 	prevPage = 'blog'

// 	if (lastBread) {
// 		lastBread = `${blog?.title.slice(0, 6)} ...`
// 	} else {
// 		lastBread = 'Not Found'
// 	}
// } else {
// 	pageName = path
// }
