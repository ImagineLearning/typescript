module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	extends: ['airbnb/hooks', 'react-app', 'plugin:jsx-a11y/recommended', 'prettier/react'],
	plugins: ['@typescript-eslint', 'jsx-a11y', 'prettier'],
	rules: {
		// Enforce consistent naming conventions.
		'@typescript-eslint/naming-convention': [
			'error',
			{ selector: 'default', format: ['camelCase'] },
			// Allow PascalCase for React function components
			{ selector: 'function', format: ['camelCase', 'PascalCase'] },
			{ selector: 'typeLike', format: ['PascalCase'] },
			{ selector: 'enumMember', format: ['PascalCase'] },
			{
				selector: 'variable',
				modifiers: ['const'],
				format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
			},
			// Ignore unused parameters, to allow the convention of using `_` for an unused parameter.
			{
				selector: 'parameter',
				modifiers: ['unused'],
				format: null,
			},
			{
				selector: ['objectLiteralProperty', 'parameter', 'typeProperty'],
				filter: 'Component',
				format: ['PascalCase'],
			},
			// Allow `__html` for using `dangerouslySetInnerHTML` in React
			{
				selector: 'objectLiteralProperty',
				filter: '__html',
				format: null,
			},
		],

		// Only allow JSX in JavaScript, Markdown, and TypeScript files with the `x` suffix.
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.jsx', '.mdx', '.tsx'],
			},
		],

		// Prop spreading can be useful in React, particularly with HOCs.
		'react/jsx-props-no-spreading': 'off',

		// Prop types can be excluded when using TypeScript, since it will already enforce types.
		'react/prop-types': 'off',
	},
	overrides: [
		{
			files: ['**/*.{mock,spec,stories,test}.{js,jsx,ts,tsx}', '**/mocks.{js,jsx,ts,tsx}'],
			rules: {
				// Same rules as above, but also allows function parameters to be named `Story` or
				// `StoryComponent` when used in Storybook stories.
				'@typescript-eslint/naming-convention': [
					'error',
					{ selector: 'default', format: ['camelCase'] },
					{ selector: 'function', format: ['camelCase', 'PascalCase'] },
					{ selector: 'typeLike', format: ['PascalCase'] },
					{ selector: 'enumMember', format: ['PascalCase'] },
					{
						selector: 'variable',
						modifiers: ['const'],
						format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
					},
					{
						selector: 'parameter',
						modifiers: ['unused'],
						format: null,
					},
					{
						selector: ['objectLiteralProperty', 'parameter', 'typeProperty'],
						filter: 'Component',
						format: ['PascalCase'],
					},
					{
						selector: 'objectLiteralProperty',
						filter: '__html',
						format: null,
					},
					{
						selector: 'parameter',
						filter: 'Story(Component)?',
						format: ['PascalCase'],
					},
				],
			},
		},
	],
};
