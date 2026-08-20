export default function Loading() {
	return (
		<section className='min-h-screen flex items-center justify-center text-gray-400 bg-gray-950 body-font px-5'>
			<div className='flex flex-col items-center justify-center text-center'>
				{/* Spinner */}
				<div className='w-16 h-16 border-4 border-gray-700 border-t-indigo-500 rounded-full animate-spin' />

				{/* Loading Text */}
				<h2 className='text-3xl font-semibold text-white mt-6'>
					Loading...
				</h2>

				<p className='text-gray-500 mt-2 text-lg'>
					Please wait while we load the products.
				</p>

				{/* Decorative Line */}
				<div className='w-16 h-1 bg-indigo-500 rounded-full mt-6 opacity-80' />
			</div>
		</section>
	)
}