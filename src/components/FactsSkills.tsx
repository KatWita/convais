import { motion } from 'motion/react'
import { teamSkills } from '../data/team'
import AnimatedNumber from './AnimatedNumber'

const FactsSkills = () => {
	const shownSkills = teamSkills.filter(skill => skill.id === '1' || skill.id === '2')

	return (
		<div className="facts__skills">
			<h3 className="facts__skills-title">Skills & Experience</h3>
			<div className="skills-box">
				{shownSkills.map(({ id, skillName, amount }, index) => (
					<div className="skills__skill" key={id}>
						<div className="skills__name">
							<p>{skillName}</p>
							<p>
								<AnimatedNumber value={amount} delay={(shownSkills.length - 1 - index) * 0.4} />%
							</p>
						</div>
						<div className="skills__chart">
							<motion.div
								className={amount <= 75 ? 'skills__inner-chart' : 'skills__inner-chart skills__inner-chart--yellow'}
								initial={{ width: 0 }}
								whileInView={{ width: `calc(${amount}% - 12px)` }}
								viewport={{ once: true, amount: 0.5 }}
								transition={{
									duration: 1.2,
									ease: 'easeOut',
									delay: (shownSkills.length - 1 - index) * 0.4,
								}}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default FactsSkills
