module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	},
	extends: [
		'airbnb-base',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		// Favor interface declarations over type aliases (see https://ncjamieson.com/prefer-interfaces/).
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

		// Favor implicit function return types. Keeps code cleaner, while IDEs can still provide all the typing information.
		'@typescript-eslint/explicit-function-return-type': 'off',

		// Similarly to @typescript-eslint/explicit-function-return-type, favor implicit return types.
		'@typescript-eslint/explicit-module-boundary-types': 'off',

		// Require consistent member declaration order.
		'@typescript-eslint/member-ordering': 'warn',

		// Enforce consistent naming conventions.
		camelcase: 'off',
		'@typescript-eslint/naming-convention': [
			'error',
			{ selector: 'default', format: ['camelCase'] },
			// Allow PascalCase for functions
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
		],

		// TypeScript that uses `any` is just JavaScript. Don't do it.
		'@typescript-eslint/no-explicit-any': 'error',

		// Type inference is preferred.
		'@typescript-eslint/no-inferrable-types': 'off',

		// Namespaces are considered outdated. ES2015 module syntax is preferred.
		'@typescript-eslint/no-namespace': 'error',

		// Disallow variable declarations from shadowing variables declared in the outer scope.
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',

		// Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring.
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { args: 'after-used' }],

		// Disallow the use of variables and classes before they are defined.
		// Function declarations are OK because they are hoisted.
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{ functions: false, classes: true, variables: true },
		],

		// Always surround block with curly braces. Omitting curly braces can lead to bugs and reduce code clarity.
		curly: 'error',

		// Disabled in favor of the rules from plugin:import/typescript
		'import/no-extraneous-dependencies': 'off',

		// Disabled in favor of the rules from plugin:import/typescript
		'import/no-unresolved': 'off',

		// Exclude file extension when importing code files (.js, .jsx, .ts, or .tsx).
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],

		// Override Airbnb default: https://github.com/airbnb/javascript#modules--prefer-default-export
		// Named exports are often preferable since they provide more clarity as to what is being exported.
		// The Palmer Group Guidelines (https://github.com/formium/typescript#exports) suggest always using named exports.
		'import/prefer-default-export': 'off',

		// Allow deliberate console logging via `.info`, `.warn`, and `.error`.
		'no-console': [
			'error',
			{
				allow: ['info', 'warn', 'error'],
			},
		],

		// Allow for hard tabs for indentation + space for alignment.
		// Prettier should handle all indentation though.
		'no-mixed-spaces-and-tabs': 'off',

		// Don't allow mutating function parameters, with the exception of parameters named `state`
		// which would be used in reducers created with Redux Toolkit. Toolkit uses Immer, which
		// makes mutating the parameter object safe.
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: ['state'],
			},
		],

		// Override eslint-config-airbnb-base's restrictions in favor of those used in eslint-config-react-app
		'no-restricted-syntax': ['error', 'WithStatement'],

		// Enforce Prettier's formatting rules.
		'prettier/prettier': 'warn',

		// Don't require a space before a comment when designating a comment block with:
		//====
		//----
		// or
		//****
		'spaced-comment': [
			'warn',
			'always',
			{
				exceptions: ['=', '-', '*'],
			},
		],
	},
	overrides: [
		{
			files: '**/*.{ts,tsx}',
			rules: {
				// Use nullish coalescing operator instead of logical chaining.
				// Logical OR (||) can sometimes cause the wrong value to be assigned, if the left-hand expression is falsy.
				'@typescript-eslint/prefer-nullish-coalescing': 'error',

				// Prefer using concise optional chain expressions instead of chained logical ANDs (&&).
				'@typescript-eslint/prefer-optional-chain': 'error',
			},
		},
		{
			files: ['**/*.{mock,spec,stories,test}.{js,jsx,ts,tsx}', '**/mocks.{js,jsx,ts,tsx}'],
			rules: {
				// Allow empty functions for mocks or stories.
				'@typescript-eslint/no-empty-function': 'off',

				// Allow use of `require` statements for Storybook configuration.
				'@typescript-eslint/no-var-requires': 'off',

				// Allow console logging in tests and stories.
				'no-console': 'off',
			},
		},
	],
};
