import connectDB from '@/lib/dbConnection'
import User from '@/models/User.model'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(request) {
	try {
		await connectDB() // connecting database

		// extracting frontend data throw request
		const { name, email, password } = await request.json()

		// checking user already exists or not with given email
		const existUser = await User.findOne({ email })
		if (existUser) {
			return NextResponse.json(
				{ message: 'user already exist!' },
				{ status: 400 },
			)
		}

		// checking given password larger/equal to 6 characters
		if (password.length < 6) {
			return NextResponse.json(
				{ message: 'password must be at least 6 characters!' },
				{ status: 400 },
			)
		}

		// hashing password
		const hashedPassword = await bcrypt.hash(password, 10)

		// creating user
		const user = await User.create({
			name,
			email,
			password: hashedPassword,
		})

		// sending success response back
		return NextResponse.json(user, { status: 201 })
	} catch (error) {
		return NextResponse.json(
			{ message: `register error ${error}` },
			{ status: 500 },
		)
	}
}