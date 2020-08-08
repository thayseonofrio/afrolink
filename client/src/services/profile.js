import axios from "axios"

const api = axios.create({
	baseURL: "http://localhost:8000/api",
})

export const getAllProfiles = () => api.get("/profile")

export const createProfile = (data) => api.post("/profile", data)

const apis = {
	createProfile,
	getAllProfiles
}

export default apis