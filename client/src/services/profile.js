import axios from "axios"

const api = axios.create({
	baseURL: "http://localhost:8000/api",
})

export const getAllProfiles = () => api.get("/profile")

const apis = {
	getAllProfiles
}

export default apis