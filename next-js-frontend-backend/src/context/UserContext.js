'use client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { createContext, useEffect, useState } from 'react'

export const userDataContext = createContext(null)

function UserContext({ children }) {
	const { status } = useSession()
	const [user, setUser] = useState(null)

	useEffect(() => {
		if (status !== 'authenticated') return

		async function getUser() {
			try {
				const result = await axios.get('/api/user')
				setUser(result.data)
			} catch (error) {
				console.log(error)
			}
		}
		getUser()
	}, [status])

	const data = {
		user,
		setUser,
	}

	return (
		<userDataContext.Provider value={data}>
			{children}
		</userDataContext.Provider>
	)
}

export default UserContext