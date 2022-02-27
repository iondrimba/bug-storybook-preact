module.exports = {
	"stories": [
		"../stories/**/*.stories.@(js|jsx|ts|tsx)"
	],
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials"
	],
	"framework": "@storybook/preact",
	babel: async options => ({
		...options,
		plugins: [
			["@babel/plugin-transform-react-jsx", {
				"runtime": "automatic",
				"importSource": "preact"
			}]
		]
	}),
}
