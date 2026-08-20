import axios from 'axios'

// products api url
const PRODUCT_API_URL = 'https://dummyjson.com/products'

// function for getting products from api
const getProducts = () => {
	return axios
		.get(`${PRODUCT_API_URL}?limit=20`)
		.then((res) => res.data.products)
		.catch((err) => console.log(err.message))
}

// function for getting product details from api
const getProductDetails = (id) => {
	return axios
		.get(`${PRODUCT_API_URL}/${id}`)
		.then((res) => res.data)
		.catch((err) => console.log(err.message))
}

export { getProducts, getProductDetails }