'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { FaCircleUser } from 'react-icons/fa6'

export default function Edit() {
	// accessing session
	const { data } = useSession()

	// states declaration
	const [name, setName] = useState('')

	// useEfect declaration
	useEffect(() => {
		if (data) {
			setName(data?.user?.name)
		}
	}, [data])

	return (
		<div className='min-h-screen flex items-center justify-center bg-black text-white px-4'>
			<div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg text-center relative flex flex-col items-center justify-center'>
				{/* heading */}
				<h1 className='text-2xl font-semibold text-center mb-8'>
					Edit Profile
				</h1>

				{/* edit form */}
				<form className='flex flex-col w-full items-center gap-6'>
					{/* profile picture */}
					<div className='relative w-30 h-30 rounded-full border-2 border-white text-white overflow-hidden cursor-pointer flex justify-center items-center transition-all hover:text-blue-500 hover:border-blue-500'>
						{data?.user?.image ? (
							<Image
								src={data?.user?.image}
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

					{/* name field */}
					<div className='w-full'>
						<label
							className='block mb-1 font-medium text-left ms-0.5'
							htmlFor='name'
						>
							Name
						</label>
						<input
							onChange={(e) => setName(e.target.value)}
							value={name}
							className='w-full border-b border-white py-2 px-1 text-white outline-none'
							type='text'
							id='name'
						/>
					</div>

					{/* save button */}
					<button className='w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors cursor-pointer'>
						Save
					</button>
				</form>
			</div>
		</div>
	)
}