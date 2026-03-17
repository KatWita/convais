import './team-page.scss'
import { useNavigate } from 'react-router'
import ButtonCta from '../components/ButtonCta'
import SectionHeadline from '../components/SectionHeadline'
import TeamMember from '../components/TeamMember'
import { teamMembers } from '../data/team'

const Team = () => {
	const navigate = useNavigate()

	return (
		<section className="team-page section">
			<div className="container container--narrow">
				<div className="team-page__content">
					<SectionHeadline label="Team Member" title="Our Qualified Team Member" />

					<ButtonCta label="Join Our Team" option="yellow" onClick={() => navigate('/contact')} />
				</div>
				<div className="team__members">
					{teamMembers.map(member => (
						<TeamMember {...member} key={member.fullName} />
					))}
				</div>
			</div>
		</section>
	)
}
export default Team
