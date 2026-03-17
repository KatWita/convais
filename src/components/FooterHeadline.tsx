type FooterHeadlineTypes = {
	label: string
}

const FooterHeadline = ({ label }: FooterHeadlineTypes) => {
	return (
		<h3 className="footer__headline">
			{label}
			<div className="footer__underline">
				<span className="footer__underline--circle"></span>
				<span className="footer__underline--line"></span>
				<span className="footer__underline--circle"></span>
			</div>
		</h3>
	)
}
export default FooterHeadline
