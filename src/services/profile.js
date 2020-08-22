import axios from "axios"

const LOCAL_DOMAINS = ["localhost", "127.0.0.1"]

const localUrl =  "http://localhost:8000/api"
const productionUrl = "https://afrolink-server.herokuapp.com/api"

const isLocal = LOCAL_DOMAINS.includes(window?.location?.hostname)

const api = axios.create({
	baseURL: isLocal ? localUrl : productionUrl,
})

export const getAllProfiles = () => api.get("/profile")

export const createProfile = (data) => api.post("/profile", data)

const apis = {
	createProfile,
	getAllProfiles
}

export default apis