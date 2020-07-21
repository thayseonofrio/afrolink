import React from "react"
import Profile from "."
import { render, screen } from "../components/list/@testing-library/react"

const profileData = {
	city: "Porto Alegre",
	country: "Brasil",
	experience: 12,
	gender: "Feminino",
	jobTitle: ["Desenvolvedora"],
	name: "Teste",
	skills: ["MongoDB", "JavaScript"],
	socialLinks: {email: "test@hotmail.com"},
	state: "RS"
}
describe("<Profile />", () => {
	it("should render Profile with props", () => {
		render(<Profile {...profileData} />)
		expect(screen.getByText(profileData.name)).toBeInTheDocument()
		expect(screen.getByText(profileData.city, { exact: false })).toBeInTheDocument()
		expect(screen.getByText("12")).toBeInTheDocument()
		expect(screen.getByText(profileData.gender)).toBeInTheDocument()
		expect(screen.getByText(profileData.jobTitle[0])).toBeInTheDocument()
		expect(screen.getByText(profileData.state, { exact: false })).toBeInTheDocument()
	})
})