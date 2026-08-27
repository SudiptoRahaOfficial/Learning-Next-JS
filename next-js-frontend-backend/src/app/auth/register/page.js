'use client'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

function Register() {
	// states for storing form fileds data
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	// function for handling registration & api calling
	async function handleRegister(event) {
		// preventing default form behavior
		event.preventDefault()

		try {
			// fetching register api
			await axios.post('/api/auth/register', {
				name,
				email,
				password,
			})

			// reseting form fields
			setName('')
			setEmail('')
			setPassword('')
		} catch (error) {
			console.log(error)
		}
	}

	// using useRouter hook for navigate
	const router = useRouter()

	return (
		<div className='min-h-screen flex items-center justify-center bg-black text-white px-4'>
			<div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg bg-gray-900'>
				{/* heading */}
				<h1 className='text-2xl font-semibold text-center mb-6'>
					Register
				</h1>

				{/* register form */}
				<form
					className='space-y-6'
					onSubmit={handleRegister}
				>
					<div>
						<label
							className='block mb-1 font-medium'
							htmlFor='name'
						>
							Name
						</label>
						<input
							onChange={(e) => setName(e.target.value)}
							value={name}
							className='w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400'
							type='text'
							id='name'
							placeholder='Enter name here'
						/>
					</div>
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
						Already have an account?{' '}
						<span
							onClick={() => router.push('/auth/login')}
							className='text-blue-400 cursor-pointer hover:underline'
						>
							Login Here
						</span>
					</p>
					<button className='w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors cursor-pointer'>
						Register
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
					onClick={() => signIn('google')}
					className='w-full items-center justify-center py-2 px-4 border border-gray-400 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors cursor-pointer'
				>
					<FcGoogle className='inline text-2xl mr-2' />
					<span className='font-semibold'>Register With Google</span>
				</button>
			</div>
		</div>
	)
}

// exporting Register page component
export default Register