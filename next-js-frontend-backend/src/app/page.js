'use client'
import Loader from '@/components/Loader'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
	const { data } = useSession()

	// state for loader
	const [loading, setLoading] = useState(false)

	// function for handling logout
	async function handleLogOut() {
		setLoading(true)
		try {
			await signOut()
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-black text-white px-4'>
			{data ? (
				<div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg text-center relative flex flex-col items-center justify-center'>
					{data?.user?.image && (
						<div className='relative w-30 h-30 rounded-full border-2 border-white overflow-hidden'>
							<Image
								src={data.user.image}
								alt='user-image'
								loading='eager'
								fill
								sizes='120px'
							/>
						</div>
					)}
					<div className='mt-4 mb-12'>
						<h1 className='text-2xl font-semibold'>
							Welcome, {data?.user?.name}
						</h1>
						<p className='text-gray-300'>
							You are now logged in and can access all features
						</p>
					</div>
					<button
						onClick={handleLogOut}
						className='w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors cursor-pointer'
					>
						Log Out
					</button>
				</div>
			) : (
				<Loader />
			)}
		</div>
	)
}