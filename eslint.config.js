import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginVitest from "@vitest/eslint-plugin";
import pluginCypress from "eslint-plugin-cypress/flat";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

export default [
	{
		name: "app/files-to-lint",
		files: ["**/*.{js,mjs,jsx,vue}"],
	},

	{
		name: "app/files-to-ignore",
		ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
	},

	{
		...js.configs.recommended,
		rules: {
			"no-unused-vars": "error",
			"no-empty-function": "error",
			"no-global-assign": "error",
			"no-duplicate-imports": "error",
			"no-global-assign": "error",
			"no-invalid-this": "error",
			"no-shadow": "warn",
			"no-self-compare": "error",
			"no-unreachable-loop": "error",
			"require-atomic-updates": "error",
			"no-empty-pattern": "warn",

			//optional
			"operator-assignment": "warn",
			"prefer-arrow-callback": "warn",
			"prefer-exponentiation-operator": "warn",
			"prefer-object-has-own": "warn",
			"prefer-regex-literals": "warn",
			"prefer-template": "warn",
			"require-yield": "warn",
			"vars-on-top": "warn",
		},
	},

	...pluginVue.configs["flat/recommended"],
	{
		rules: {
			"vue/no-arrow-functions-in-watch": "off",
		},
	},

	{
		...pluginVitest.configs.recommended,
		files: ["src/**/__tests__/*"],
	},

	{
		...pluginCypress.configs.recommended,
		files: [
			"cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}",
			"cypress/support/**/*.{js,ts,jsx,tsx}",
		],
	},
	skipFormatting,
];
