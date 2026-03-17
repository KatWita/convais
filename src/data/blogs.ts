import { slugify } from '../utils/helpers'

type Comment = {
	author: string
	comment: string
	avatar: string
	createdAt: string
}

export type Blog = {
	category: string
	title: string
	slug: string
	description: string
	sub: string
	subDesc: string
	quote: string
	features: string[]
	video?: string
	videoImg?: string
	conclusions: string
	tags: string[]
	date: string
	image: string
	byWho: string
	comments?: Comment[]
}

export const blogs: Blog[] = [
	{
		category: 'Business',
		title: 'Cutting Operational Costs with Smart Consulting',
		slug: slugify('Cutting Operational Costs with Smart Consulting'),
		description:
			'In today’s fast-paced business environment, having a clear strategy is more important than ever. Business consultants play a key role in helping companies define their goals, identify growth opportunities, & develop actionable plans outperform the competition. Business consultants guide entrepreneurs through these early stages, offering clarity, structure.',
		sub: 'Convais is the only theme you will ever need',
		subDesc:
			'Launching a new business is both exciting and challenging. From building a business model to setting up operational systems, startups often face complex decisions.',
		quote:
			'Effective financial management is critical for any business aiming to thrive. Consultants help organizations analyze their spending, forecast revenue, and streamline budgeting. By identifying areas for improvement, they assist in reducing costs.',
		features: [
			"Whether you're a beginner or looking to refresh your skills",
			'Our services include road test preparation, defensive driving courses',
			'Both automatic and manual car instruction. With certified, experienced',
			'Our car driving school provides comprehensive training for learners of all levels.',
		],
		conclusions:
			'Strong leadership drives innovation, productivity, and company culture. Business consultants work with leaders to sharpen their skills, improve decision-making, and align team efforts with organizational goals. Investing in leadership consulting can elevate.',
		tags: ['Business', 'Consulting', 'Insight'],
		date: '24 June',
		image: '/images/blog/cutting-costs.webp',
		byWho: 'admin',
		comments: [
			{
				author: 'Liam Beeson',
				comment: "I don't know who you are. I don't know what you want. But i assure you Convais is amazing.",
				avatar: '/images/blog/liam-beeson.jpg',
				createdAt: '',
			},
			{
				author: 'Arnold Szwarzegrande',
				comment: "Convais made my life easier, when I'll need more of your help, I'll be back.",
				avatar: '/images/blog/arnold-szwarzegrande.jpg',
				createdAt: '',
			},
		],
	},
	{
		category: 'Leadership',
		title: 'How Consultants Help Build Powerful Brand Identities',
		slug: slugify('How Consultants Help Build Powerful Brand Identities'),
		description:
			'In the era of digital transformation, visionary leadership is the ultimate catalyst for organizational resilience. Modern leaders must transcend traditional management by fostering a culture of psychological safety and radical transparency. By empowering cross-functional teams to embrace agile mindsets, they drive sustainable value creation in volatile markets.',
		sub: 'Empowering the next generation of industry disruptors',
		subDesc:
			'Leadership is no longer about top-down command; it’s about orchestrating ecosystems of talent. Navigating the complexities of global scaling requires a balance of emotional intelligence and data-driven decisiveness.',
		quote:
			'True leadership excellence is measured by the ability to align individual aspirations with a unified corporate mission. It’s about leveraging human capital to turn strategic friction into a competitive advantage through consistent mentorship.',
		features: [
			'Cultivating executive presence and high-impact communication',
			'Developing inclusive frameworks for diverse stakeholder engagement',
			'Optimizing decision-making cycles in high-pressure environments',
			'Driving organizational alignment through authentic servant leadership',
		],
		conclusions:
			'Ultimately, leadership consulting bridges the gap between potential and performance. By refining the core competencies of senior management, organizations can unlock hidden synergies and achieve long-term institutional growth.',
		tags: ['Leadership', 'Optimization', 'Risk'],
		date: '17 June',
		image: '/images/blog/powerful-brand.webp',
		byWho: 'admin',
		comments: [
			{
				author: 'Liam Beeson',
				comment: 'Im a leader myself.',
				avatar: '/images/blog/liam-beeson.jpg',
				createdAt: '',
			},
			{
				author: 'Edward Nortun',
				comment: 'The first rule of Fight Club is: you do not talk about Fight Club Liam!',
				avatar: '/images/blog/edward-nortun.jpg',
				createdAt: '',
			},
			{
				author: 'Arnold Szwarzegrande',
				comment: 'Hasta la vista, baby.',
				avatar: '/images/blog/arnold-szwarzegrande.jpg',
				createdAt: '',
			},
		],
	},
	{
		category: 'Strategy',
		title: 'Consulting Advice for Develop Strong Leadership',
		slug: slugify('Consulting Advice for Develop Strong Leadership'),
		description:
			'Strategic agility is the cornerstone of market dominance in the 21st century. Our approach integrates macro-trend analysis with granular operational insights to redefine the boundaries of what’s possible. We help brands pivot from reactive survival to proactive market shaping by identifying blue ocean opportunities.',
		sub: 'Synchronizing vision with flawless execution',
		subDesc:
			'A strategy is only as strong as its weakest touchpoint. We specialize in deconstructing complex market barriers and rebuilding them into scalable roadmaps for international expansion and digital integration.',
		quote:
			'Strategy is the art of sacrifice; choosing what not to do is just as critical as defining the core objectives. We provide the analytical rigor necessary to validate assumptions and mitigate long-term systemic risks.',
		features: [
			'Harnessing predictive analytics for robust market positioning',
			'Streamlining value chains to maximize operational throughput',
			'Architecting scalable business models for hyper-growth phases',
			'Synthesizing competitive intelligence into actionable roadmaps',
		],
		conclusions:
			'A well-executed strategy transforms abstract goals into measurable milestones. By aligning resource allocation with core strategic pillars, enterprises can ensure a robust trajectory toward industry leadership.',
		tags: ['Strategic', 'Consulting', 'Growth'],
		date: '9 June',
		image: '/images/blog/consulting-advice.webp',
		byWho: 'admin',
		comments: [
			{
				author: 'Liam Beeson',
				comment: 'Strategy is the key.',
				createdAt: '',
				avatar: '/images/blog/liam-beeson.jpg',
			},
		],
	},
	{
		category: 'Optimization',
		title: 'Maximizing Operational Throughput via Lean Frameworks',
		slug: slugify('Maximizing Operational Throughput via Lean Frameworks'),
		description:
			'In the pursuit of operational excellence, optimization is not a destination but a continuous journey of radical efficiency. By deconstructing legacy workflows and implementing lean methodologies, enterprises can eliminate systemic waste. Our approach focuses on synchronizing resource allocation with real-time demand signals.',
		sub: 'Streamlining the core of your business engine',
		subDesc:
			'Micro-optimizations at the process level often yield macro-results at the balance sheet level. It is about identifying bottlenecks before they become critical failures.',
		quote:
			'True optimization transcends mere cost-cutting; it is about amplifying the value-add at every touchpoint of the internal supply chain.',
		features: [
			'Heuristic analysis of existing operational bottlenecks',
			'Implementation of automated feedback loops for performance tracking',
			'Redefining resource velocity to minimize idle time',
			'Scaling efficiency through iterative process refinement',
		],
		video: 'https://www.youtube.com/watch?v=mw0_GAsvU70',
		videoImg: '/images/blog/blog-4-video-img.jpg',
		conclusions:
			'By fostering an optimization-first mindset, organizations can achieve a level of agility that makes them immune to traditional market fluctuations.',
		tags: ['Optimization', 'Efficiency', 'Lean'],
		date: '5 June',
		image: '/images/blog/blog-4-img.jpg',
		byWho: 'admin',
		comments: [
			{
				author: 'Sarah Jessica Marker',
				comment: "I'm sorry, I would sign, but I don't know the language.",
				avatar: '/images/blog/sarah-jessica-marker.jpg',
				createdAt: '',
			},
		],
	},
	{
		category: 'Scalability',
		title: 'Architecting Hyper-Growth: The Scalability Blueprint',
		slug: slugify('Architecting Hyper-Growth: The Scalability Blueprint'),
		description:
			'Scalability is the bridge between a successful local pilot and a dominant global presence. It requires a robust infrastructure that can handle exponential load without compromising quality or performance. We analyze the elasticity of your business model to ensure it survives the pressure of rapid expansion.',
		sub: 'Building foundations that never crack under pressure',
		subDesc:
			'Many startups fail not because they lack customers, but because their systems cannot sustain their own success. We build for the future, today.',
		quote:
			'A scalable architecture is one where the marginal cost of the next customer approaches zero, while the value delivered remains infinite.',
		features: [
			'Modular system design for horizontal and vertical expansion',
			'Stress-testing business models against hyper-growth scenarios',
			'Decoupling monolithic processes for increased flexibility',
			'Leveraging cloud-native solutions for global reach',
		],
		conclusions:
			'Investing in scalability early is the only way to ensure that today’s vision becomes tomorrow’s industry standard.',
		tags: ['Scalability', 'Growth', 'Infrastructure'],
		date: '1 June',
		image: '/images/blog/blog-5.jpg',
		byWho: 'admin',
		comments: [],
	},
	{
		category: 'Adaptation',
		title: 'The Art of Pivot: Navigating Market Adaptation',
		slug: slugify('The Art of Pivot: Navigating Market Adaptation'),
		description:
			'In an era of unprecedented disruption, the ability to adapt is the only true competitive advantage. Market adaptation is about sensing subtle shifts in consumer behavior and recalibrating the corporate compass before the competition even notices the change.',
		sub: 'Turning disruption into a strategic springboard',
		subDesc:
			'Rigidity is the enemy of survival. Organizations must learn to unlearn legacy success patterns to embrace the emerging digital reality.',
		quote:
			'Adaptation is not about changing who you are; it is about changing how you win in a world that never stops moving.',
		features: [
			'Real-time sentiment analysis for proactive market pivoting',
			'Cultivating a culture of experimentation and fast-failure',
			'Dynamic resource reallocation based on emerging trends',
			'Building resilient feedback channels with core stakeholders',
		],
		conclusions:
			'The most successful enterprises are those that view change not as a threat, but as an invitation to innovate and redefine their category.',
		tags: ['Adaptation', 'Innovation', 'Resilience'],
		date: '28 May',
		image: '/images/blog/blog-6.jpg',
		byWho: 'admin',
		comments: [
			{
				author: 'Mark Wallberg',
				comment: "Imitators don't last, and I'd like to last.",
				avatar: '/images/blog/mark-wallberg.jpg',
				createdAt: '',
			},
		],
	},
	{
		category: 'Business',
		title: 'Synergizing Cross-Functional Teams for Peak Output',
		slug: slugify('Synergizing Cross-Functional Teams for Peak Output'),
		description:
			'Silos are the silent killers of corporate productivity. Synergizing cross-functional teams allows for a holistic flow of information, ensuring that marketing, sales, and operations are all rowing in the same direction toward a unified north-star metric.',
		sub: 'Breaking down walls to unlock collective genius',
		subDesc:
			'When experts from different domains collaborate without friction, the result is more than the sum of its parts. It is institutional alchemy.',
		quote:
			'Synergy is the highest form of collaboration; it requires trust, transparency, and a shared commitment to radical excellence.',
		features: [
			'Establishing unified communication protocols across departments',
			'Shared KPI frameworks for multi-disciplinary projects',
			'Fostering inter-departmental mentorship programs',
			'Streamlining hand-off points in the internal value chain',
		],
		conclusions:
			'A synergized organization is a formidable force that can outpace more fragmented competitors with ease.',
		tags: ['Business', 'Synergy', 'Collaboration'],
		date: '22 May',
		image: '/images/blog/blog-7.jpg',
		byWho: 'admin',
		comments: [
			{
				author: 'Sylvester Slalome',
				comment: 'Live for nothing, or die for something!',
				avatar: '/images/blog/sylvester-slalome.jpg',
				createdAt: '',
			},
		],
	},
	{
		category: 'Strategy',
		title: 'Predictive Modeling: The Future of Strategic Foresight',
		slug: slugify('Predictive Modeling: The Future of Strategic Foresight'),
		description:
			'Why guess the future when you can model it? Predictive analytics allow strategic leaders to simulate various market scenarios and assess their impact before committing significant capital. It turns uncertainty into a manageable variable.',
		sub: 'Moving from intuition-based to data-driven strategy',
		subDesc:
			'The gut-feeling era is over. The data-driven era is just beginning. We provide the tools to see around the corner of the next fiscal quarter.',
		quote: 'Data is the new oil, but predictive modeling is the refinery that turns it into strategic fuel.',
		features: [
			'Integrating machine learning into strategic decision cycles',
			'Probabilistic risk assessment for high-stakes investments',
			'Simulating competitor responses to new product launches',
			'Visualizing long-term trends through advanced data dashboards',
		],
		conclusions:
			'Strategic foresight powered by data is the difference between leading the market and merely following the trends.',
		tags: ['Strategy', 'Data', 'Forecasting'],
		date: '15 May',
		image: '/images/blog/blog-8.jpg',
		byWho: 'admin',
		comments: [],
	},
	{
		category: 'Optimization',
		title: 'The Velocity Framework: Accelerating Time-to-Market',
		slug: slugify('The Velocity Framework: Accelerating Time-to-Market'),
		description:
			'In a global economy, speed is the ultimate currency. The Velocity Framework focuses on compressing the time between ideation and monetization. By optimizing the internal R&D cycle, we help you capture market share before the window of opportunity closes.',
		sub: 'Fast is better than perfect, but fast and perfect is the goal',
		subDesc:
			'We identify and eliminate the bureaucratic friction that slows down innovation. It is time to move at the speed of thought.',
		quote:
			'Velocity is not just about moving fast; it is about moving fast in the right direction without losing momentum.',
		features: [
			'Agile transformation for non-tech business units',
			'Rapid prototyping and MVP validation cycles',
			'Reducing administrative overhead through intelligent automation',
			'Optimizing the supply chain for just-in-time delivery',
		],
		conclusions: 'Companies that master velocity don’t just win; they redefine the pace of their entire industry.',
		tags: ['Optimization', 'Velocity', 'Agile'],
		date: '10 May',
		image: '/images/blog/blog-9.jpg',
		byWho: 'admin',
		comments: [],
	},
	{
		category: 'Leadership',
		title: 'Ethical Leadership in the Age of AI and Automation',
		slug: slugify('Ethical Leadership in the Age of AI and Automation'),
		description:
			'As technology takes over routine tasks, the human element of leadership becomes more critical than ever. Ethical leadership involves navigating the moral complexities of automation while maintaining a human-centric corporate culture.',
		sub: 'Leading with integrity in a digital-first world',
		subDesc:
			'Algorithms can manage data, but only humans can lead people. We focus on the intersection of technological progress and ethical responsibility.',
		quote: 'The true test of a leader is how they treat their people when the machines are doing the heavy lifting.',
		features: [
			'Developing ethical frameworks for AI implementation',
			'Upskilling employees for the post-automation economy',
			'Maintaining corporate social responsibility in digital spaces',
			'Fostering trust in transparent, data-driven environments',
		],
		conclusions: 'Ethical leadership ensures that technological advancement serves humanity, not the other way around.',
		tags: ['Leadership', 'Ethics', 'Future'],
		date: '5 May',
		image: '/images/blog/blog-10.webp',
		byWho: 'admin',
		comments: [
			{
				author: 'Sylvester Slalome',
				comment: 'Otheres are the disease, Convois is the cure.',
				avatar: '/images/blog/sylvester-slalome.jpg',
				createdAt: '',
			},
		],
	},
	{
		category: 'Scalability',
		title: 'Global Expansion: Scaling Culture Across Borders',
		slug: slugify('Global Expansion: Scaling Culture Across Borders'),
		description:
			'The hardest part of scaling a business is not scaling the product, but scaling the culture. Global expansion requires a delicate balance of centralized brand values and decentralized local execution.',
		sub: 'Think global, act local, scale everywhere',
		subDesc:
			'A brand identity must be elastic enough to resonate in different cultures without losing its core essence. We provide the map for this journey.',
		quote:
			'Culture is the glue that holds a global organization together when distance and time zones try to pull it apart.',
		features: [
			'Cross-cultural communication strategies for global teams',
			'Adapting business models to local regulatory landscapes',
			'Maintaining brand consistency across diverse markets',
			'Identifying local talent to drive international growth',
		],
		conclusions:
			'Successful global scaling is achieved when every employee, regardless of location, feels like part of the same mission.',
		tags: ['Scalability', 'Global', 'Culture'],
		date: '1 May',
		image: '/images/blog/blog-11.jpg',
		byWho: 'admin',
		comments: [],
	},
]

export const uniqueTags = [...new Set(blogs.flatMap(blog => blog.tags))]
