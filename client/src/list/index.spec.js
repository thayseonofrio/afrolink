import React from "react"
import apis from "../services/profile"
import List from "."
import { render } from "@testing-library/react"

jest.mock("../services/profile")

describe("<List />", () => {
	beforeEach(() => {

	})
	// TODO
	it("should render list with profile", async () => {
		const response = {data: [{name: "test"}]}
		apis.getAllProfiles.mockImplementationOnce(() => Promise.resolve(response))
		const { container } = render(<List />)
		expect(container).toMatchSnapshot()
		// expect(findByText("test")).toBeInTheDocument()
	})
})