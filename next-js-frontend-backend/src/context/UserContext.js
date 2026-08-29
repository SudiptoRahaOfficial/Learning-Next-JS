'use client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { createContext, useEffect, useState } from 'react'

export const userDataContext = createContext()

function UserContext({ children }) {
	const session = useSession()
	const [user, setUser] = useState()

	const data = { user, setUser }

	useEffect(() => {
		async function getUser() {
			try {
				const result = await axios.get('/api/user')
				setUser(result.data)
			} catch (error) {
				console.log(error)
			}
		}
		getUser()
	}, [session])

	return (
		<userDataContext.Provider value={data}>
			{children}
		</userDataContext.Provider>
	)
}

export default UserContext