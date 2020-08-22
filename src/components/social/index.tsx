import React from "react"

type SocialType = {
	type: string,
	value: string
}

const social = ({type, value}: SocialType) => {
	const getIconPath = (type: string) => require(`./../../assets/${type}.svg`)

	const link = type == "email" ? `mailto:${value}` : value
	return (
		<a className="social" href={link} target="_blank">
			{<img src={getIconPath(type)} alt={`${type} link`}/>}
		</a>
	)
}

export default social