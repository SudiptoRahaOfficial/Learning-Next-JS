'use client'
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

// making user data context
const userDataContext = createContext()

function UserContext({ children }) {
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
	}, [])

	return (
		<userDataContext.Provider value={data}>
			{children}
		</userDataContext.Provider>
	)
}

export default UserContext