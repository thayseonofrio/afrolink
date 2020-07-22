import React from "react"

type SocialType = {
	type: string,
	link: string
}

const social = ({type, link}: SocialType) => {
	const getIconPath = (type: string) => require(`./../../assets/${type}.svg`)

	// TODO - change email link

	return (
		<a className="social" href={link} target="_blank">
			{<img src={getIconPath(type)} alt={`${type} link`}/>}
		</a>
	)
}

export default social