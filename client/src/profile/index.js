/* eslint-disable react/prop-types */
import React from "react"
import "./profile.css"
import Label from "../label"

const profile = (props) => {
	const {name, city, experience, gender, jobTitle, skills, state} = props
	const getJobTitles = () => {
		return jobTitle.map(title => <span key={title}> {title} </span>)
	}
	const getSkills = () => {
		return skills.map(skill => <Label key={skill} text={skill}/>)
	}
	const getSocialLinks = () => {
		// todo - create component to render socialLinks
	}
	return(
		<div className="card">
			<h2> {name} </h2>
			<div className="info">
				<span>{gender}</span>
				{getJobTitles()}
				<span>{experience}</span>
				<span>{city}/{state}</span>
				<div className="skills">
					{getSkills()}
				</div>
			</div>
			<hr/>
			{/* {getSocialLinks()} */}
		</div>

	)
}

export default profile
