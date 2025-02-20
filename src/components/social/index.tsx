import React from "react"

type SocialType = {
	type: string,
	value: string
}

const social = ({type, value}: SocialType) => {
	const getIconPath = (type: string) => require(`./../../assets/${type}.svg`)
	if (!value) {
		return null
	}
	const rawValue = value.replace(/^(https?:|)\/\//, "")
	const link = type == "email" ? `mailto:${rawValue}` : `https://${rawValue}`
	return (
		<a className="social" href={link} target="_blank" rel="noreferrer">
			{<img src={getIconPath(type)} alt={`${type} link`}/>}
		</a>
	)
}

export default social