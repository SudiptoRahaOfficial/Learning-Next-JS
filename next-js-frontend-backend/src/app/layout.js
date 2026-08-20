import '../styles/globals.css'

export const metadata = {
	title: 'Learning Next JS',
	description: 'Next js learning project',
}

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			className={`h-full antialiased`}
		>
			<body className='min-h-full flex flex-col'>{children}</body>
		</html>
	)
}