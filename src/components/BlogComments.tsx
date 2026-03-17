import './blog-comments.scss'
import type { Comment } from '../db/schema'
import { formatCommentDate, formatNumberWithZero } from '../utils/helpers'
import { type Ref } from 'react'
import replyIcon from '../assets/icons/blogs/reply-icon.svg'
import { motion } from 'motion/react'
import { type FetcherWithComponents } from 'react-router'

type CommentActionData = { ok?: boolean; errors?: { comment?: string; name?: string; email?: string } }

type BlogCommentsProps = {
	comments: Comment[]
	ref: Ref<HTMLDivElement>
	fetcher: FetcherWithComponents<CommentActionData>
	onReply: (commentId: string) => void
	replyTo: string | null
}

const BlogComments = ({ comments, ref, fetcher, onReply, replyTo }: BlogCommentsProps) => {
	const commentValue = fetcher.formData?.get('comment') as string | null
	const isFormValid = commentValue && commentValue.trim().length >= 3
	const isProcessing = (fetcher.state as string) !== 'idle' && !!isFormValid
	const hasValidationError = !!fetcher.data?.errors
	const showEmptyMessage = comments.length === 0 && !isProcessing && (!fetcher.formData || hasValidationError)

	const mainComments = comments.filter(c => !c.parentId)
	const replies = comments.filter(c => c.parentId)

	const grouped = mainComments.map(main => ({
		...main,
		replies: replies.filter(r => r.parentId === main.id),
	}))

	// koloruje @mention
	const formatCommentText = (text: string) => {
		return text.replace(/(@\w+)/g, '<span class="mention">$1</span>')
	}

	return (
		<div id="comments" className="comments" ref={ref} style={{ scrollMarginTop: '100px' }}>
			<h4 className="comments__title blog-d-page__h4">Comments ({formatNumberWithZero(comments.length)})</h4>

			<motion.div
				className="comments__list"
				animate={{
					opacity: isProcessing ? 0.7 : 1,
					filter: isProcessing ? 'blur(1px)' : 'blur(0px)',
				}}
				transition={{ duration: 0.3 }}
			>
				{showEmptyMessage ? (
					<p className="comments__empty">No comments yet. Be the first to comment!</p>
				) : (
					grouped.map(main => (
						<div key={main.id}>
							<div
								id={`comment-${main.id}`}
								className={`comment comment--main ${replyTo === main.id ? 'comment--active' : ''}`}
							>
								<img src={main.avatar || '/images/default-avatar.png'} alt={main.author} className="comment__avatar" />

								<div className="comment__meta">
									<div className="comment__user">
										<p className="comment__author">{main.author}</p>
										<p className="comment__date">{main.createdAt ? formatCommentDate(main.createdAt) : ''}</p>
									</div>

									<button className="btn-reply" onClick={() => onReply(main.id)}>
										<img src={replyIcon} alt="reply icon" className="btn-reply__icon" />
										<span className="btn-reply__label">Reply</span>
									</button>
								</div>

								<p
									className="comment__text"
									dangerouslySetInnerHTML={{
										__html: formatCommentText(main.comment),
									}}
								/>
							</div>

							{main.replies.length > 0 && (
								<div className="comment__replies">
									{main.replies.map(r => (
										<div
											key={r.id}
											id={`comment-${r.id}`}
											className={`comment comment--reply ${replyTo === r.id ? 'comment--active' : ''}`}
										>
											<img src={r.avatar || '/images/default-avatar.png'} alt={r.author} className="comment__avatar" />

											<div className="comment__meta">
												<div className="comment__user">
													<p className="comment__author">{r.author}</p>
													<p className="comment__date">{r.createdAt ? formatCommentDate(r.createdAt) : ''}</p>
												</div>

												<button className="btn-reply" onClick={() => onReply(r.id)}>
													<img src={replyIcon} alt="reply icon" className="btn-reply__icon" />
													<span className="btn-reply__label">Reply</span>
												</button>
											</div>

											<p
												className="comment__text"
												dangerouslySetInnerHTML={{
													__html: formatCommentText(r.comment),
												}}
											/>
										</div>
									))}
								</div>
							)}
						</div>
					))
				)}
			</motion.div>
		</div>
	)
}

export default BlogComments
