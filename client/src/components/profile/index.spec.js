import React from "react"
import Profile from "."
import { render, screen } from "@testing-library/react"
import profileData from "../../../../__mocks__/profileData"

describe("<Profile />", () => {
	it("should render Profile with props", () => {
		render(<Profile {...profileData} />)
		expect(screen.getByText(profileData.name)).toBeInTheDocument()
		expect(screen.getByText(profileData.city, { exact: false })).toBeInTheDocument()
		expect(screen.getByText("12 meses", { exact: false })).toBeInTheDocument()
		expect(screen.getByText(profileData.gender)).toBeInTheDocument()
		expect(screen.getByText(profileData.jobTitle[0])).toBeInTheDocument()
		expect(screen.getByText(profileData.state, { exact: false })).toBeInTheDocument()
	})
})