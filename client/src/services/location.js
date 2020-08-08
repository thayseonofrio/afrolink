import axios from "axios"

const api = axios.create({
	baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/",
})

export const getAllStates = () => api.get()

export const getCitiesByState = (UF) => api.get(`${UF}/distritos`)


const locationApi = {
	getAllStates,
	getCitiesByState
}

export default locationApi