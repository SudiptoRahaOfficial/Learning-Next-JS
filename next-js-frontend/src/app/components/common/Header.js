import React from 'react'
import Link from 'next/link'

export default function Header() {
	return (
		<header className='text-gray-400 bg-gray-900 body-font'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<Link
					href={'/'}
					className='flex title-font font-medium items-center text-white mb-4 md:mb-0'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
						viewBox='0 0 24 24'
					>
						<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
					</svg>
					<span className='ml-3 text-xl'>Tailblocks</span>
				</Link>
				<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
					<Link
						href={'/'}
						className='mr-5 cursor-pointer hover:text-white'
					>
						Home
					</Link>
					<Link
						href={'/products'}
						className='mr-5 cursor-pointer hover:text-white'
					>
						Products
					</Link>
					<div className='relative mr-5 group'>
						<Link
							href='#'
							className='cursor-pointer hover:text-white'
						>
							Programs
						</Link>

						<nav className='absolute left-0 top-full hidden group-hover:block pt-2 w-52'>
							<div className='bg-gray-950 rounded-md shadow-lg py-2'>
								<Link
									href='/programs/full-stack'
									className='block px-4 py-2 text-gray-400 hover:text-white'
								>
									Full Stack Program
								</Link>

								<Link
									href='/programs/back-end'
									className='block px-4 py-2 text-gray-400 hover:text-white'
								>
									Back End Program
								</Link>
							</div>
						</nav>
					</div>
					<Link
						href={'/about-us'}
						className='mr-5 cursor-pointer hover:text-white'
					>
						About
					</Link>
					<Link
						href={'/contact'}
						className='mr-5 cursor-pointer hover:text-white'
					>
						Contact
					</Link>
				</nav>
				<button className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 cursor-pointer'>
					Get Start
				</button>
			</div>
		</header>
	)
}