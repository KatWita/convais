import { slugify } from '../utils/helpers'

type LatestProject = {
	id: string
	images: { webp: string; jpg: string }
	desc: string
	class: string
}

export type Projects = {
	id: string
	projectName: string
	slug: string
	images: {
		large: string
		small: string
	}
	content: string[]
	list: string[]
	mission: string
	label: string
	headline: {
		clients: string
		categories: string
		date: string
		tags: string
		place: string
	}
	className: string
}

export const latestProject: LatestProject[] = [
	{
		id: '1',
		images: {
			webp: '/images/projects/project-1.webp',
			jpg: '/images/projects/project-1.jpg',
		},
		desc: 'Project 1 image',
		class: 'projects__img--one',
	},
	{
		id: '2',
		images: {
			webp: '/images/projects/project-2.webp',
			jpg: '/images/projects/project-2.jpg',
		},
		desc: 'Project 2 image',
		class: 'projects__img--two',
	},
	{
		id: '3',
		images: {
			webp: '/images/projects/project-3-strategy.webp',
			jpg: '/images/projects/project-3-strategy.jpg',
		},
		desc: 'Project 3 image',
		class: 'projects__img--three',
	},
	{
		id: '4',
		images: {
			webp: '/images/projects/project-4.webp',
			jpg: '/images/projects/project-4.jpg',
		},
		desc: 'Project 4 image',
		class: 'projects__img--four',
	},
	{
		id: '5',
		images: {
			webp: '/images/projects/project-5.webp',
			jpg: '/images/projects/project-5.jpg',
		},
		desc: 'Project 5 image',
		class: 'projects__img--five',
	},
	{
		id: '6',
		images: {
			webp: '/images/projects/project-6.webp',
			jpg: '/images/projects/project-6.jpg',
		},
		desc: 'Project 6 image',
		class: 'projects__img--six',
	},
]

export const projects: Projects[] = [
	{
		id: '1',
		projectName: 'Pivot Progress Group',
		slug: slugify('Pivot Progress Group'),
		images: {
			large: '/images/projects/adaptation.jpg',
			small: '/images/projects/adaptation.jpg',
		},
		content: [
			'In an era of total industry convergence, incremental change is insufficient—holistic metamorphosis is the only prerequisite for survival. Our Business Transformation services focus on a complete re-engineering of your organizational DNA to align with the demands of the digital-first economy. By synchronizing cultural shifts with technological integration, we empower your enterprise to transcend legacy constraints, ensuring that your entire operating model is re-architected for agility, innovation, and long-term relevance.',
			'Leveraging multidisciplinary change management frameworks and real-time organizational analytics, we enable your leadership to navigate the complexities of large-scale evolution; we work as a catalytic extension of your transformation office to ensure that strategic vision translates into profound structural reality.',
			'We focus on helping established enterprises dismantle silos and maximize organizational synergy. From reimagining customer-centric value propositions to deploying enterprise-wide change initiatives, we work side-by-side with your stakeholders to create a dynamic corporate ecosystem where innovation is not just an event, but a continuous capability.',
		],
		list: [
			'We offer end-to-end enterprise transformation blueprints',
			'Designed to bridge capability gaps, modernize legacy structures, & enhance cultural alignment',
			'Our transformative solutions are built to align with your global revitalization objectives',
		],
		mission:
			'Our mission is to future-proof your organization by orchestrating the radical alignment of people, processes, and technology for the next frontier of business. Through a synthesis of strategic foresight and human-centric change design, we enable your enterprise to reinvent itself and thrive amidst disruption in the global marketplace.',
		label: 'adaptation',
		headline: {
			clients: 'Daniel H. Carver',
			categories: 'Organizational Evolution',
			date: '03.06.2025',
			tags: 'Business Transformation',
			place: 'Singapore',
		},
		className: 'project--one',
	},
	{
		id: '2',
		projectName: 'Prime Strategy Creative Solutions Group',
		slug: slugify('Prime Strategy Creative Solutions Group'),
		images: {
			large: '/images/projects/project-3-strategy.webp',
			small: '/images/projects/project-3-strategy.webp',
		},
		content: [
			'In an environment of unprecedented disruption, static planning is obsolete—strategic foresight is the only path to market leadership. Our Business Strategy services focus on deconstructing market complexities to identify high-impact levers for long-term value creation. By synchronizing your core competencies with emerging market shifts, we empower your organization to move beyond traditional boundaries, ensuring that your corporate vision is translated into a resilient and future-proof roadmap.',
			'Leveraging deep macroeconomic insights and proprietary strategic frameworks, we enable your leadership to pivot with precision and capture sustainable competitive moats; we work as a strategic extension of your board to catalyze transformative decision-making and structural alignment.',
			'We focus on helping forward-thinking enterprises navigate industry convergence and maximize shareholder value. From formulating robust market-entry playbooks to deploying capital allocation strategies, we work side-by-side with your executive team to create a high-level strategic blueprint where your organization can define the future of the category.',
		],
		list: [
			'We offer bespoke corporate strategy architecture',
			'Designed to mitigate strategic risk, identify white-space opportunities, & enhance market positioning',
			'Our visionary frameworks are built to align with your long-term enterprise value goals',
		],
		mission:
			'Our mission is to fortify your strategic posture by re-imagining the pillars of corporate success for the modern era. Through a synthesis of competitive intelligence and visionary thinking, we enable your organization to master market dynamics and achieve dominant longevity within an ever-evolving global economy.',
		label: 'strategy',
		headline: {
			clients: 'Sophie L. Moreau',
			categories: 'Strategic Foresight',
			date: '02.02.2026',
			tags: 'Business Strategy',
			place: 'Paris, France',
		},
		className: 'project--two',
	},
	{
		id: '3',
		projectName: 'Vanguard Scalability Suite',
		slug: slugify('Vanguard Scalability Suite'),
		images: {
			large: '/images/projects/scalability-l.jpg',
			small: '/images/projects/scalability.jpg',
		},
		content: [
			'In an era of hyper-competition, traditional marketing is no longer sufficient—rapid experimentation is the new gold standard. Our Growth Hacking services focus on identifying high-leverage opportunities across the entire customer lifecycle to drive non-linear expansion. By fusing creative ingenuity with rigorous data-science, we empower your brand to achieve a state of exponential trajectory, ensuring that every touchpoint is optimized for maximum conversion and viral coefficient.',
			'Leveraging full-stack technical expertise and behavioral psychology, we enable your organization to bypass traditional growth plateaus and capture untapped market share; we work as an extension of your product team to catalyze rapid-fire testing and scalable acquisition loops.',
			'We focus on helping ambitious enterprises navigate market saturation and maximize customer lifetime value (CLV). From engineering viral loops to deploying automated retention frameworks, we work side-by-side with your growth squads to create a high-velocity engine where your market presence can truly dominate.',
		],
		list: [
			'We offer agile growth experimentation frameworks',
			'Designed to optimize conversion funnels, accelerate acquisition, & enhance viral scalability',
			'Our data-centric strategies are built to align with your aggressive revenue targets',
		],
		mission:
			'Our mission is to accelerate your market dominance by re-engineering the intersection of product, data, and marketing for the digital-first economy. Through a synthesis of rapid iteration cycles and data-backed performance marketing, we enable your enterprise to break through growth ceilings and scale aggressively within a volatile global marketplace.',
		label: 'scalability',
		headline: {
			clients: 'Marcus T. Delgado',
			categories: 'Revenue Acceleration',
			date: '22.10.2025',
			tags: 'Growth Hacking',
			place: 'Berlin, Germany',
		},
		className: 'project--three',
	},
	{
		id: '4',
		projectName: 'Momentum Enterprise Hub',
		slug: slugify('Momentum Enterprise Hu'),
		images: {
			large: '/images/projects/optimization-l.jpg',
			small: '/images/projects/optimization.jpg',
		},
		content: [
			'In a landscape defined by rapid volatility, operational excellence is no longer a luxury—it is a strategic necessity. Our Process Optimization services focus on driving systemic efficiency by identifying value-leakage points and eliminating redundant workflows. By harmonizing your internal architecture with agile methodologies, we empower your organization to achieve a state of continuous improvement, ensuring that every operational touchpoint is engineered for maximum throughput and sustainable scalability.',
			'Leveraging cross-functional industry knowledge and real-time process insights, we empower your organization to refine its value chain and achieve peak performance; we work as an extension of your leadership to catalyze systemic change.',
			'We focus on helping growing enterprises navigate complexity and maximize operational throughput. From standardizing fragmented procedures to deploying agile process controls, we work side-by-side with your staff to create a frictionless environment where your business can truly thrive.',
		],
		list: [
			'We offer systemic process engineering',
			'Designed to eliminate bottlenecks, maximize throughput, & enhance operational agility',
			'Our lean frameworks are built to align with your unique scalability goals',
		],
		mission:
			'Our mission is to accelerate your business velocity by re-engineering core workflows for the digital age. Through a synthesis of lean methodologies and data-backed process design, we enable your enterprise to eliminate waste and scale seamlessly within a competitive marketplace.',
		label: 'optimization',
		headline: {
			clients: 'Emma K. Whitaker',
			categories: 'Operational Intelligence',
			date: '09.07.2025',
			tags: 'Process Optimization',
			place: 'London, UK',
		},
		className: 'project--four',
	},
	{
		id: '5',
		projectName: 'Apex Business Catalyst',
		slug: slugify('Apex Business Catalyst'),
		images: {
			large: '/images/projects/consulting.jpg',
			small: '/images/projects/consulting.jpg',
		},
		content: [
			'In an era of constant change, staying ahead requires more than just good instincts—it requires expert planning and precise execution. Our corporate strategy consulting services help of organizations evaluate their current position, identify new opportunities, and implement high-impact strategies that maximize value. We work as an extension of...',
			'With deep industry knowledge and data-driven insights, we help you make smarter decisions that lead to long-term success we work as an extension.',
			'We specialize in helping small and medium-sized businesses overcome obstacles and unlock their full potential. From streamlining internal processes to crafting effective marketing strategies, our consulting team works closely with you to create practical.',
		],
		list: [
			'At Apex, we offer strategic business',
			'Designed to drive growth, improve operations, & enhance',
			'Our tailored solutions are built to align with your unique goals.',
		],
		mission:
			"Our mission is to empower your business to grow sustainably & competitively in today's ever-evolving market. With deep industry knowledge & data-driven insights.",
		label: 'consulting',
		headline: {
			clients: 'Jason B. Roy',
			categories: 'Market Reporting',
			date: '18.04.2025',
			tags: 'Business Consulting',
			place: 'New York City, USA',
		},
		className: 'project--five',
	},
]
