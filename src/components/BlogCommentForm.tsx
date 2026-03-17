import './blog-comment-form.scss'
import { useState, useEffect, useRef } from 'react'
import { useUser } from '@clerk/clerk-react'
import { type FetcherWithComponents, type ActionFunctionArgs } from 'react-router'
import ButtonCta from './ButtonCta'
import { emailRegex } from '../utils/regex'
import { MdError } from 'react-icons/md'
import { motion, AnimatePresence } from 'motion/react'

type CommentErrors = { comment?: string; name?: string; email?: string }
type CommentActionData = { ok?: boolean; errors?: CommentErrors }

type BlogCommentFormProps = {
	blogId: string
	onCommentAdded: () => void
	fetcher: FetcherWithComponents<CommentActionData>
	parentId?: string | null
	replyingTo?: string | null
	onCancelReply?: () => void
}

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData()

	const blogId = formData.get('blogId') as string
	const comment = formData.get('comment') as string
	const author = formData.get('author') as string
	const avatar = formData.get('avatar') as string
	const parentId = formData.get('parentId') as string | null
	const guestName = formData.get('guestName') as string | null
	const guestEmail = formData.get('guestEmail') as string | null

	const errors: CommentErrors = {}

	if (!comment || comment.trim().length < 3) {
		errors.comment = 'Comment must be at least 3 characters'
	}

	if (guestName !== null && guestName.trim().length < 2) {
		errors.name = 'Name must be at least 2 characters'
	}

	if (guestEmail !== null && !emailRegex.test(guestEmail)) {
		errors.email = 'Please enter a valid email address'
	}

	if (Object.keys(errors).length > 0) {
		return { errors }
	}

	try {
		const response = await fetch('/api/comments', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				blogId,
				comment,
				author,
				avatar,
				parentId: parentId || null,
			}),
		})

		if (!response.ok) {
			return { errors: { comment: 'Failed to save comment on server' } }
		}

		return { ok: true }
	} catch {
		return { errors: { comment: 'Network error' } }
	}
}

const BlogCommentForm = ({
	blogId,
	onCommentAdded,
	fetcher,
	parentId,
	replyingTo,
	onCancelReply,
}: BlogCommentFormProps) => {
	const { isSignedIn, user } = useUser()
	const [showErrors, setShowErrors] = useState(false)
	const formRef = useRef<HTMLFormElement>(null)

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [saveData, setSaveData] = useState(false)

	const actionData = fetcher.data
	const isSubmitting = (fetcher.state as string) === 'submitting'

	const [lastComment, setLastComment] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [lastEmail, setLastEmail] = useState<string>('')

	const commentVisible = showErrors && !!actionData?.errors?.comment && !isSubmitting
	const nameVisible = showErrors && !!actionData?.errors?.name && !isSubmitting
	const emailVisible = showErrors && !!actionData?.errors?.email && !isSubmitting

	useEffect(() => {
		if (actionData?.errors?.comment) setLastComment(actionData.errors.comment)
		if (actionData?.errors?.name) setLastName(actionData.errors.name)
		if (actionData?.errors?.email) setLastEmail(actionData.errors.email)
	}, [actionData])

	useEffect(() => {
		if (actionData?.errors) {
			setShowErrors(true)
		}
	}, [actionData])

	// Load guest data
	useEffect(() => {
		if (!isSignedIn) {
			const saved = localStorage.getItem('guest_data')
			if (saved) {
				const parsed = JSON.parse(saved)
				setName(parsed.name)
				setEmail(parsed.email)
				setSaveData(true)
			}
		}
	}, [isSignedIn])

	// Save guest data
	useEffect(() => {
		if (!isSignedIn) {
			if (saveData) {
				localStorage.setItem('guest_data', JSON.stringify({ name, email }))
			} else {
				localStorage.removeItem('guest_data')
			}
		}
	}, [saveData, name, email, isSignedIn])

	// Reset form on success
	useEffect(() => {
		const state = fetcher.state as string
		if (actionData?.ok && state === 'idle') {
			const textarea = formRef.current?.querySelector('textarea')
			if (textarea) textarea.value = ''

			if (!saveData) {
				setName('')
				setEmail('')
			}

			onCommentAdded()
		}
	}, [actionData, onCommentAdded, saveData, fetcher.state])

	const authorName: string = isSignedIn ? (user.username ?? user.fullName ?? 'Anonymous') : name
	const authorAvatar: string = isSignedIn ? user.imageUrl : '/images/blog/default-user-avatar.jpg'

	return (
		<>
			<fetcher.Form
				method="post"
				ref={formRef}
				action="."
				className="comment-form"
				preventScrollReset={true}
				onBlur={e => {
					if (!e.currentTarget.contains(e.relatedTarget)) {
						setShowErrors(false)
					}
				}}
			>
				<AnimatePresence mode="wait">
					{parentId && replyingTo && (
						<motion.div
							key="reply-banner"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.15 }}
							className="comment-form__replying"
						>
							<div className="comment-form__replying-left">
								<p>
									Replying to <span className="comment-form__mention">@{replyingTo}</span>
								</p>
							</div>

							<button type="button" className="comment-form__cancel-reply" onClick={onCancelReply}>
								Cancel
							</button>
						</motion.div>
					)}
				</AnimatePresence>

				<motion.div layout transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}>
					<h4 className="comment-form__title blog-d-page__h4">Leave a Reply</h4>

					<div className={`comment-form__input-box ${commentVisible ? 'error' : ''}`}>
						<textarea className="comment-form__msg" name="comment" placeholder="Message..." />
						<p
							className={`comment-form__error comment-form__error--textarea ${commentVisible ? 'comment-form__error--visible' : ''}`}
						>
							<MdError fill="hsl(0, 81%, 61%)" /> {lastComment}
						</p>
					</div>

					{!isSignedIn && (
						<div className="comment-form__guest">
							<div className="comment-form__top">
								<div className={`comment-form__input-box ${nameVisible ? 'error' : ''}`}>
									<input
										className="comment-form__input"
										type="text"
										name="guestName"
										placeholder="Name..."
										value={name}
										onChange={e => setName(e.target.value)}
									/>
									<p
										className={`comment-form__error ${showErrors && actionData?.errors?.name && !isSubmitting ? 'comment-form__error--visible' : ''}`}
									>
										<MdError fill="hsl(0, 81%, 61%)" /> {lastName}
									</p>
								</div>
								<div className={`comment-form__input-box ${emailVisible ? 'error' : ''}`}>
									<input
										className="comment-form__input"
										type="text"
										name="guestEmail"
										placeholder="Email..."
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
									<p
										className={`comment-form__error ${showErrors && actionData?.errors?.email && !isSubmitting ? 'comment-form__error--visible' : ''}`}
									>
										<MdError fill="hsl(0, 81%, 61%)" /> {lastEmail}
									</p>
								</div>
							</div>
							<div className="comment-form__checkbox">
								<input id="saveData" type="checkbox" checked={saveData} onChange={e => setSaveData(e.target.checked)} />
								<label htmlFor="saveData" className="comment-form__checkbox-label">
									Save my name and email in this browser for the next time I comment.
								</label>
							</div>
						</div>
					)}
				</motion.div>

				<input type="hidden" name="blogId" value={blogId} />
				<input type="hidden" name="author" value={authorName} />
				<input type="hidden" name="avatar" value={authorAvatar} />
				<input type="hidden" name="parentId" value={parentId ?? ''} />

				<div className="comment-form__actions">
					<ButtonCta label={isSubmitting ? 'submitting...' : 'submit now'} type="submit" disabled={isSubmitting} />
				</div>
			</fetcher.Form>
		</>
	)
}

export default BlogCommentForm
