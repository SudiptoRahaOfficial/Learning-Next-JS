import Link from 'next/link'

export default function NotFound() {
	return (
		<section className='flex items-center justify-center text-gray-400 bg-gray-950 body-font px-5 py-15'>
			<div className='container mx-auto flex flex-col items-center justify-center text-center'>
				{/* 404 */}
				<h1 className='text-8xl md:text-9xl font-bold text-indigo-400 tracking-widest'>
					404
				</h1>

				{/* Heading */}
				<h2 className='text-3xl md:text-4xl font-bold text-white mt-6'>
					Page Not Found
				</h2>

				{/* Description */}
				<p className='text-gray-400 text-base md:text-lg max-w-lg mt-4 leading-relaxed'>
					Sorry, the page you are looking for doesn't exist or may
					have been moved. Please check the URL or return to the
					homepage.
				</p>

				{/* Action */}
				<Link
					href='/'
					className='inline-flex items-center justify-center px-6 py-3 mt-8 text-white bg-indigo-500 rounded-lg font-medium hover:bg-indigo-600 transition-colors duration-300'
				>
					Back to Home
					<svg
						className='w-5 h-5 ml-2'
						fill='none'
						stroke='currentColor'
						strokeWidth={2}
						viewBox='0 0 24 24'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path d='M5 12h14' />
						<path d='M12 5l7 7-7 7' />
					</svg>
				</Link>
			</div>
		</section>
	)
}