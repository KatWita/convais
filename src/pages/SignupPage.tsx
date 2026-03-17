import { SignUp, useAuth } from '@clerk/clerk-react'
import AuthSkeleton from '../components/AuthSkeleton'

const SignupPage = () => {
	const { isLoaded } = useAuth()

	return (
		<section className="auth section">
			<div className="auth__cont container">
				{!isLoaded && <AuthSkeleton option="signup" />}

				<div
					style={{
						opacity: isLoaded ? 1 : 0,
						visibility: isLoaded ? 'visible' : 'hidden',
						transition: 'opacity 0.3s ease-in-out',
					}}
				>
					<SignUp routing="path" path="/signup" signInUrl="/login" />
				</div>
			</div>
		</section>
	)
}
export default SignupPage
