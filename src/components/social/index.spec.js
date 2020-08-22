import React from "react"
import Social from "."
import { render } from "@testing-library/react"

describe("<Social />", () => {
	it("should render email with mailto", () => {
		const { getByRole } = render(<Social type="email" value="test@hotmail.com"/>)
		expect(getByRole("link")).toHaveAttribute("href", "mailto:test@hotmail.com")
		expect(getByRole("img")).toHaveAttribute("alt", "email link")
	})
	it("should render other types with link", () => {
		const { getByRole } = render(<Social type="github" value="github.com"/>)
		expect(getByRole("link")).toHaveAttribute("href", "github.com")
		expect(getByRole("img")).toHaveAttribute("alt", "github link")
	})
})