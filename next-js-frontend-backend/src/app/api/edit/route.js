import authOptions from '@/lib/auth'
import uploadOnCloudinary from '@/lib/cloudinary'
import connectDB from '@/lib/dbConnection'
import User from '@/models/User.model'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function POST(request) {
	try {
		// connecting database
		await connectDB()

		// extracting current session
		const session = await getServerSession(authOptions)

		// throwing error if session found or not
		if (!session || !session.user.email || !session.user.id) {
			return NextResponse.json(
				{ message: 'Authentication required.' },
				{ status: 401 },
			)
		}

		// extracting data sent from frontend
		const formData = await request.formData()
		const name = formData.get('name')
		const file = formData.get('file')

		// temp image container
		let imageUrl = session.user.image || null
		if (file) {
			imageUrl = await uploadOnCloudinary(file)
		}

		// updating on database
		const user = await User.findByIdAndUpdate(
			session.user.id,
			{
				name,
				image: imageUrl,
			},
			{ new: true },
		)

		// throwing error if user not found
		if (!user) {
			return NextResponse.json(
				{ message: 'user not found!' },
				{ status: 404 },
			)
		}

		// finally success response back
		return NextResponse.json(user, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ message: `server error : ${error}` },
			{ status: 500 },
		)
	}
}