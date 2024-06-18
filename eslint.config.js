import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginSolid from 'eslint-plugin-solid'

export default [
	{
		languageOptions: {
			globals: globals.browser
		}
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginSolid.configs['flat/recommended'],
	pluginSolid.configs['flat/typescript'],
]
