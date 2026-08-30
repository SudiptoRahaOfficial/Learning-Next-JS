import CredentialsProvider from 'next-auth/providers/credentials'
import connectDB from './dbConnection'
import User from '@/models/User.model'
import bcrypt from 'bcryptjs'
import Google from 'next-auth/providers/google'

const authOptions = {
	providers: [
		// authentication with credentials
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

		// authentication with oAuth - Google
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		// function for jwt token generation
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id?.toString()
				token.name = user.name
				token.email = user.email
				token.image = user.image
			}
			return token
		},

		// function for making session
		async session({ session, token }) {
			if (session.user) {
				session.user.id = token.id
				session.user.name = token.name
				session.user.email = token.email
				session.user.image = token.image
			}
			return session
		},

		// function for auto registration while log in with google
		async signIn({ account, user }) {
			if (account?.provider === 'google') {
				// connecting database
				await connectDB()

				// finding user to db by email
				let existUser = await User.findOne({ email: user?.email })

				// if user not exists then creating new user
				if (!existUser) {
					existUser = await User.create({
						name: user.name,
						email: user.email,
						image: user.image,
					})
				}

				user.id = existUser._id.toString()
				user.name = existUser.name
				user.email = existUser.email
				user.image = existUser.image
			}

			return true
		},
	},
	session: {
		strategy: 'jwt',
		maxAge: 3 * 24 * 60 * 60,
	},
	pages: {
		signIn: '/login',
		error: '/login',
	},
	secret: process.env.NEXT_AUTH_SECRET,
}

// exporting authOptions
export default authOptions