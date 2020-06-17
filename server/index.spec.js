import Profile from "./models/profile"
import request from "supertest"
import app from "./app"

const mockProfile = {
	city: "Porto Alegre",
	country: "Brasil",
	experience: 12,
	gender: "Feminino",
	jobTitle: "Desenvolvedora de Software",
	name: "Teste",
	skills: ["MongoDB", "JavaScript"],
	socialLinks: { "github": "teste"},
	state: "Rio Grande do Sul"
}

jest.mock("./models/profile", () => ({
	create: () => Promise.resolve(mockProfile),
}))
jest.mock("mongoose", () => ({
	connect: () => Promise.resolve(),
	set: () => {},
}))
jest.mock("./db/index", () => ({
	on: () => {},
}))
describe("API endpoints", () => {
	it("shoud create Profile", async (done) => {
		jest.spyOn(Profile, "create")

		request(app)
			.post("/api/profile")
			.send(mockProfile)
			.expect(201)
			.end((err) => {
				expect(Profile.create).toHaveBeenCalledWith(mockProfile)

				if (err) {
					return done(err)
				}
				return done()
			})
	})

	afterAll(() => {
		app.close()
	})
})
