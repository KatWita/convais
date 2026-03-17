import AppLayout from './layouts/AppLayout'
import SubPageLayout from './layouts/SubPageLayout.tsx'
import About from './pages/AboutPage.tsx'
import Services from './pages/ServicesPage.tsx'
import Team from './pages/TeamPage.tsx'
import Projects from './pages/ProjectsPage.tsx'
import Pricing from './pages/PricingPage.tsx'
import Contact from './pages/ContactPage.tsx'
import Blog from './pages/BlogPage.tsx'
import BlogDetails from './pages/BlogDetailsPage.tsx'
import ProjectDetails from './pages/ProjectDetailsPage.tsx'
import ServiceDetails from './pages/ServiceDetailsPage.tsx'
import TeamDetails from './pages/TeamDetailsPage.tsx'
import { createBrowserRouter } from 'react-router'
import Root from './Root.tsx'
import Testimonials from './pages/TestimonialsPage.tsx'
import { action as contactAction } from './components/ContactForm.tsx'
import AuthWrapper from './layouts/AuthWrapper.tsx'
import { blogsLoader, singleBlogLoader } from './loaders/blogLoader.ts'
import { staticLoader } from './loaders/lineLoader.ts'
import { pricingLoader } from './loaders/pricingLoader.ts'
import { action as blogCommentAction } from './components/BlogCommentForm.tsx'
import LoginPage from './pages/LoginPage.tsx'
import SignupPage from './pages/SignupPage.tsx'
import AuthLayout from './layouts/AuthLayout.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import AllServicesPage from './pages/AllServicesPage.tsx'

export const router = createBrowserRouter([
	{
		Component: AuthWrapper,
		children: [
			{
				path: '/',
				Component: AppLayout,
				children: [
					{ index: true, Component: Root, loader: staticLoader },
					{
						Component: AuthLayout,
						children: [
							{ path: 'login/*', Component: LoginPage, loader: staticLoader },
							{ path: 'signup/*', Component: SignupPage, loader: staticLoader },
						],
					},
					{
						Component: SubPageLayout,
						children: [
							{
								path: 'about',
								Component: About,
								loader: staticLoader,
							},
							{
								path: 'services',
								children: [
									{ index: true, Component: Services, loader: staticLoader },
									{
										path: 'all',
										Component: AllServicesPage,
										loader: staticLoader,
									},
									{
										path: ':service',
										Component: ServiceDetails,
										loader: staticLoader,
									},
								],
							},
							{
								path: 'team',
								children: [
									{ index: true, Component: Team, loader: staticLoader },
									{ path: ':member', Component: TeamDetails, loader: staticLoader },
								],
							},
							{
								path: 'projects',
								children: [
									{ index: true, Component: Projects, loader: staticLoader },
									{ path: ':project', Component: ProjectDetails, loader: staticLoader },
								],
							},
							{
								path: 'pricing',
								Component: Pricing,
								loader: pricingLoader,
							},

							{ path: 'testimonials', Component: Testimonials, loader: staticLoader },
							{
								path: 'blog',
								children: [
									{ index: true, Component: Blog, loader: blogsLoader },
									{
										path: ':title',
										Component: BlogDetails,
										loader: singleBlogLoader,
										action: blogCommentAction,
									},
								],
							},

							{ path: 'contact', Component: Contact, action: contactAction, loader: staticLoader },
							{ path: 'privacy-policy', Component: PrivacyPolicy, loader: staticLoader },
						],
					},
				],
			},
		],
	},
])

/*      Old way
<BrowserRouter>
<Routes>
<Route element={<RootLayout />}>
<Route index element={<Home />} />
<Route element={<SubPageLayout />}>
<Route path="about" element={<About />} />
<Route path="services">
<Route index element={<Services />} />
<Route path=":service" element={<ServiceDetails />} />
</Route>
<Route path="team">
<Route index element={<Team />} />
<Route path=":member" element={<TeamDetails />} />
</Route>
<Route path="projects">
<Route index element={<Projects />} />
<Route path=":project" element={<ProjectDetails />} />
</Route>
<Route path="pricing" element={<Pricing />} />
<Route path="testimonials" element={<Testimonials />} />
<Route path="blog">
<Route index element={<Blog />} />
<Route path=":id" element={<BlogDetails />} />
</Route>
<Route path="contact" element={<Contact />} />
</Route>
</Route>
</Routes>
</BrowserRouter>,
*/
