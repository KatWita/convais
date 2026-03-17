import './services-accordion.scss'
import { useState } from 'react'
import { IoMdArrowForward } from 'react-icons/io'

const faqs = [
	{
		q: 'How do you charge for your services?',
		a: 'Our pricing models are flexible and tailored to the project scope, ranging from hourly rates and monthly retainers to fixed project-based fees.',
	},
	{
		q: 'What types of businesses do you work with?',
		a: 'We work with startups, small-to-medium enterprises (SMEs), and large corporations across various industries including retail, tech, manufacturing, and services.',
	},
	{
		q: 'What is your consulting process?',
		a: 'Our process follows a proven 4-step framework: Discovery and analysis, Strategic planning, Hands-on implementation, and Post-project evaluation.',
	},
	{
		q: 'How long does a typical engagement last?',
		a: 'Project timelines vary depending on complexity. Strategy audits typically take 4-8 weeks, while full-scale implementations can last from 3 to 12 months.',
	},
]

const ServicesAccordion = () => {
	const [open, setOpen] = useState<number | null>(null)

	const toggle = (i: number) => setOpen(open === i ? null : i)

	return (
		<div className="acc">
			<div className="acc__questions">
				{faqs.map((item, i) => {
					const isOpen = open === i

					return (
						<div key={i} className={isOpen ? 'acc__question open' : 'acc__question'}>
							<button onClick={() => toggle(i)} className="acc__header">
								<span className="acc__header-q">
									{i + 1}. {item.q}
								</span>
								<span className="acc__header-i">
									<IoMdArrowForward fontSize={26} />
								</span>
							</button>

							<div className="acc__answer">
								<p className="acc__text">{item.a}</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ServicesAccordion
