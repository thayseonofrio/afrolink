import React from "react"
import apis from "../../services/profile"
import List from "."
import { render } from "@testing-library/react"
import profileData from "../../../../__mocks__/profileData"

jest.mock("../../services/profile")

describe("<List />", () => {
	it("should render list with profile", async () => {
		const response = {data: [profileData]}
		apis.getAllProfiles.mockImplementationOnce(() => Promise.resolve(response))
		const { container, findByText} = render(<List />)
		expect( await findByText("Desenvolvedora")).toBeInTheDocument()
		expect( await findByText("Feminino")).toBeInTheDocument()
		expect( await findByText("Teste")).toBeInTheDocument()
		expect(container).toMatchSnapshot()
	})
})