'use client'
import Loader from '@/components/Loader'
import { useSession } from 'next-auth/react'

export default function Home() {
	const { data } = useSession()

	return (
		<div className='min-h-screen flex items-center justify-center bg-black text-white px-4'>
			{data ? <div>
				
			</div> : <Loader />}
		</div>
	)
}