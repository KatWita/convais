import './projects-page.scss'
import { projects } from '../data/projects'
import ButtonArrow from '../components/ButtonArrow'
import { useNavigate } from 'react-router'

const Projects = () => {
	const navigate = useNavigate()

	return (
		<div className="projects-page section container container--narrow">
			{projects.map(({ id, projectName, slug, images: { small }, label, className }) => {
				return (
					<div className={`project ${className}`} key={id}>
						<img src={small} alt={projectName} className="project__img" />

						<div className="strategy">
							<p className="strategy__tag">{label}</p>
							<p className="strategy__text">{projectName}</p>

							<ButtonArrow onClick={() => navigate(`/projects/${slug}`)} />
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Projects
