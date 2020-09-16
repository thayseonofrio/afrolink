import React from "react"
import apis from "../../services/profile"
import List from "."
import { render } from "@testing-library/react"
import profileData from "../../../__mocks__/profileData"
import {getFilteredProfilesByGender} from "."

jest.mock("../../services/profile")

describe("<List />", () => {
	const response = {data: [profileData]}
	beforeEach(() => {
		apis.getAllProfiles.mockImplementationOnce(() => Promise.resolve(response))
	})

	it("should render list with profile", async () => {
		const { container, findByText} = render(<List />)
		expect( await findByText("Desenvolvedora")).toBeInTheDocument()
		expect( await findByText("Feminino", { exact: false})).toBeInTheDocument()
		expect( await findByText("Teste")).toBeInTheDocument()
		expect(container).toMatchSnapshot()
	})

	it("should return filtered profiles by gender", async () => {
		const secondProfile = {
			...response.data,
			gender: "masculino"
		}
		const thirdProfile = {
			...secondProfile,
			name: "outra pessoa"
		}
		const initialProfiles = [...response.data, secondProfile, thirdProfile]
		const filteredProfiles = getFilteredProfilesByGender(initialProfiles, "feminino")
		expect(filteredProfiles).toHaveLength(1)
		expect(filteredProfiles[0].gender).toBe("feminino")
	})
})