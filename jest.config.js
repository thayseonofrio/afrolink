module.exports = {
	coverageDirectory: "reports/coverage",
	coveragePathIgnorePatterns: [
		"/node_modules/",
		"dist/",
		"server/app.js"
	],
	coverageReporters: ["lcov", "text", "text-summary"],
	coverageThreshold: {
		global: {
			statements: 80,
			branches: 80,
			functions: 80,
			lines: 80,
		},
	},
	modulePathIgnorePatterns: [
		"<rootDir>/dist/"
	],
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
	},
	setupFilesAfterEnv: [
		"<rootDir>/setuptests.js"
	],
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.js$": "babel-jest",
		"^.+\\.ts$": "babel-jest",
		"^.+\\.tsx$": "babel-jest",
		".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
	}
}