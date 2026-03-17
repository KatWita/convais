import './contact-form.scss'
import ButtonCta from './ButtonCta'
import ContactSelect, { type MyOption } from './ContactSelect'
import { useFetcher, type ActionFunctionArgs } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import ContactInput from './ContactInput'
import ContactTextarea from './ContactTextarea'
import { FaPaperPlane } from 'react-icons/fa'
import { emailRegex, usPhoneRegex } from '../utils/regex'
import { useUserData } from '../hooks/useUserData'

type Errors = {
	name?: string
	email?: string
	phoneNum?: string
	option?: string
	msg?: string
}

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData()
	const data = {
		name: formData.get('name') as string,
		email: formData.get('email') as string,
		phoneNum: formData.get('phone') as string,
		option: formData.get('option') as string,
		msg: formData.get('msg') as string,
	}
	const errors: Errors = {}

	if (!data.name) {
		errors.name = 'This field is required'
	}

	if (!emailRegex.test(data.email)) {
		errors.email = 'Please enter a valid email address'
	}

	if (!data.phoneNum) {
		errors.phoneNum = 'Please enter a phone number'
	}

	if (data.phoneNum && !usPhoneRegex.test(data.phoneNum)) {
		errors.phoneNum = 'Please enter US phone number format'
	}

	if (!data.option) {
		errors.option = 'Please select an option'
	}

	if (!data.msg) {
		errors.msg = 'This field is required'
	}

	if (Object.keys(errors).length > 0) {
		return { errors }
	}

	await new Promise(resolve => setTimeout(resolve, 1500))
	console.log('Sending data:', data)

	return { ok: true, msg: 'Form has been sent successfully' }
}

const ContactForm = () => {
	const [selectValue, setSelectValue] = useState<MyOption | null>(null)
	const [showToast, setShowToast] = useState(false)
	const [showErrors, setShowErrors] = useState(false)
	const formRef = useRef<HTMLFormElement>(null)
	const fetcher = useFetcher({ key: 'contact-form' })
	const { userData, isLoaded } = useUserData()

	const actionData = fetcher.data as { ok?: boolean; errors?: Errors } | undefined
	const isSubmitting = fetcher.state === 'submitting'
	const submittingIsDone = fetcher.state === 'idle' && actionData?.ok

	useEffect(() => {
		if (actionData?.errors) {
			setShowErrors(true)
		}
	}, [actionData])

	useEffect(() => {
		if (submittingIsDone) {
			formRef.current?.reset()
			setSelectValue(null)
		}
	}, [submittingIsDone])

	useEffect(() => {
		if (actionData?.ok) {
			setShowToast(true)
			setTimeout(() => setShowToast(false), 3000)
		}
	}, [actionData])

	if (!isLoaded) return null

	return (
		<>
			<fetcher.Form
				ref={formRef}
				method="POST"
				className="form"
				onBlur={e => {
					if (!e.currentTarget.contains(e.relatedTarget)) {
						setShowErrors(false)
					}
				}}
			>
				<div className="form__cont">
					<ContactInput
						type="text"
						name="name"
						placeholder="name..."
						id="name-input"
						label="Your Name"
						defaultValue={userData.name}
						key={`name-${userData.name}`}
						errorMsg={actionData?.errors?.name}
						showError={showErrors}
						isSubmitting={isSubmitting}
					/>
					<ContactInput
						type="text"
						name="email"
						placeholder="email..."
						id="email-input"
						label="Your Email"
						defaultValue={userData.email}
						key={`email-${userData.email}`}
						errorMsg={actionData?.errors?.email}
						showError={showErrors}
						isSubmitting={isSubmitting}
					/>
					<ContactInput
						type="text"
						name="phone"
						placeholder="phone..."
						id="phone-input"
						label="Phone No"
						errorMsg={actionData?.errors?.phoneNum}
						showError={showErrors}
						isSubmitting={isSubmitting}
					/>
					<ContactSelect
						label="Choose an option"
						errorMsg={actionData?.errors?.option}
						showError={showErrors}
						selectValue={selectValue}
						setSelectValue={setSelectValue}
						isSubmitting={isSubmitting}
					/>
					<ContactTextarea
						name="msg"
						id="msg-input"
						label="Write Message"
						errorMsg={actionData?.errors?.msg}
						showError={showErrors}
						isSubmitting={isSubmitting}
					/>
				</div>

				<ButtonCta label={isSubmitting ? 'submitting...' : 'submit now'} type="submit" disabled={isSubmitting} />
			</fetcher.Form>

			<div className={showToast ? 'toast show' : 'toast'}>
				<div className="toast__header">
					<FaPaperPlane fontSize="1.4rem" />
					<p>Message Sent!</p>
				</div>
				<p className="toast__text">
					Thank you for completing the form. <br />
					We'll be in touch soon!
				</p>
			</div>
		</>
	)
}

export default ContactForm
