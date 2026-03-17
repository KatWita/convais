import { motion } from 'motion/react'
import { teamSkills } from '../data/team'
import './skills.scss'
import AnimatedNumber from './AnimatedNumber'

const Skills = () => {
	return (
		<div className="skills">
			<h3 className="skills__title">Professional Skills</h3>
			{teamSkills.map(({ id, skillName, amount }, index) => (
				<div className="skills__skill" key={id}>
					<div className="skills__name">
						<p>{skillName}</p>
						<p>
							<AnimatedNumber value={amount} delay={index * 0.2} />%
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
								delay: index * 0.2,
							}}
						/>
					</div>
				</div>
			))}
			<div className="experience">
				<p className="experience__year">
					<AnimatedNumber value={30} delay={teamSkills.length * 0.2} />+
				</p>
				<p className="experience__text">Years of Experience</p>
			</div>
		</div>
	)
}

export default Skills
