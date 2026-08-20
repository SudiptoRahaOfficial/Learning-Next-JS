'use client'
import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

export default function HeroSection() {
	const [modal, setmodal] = useState(false)

	return (
		<>
			{/* modal */}
			<div
				className={`w-full fixed left-1/3 top-24 z-50 ${modal ? 'block' : 'hidden'} duration-1000`}
			>
				<div className='w-full max-w-md rounded-xl bg-gray-950 p-6 shadow-xl'>
					<h2 className='mb-6 text-2xl font-bold text-white relative'>
						Submit Form
						<button
							onClick={() => setmodal(false)}
							className='absolute right-0 cursor-pointer'
						>
							<IoCloseSharp />
						</button>
					</h2>

					<form className='space-y-5'>
						<div>
							<label
								htmlFor='name'
								className='mb-2 block text-sm font-medium text-white'
							>
								Name
							</label>

							<input
								id='name'
								type='text'
								placeholder='Enter your name'
								className='w-full rounded-lg border border-gray-300 px-4 py-2.5 text-white outline-none'
							/>
						</div>
						<div>
							<label
								htmlFor='email'
								className='mb-2 block text-sm font-medium text-white'
							>
								Email
							</label>

							<input
								id='email'
								type='email'
								placeholder='Enter your email'
								className='w-full rounded-lg border border-gray-300 px-4 py-2.5 text-white outline-none'
							/>
						</div>
						<button
							type='submit'
							className='w-full rounded-lg bg-indigo-500 px-4 py-2.5 font-medium text-white transition hover:bg-indigo-600 active:scale-[0.98] cursor-pointer'
						>
							Submit
						</button>
					</form>
				</div>
			</div>

			<section className='text-gray-400 bg-gray-900 body-font'>
				<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
					<div className='lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
							Before they sold out
							<br className='hidden lg:inline-block' />
							readymade gluten
						</h1>
						<p className='mb-8 leading-relaxed'>
							Copper mug try-hard pitchfork pour-over freegan
							heirloom neutra air plant cold-pressed tacos poke
							beard tote bag. Heirloom echo park mlkshk tote bag
							selvage hot chicken authentic tumeric truffaut
							hexagon try-hard chambray.
						</p>
						<div className='flex justify-center'>
							<button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer'>
								Get Started
							</button>
							<button
								onClick={() => setmodal(true)}
								className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg cursor-pointer'
							>
								Enquire Now
							</button>
						</div>
					</div>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<img
							className='object-cover object-center rounded'
							alt='hero'
							src='https://cdn.pixabay.com/photo/2020/06/01/08/46/water-5245722_640.jpg'
						/>
					</div>
				</div>
			</section>
		</>
	)
}