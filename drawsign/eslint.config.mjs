import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import pluginPrettierConfig from 'eslint-plugin-prettier/recommended'

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    { languageOptions: { globals: globals.browser } },
    ...pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReactConfig,
    pluginPrettierConfig,
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@eslint/no-constant-condition': 'off',
        },
    },
]
