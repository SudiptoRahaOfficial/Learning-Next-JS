'use client'
import { useState, useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { FaCircleUser } from 'react-icons/fa6'
import axios from 'axios'

export default function Edit() {
	// accessing session
	const { data } = useSession()

	// state for name field change
	const [name, setName] = useState('')

	// states for profile picture change
	const [frontendImage, setFrontendImage] = useState('')
	const [backendImage, setBackendImage] = useState()

	// ref of image input
	const imageInput = useRef(null)

	// function for handling image changes
	function handleImageChange(event) {
		// extracting files from event
		const files = event.target.files

		// returning if files got empty
		if (!files || files.length === 0) return

		// extracting file and storing file to backendImage state
		const file = files[0]
		setBackendImage(file)

		// setting changed file to frontend
		setFrontendImage(URL.createObjectURL(file))
	}

	// function for handling submit edit form and api fetching
	async function handleSubmit(event) {
		// preventing form's default behavior
		event.preventDefault()

		try {
			// making formData for sending to api
			const formData = new FormData()
			formData.append('name', name)
			if (backendImage) {
				formData.append('file', backendImage)
			}

			// fetching edit api
			const result = await axios.post('/api/edit', formData)
			console.log(result)
		} catch (error) {
			console.log(error)
		}
	}

	// useEfect declaration
	useEffect(() => {
		if (data) {
			setName(data?.user?.name)
			setFrontendImage(data?.user?.image)
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
				<form
					onSubmit={handleSubmit}
					className='flex flex-col w-full items-center gap-6'
				>
					{/* profile picture */}
					<div
						onClick={() => imageInput.current.click()}
						className='relative w-30 h-30 rounded-full border-2 border-white text-white overflow-hidden cursor-pointer flex justify-center items-center transition-all hover:border-blue-500 hover:opacity-80'
					>
						<input
							type='file'
							accept='image/*'
							hidden
							ref={imageInput}
							onChange={handleImageChange}
						/>
						{frontendImage ? (
							<Image
								src={frontendImage}
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