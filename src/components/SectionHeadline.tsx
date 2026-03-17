import './section-headline.scss'

type SectionHeadlineProps = {
	label: string
	title: string
}

const SectionHeadline = ({ label, title }: SectionHeadlineProps) => {
	return (
		<div className="headline">
			<p className="headline__label">
				&gt;&gt;&gt;&nbsp;
				<span>{label}</span>
				&nbsp;&lt;&lt;&lt;
			</p>
			<h2 className="headline__title">{title}</h2>
		</div>
	)
}
export default SectionHeadline
