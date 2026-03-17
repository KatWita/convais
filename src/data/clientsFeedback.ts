export type Testimonial = {
	id: string
	fullName: string
	job: string
	opinion: string
	rate: number
	avatar: string
}

export const testimonials: Testimonial[] = [
	{
		id: '1',
		fullName: 'Frank Enstein',
		job: 'Chief Ego Operator',
		opinion:
			'Working with this consulting firm was a turning point for our company. They quickly understood our challenges & delivered high-quality work and demonstrated deep expertise.',
		rate: 5,
		avatar: '/images/clients/frank-enstein.jpg',
	},
	{
		id: '2',
		fullName: 'Artie Choke',
		job: 'Social Mediaholic',
		opinion:
			'We engaged Convais for a critical strategic initiative, and overall, the experience was overwhelmingly positive.',
		rate: 4,
		avatar: '/images/clients/artie-choke.jpg',
	},
	{
		id: '3',
		fullName: 'Ella Vator',
		job: 'Master of Disaster',
		opinion:
			'Convais is an outstanding choice for organizations needing high-impact strategic guidance. Their ability to translate complex data into clear, executable strategy is truly impressive.',
		rate: 5,
		avatar: '/images/clients/ella-vator.jpg',
	},
	{
		id: '4',
		fullName: 'Sal Monella',
		job: 'Digital Prophet',
		opinion: "We are highly satisfied with the outcome of our partnership and the exceptional results we've achieved.",
		rate: 5,
		avatar: '/images/clients/sal-monella.jpg',
	},
	{
		id: '5',
		fullName: 'Clair Annette',
		job: 'President and TeaEO',
		opinion:
			'The team delivered high-quality work and demonstrated deep expertise in our industry, resulting in actionable recommendations that are already showing a return on investment.',
		rate: 4.5,
		avatar: '/images/clients/clair-annette.jpg',
	},
	{
		id: '6',
		fullName: 'Dill Eavery',
		job: 'Vibe Manager',
		opinion:
			'The project manager and lead consultant were exceptional—professional, highly organized, and committed to meeting our deadline.',
		rate: 5,
		avatar: '/images/clients/dill-eavery.jpg',
	},
	{
		id: '7',
		fullName: 'Anita Bath',
		job: 'Hacker',
		opinion:
			'The only reason this engagement did not receive a perfect 5-star rating was related to minor instances of operational friction during the mid-phase of the project, specifically around communication cadence.',
		rate: 4.5,
		avatar: '/images/clients/anita-bath.jpg',
	},
	{
		id: '8',
		fullName: 'Walter Melon',
		job: 'Chief People Pleaser',
		opinion: 'The primary strength of this firm lies in their strategic rigor and domain knowledge.',
		rate: 5,
		avatar: '/images/clients/walter-melon.jpg',
	},
	{
		id: '9',
		fullName: 'Ginny Tonic',
		job: 'Sales Rockstar',
		opinion:
			'The team delivered world-class work, demonstrated unparalleled expertise in our industry, and provided immediately actionable recommendations that are already generating significant return on investment.',
		rate: 5,
		avatar: '/images/clients/ginny-tonic.jpg',
	},
	{
		id: '10',
		fullName: 'Marsha Mellow',
		job: 'Travel Agent',
		opinion:
			'The consultants assigned to our project were clearly senior-level professionals who quickly grasped the nuances of our challenge.',
		rate: 5,
		avatar: '/images/clients/marsha-mellow.jpg',
	},
	{
		id: '11',
		fullName: 'Ali Gaither',
		job: 'Copy Cruncher',
		opinion:
			'The final report was not a theoretical document but a practical guide, complete with phased implementation plans and measurable KPIs.',
		rate: 5,
		avatar: '/images/clients/ali-gaither.jpg',
	},
	{
		id: '12',
		fullName: 'Jasmine Rice',
		job: 'Head of Growth',
		opinion:
			'There were a few occasions where responses to critical follow-up questions took 24-48 hours longer than anticipated. While the quality of the answer was always excellent.',
		rate: 4,
		avatar: '/images/clients/jasmine-rice.jpg',
	},
]

export const clientsLogos: string[] = [
	'/images/clients/magit.png',
	'/images/clients/paga.png',
	'/images/clients/comair.png',
	'/images/clients/korail.png',
	'/images/clients/alstom.png',
]
