/* eslint-disable react/prop-types */
import React from "react"

// TODO - dynamically import image
// const getIconPath = (type) => `./../assets/${type}.svg`

// const iconByType = {
// 	email,
// 	github,
// 	linkedin,
// 	site
// }

// const getIconPath = (type) => iconByType[type]

const social = ({type, link}) => {
	console.log(location)
	return (
		<a className="social" href={link}>
			{/* {<img src={email} alt={`${type} link`}/>} */}
		</a>
	)
}

export default social