import './project-section.scss'
import { latestProject } from '../data/projects'
import SectionHeadline from './SectionHeadline'
import ButtonArrow from './ButtonArrow'
import { useNavigate } from 'react-router'

const ProjectsSection = () => {
	const navigate = useNavigate()

	return (
		<section className="projects">
			<SectionHeadline label="Our Latest Project" title="A Showcase Of Our Expertise" />

			<div className="projects__cont">
				{latestProject.map(img => (
					<div className={`projects__img ${img.class}`}>
						<img src={img.images.webp} alt={img.desc} key={img.id} className="projects__pic" />
						{img.id === '3' && (
							<div className="strategy">
								<img src="/images/projects/strategy-border.svg" alt="" className="strategy__mask" />
								<div className="strategy__content">
									<p className="strategy__tag">Strategy</p>
									<p className="strategy__text">Prime Strategy Creative Solutions Group</p>
									<ButtonArrow onClick={() => navigate('/projects/prime-strategy-creative-solutions-group')} />
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	)
}
export default ProjectsSection
