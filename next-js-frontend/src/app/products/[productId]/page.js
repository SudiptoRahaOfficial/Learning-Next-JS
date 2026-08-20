import ProductDetails from '@/app/components/products-components/ProductDetails'
import { getProductDetails } from '@/app/services/api-services/fetchProducts'

export const metadata = {}

export default async function ProductDetailsPage({ params }) {
	metadata.title = 'Product Details | Learning Next JS'
	metadata.description = 'Next js learning project product details page'

	const { productId } = await params
	const product = await getProductDetails(productId)

	return <ProductDetails product={product} />
}