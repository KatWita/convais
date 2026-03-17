import { SignIn, useAuth } from '@clerk/clerk-react'
import AuthSkeleton from '../components/AuthSkeleton'

const LoginPage = () => {
	const { isLoaded } = useAuth()

	return (
		<section className="auth section">
			<div className="auth__cont container">
				{!isLoaded && <AuthSkeleton option="login" />}

				<div
					style={{
						opacity: isLoaded ? 1 : 0,
						visibility: isLoaded ? 'visible' : 'hidden',
						transition: 'opacity 0.3s ease-in-out',
					}}
				>
					<SignIn routing="path" path="/login" signUpUrl="/signup" />
				</div>
			</div>
		</section>
	)
}
export default LoginPage
