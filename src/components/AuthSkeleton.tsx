import './auth-skeletons.scss'

type AuthSkeletonsProps = {
	option: 'login' | 'signup'
}

const topSkeletons = [
	{
		name: 'header',
		className: 'skeleton__item',
		styles: { width: '60%', height: '24px', margin: '0 auto 20px', borderRadius: '4px' },
	},
	{
		name: 'text',
		className: 'skeleton__item',
		styles: { width: '90%', height: '16px', margin: '0 auto 40px', borderRadius: '4px' },
	},
	{
		name: 'btn-google',
		className: 'skeleton__item skeleton__item--primary',
		styles: { width: '100%', height: '40px', margin: '0 0 28px', borderRadius: '0.5rem' },
	},
	{
		name: 'or',
		className: 'skeleton__item',
		styles: { width: '5%', height: '14px', margin: '0 auto 28px', borderRadius: '4px' },
	},
]

const SkeletonSmallInput = () => {
	return (
		<div className="skeleton__small-input">
			<div className="skeleton__small-input-label">
				<div className="skeleton__item" style={{ width: '40%', height: '15px', borderRadius: '4px' }} />
				<div className="skeleton__item" style={{ width: '30%', height: '11px', borderRadius: '4px' }} />
			</div>
			<div className="skeleton__item" style={{ width: '100%', height: '48px', borderRadius: '0.5rem' }} />
		</div>
	)
}

const SkeletonLgInput = ({ option }: { option: 'email' | 'password' }) => {
	const optionWidth = option === 'email' ? '35%' : '30%'

	return (
		<div className="skeleton__lg-input">
			<div
				className="skeleton__item"
				style={{ width: optionWidth, height: '15px', borderRadius: '4px', margin: '0 0 0.7rem' }}
			/>
			<div
				className="skeleton__item"
				style={{ width: '100%', height: '48px', margin: '0 0 24px', borderRadius: '0.5rem' }}
			/>
		</div>
	)
}

const AuthSkeleton = ({ option }: AuthSkeletonsProps) => {
	return (
		<div className={`skeleton skeleton--${option}`}>
			{/* Top */}
			{topSkeletons.map(({ name, className, styles }) => (
				<div key={name} className={className} style={styles} />
			))}

			{/* Małe inputy */}
			{option === 'signup' && (
				<div className="skeleton__small-inputs">
					{Array.from({ length: 2 }).map((_, index) => (
						<SkeletonSmallInput key={index} />
					))}
				</div>
			)}

			{/* Input - email */}
			<SkeletonLgInput option="email" />

			{/* Input - password */}
			{option === 'signup' && <SkeletonLgInput option="password" />}

			{/* Button */}
			<div
				className="skeleton__item skeleton__item--primary"
				style={{ width: '100%', height: '48px', borderRadius: '0.5rem', marginBottom: '44px' }}
			/>

			{/* Napisy pod buttonem */}
			<div className="skeleton__bottom-text">
				<div className="skeleton__item" style={{ width: '40%', height: '13px', borderRadius: '4px' }} />
				<div
					className="skeleton__item skeleton__item--primary"
					style={{ width: '15%', height: '13px', borderRadius: '4px' }}
				/>
			</div>
		</div>
	)
}
export default AuthSkeleton
