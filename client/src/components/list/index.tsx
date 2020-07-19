import React, { useState, useEffect } from "react"
import apis from "../../services/profile"
import Profile from "../profile/index"
import { ProfileType } from "../../types/profile"
import "./list.css"

const list = () => {
	const [profiles, setProfiles] = useState<ProfileType>()

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
	return( <div className="list"> {getProfiles()} </div>)
}

export default list