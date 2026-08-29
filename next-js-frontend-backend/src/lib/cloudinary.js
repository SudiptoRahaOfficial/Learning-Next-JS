import { v2 as cloudinary } from 'cloudinary'

// cloudinary configurations
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

// function for uploading image to cloudinary
async function uploadOnCloudinary(file) {
	// returning if no file exists
	if (!file) return null

	try {
		// converting file blob to arrayBuffer
		const arrayBuffer = await file?.arrayBuffer()
		// converting arrayBuffer to js buffer
		const buffer = Buffer.from(arrayBuffer)

		return new Promise((resolve, reject) => {
			const uploadStream = cloudinary.uploader.upload_stream(
				{ resource_type: 'auto' },
				(error, result) => {
					// rejecting promise if error while uploading
					if (error) reject(error)

					// resolving promise and getting cloudinary url
					resolve(result?.secure_url ?? null)
				},
			)

			// sending buffer to uploadStream
			uploadStream.end(buffer)
		})
	} catch (error) {
		console.log(error)
		return null
	}
}

// exporting uploadOnCloudinary function
export default uploadOnCloudinary