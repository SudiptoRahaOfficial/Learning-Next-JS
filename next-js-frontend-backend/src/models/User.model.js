// extracting Schema & model from mongoose
import { Schema, model, models } from 'mongoose'

// making userSchema
const userSchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			maxlength: 15,
		},
		email: {
			type: String,
			trim: true,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		image: String,
	},
	{ timestamps: true },
)

// making User model by userSchema
const User = models?.User || model('User', userSchema)

// exporting User model
export default User