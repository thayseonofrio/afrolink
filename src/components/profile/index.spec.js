import React from "react"
import Profile, {getExperience} from "."
import { render, screen } from "@testing-library/react"
import profileData from "../../../__mocks__/profileData"

describe("<Profile />", () => {
	it("should render Profile with props", () => {
		render(<Profile {...profileData} />)
		expect(screen.getByText(profileData.name)).toBeInTheDocument()
		expect(screen.getByText(profileData.city, { exact: false })).toBeInTheDocument()
		expect(screen.getByText("1 ano", { exact: false })).toBeInTheDocument()
		expect(screen.getByText(profileData.gender, { exact: false })).toBeInTheDocument()
		expect(screen.getByText(profileData.jobTitle[0])).toBeInTheDocument()
		expect(screen.getByText(profileData.state, { exact: false })).toBeInTheDocument()
	})

	it("should render Profile if there are no social links", () => {
		const data = {
			...profileData,
			socialLinks: null
		}
		render(<Profile {...data} />)
		expect(screen.getByText(profileData.name)).toBeInTheDocument()
	})

	describe("Experience", () => {
		it("should convert 12 months into one year", () => {
			expect(getExperience(12)).toBe("1 ano ")
		})
		it("should convert 13 months into one year and one month", () => {
			expect(getExperience(13)).toBe("1 ano 1 mês ")
		})
		it("should convert 14 months into one year and two months", () => {
			expect(getExperience(14)).toBe("1 ano 2 meses ")
		})
		it("should convert 24 months into two years", () => {
			expect(getExperience(24)).toBe("2 anos ")
		})
	})
})