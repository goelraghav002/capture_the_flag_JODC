import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {
		type: String,
		trim: true,
		required: true,
		min: 3,
		max: 30,
	},
	email: {
		type: String,
		trim: true,
		unique: true,
		required: true,
		min: 3,
		max: 40,
	},
	password: {
		type: String,
		trim: true,
		required: true,
		min: 6,
		//hello
		max: 40,
    },
    total_score: {
        type: Number,
        required: true,
        default: 400,
    },
    current_score: {
        type: Number,
        required: true,
        default: 0,
    },
	created_at: {
		type: Date,
		required: true,
		default: Date.now,
	},
})

const UserSchema = mongoose.model('User', User);

export default UserSchema;