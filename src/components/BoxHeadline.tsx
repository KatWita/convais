import './box-headline.scss'

type BoxHeadlineProps = {
	title: string
}

const BoxHeadline = ({ title }: BoxHeadlineProps) => {
	return (
		<h3 className="box-headline">
			{title}

			<div className="box-headline__icon">
				<span className="box-headline__icon--circle"></span>
				<span className="box-headline__icon--line"></span>
				<span className="box-headline__icon--circle"></span>
			</div>
		</h3>
	)
}
export default BoxHeadline
