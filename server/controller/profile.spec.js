import { createProfile } from "./profile"

jest.mock("mongoose")

jest.mock("../models/profile", () => ({
	create: () => Promise.resolve(null),
}))

describe("Profile Controller", () => {
	let jsonSpy
	let res
	beforeEach(() => {
		jsonSpy = jest.fn()
		res = {
			status: () => {
				return {
					json: jsonSpy
				}
			}
		}
	})

	it("should return error given there is no body in create profile", () => {
		createProfile({body: null}, res)
		expect(jsonSpy).toHaveBeenCalledWith({
			success: false,
			error: "No data provided",
		})
	})
})