import ProductListing from '../components/products-components/ProductListing'
import { getProducts } from '../services/api-services/fetchProducts'

export const metadata = {}

export default async function Products() {
	metadata.title = 'Products | Learning Next JS'
	metadata.description = 'Next js learning project products page'

	const products = await getProducts()

	return <ProductListing products={products} />
}