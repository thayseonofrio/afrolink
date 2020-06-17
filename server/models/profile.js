import mongoose from "mongoose"

const { Schema } = mongoose

const Profile = new Schema({
	city: { type: String, required: true },
	country: { type: String, required: true },
	experience: { type: Number, required: true },
	gender: { type: String, required: true },
	jobTitle: { type: [String], required: true },
	name: { type: String, required: true },
	skills: { type: [String], required: true },
	socialLinks: { type: Map, of: String, required: false },
	state: { type: String, required: true },
})

const model = mongoose.model("profile", Profile)
export default model
