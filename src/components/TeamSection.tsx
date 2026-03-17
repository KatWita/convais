import './team-section.scss'
import { useNavigate } from 'react-router'
import { teamMembers } from '../data/team'
import ButtonCta from './ButtonCta'
import SectionHeadline from './SectionHeadline'
import TeamMember from './TeamMember'

const TeamSection = () => {
	const navigate = useNavigate()

	return (
		<section className="team">
			<div className="container container--wide">
				<div className="team__content">
					<SectionHeadline label="Team Member" title="Our Qualified Team Member" />
					<p className="team__text">
						Refresh your skills, our team of experienced instructors will guide you every step of the way. Our
						comprehensive courses are designed ...
					</p>

					<ButtonCta label="Join Our Team" onClick={() => navigate('/contact')} />
				</div>
				<div className="team__members">
					{teamMembers.map(member => (
						<TeamMember {...member} key={member.fullName} />
					))}
				</div>
			</div>
			<div className="blur-bg"></div>
		</section>
	)
}
export default TeamSection
