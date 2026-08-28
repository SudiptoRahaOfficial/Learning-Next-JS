import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function proxy(request) {
	// extracting pathname
	const { pathname } = request.nextUrl

	// declearing public routes array
	const publicRoutes = ['/auth/register', '/auth/login']

	// main logic for access pages
	if (publicRoutes.some((path) => pathname.startsWith(path))) {
		return NextResponse.next()
	} else {
		const token = await getToken({
			req: request,
			secret: process.env.NEXT_AUTH_SECRET,
		})
		if (!token) {
			const loginUrl = new URL('/auth/login', request.url)
			loginUrl.searchParams.set('callbackUrl', request.url)

			return NextResponse.redirect(loginUrl)
		}
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}