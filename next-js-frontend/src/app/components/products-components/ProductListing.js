import ProductCard from './ProductCard'

export default function ProductListing({ products }) {
	return (
		<section className='text-gray-400 bg-gray-900 body-font'>
			<h2 className='text-3xl font-bold text-white text-center'>
				List Of All Products
			</h2>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex items-center justify-center gap-10 flex-wrap'>
					{products.length <= 0 ? (
						<p className='font-bold text-sm sm:text-base text-gray-700! bg-white text-center w-3/7 sm:w-1/4 mx-auto mt-4 py-2 rounded-sm'>
							No Products Found!
						</p>
					) : (
						products.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
							/>
						))
					)}
				</div>
			</div>
		</section>
	)
}