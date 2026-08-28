'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

function Login() {
	// states for storing form fileds data
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	// using useRouter hook for navigate
	const router = useRouter()

	// function for handling login & api calling
	async function handleLogin(event) {
		// preventing default form behavior
		event.preventDefault()

		try {
			// handling login throw next-auth
			const result = await signIn('credentials', {
				email,
				password,
				redirect: false,
			})

			// if result has any error
			if (result?.error) {
				console.log(result.error)
				return
			}

			// redirecting user to home page
			router.push('/')
		} catch (error) {
			console.log(error)
		}
	}

	// function for handling oAuth
	async function handleOAuth() {
		await signIn('google', { callbackUrl: '/' })
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-black text-white px-4'>
			<div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg bg-gray-900'>
				{/* heading */}
				<h1 className='text-2xl font-semibold text-center mb-6'>
					Login
				</h1>

				{/* login form */}
				<form
					className='space-y-6'
					onSubmit={handleLogin}
				>
					<div>
						<label
							className='block mb-1 font-medium'
							htmlFor='email'
						>
							Email
						</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							className='w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400'
							type='email'
							id='email'
							placeholder='Enter email here'
						/>
					</div>
					<div>
						<label
							className='block mb-1 font-medium'
							htmlFor='password'
						>
							Password
						</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							className='w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400'
							type='password'
							id='password'
							placeholder='Enter password here'
						/>
					</div>
					<p className='text-sm text-center mt-1'>
						Don't have an account?{' '}
						<span
							onClick={() => router.push('/auth/register')}
							className='text-blue-400 cursor-pointer hover:underline'
						>
							Register Here
						</span>
					</p>
					<button className='w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors cursor-pointer'>
						Login
					</button>
				</form>

				{/* devider */}
				<div className='flex justify-center items-center gap-5 my-5'>
					<hr className='grow border-gray-500' />
					<span>OR</span>
					<hr className='grow border-gray-500' />
				</div>

				{/* oAuth - Google */}
				<button
					onClick={handleOAuth}
					className='w-full items-center justify-center py-2 px-4 border border-gray-400 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors cursor-pointer'
				>
					<FcGoogle className='inline text-2xl mr-2' />
					<span className='font-semibold'>Login With Google</span>
				</button>
			</div>
		</div>
	)
}

// exporting Login page component
export default Login