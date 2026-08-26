import CredentialsProvider from 'next-auth/providers/credentials'
import connectDB from './dbConnection'
import User from '@/models/User.model'
import { signIn } from 'next-auth/react'

const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				// extracting email & password
				const { email, password } = credentials

				// checking is any field missing or not
				if (!email || !password) {
					throw new Error('email or password not found!')
				}

				// connecting database
				await connectDB()

				// finding user to db by given email
				const user = await User.findOne({ email })

				// checking user exists or not
				if (!user) {
					throw new Error('user not found!')
				}

				// checking given password matches or not
				const isMatched = await bcrypt.compare(password, user.password)

				// throwing error if isMatched returns false
				if (!isMatched) {
					throw new Error('invalid credentials')
				}

				return {
					id: user._id,
					name: user.name,
					email: user.email,
					image: user.image,
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id
				token.name = user.name
				token.email = user.email
				token.image = user.image
			}
			return token
		},
		session({ session, token }) {
			if (session.user) {
				session.user.id = token.id
				session.user.name = token.name
				session.user.email = token.email
				session.user.image = token.image
			}
			return session
		},
	},
	session: {
		strategy: 'jwt',
		maxAge: 3 * 24 * 60 * 60 * 1000,
	},
	pages: {
		signIn: '/login',
		error: '/login',
	},
	secret: process.env.NEXT_AUTH_SECRET,
}

// exporting authOptions
export default authOptions