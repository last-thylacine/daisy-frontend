import globals from "globals"
import eslint from "@eslint/js"
import ts_eslint from "typescript-eslint"
import solidjs from 'eslint-plugin-solid'

export default [
	{
		languageOptions: { globals: globals.browser },
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					"args": "all",
					"argsIgnorePattern": "^_",
					"caughtErrors": "all",
					"caughtErrorsIgnorePattern": "^_",
					"destructuredArrayIgnorePattern": "^_",
					"varsIgnorePattern": "^_",
					"ignoreRestSiblings": true,
				},
			],
		},
	},
	eslint.configs.recommended,
	...ts_eslint.configs.recommended,
	solidjs.configs['flat/recommended'],
	solidjs.configs['flat/typescript'],
]
