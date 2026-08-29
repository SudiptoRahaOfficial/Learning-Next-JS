import authOptions from '@/lib/auth'
import connectDB from '@/lib/dbConnection'
import User from '@/models/User.model'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function GET(request) {
	try {
		// connecting database
		await connectDB()

		// session
		const session = await getServerSession(authOptions)

		// throwing error if session found or not
		if (!session || !session.user.email || !session.user.id) {
			return NextResponse.json(
				{ message: 'Authentication required.' },
				{ status: 401 },
			)
		}

		// finding required user on database
		const user = await User.findById(session.user.id).select('-password')

		// throwing error if user not found
		if (!user) {
			return NextResponse.json(
				{ message: 'user not found!' },
				{ status: 404 },
			)
		}

		// finally success response back
		return NextResponse.json(
			{
				message: 'Profile updated successfully.',
				user: {
					id: user._id,
					name: user.name,
					email: user.email,
					image: user.image,
				},
			},
			{ status: 200 },
		)
	} catch (error) {
		return NextResponse.json(
			{ message: `server error : ${error}` },
			{ status: 500 },
		)
	}
}