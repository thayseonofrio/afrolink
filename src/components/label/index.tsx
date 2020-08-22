import React from "react"
import "./label.css"

type LabelProps = {
	text: string
}

const label = ({text}: LabelProps) => {
	return (<span className="label"> {text} </span>)
}

export default label