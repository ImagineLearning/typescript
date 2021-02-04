module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	extends: ['plugin:rxjs/recommended'],
	plugins: ['rxjs'],
	rules: {
		// Avoid importing the entire RxJS library.
		'no-restricted-imports': ['error', 'rxjs/Rx'],

		// Don't allow calling `subscribe` without specifying callback param(s)
		'rxjs/no-ignored-subscribe': 'error',
	},
};
