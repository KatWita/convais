import { useEffect, useState } from 'react'
import { MdError } from 'react-icons/md'

type ContactTextareaProps = React.ComponentPropsWithoutRef<'textarea'> & {
	id: string
	label: string
	errorMsg: string | undefined
	showError: boolean
	isSubmitting: boolean
}

const ContactTextarea = ({ id, label, errorMsg, showError, isSubmitting, ...rest }: ContactTextareaProps) => {
	const [lastError, setLastError] = useState(errorMsg)

	useEffect(() => {
		if (errorMsg) setLastError(errorMsg)
	}, [errorMsg])

	const visible = showError && !!errorMsg && !isSubmitting

	return (
		<div className={visible ? 'form__input-box error' : 'form__input-box'}>
			<label htmlFor="msg-input" className="form__label">
				{label}
				<span>*</span>
			</label>
			<textarea className="form__msg" id={id} {...rest} />
			<p className={`form__error ${visible ? 'form__error--visible' : ''}`}>
				<MdError fill="hsl(0, 81%, 61%)" /> {lastError}
			</p>
		</div>
	)
}
export default ContactTextarea
