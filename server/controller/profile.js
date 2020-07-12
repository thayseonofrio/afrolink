import Profile from "../models/profile"

const createProfile = (req, res) => {
	const { body } = req
	if (!body) {
		return res.status("400").json({
			success: false,
			error: "No data provided",
		})
	}
	const profile = Profile.create(body)
		.then(() => {
			return res.status(201).json({
				success: true,
				id: profile._id,
				message: "Profile create successfully",
			})
		})
		.catch((error) => {
			return res.status(400).json({
				error,
				message: "Profile was not created",
			})
		})

	if (!profile) {
		return res
			.status(400)
			.json({ success: false, error: "Error creating profile" })
	}
}

const getAll = (res) => {
	Profile.find({})
		.then((profiles) => {
			const profileMap = {}
			profiles.forEach((profile) => {
				profileMap[profile._id] = profile
			})
			res.send(profileMap)
		})
		.catch((error) => {
			return res.status(404).json({
				error,
				message: "No profiles available",
			})
		})
}

export { createProfile, getAll }
