import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import sveltePlugin from 'eslint-plugin-svelte3';

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,svelte}'],
    ignores: [
      'node_modules/**',
      '.svelte-kit/**',
      'dist/**',
      'build/**',
      '*.config.{js,ts,mjs}',
      'vite.config.ts',
      'svelte.config.js',
      'postcss.config.mjs',
      'tailwind.config.mjs',
      'eslint.config.mjs',
      'tsconfig.json',
      'tsconfig.node.json',
      'tsconfig.app.json',
      'tsconfig.app.json',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        extraFileExtensions: ['.svelte'],
        sourceType: 'module',
        ecmaVersion: 2022
      },
      globals: {
        ...eslint.configs.recommended.globals,
        browser: true,
        es2022: true,
        node: true
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      svelte3: sveltePlugin
    },
    rules: {
      ...tseslint.configs['strict-type-checked'].rules,
      ...tseslint.configs['stylistic-type-checked'].rules,
      ...prettier.rules
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: tsParser
      }
    },
    settings: {
      'svelte3/typescript': true,
      'svelte3/ignore-styles': () => true
    }
  }
]; 