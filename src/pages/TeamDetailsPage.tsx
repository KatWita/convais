import './team-details-page.scss'
import { useParams } from 'react-router'
import { teamMembers } from '../data/team'
import SectionHeadline from '../components/SectionHeadline'
import TeamMember from '../components/TeamMember'
import Skills from '../components/Skills'
import WhyUs from '../components/WhyUs'

const TeamDetails = () => {
	const { member } = useParams()
	const teamMember = teamMembers.find(teamMember => teamMember.id === member)

	if (!teamMember) {
		return (
			<section className="project-details section container container--narrow">
				<h2 className="page-not-found">Sorry! There's no such team member.</h2>
			</section>
		)
	}

	return (
		<section className="member-page section container container--narrow">
			<div className="member-page__upper">
				<div className="member-page__about">
					<SectionHeadline label="get to know us" title="Member Information" />
					<p className="member-page__text">{teamMember?.about.desc}</p>
					<ul className="list">
						{teamMember?.about.list.map(el => (
							<li className="list__elem">{el}</li>
						))}
					</ul>
				</div>
				<div className="member-page__info">
					<TeamMember
						id={teamMember!.id}
						fullName={teamMember!.fullName}
						job={teamMember!.job}
						image={teamMember!.image}
					/>
					<div className="member-page__inf-box">
						<div className="member-page__info-list">
							<p>
								<span className="bold">Phone : </span>
								{teamMember?.info.phone}
							</p>
							<p>
								<span className="bold">Email : </span>
								{teamMember?.info.email}
							</p>
							<p>
								<span className="bold">Gender : </span>
								{teamMember?.info.gender}
							</p>
						</div>
						<div className="member-page__info-list">
							<p>
								<span className="bold">Address : </span>
								{teamMember?.info.address}
							</p>
							<p>
								<span className="bold">Website : </span>
								{teamMember?.info.website}
							</p>
							<p>
								<span className="bold">Nationality : </span>
								{teamMember?.info.nationality}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="member-page__lower">
				<SectionHeadline label="why choose us" title="Excellence You Can Count On" />
				<Skills />
				<WhyUs />
			</div>
		</section>
	)
}
export default TeamDetails
