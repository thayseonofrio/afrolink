/* eslint-disable react/prop-types */
import React from "react"
import "./profile.css"

const profile = (props) => {
	const {name, city, experience, gender, jobTitle, skills, state} = props
	const getJobTitles = () => {
		return jobTitle.map(title => <span key={title}> {title} </span>)
	}
	const getSkills = () => {
		// todo - create component to render labels
		return skills.map(skill => <label key={skill}> {skill} </label>)
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
				{getSkills()}
				{getSocialLinks()}
			</div>
		</div>

	)
}

export default profile



// city: "Porto Alegre"
// country: "Brasil"
// experience: 12
// gender: "Feminino"
// jobTitle: ["Desenvolvedora"]
// name: "Teste"
// skills: (2) ["MongoDB", "JavaScript"]
// socialLinks: {email: "test@hotmail.com"}
// state: "RS"