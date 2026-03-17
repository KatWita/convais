import './project-details-page.scss'
import { useParams, useLocation } from 'react-router'
import { projects } from '../data/projects'
import ButtonsPage from '../components/ButtonsPage'
import { useRef } from 'react'
import { useScrollToChange } from '../hooks/useScrollToChange'
import { motion, AnimatePresence } from 'motion/react'

const ProjectDetails = () => {
	const { project } = useParams()
	const { pathname } = useLocation()
	const projectDetails = projects.find(p => p.slug === project)
	const projectRef = useRef<HTMLDivElement>(null)

	useScrollToChange(project, projectRef)

	if (!projectDetails) {
		return (
			<section className="project-details section container container--narrow">
				<h2 className="page-not-found">Sorry! There's no such project.</h2>
			</section>
		)
	}

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathname} // animacja tylko przy zmianie projektu
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					duration: 0.15,
					ease: 'easeOut',
				}}
			>
				<section ref={projectRef} className="project-details section container container--narrow">
					<div className="project-details__top">
						<div className="project-details__img-box">
							<img
								src={projectDetails.images.large}
								alt={projectDetails.projectName}
								className={`project-details__img ${projectDetails.className}`}
							/>
						</div>
						<div className="project-details__img-info">
							{Object.entries(projectDetails.headline).map(([key, value]) => (
								<div className="project-details__img-info-box" key={key}>
									<p className="project-details__img-info-title bold">{key}:</p>
									<p className="project-details__img-info-text">{value}</p>
								</div>
							))}
						</div>
					</div>

					<div className="project-details__bottom">
						<div className="project-details__bottom-l">
							{projectDetails.content.map((cont, i) =>
								i === 1 ? (
									<p className="project-details__text medium" key={i}>
										{cont}
									</p>
								) : (
									<p className="project-details__text" key={i}>
										{cont}
									</p>
								),
							)}
						</div>

						<div className="project-details__bottom-r">
							<ul className="list">
								{projectDetails.list.map((el, i) => (
									<li className="list__elem medium" key={i}>
										{el}
									</li>
								))}
							</ul>
							<p className="project-details__text">{projectDetails.mission}</p>
						</div>
					</div>

					<ButtonsPage array={projects} />
				</section>
			</motion.div>
		</AnimatePresence>
	)
}

export default ProjectDetails
