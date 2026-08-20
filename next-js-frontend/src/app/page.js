import HeroSection from './components/home-components/HeroSection'
import LatestProducts from './components/home-components/LatestProducts'

export const metadata = {}

export default function Home() {
	metadata.title = 'Home | Learning Next JS'
	metadata.description = 'Next js learning project home page'

	return (
		<>
			<HeroSection />
			<LatestProducts />
		</>
	)
}