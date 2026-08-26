import { connect } from 'mongoose'

// defining db connection uri
const DB_CONNECTION_URI = process.env.MONGODB_URI

// throwing error on db connection uri missing
if (!DB_CONNECTION_URI) {
	throw new Error('Database connection url not found!')
}

// adding database to global object
let cached = global.database
if (!cached) {
	cached = global.database = {
		connected: null,
		pending: null,
	}
}

// function for database connection
async function connectDB() {
	if (cached.connected) {
		return cached.connected
	}

	if (!cached.pending) {
		const opts = {
			bufferCommands: false,
		}
		cached.pending = connect(DB_CONNECTION_URI, opts).then(
			(connectionInstance) => {
				return connectionInstance
			},
		)
	}

	try {
		cached.connected = await cached.pending
	} catch (error) {
		// Reset pending on failure
		cached.pending = null
		throw error
	}

	return cached.connected
}

// exporting database connection function
export default connectDB