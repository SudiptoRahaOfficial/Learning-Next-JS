import '../styles/globals.css'

import Header from './components/common/Header'
import Footer from './components/common/Footer'

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
			<body className='min-h-full flex flex-col'>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}