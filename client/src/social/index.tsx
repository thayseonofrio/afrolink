import React from "react"

const social = ({type, link}) => {
	const getIconPath = (type) => require(`./../assets/${type}.svg`)

	// TODO - change email link

	return (
		<a className="social" href={link} target="_blank">
			{<img src={getIconPath(type)} alt={`${type} link`}/>}
		</a>
	)
}

export default social