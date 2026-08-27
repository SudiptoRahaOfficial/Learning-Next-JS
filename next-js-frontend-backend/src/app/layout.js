import ClientProvider from '@/ClientProvider'
import '../styles/globals.css'

export const metadata = {
	title: 'Learning Full-stack Next JS',
	description:
		'Next js learning project. This is a full-stack project that build while learning full-stack development with next.js.',
}

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			className={`h-full antialiased`}
		>
			<body className='min-h-full flex flex-col'>
				<ClientProvider>{children}</ClientProvider>
			</body>
		</html>
	)
}