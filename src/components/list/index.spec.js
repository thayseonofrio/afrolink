import React from "react"
import apis from "../../services/profile"
import List from "."
import { fireEvent, render } from "@testing-library/react"
import profileData from "../../../__mocks__/profileData"
import {getFilteredProfiles} from "."
import { ExperienceFilter } from "./types"

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
		const filteredProfiles = getFilteredProfiles(initialProfiles, "feminino")
		expect(filteredProfiles).toHaveLength(1)
		expect(filteredProfiles[0].gender).toBe("feminino")
	})

	it("should return filtered profiles by skills", async () => {
		const secondProfile = {
			...response.data,
			skills: ["JavaScript", "Python"]
		}
		const thirdProfile = {
			...secondProfile,
			skills: ["Java"]
		}
		const initialProfiles = [...response.data, secondProfile, thirdProfile]
		const filteredProfiles = getFilteredProfiles(initialProfiles, null, null, ["JavaScript"])
		expect(filteredProfiles).toHaveLength(2)
		expect(filteredProfiles[0].skills).toContain("JavaScript")
	})

	it("should return filtered profiles by state", async () => {
		const secondProfile = {
			...response.data,
			state: "RS"
		}
		const thirdProfile = {
			...secondProfile,
			state: "RJ"
		}
		const initialProfiles = [...response.data, secondProfile, thirdProfile]
		const filteredProfiles = getFilteredProfiles(initialProfiles, null, "RS")
		expect(filteredProfiles).toHaveLength(2)
		expect(filteredProfiles[0].state).toBe("RS")
	})

	it("should return filtered profiles by experience", async () => {
		const secondProfile = {
			...response.data,
			experience: 9
		}
		const thirdProfile = {
			...secondProfile,
			experience: 14
		}
		const initialProfiles = [...response.data, secondProfile, thirdProfile]
		const filteredProfiles = getFilteredProfiles(initialProfiles, null, null, null, ExperienceFilter.OneToTwo)
		expect(filteredProfiles).toHaveLength(2)
		expect(filteredProfiles[0].experience).toBe(12)
	})

	it("should return filtered profiles by state, gender, skills and experience", async () => {
		const secondProfile = {
			...response.data,
			gender: "masculino",
			state: "RS",
			skills: ["Java"],
			experience: 27
		}
		const thirdProfile = {
			...secondProfile,
			gender: "feminino",
			state: "RJ",
			skills: ["Python", "SQL"],
			experience: 1
		}
		const initialProfiles = [...response.data, secondProfile, thirdProfile]
		const filteredProfiles = getFilteredProfiles(initialProfiles, "masculino", "RS", ["Java"], ExperienceFilter.TwoToFour)
		expect(filteredProfiles).toHaveLength(1)
		expect(filteredProfiles[0].gender).toBe("masculino")
		expect(filteredProfiles[0].state).toBe("RS")
		expect(filteredProfiles[0].skills).toContain("Java")
		expect(filteredProfiles[0].experience).toBe(27)
	})

	it("should return empty if no profiles are given", async () => {
		const filteredProfiles = getFilteredProfiles()
		expect(filteredProfiles).toHaveLength(0)
	})

	it("should filter by selected gender option", async () => {
		const {getByRole, findByRole, findAllByText} = render(<List />)
		const selectGender = getByRole("button", { name: /gênero/i })
		fireEvent.keyDown(selectGender, { keyCode: 40 })
		const option = await findByRole("option", { name: /feminino/i })
		fireEvent.click(option)
		expect(await findAllByText(/gênero: feminino/i)).toHaveLength(1)
	})

	it("should filter by selected state option", async () => {
		const {getByRole, findByRole, findAllByText} = render(<List />)
		const selectState = getByRole("button", { name: /estado/i })
		fireEvent.keyDown(selectState, { keyCode: 40 })
		const option = await findByRole("option", { name: /Rio Grande do Sul/i })
		fireEvent.click(option)
		expect(await findAllByText(/RS/i)).toHaveLength(1)
	})

	it("should filter by selected experience option", async () => {
		const {getByRole, findByRole, findAllByText} = render(<List />)
		const selectExperience = getByRole("button", { name: /experiência/i })
		fireEvent.keyDown(selectExperience, { keyCode: 40 })
		const option = await findByRole("option", { name: /1 a 2 anos/i })
		fireEvent.click(option)
		expect(await findAllByText(/Tempo de experiência: 1 ano/i)).toHaveLength(1)
	})
})