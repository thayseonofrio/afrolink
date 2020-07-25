import React from "react"
import Label from "../label/index"
import Social from "../social/index"
import "./profile.css"
import { ProfileType } from "client/src/types/profile"

const profile = (props: ProfileType) => {
	const {name, city, experience, gender, jobTitle, skills, state, socialLinks} = props
	const getJobTitles = () => {
		return jobTitle.map(title => <span key={title}> {title} </span>)
	}
	const getSkills = () => {
		return skills.map(skill => <Label key={skill} text={skill}/>)
	}
	const getSocialLinks = () => {
		const types = Object.keys(socialLinks)
		return types.map(type => {
			const link = socialLinks[type]
			return <Social key={type} type={type} value={link}/>
		})
	}
	return(
		<div className="card">
			<h2> {name} </h2>
			<div className="info">
				<span>{gender}</span>
				{getJobTitles()}
				<span>{experience} meses </span>
				<span>{city}/{state}</span>
				<div className="skills">
					{getSkills()}
				</div>
			</div>
			<hr/>
			<div className="socialLinks">
				{getSocialLinks()}
			</div>
		</div>

	)
}

export default profile
