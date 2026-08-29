'use client'
import Loader from '@/components/Loader'
import { useContext, useState } from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { FaCircleUser } from 'react-icons/fa6'
import { FaEdit } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { userDataContext } from '@/context/UserContext'

export default function Home() {
	const data = useContext(userDataContext)

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

	// router for navigation
	const router = useRouter()

	return (
		<div className='min-h-screen flex items-center justify-center bg-black text-white px-4'>
			{data ? (
				<div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg text-center relative flex flex-col items-center justify-center'>
					<FaEdit
						onClick={() => router.push('/edit')}
						size={20}
						color='white'
						className='absolute top-4 right-4 cursor-pointer'
					/>
					<div className='relative w-30 h-30 rounded-full border-2 border-white overflow-hidden flex justify-center items-center cursor-pointer'>
						{data?.user?.image ? (
							<Image
								src={data.user.image}
								alt='user-image'
								loading='eager'
								fill
								sizes='120px'
							/>
						) : (
							<FaCircleUser
								size={100}
								color='white'
							/>
						)}
					</div>
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