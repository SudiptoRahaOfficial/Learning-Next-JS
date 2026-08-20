export const metadata = {}

export default function BackEndProgram() {
	metadata.title = 'Back-end Program | Learning Next JS'
	metadata.description = 'Next js learning project back-end program page'

	return (
		<section className='text-gray-400 bg-gray-900 body-font'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto'>
					<h1 className='grow sm:pr-16 text-2xl font-medium title-font text-white'>
						Back End Program
					</h1>
					<button className='shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'>
						Get Started
					</button>
				</div>
			</div>
		</section>
	)
}