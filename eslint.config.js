import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),

  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.flat.recommended.rules,
      ...reactRefresh.configs.vite.rules,

      // React 17+ JSX transform
      'react/react-in-jsx-scope': 'off',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // ✅ Vitest test file globals
  {
    files: ["**/*.test.{ts,tsx}"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
      },
    },
  },
])
