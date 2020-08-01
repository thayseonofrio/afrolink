import mockAxios from "jest-mock-axios"
import apis from "./profile"
import profileData from "../../../__mocks__/profileData"
describe("Profile Service", () => {
	const thenFn = jest.fn()

	afterEach(() => {
		mockAxios.reset()
	})

	it("should get profiles", () => {
		apis.getAllProfiles().then(thenFn)
		expect(mockAxios.get).toHaveBeenCalledWith("/profile")
		mockAxios.mockResponse({data: [profileData]})
		expect(thenFn).toHaveBeenCalledWith((expect.objectContaining({data: [profileData]})))
	})

	it("should create profile", () => {
		apis.createProfile(profileData).then(thenFn)
		expect(mockAxios.post).toHaveBeenCalledWith("/profile", profileData)
	})
})