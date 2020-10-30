module.exports = {
	settings: {
		react: {
			"version": "latest",
		},
	},
	env: {
		"browser": true,
		"es2020": true,
		"jest": true,
		"node": true
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	parser:"babel-eslint",
	parserOptions: {
		"ecmaVersion": 11,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	rules: {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"no-undef": "off",
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		]
	}
}
