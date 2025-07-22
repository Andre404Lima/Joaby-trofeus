module.exports = {
	parser: "babel-eslint",
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:import/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"prettier",
		"plugin:prettier/recommended",
	],
	plugins: ["import", "prettier"],
	rules: {
		"prettier/prettier": ["error"],
		"import/order": [
			"error",
			{
				groups: [
					["builtin", "external"],
					"internal",
					["sibling", "parent"],
					"index",
				],
				"newlines-between": "always",
			},
		],
		"import/no-unresolved": "on",
	},
};
