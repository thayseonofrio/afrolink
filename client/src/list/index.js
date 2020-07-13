import React, { useState, useEffect } from "react"
import apis from "../services/profile"
import Profile from "../profile"

const list = () => {
	const [profiles, setProfiles] = useState()

	useEffect(() => {
		apis.getAllProfiles().then((response) => {
			const { data } = response
			setProfiles(data)
		})
	}, [])

	const getProfiles = () => {
		if (profiles) {
			return Object.entries(profiles).map(([key, value]) => <Profile key={key} {...value}/>)
		}
		return null
	}
	return(getProfiles())
}

export default list