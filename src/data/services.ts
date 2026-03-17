import { slugify } from './../utils/helpers'

export type Service = {
	id: string
	title: string
	slug: string
	text: string
	image: string
	icon: string
}

export type ExclusiveServices = {
	id: string
	title: string
	text: string
	icon: {
		dark: string
		light: string
	}
	slug: string
}

type ExclServicesBox = {
	id: string
	serviceName: string
	slug: string
}

export type AllService = {
	id: string
	title: string
	slug: string
	desc: string
	mistakeImg: string
	mistakes: string[]
	documents: { title: string; desc: string }[]
	features: string[]
	featuresImg: string
	featuresVideo: string
	featuresDesc: string
}

export const exclServicesBox: ExclServicesBox[] = [
	{ id: '1', serviceName: 'Strategic Planning', slug: slugify('Strategic Planning') },
	{ id: '2', serviceName: 'Business Optimization', slug: slugify('Business Optimization') },
	{ id: '3', serviceName: 'IT Consulting', slug: slugify('IT Consulting') },
	{ id: '4', serviceName: 'Change Management', slug: slugify('Change Management') },
	{ id: '5', serviceName: 'Leadership', slug: slugify('Leadership Development Program') },
]

export const allServices: AllService[] = [
	{
		id: '1',
		title: 'Market Entry & Expansion Strategy',
		slug: slugify('Market Entry & Expansion Strategy'),
		desc: 'Unlock new revenue streams by penetrating high-growth markets with a data-driven approach. Our framework focuses on mitigating entry barriers while leveraging local competitive advantages. We analyze macroeconomic indicators and consumer behavior to ensure your brand resonates from day one. Whether you are scaling regionally or going global, we provide the strategic roadmap to navigate regulatory landscapes and cultural nuances effectively. Our mission is to transform market complexity into a sustainable competitive edge through rigorous analysis and agile execution.',
		mistakeImg: '/images/services/service-mis-1.jpg',
		mistakes: [
			'Misalignment between global brand identity and local market expectations',
			'Underestimating the complexity of regional regulatory compliance frameworks',
			'Inadequate assessment of the local competitive landscape and pricing power',
			'Failing to establish scalable supply chain logistics during the initial phase',
		],
		documents: [
			{
				title: 'Market Feasibility Report',
				desc: 'A comprehensive evaluation of potential demand, competitive density, and economic viability within the target jurisdiction.',
			},
			{
				title: 'Regulatory Roadmap',
				desc: 'Detailed documentation outlining the legal requirements, licensing procedures, and compliance standards for the specific region.',
			},
			{
				title: 'Localization Strategy',
				desc: 'A strategic blueprint for adapting product offerings and marketing communication to align with local cultural paradigms.',
			},
			{
				title: 'Risk Mitigation Plan',
				desc: 'Identification of geopolitical, economic, and operational risks with established protocols for proactive crisis management.',
			},
		],
		features: [
			'Comprehensive benchmarking against top-tier industry incumbents',
			'End-to-end support for cross-border logistical and operational integration',
			'Advanced econometric modeling to forecast long-term ROI and market share',
			'Holistic approach combining digital transformation with traditional market wisdom.',
		],
		featuresImg: '/images/services/service-1.jpg',
		featuresVideo: 'https://www.youtube.com/embed/97mN7Wbr8ek?si=Ab4AexOI49CkcHos',
		featuresDesc:
			'We empower organizations to transcend geographical boundaries through strategic foresight and operational excellence. Our team of global consultants brings deep industry expertise to help you identify the most lucrative opportunities. From initial due diligence to full-scale commercial launch, we act as your strategic partner in global growth. At Convais, we turn expansion challenges into scalable success stories.',
	},
	{
		id: '2',
		title: 'Execution & Operational Strategy',
		slug: slugify('Execution & Operational Strategy'),
		desc: 'Close the gap between high-level vision and daily operational reality. Our framework focuses on translating strategic objectives into actionable workflows that drive tangible results. We analyze your current value chain to identify bottlenecks, eliminate redundancies, and synchronize cross-departmental efforts. By implementing robust execution protocols and accountability structures, we ensure that your strategic roadmap doesn’t just sit on a shelf but becomes the heartbeat of your organizational performance. It is about moving from "what we want to do" to "how we get it done" with surgical precision.',
		mistakeImg: '/images/services/service-mis-2.jpg',
		mistakes: [
			'Misalignment between executive vision and frontline operational capacity',
			'Fragmented communication silos preventing cross-functional synergy',
			'Reliance on legacy processes that fail to support modern scalability',
			'Absence of real-time performance tracking and feedback loops',
		],
		documents: [
			{
				title: 'Operational Efficiency Audit',
				desc: 'A granular analysis of your current workflows to identify cost-saving opportunities and throughput bottlenecks.',
			},
			{
				title: 'Strategic Roadmap 2.0',
				desc: 'A detailed execution blueprint mapping out milestones, resource allocation, and key responsibility areas.',
			},
			{
				title: 'SOP Standardization Kit',
				desc: 'Standard Operating Procedures designed to ensure consistency, quality control, and rapid onboarding across the board.',
			},
			{
				title: 'KPI Dashboard Framework',
				desc: 'Custom metrics and reporting structures to monitor execution progress and operational health in real-time.',
			},
		],
		features: [
			'Elimination of operational friction through lean methodology',
			'Optimization of resource allocation to maximize departmental output',
			'Implementation of agile execution frameworks for faster market response',
			'Seamless integration of operational goals with long-term financial targets.',
		],
		featuresImg: '/images/services/service-2.jpg',
		featuresVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=yKkxdAHimbExRkqf',
		featuresDesc:
			"Strategy without execution is just an expensive hallucination. We specialize in the 'how' of business, providing the tools and leadership required to turn complex plans into flawless operations. Our approach combines data-driven insights with hands-on support to transform your organization into a high-performance engine. At Convais, we make strategy happen.",
	},
	{
		id: '3',
		title: 'Investment Readiness Consulting',
		slug: slugify('Investment Readiness Consulting'),
		desc: 'Maximize your valuation and streamline the capital-raising process with our specialized readiness program. We bridge the gap between operational reality and investor expectations by optimizing your financial narrative and governance structure. Our consultants work closely with your leadership to refine your pitch, clean up your cap table, and prepare a robust data room that stands up to the most rigorous due diligence. We don’t just help you find investors; we prepare you to secure the best possible terms for your long-term vision.',
		mistakeImg: '/images/services/service-mis-3.jpg',
		mistakes: [
			'Lack of transparency in historical financial reporting and projections',
			'Incomplete due diligence documentation leading to deal fatigue',
			'Weak value proposition that fails to address specific investor mandates',
			'Unclear exit strategies or long-term liquidity roadmaps for stakeholders',
		],
		documents: [
			{
				title: 'Investment Memorandum',
				desc: 'High-impact document highlighting the unique value proposition, market traction, and future scalability of your business.',
			},
			{
				title: 'Financial Model (3-5 Years)',
				desc: 'Dynamic, scenario-based forecasting that demonstrates fiscal responsibility and significant growth potential.',
			},
			{
				title: 'Clean Cap Table',
				desc: 'A verified overview of equity distribution, ensuring transparency and preventing potential legal roadblocks during funding.',
			},
			{
				title: 'Pitch Deck Portfolio',
				desc: 'Visually compelling and data-rich presentations tailored to different classes of investors and venture capitalists.',
			},
		],
		features: [
			'Expert-led mock due diligence sessions to identify potential red flags',
			'Strategic introductions to a curated network of global capital partners',
			'Full optimization of your business model for maximum valuation multiples',
			'Bespoke advisory on equity structuring and post-funding governance.',
		],
		featuresImg: '/images/services/service-3.jpg',
		featuresVideo: 'https://www.youtube.com/embed/gAYL5H46QnQ?si=GOYit4Ijs2cD084h',
		featuresDesc:
			'Securing investment is more than just a transaction; it is a strategic milestone. We provide the technical expertise and the narrative power required to captivate institutional investors. Our team ensures that your organization is not only ready for funding but poised for the exponential growth that follows. At Convais, your vision meets our execution.',
	},
	{
		id: '4',
		title: 'Leadership Development Program',
		slug: slugify('Leadership Development Program'),
		desc: 'Cultivate the next generation of visionary leaders equipped to navigate the complexities of the modern global economy. Our program transcends traditional management training by focusing on emotional intelligence, adaptive decision-making, and strategic influence. We bridge the gap between technical expertise and inspirational leadership, ensuring your executive pipeline is robust and ready for future challenges. Through a blend of immersive workshops, psychometric profiling, and high-impact coaching, we transform high-potential managers into transformative leaders who can drive culture, innovation, and sustainable growth.',
		mistakeImg: '/images/services/service-mis-4.jpg',
		mistakes: [
			'Over-reliance on hierarchical command-and-control structures',
			'Failure to address the soft skills gap in senior management roles',
			'Inadequate succession planning for critical organizational positions',
			'Lack of alignment between leadership style and corporate values',
		],
		documents: [
			{
				title: 'Leadership Competency Framework',
				desc: 'A bespoke matrix defining the specific behaviors and skills required to lead effectively within your unique culture.',
			},
			{
				title: '360-Degree Feedback Report',
				desc: 'Comprehensive multi-source assessments providing a holistic view of leadership impact and areas for development.',
			},
			{
				title: 'Succession Strategy Blueprint',
				desc: 'A long-term roadmap for identifying and nurturing internal talent to ensure leadership continuity.',
			},
			{
				title: 'Executive Development Plan (EDP)',
				desc: 'Personalized growth trajectories for high-potential individuals, focusing on both strengths and blind spots.',
			},
		],
		features: [
			'Focus on neuro-leadership and cognitive behavioral agility',
			'Scenario-based crisis management and resilience training',
			'Strategic networking and peer-to-peer executive coaching',
			'Alignment of leadership goals with organizational KPIs and vision.',
		],
		featuresImg: '/images/services/service-4.jpg',
		featuresVideo: 'https://www.youtube.com/embed/pDxn0Xfqkgw?si=28RUfzbaJPjfqD46',
		featuresDesc:
			"The quality of an organization is a direct reflection of the quality of its leaders. We provide the intellectual and practical framework needed to foster a culture of excellence and accountability. Our mission is to equip your leaders with the clarity and confidence to lead through uncertainty. At Convais, we don't just train managers; we inspire the pioneers of tomorrow.",
	},
	{
		id: '5',
		title: 'Financial Planning & Analysis',
		slug: slugify('Financial Planning & Analysis'),
		desc: 'Transform raw financial data into a strategic asset that drives informed decision-making across your entire organization. Our FP&A framework goes beyond traditional bookkeeping to provide deep insights into profitability, cash flow dynamics, and capital allocation. We utilize advanced predictive modeling to forecast market shifts and assess the financial impact of various strategic scenarios. By aligning your fiscal goals with operational realities, we ensure your business remains resilient in volatile markets while maximizing shareholder value and long-term sustainability.',
		mistakeImg: '/images/services/service-mis-5.jpg',
		mistakes: [
			'Reliance on static budgeting models in a dynamic and volatile market',
			'Inaccurate cash flow forecasting leading to liquidity constraints',
			'Failure to integrate non-financial KPIs into the overall fiscal narrative',
			'Overlooked tax efficiencies and suboptimal capital structure management',
		],
		documents: [
			{
				title: 'Integrated Financial Forecast',
				desc: 'A comprehensive 5-year projection including P&L, Balance Sheet, and Cash Flow statements under multiple scenarios.',
			},
			{
				title: 'Variance Analysis Report',
				desc: 'Detailed monthly or quarterly breakdowns of actual vs. planned performance with actionable corrective measures.',
			},
			{
				title: 'Capital Expenditure (CapEx) Plan',
				desc: 'Strategic evaluation of long-term investments to ensure optimal ROI and alignment with growth targets.',
			},
			{
				title: 'Cost Optimization Blueprint',
				desc: 'An exhaustive review of fixed and variable costs to identify efficiency gains without compromising quality.',
			},
		],
		features: [
			"Scenario-based 'what-if' modeling for proactive risk management",
			'Development of customized Rolling Forecasts for continuous planning',
			'Benchmarking against industry-specific financial performance standards',
			'Advanced data visualization for transparent stakeholder reporting.',
		],
		featuresImg: '/images/services/service-5.jpg',
		featuresVideo: 'https://www.youtube.com/embed/mw0_GAsvU70?si=hPUchFiFWjnSfrI3',
		featuresDesc:
			'Financial clarity is the cornerstone of corporate agility. We empower your leadership team with the visibility required to navigate complex fiscal landscapes with confidence. Our approach combines technical precision with a broad strategic perspective, ensuring every dollar is working toward your ultimate business objectives. At Convais, we turn your balance sheet into a roadmap for growth.',
	},
	{
		id: '6',
		title: 'Strategic Planning',
		slug: slugify('Strategic Planning'),
		desc: 'Define your organization’s North Star and build a concrete roadmap to reach it. Strategic planning is not about predicting the future, but about being prepared for it. We facilitate high-level executive sessions to clarify your core mission, identify blue-ocean opportunities, and establish a framework for sustainable competitive advantage. Our methodology integrates environmental scanning with internal capability assessments to ensure that your long-term goals are both ambitious and achievable. We help you move from reactive tactics to a proactive stance that shapes your industry’s future.',
		mistakeImg: '/images/services/service-mis-6.jpg',
		mistakes: [
			'Confusing short-term operational goals with long-term strategic vision',
			'Lack of organizational buy-in leading to poor strategy execution',
			'Failing to account for disruptive technological and market shifts',
			'Static planning cycles that lack the agility to pivot when necessary',
		],
		documents: [
			{
				title: 'Strategic Vision Statement',
				desc: 'A foundational document aligning stakeholders on the long-term purpose, values, and objectives of the enterprise.',
			},
			{
				title: 'SWOT & PESTEL Analysis',
				desc: 'An exhaustive assessment of internal strengths/weaknesses and external macro-environmental factors.',
			},
			{
				title: 'Strategic Pillars & Initiatives',
				desc: 'A breakdown of key focus areas and the specific projects required to move the needle over the next 3-5 years.',
			},
			{
				title: 'Resource Allocation Matrix',
				desc: 'A high-level plan ensuring that capital and human talent are deployed where they generate the most strategic value.',
			},
		],
		features: [
			'Facilitation of executive leadership retreats and workshops',
			'Scenario planning to build resilience against market volatility',
			'Alignment of corporate, business, and functional-level strategies',
			'Cascade modeling to ensure strategy reaches every level of the workforce.',
		],
		featuresImg: '/images/services/service-6.jpg',
		featuresVideo: 'https://www.youtube.com/embed/ZZ5LpwO-An4?si=WO5-DTKYTTKzh74S',
		featuresDesc:
			"A strategy is only as good as the clarity it provides. We strip away the noise to help you focus on the 'big bets' that will define your success in the coming decade. By combining creative thinking with rigorous analytical discipline, we ensure your organization is always three steps ahead. At Convais, we don’t just plan for the future—we help you build it.",
	},
	{
		id: '7',
		title: 'Business Optimization',
		slug: slugify('Business Optimization'),
		desc: 'Maximize your organizational throughput by identifying and eliminating systemic inefficiencies. Our business optimization suite is designed to streamline complex workflows, reduce operational friction, and enhance resource utilization across all departments. We utilize data-driven methodologies to dissect your current processes, pinpointing waste and implementing lean solutions that yield immediate bottom-line improvements. Whether it is automating manual tasks or restructuring entire value chains, we focus on creating a leaner, more agile enterprise capable of scaling without a proportional increase in overhead.',
		mistakeImg: '/images/services/service-mis-7.jpg',
		mistakes: [
			'Persistence of "hidden waste" within undocumented legacy workflows',
			'Suboptimal use of automation, leading to "digital silos" of information',
			'Inconsistent quality control measures across different business units',
			'Over-complicating simple processes through excessive bureaucratic layers',
		],
		documents: [
			{
				title: 'Process Map & Value Stream Analysis',
				desc: 'A visual diagnostic of your entire workflow, highlighting areas of high value versus non-value-adding activities.',
			},
			{
				title: 'Efficiency Benchmark Report',
				desc: 'A comparative study of your operational performance against top-tier industry standards and competitors.',
			},
			{
				title: 'Automation Roadmap',
				desc: 'A strategic plan for integrating AI and robotic process automation (RPA) into your daily operations.',
			},
			{
				title: 'Operational Cost-Reduction Plan',
				desc: 'A targeted initiative focusing on reducing unit costs while maintaining or enhancing output quality.',
			},
		],
		features: [
			'Deployment of Lean and Six Sigma principles for continuous improvement',
			'Real-time bottleneck identification and mitigation strategies',
			'Optimization of supply chain and inventory management systems',
			'Change management support to ensure long-term adoption of new processes.',
		],
		featuresImg: '/images/services/service-7.jpg',
		featuresVideo: 'https://www.youtube.com/embed/enYdAxVcNZA?si=_KzFv79a-Dqlv0vL',
		featuresDesc:
			"Optimization is not a one-time event, but a continuous pursuit of excellence. We provide the analytical rigor and the practical tools needed to transform your business into a high-efficiency machine. By fostering a culture of marginal gains, we help you achieve exponential results. At Convais, we don't just find problems—we engineer solutions that scale.",
	},
	{
		id: '8',
		title: 'IT Consulting',
		slug: slugify('IT Consulting'),
		desc: 'Align your technological infrastructure with your long-term business objectives through our comprehensive IT advisory services. In an era of rapid digital disruption, we help you navigate the complex landscape of cloud computing, cybersecurity, and enterprise architecture. Our approach focuses on building a scalable, resilient, and secure digital foundation that empowers innovation rather than hindering it. From legacy system modernization to the integration of cutting-edge AI solutions, we ensure your IT investments deliver measurable business value and a superior user experience.',
		mistakeImg: '/images/services/service-mis-8.jpg',
		mistakes: [
			'Investing in disjointed technologies that create fragmented data silos',
			'Underestimating the critical importance of proactive cybersecurity protocols',
			'Failing to align IT roadmaps with the actual needs of the business units',
			'Accumulating technical debt by over-relying on obsolete legacy systems',
		],
		documents: [
			{
				title: 'Enterprise Architecture Audit',
				desc: 'A comprehensive review of your hardware, software, and networking layers to identify gaps and redundancies.',
			},
			{
				title: 'Digital Transformation Roadmap',
				desc: 'A phased strategic plan for migrating to the cloud and adopting modern, scalable software ecosystems.',
			},
			{
				title: 'Cybersecurity Risk Assessment',
				desc: 'An exhaustive analysis of potential vulnerabilities with a detailed plan for threat mitigation and data protection.',
			},
			{
				title: 'IT Governance Framework',
				desc: 'Policies and standards to ensure consistent technology management, compliance, and ROI across the enterprise.',
			},
		],
		features: [
			'Strategic advisory on Cloud Migration and Hybrid-IT solutions',
			'Expert-led evaluation and selection of enterprise software (ERP/CRM)',
			'Implementation of robust data analytics and business intelligence tools',
			'Continuous monitoring and optimization of IT infrastructure performance.',
		],
		featuresImg: '/images/services/service-8.jpg',
		featuresVideo: 'https://www.youtube.com/embed/StYkb5kbM3o?si=wfspt4M25f75yOuc',
		featuresDesc:
			'Technology should be a catalyst for growth, not a source of friction. We provide the expertise needed to transform your IT department from a cost center into a strategic engine of innovation. By staying ahead of the curve, we help you leverage technology to outpace the competition. At Convais, we build the digital future of your business.',
	},
	{
		id: '9',
		title: 'Change Management',
		slug: slugify('Change Management'),
		desc: 'Navigate the human side of organizational transformation with a structured, empathetic, and results-oriented approach. Major shifts—whether digital, structural, or cultural—often fail due to internal resistance and poor communication. Our framework minimizes disruption by aligning your workforce with the new strategic direction, ensuring high adoption rates and long-term sustainability. We help you transform "change fatigue" into "change readiness" by fostering a transparent environment where every employee understands their role in the future state of the enterprise.',
		mistakeImg: '/images/services/service-mis-9.jpg',
		mistakes: [
			'Undercommunicating the "why" behind the change to frontline employees',
			'Neglecting the emotional and psychological impact of transition on staff',
			'Failing to identify and engage key internal influencers and stakeholders',
			'Declaring victory too early before the new behaviors are fully embedded',
		],
		documents: [
			{
				title: 'Change Impact Assessment',
				desc: 'A detailed analysis of how proposed changes will affect specific departments, roles, and daily workflows.',
			},
			{
				title: 'Stakeholder Engagement Map',
				desc: 'A strategic visualization of key players, their influence levels, and tailored communication plans for each group.',
			},
			{
				title: 'Internal Communication Toolkit',
				desc: 'Messaging frameworks and multi-channel plans designed to build trust and maintain transparency throughout the transition.',
			},
			{
				title: 'Training & Adoption Metrics',
				desc: 'A data-driven report tracking how well the team is learning and implementing new systems or behaviors.',
			},
		],
		features: [
			'Expert-led workshops for overcoming organizational resistance',
			'Development of a "Change Champions" network within your company',
			'Strategic alignment of leadership messaging to ensure consistency',
			'Post-implementation audits to ensure the new culture sticks.',
		],
		featuresImg: '/images/services/service-9.jpg',
		featuresVideo: 'https://www.youtube.com/embed/QuvqzlxEO6g?si=wc4oTily3HPKKnJK',
		featuresDesc:
			"The only constant in business is change, but the most successful companies are those that master the transition. We provide the psychological insights and operational discipline needed to move your team from the status quo to a better future. Our mission is to make transformation a core competency of your organization. At Convais, we don't just manage change—we lead it.",
	},
]

export const services: Service[] = [
	{
		id: '1',
		title: 'Market Entry & Expansion Strategy',
		slug: slugify('Market Entry & Expansion Strategy'),
		text: 'Refresh your skill, our team of experienced instructors will guide you every step',
		image: '/images/services/market-img.webp',
		icon: '/images/services/market-icon.svg',
	},
	{
		id: '2',
		title: 'Execution & Operational Strategy',
		slug: slugify('Execution & Operational Strategy'),
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, deleniti rerum ut voluptatibus fuga eligendi eos quibusdam autem quisquam cupiditate?',
		image: '/images/services/execution-img.webp',
		icon: '/images/services/execution-icon.svg',
	},
	{
		id: '3',
		title: 'Investment Readiness Consulting',
		slug: slugify('Investment Readiness Consulting'),
		text: 'Refresh your skill, our team of experienced instructors will guide you every step',
		image: '/images/services/investment-img.webp',
		icon: '/images/services/investment-icon.svg',
	},
]

export const exclusiveServices: ExclusiveServices[] = [
	{
		id: '1',
		title: 'Market Entry & Expansion Strategy',
		slug: slugify('Market Entry & Expansion Strategy'),
		text: 'Refresh your skill, our team of experienced instructor will guide you every step',
		icon: {
			dark: '/images/exclusive-services/expansion-strategy-dark-icon.png',
			light: '/images/exclusive-services/expansion-strategy-light-icon.png',
		},
	},
	{
		id: '2',
		title: 'Execution & Operational Strategy',
		slug: slugify('Execution & Operational Strategy'),
		text: 'Refresh your skill, our team of experienced instructors will guide you every step',
		icon: {
			dark: '/images/exclusive-services/operational-strategy-dark-icon.png',
			light: '/images/exclusive-services/operational-strategy-light-icon.png',
		},
	},
	{
		id: '3',
		title: 'Investment Readiness Consulting',
		slug: slugify('Investment Readiness Consulting'),
		text: 'Refresh your skill, our team of experienced instructors will guide you every step',
		icon: {
			dark: '/images/exclusive-services/investment-readiness-dark-icon.png',
			light: '/images/exclusive-services/investment-readiness-dark-icon.png',
		},
	},
	{
		id: '4',
		title: 'Leadership Development Program',
		slug: slugify('Leadership Development Program'),
		text: 'Refresh your skill, our team of experienced instructors will guide you every step',
		icon: {
			dark: '/images/exclusive-services/leadership-development-dark-icon.png',
			light: 'images/exclusive-services/leadership-development-light-icon.png',
		},
	},
	{
		id: '5',
		title: 'Financial Planning & Analysis',
		slug: slugify('Financial Planning & Analysis'),
		text: 'Refresh your skill, our team of experienced instructors will guide you every step',
		icon: {
			dark: '/images/exclusive-services/financial-planning-dark-icon.png',
			light: '/images/exclusive-services/financial-planning-light-icon.png',
		},
	},
]
