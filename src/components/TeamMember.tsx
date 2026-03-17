import './team-member.scss'

import { FaFacebook, FaPinterestP } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GrInstagram } from 'react-icons/gr'
import { Link } from 'react-router'
import type { Image } from '../data/team'

type TeamMemberProps = {
	id: string
	fullName: string
	job: string
	image: Image
}

const TeamMember = ({ id, fullName, job, image }: TeamMemberProps) => {
	const socialIconStyle = { color: '#0F1316', fontSize: '0.8em' }

	return (
		<div className="member">
			<Link to={`/team/${id}`} className="member__link">
				<img src={image.webp} alt="" className="member__img" />

				<p className="member__name">{fullName}</p>

				<p className="member__job">{job}</p>
			</Link>
			<div className="member__socials">
				<a href="https://www.facebook.com/" target="_blank">
					<FaFacebook style={socialIconStyle} />
				</a>
				<a href="https://www.x.com/" target="_blank">
					<FaXTwitter style={socialIconStyle} />
				</a>
				<a href="https://www.pinterest.com/" target="_blank">
					<FaPinterestP style={socialIconStyle} />
				</a>
				<a href="https://www.instagram.com/" target="_blank">
					<GrInstagram style={socialIconStyle} />
				</a>
			</div>
		</div>
	)
}
export default TeamMember
