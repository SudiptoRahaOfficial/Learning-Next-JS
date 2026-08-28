function Loader() {
	return (
		<div className='flex flex-col items-center justify-center text-center'>
			{/* Spinner */}
			<div className='w-16 h-16 border-4 border-white border-t-indigo-500 rounded-full animate-spin' />

			{/* Loading Text */}
			<h2 className='text-3xl font-semibold mt-6'>Loading...</h2>

			<p className='mt-2 text-lg'>
				Please wait while loading the page content.
			</p>

			{/* Decorative Line */}
			<div className='w-16 h-1 bg-indigo-500 rounded-full mt-6 opacity-80' />
		</div>
	)
}

export default Loader