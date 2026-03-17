export type Image = {
	png: string
	webp: string
}

type MemberInfo = {
	phone: string
	email: string
	gender: string
	address: string
	website: string
	nationality: string
}

type AboutMember = {
	desc: string
	list: string[]
}

export type TeamMemberType = {
	id: string
	fullName: string
	job: string
	info: MemberInfo
	about: AboutMember
	image: Image
}

type TeamSkill = {
	id: string
	skillName: string
	amount: number
}

export const teamMembers: TeamMemberType[] = [
	{
		id: 'chip-munk',
		fullName: 'Chip Munk',
		job: 'CEO, of Founder',
		info: {
			phone: '000-3215-221',
			email: 'chip-munk@convais.net',
			gender: 'male',
			address: 'Boylston St, Boston',
			website: 'cheap-monk.com',
			nationality: 'American',
		},
		about: {
			desc: 'Nullam interdum sodales porta. Proin sit amet purus quam. Proin eu tellus dapibus, accumsan nisi nec, ultricies dui. Sed ante velit, mattis non urna ut, mollis posuere urna. Nunc aliquet ultricies lorem, non placerat ligula gravida eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus neque eros, posuere vel pretium sed, vulputate at dolor.',
			list: [
				' Sed vestibulum volutpat augue et malesuada. Sed eleifend, urna sed ultricies egestas, mi justo gravida tortor, euismod pretium mauris erat vitae magna.',
				'Donec pretium, mi nec bibendum consequat, ipsum ipsum ornare tortor, vitae molestie enim lectus eu ante.',
				'Sed lacinia placerat feugiat. Donec a turpis egestas, elementum purus et, volutpat mauris. Nam venenatis auctor fermentum.',
			],
		},
		image: {
			png: '/images/team/chip-munk.png',
			webp: '/images/team/chip-munk.webp',
		},
	},
	{
		id: 'paige-turner',
		fullName: 'Paige Turner',
		job: 'Advertising',
		info: {
			phone: '000-3512-211',
			email: 'paige-turner@convais.net',
			gender: 'female',
			address: 'N Michigan Av, Chicago',
			website: 'readbooks.net',
			nationality: 'American',
		},
		about: {
			desc: 'Nulla in semper lectus, et consectetur ante. Donec lacinia mauris urna, eget aliquam est porta nec. Quisque eros ipsum, feugiat at volutpat in, pellentesque vitae tellus. Pellentesque in sodales orci, et sagittis nulla. Curabitur faucibus vel sapien id pretium.',
			list: [
				'Donec vel auctor dolor, in maximus sapien. Pellentesque venenatis pharetra posuere.',
				'Nulla nec sapien congue, condimentum ligula in, finibus metus. Vivamus id molestie turpis.',
				'Aenean imperdiet massa a ipsum condimentum mattis. Nunc turpis ex, dignissim et auctor ultrices, venenatis a nisl.',
			],
		},
		image: {
			png: '/images/team/paige-turner.png',
			webp: '/images/team/paige-turner.webp',
		},
	},
	{
		id: 'neil-down',
		fullName: 'Neil Down',
		job: 'Cost Efficiency',
		info: {
			phone: '000-3553-212',
			email: 'neil-down@convais.net',
			gender: 'male',
			address: 'Trump Tower, New York',
			website: 'kneelwithneil.org',
			nationality: 'American',
		},
		about: {
			desc: 'Nunc aliquet sapien eu lectus iaculis blandit. Praesent odio erat, dapibus nec dignissim ac, feugiat sit amet purus. Vivamus egestas diam sit amet diam ornare facilisis. Nullam luctus, nisi in porta aliquet, ante arcu finibus lacus, quis gravida mi mauris non velit.',
			list: [
				'Ut aliquet justo nulla, sed ultrices lorem faucibus at. Morbi pharetra commodo nulla, a accumsan libero egestas et.',
				'Maecenas sit amet arcu non elit tempus volutpat eget at quam. Morbi vel lectus porttitor, lobortis ligula sit amet, fringilla massa.',
				'Nam velit dolor, tempus eu fringilla ut, gravida eu augue. Aenean eleifend suscipit mattis. Donec consequat id erat sed consequat.',
			],
		},
		image: {
			png: '/images/team/neil-down.png',
			webp: '/images/team/neil-down.webp',
		},
	},
	{
		id: 'al-dente',
		fullName: 'Al Dente',
		job: 'Policy Advisory',
		info: {
			phone: '000-3651-222',
			email: 'al-dente@convais.net',
			gender: 'male',
			address: 'Madison Av, New York',
			website: 'pennefusilli.com',
			nationality: 'American',
		},
		about: {
			desc: 'Proin eu congue dui. Morbi aliquet eros libero, eu facilisis velit pretium vel. Nunc at leo imperdiet, facilisis metus eu, sodales nulla. Quisque a justo felis. Nulla facilisi. Nunc dui ex, fringilla dictum enim at, ullamcorper vehicula velit. Etiam pretium tristique justo vitae fringilla.',
			list: [
				'Sed semper placerat leo, sit amet pretium erat posuere id. Etiam convallis, odio vel euismod porttitor, arcu tellus pharetra neque, et rhoncus justo diam vehicula arcu. Suspendisse et sapien augue.',
				'Sed faucibus libero vel sem bibendum vulputate id id tortor.',
				'Donec vitae ex id leo accumsan sagittis vel hendrerit lacus. Duis eu magna tincidunt, consequat risus ac, mollis augue.',
			],
		},
		image: {
			png: '/images/team/al-dente.png',
			webp: '/images/team/al-dente.webp',
		},
	},
	{
		id: 'kerry-oki',
		fullName: 'Kerry Oki',
		job: 'UX/UI Design',
		info: {
			phone: '000-3021-223',
			email: 'kerry-oki.@convais.net',
			gender: 'female',
			address: 'Malibu Road, Malibu',
			website: 'singingtomyself.com',
			nationality: 'American',
		},
		about: {
			desc: 'Praesent eu est vestibulum, scelerisque lectus vel, pulvinar leo. Etiam a varius massa, eu dignissim nunc. Cras et cursus leo. Vestibulum viverra semper magna, ut accumsan turpis sollicitudin et. Aenean accumsan suscipit lacus, ut condimentum nisi tincidunt ac.',
			list: [
				'In volutpat non leo et interdum. Integer faucibus, risus nec aliquet dapibus, urna lectus pharetra est, non lobortis turpis arcu a lacus.',
				'Morbi dapibus, risus ac mattis fringilla, ante sapien elementum quam, ac pharetra tellus mauris non nulla.',
				'Nullam venenatis porta pellentesque. Suspendisse est lorem, commodo ac elementum ac, gravida a orci.',
			],
		},
		image: {
			png: '/images/team/kerry-oki.png',
			webp: '/images/team/kerry-oki.webp',
		},
	},
	{
		id: 'justin-time',
		fullName: 'Justin Time',
		job: 'Market Research',
		info: {
			phone: '000-3111-204',
			email: 'justin-time@convais.net',
			gender: 'female',
			address: 'Front St, San Diego',
			website: 'neverbelate.net',
			nationality: 'American',
		},
		about: {
			desc: 'Maecenas vitae lorem varius, pulvinar odio id, finibus dolor. Cras suscipit luctus euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
			list: [
				'Donec arcu velit, tincidunt nec erat id, imperdiet commodo mauris. Phasellus sodales bibendum auctor. Vestibulum enim metus, cursus vel cursus at, iaculis a erat.',
				'Donec tincidunt erat efficitur, mattis ipsum et, ultricies dolor. In ac risus nisi. Morbi tempus scelerisque magna, in placerat nulla tempus eget. ',
				'Nulla facilisi. Donec at eros eget magna dignissim facilisis sed eget ligula.',
			],
		},
		image: {
			png: '/images/team/justin-time.png',
			webp: '/images/team/justin-time.webp',
		},
	},
]

export const teamSkills: TeamSkill[] = [
	{ id: '1', skillName: 'Business Consultants', amount: 65 },
	{ id: '2', skillName: 'Client Communication', amount: 83 },
	{ id: '3', skillName: 'Marketing Strength', amount: 50 },
]
