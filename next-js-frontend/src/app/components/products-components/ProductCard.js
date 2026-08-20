import Link from 'next/link'

export default function ProductCard({ product }) {
	const { id, thumbnail, category, title, price } = product

	return (
		<Link
			href={`/products/${id}`}
			className='w-1/5 bg-gray-950 p-5 rounded-md cursor-pointer'
		>
			<p className='rounded overflow-hidden bg-white'>
				<img
					alt='ecommerce'
					className='object-cover object-center w-full h-full block'
					src={thumbnail}
				/>
			</p>
			<div className='mt-4'>
				<h3 className='text-white text-sm font-medium mb-1'>
					{category}
				</h3>
				<h2 className='text-white text-lg font-bold line-clamp-1'>
					{title}
				</h2>
				<p className='text-white text-md font-medium mt-1'>{price}</p>
			</div>
		</Link>
	)
}