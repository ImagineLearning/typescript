# @imaginelearning/eslint-config

This package includes the shareable ESLint configuration used by the [Imagine Learning](https://www.imaginelearning.com/) engineering team for React projects written in TypeScript.

It extends [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app) configurations, and uses the [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin), [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y), [rxjs](https://github.com/cartant/eslint-plugin-rxjs), and [prettier](https://github.com/prettier/eslint-plugin-prettier) plugins.

## Installation

This package requires the following peer dependencies:

- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-config-airbnb`
- `eslint-config-prettier`
- `eslint-plugin-prettier`
- `eslint-plugin-rxjs`
- `prettier`

If you are _not_ using this with [Create React App](https://github.com/facebook/create-react-app), it requires the following additional peer dependencies (these are already installed with `react-scripts`):

- `babel-eslint`
- `eslint-config-react-app`
- `eslint-plugin-flowtype`
- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks` .

You can list the correct versions of each package to install with the command:

```bash
npm info @imaginelearning/eslint-config@latest peerDependencies

# or

yarn info @imaginelearning/eslint-config@latest peerDependencies
```

Then install the appropriate versions manually.

Alternatively, if using **npm 5+**, you can use the command:

```bash
npx install-peerdeps --dev @imaginelearning/eslint-config
```

This will install all of the peer dependencies as dev dependencies in your project.
If using **Yarn**, the above command will detect it and install the dependencies using Yarn.

Note: If using the `install-peerdeps` utility describe above in a project bootstrapped with Create React App, be sure to delete `babel-eslint`, `eslint-config-react-app`, `eslint-plugin-flowtype`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, and `eslint-plugin-react-hooks` from your `package.json` file. Otherwise, `react-scripts` may complain about incompatible versions.

## Usage

Create a `.eslintrc` file in your project's root directory with the following contents:

```json
{
	"extends": ["@imaginelearning"],
	"rules": {}
}
```

Note: Because this configuration uses the [@typescript-eslint/prefer-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md) rule, it requires a value for the `"parserOptions.project"` property that points to your project's `tsconfig.json` file.
The default value is `./tsconfig.json`. If your `tsconfig.json` file is in a different location, has a different name, or your project uses more than one, you will need to specify the `"parserOptions.project"` property.

```json
{
	"extends": ["@imaginelearning"],
	"parserOptions": {
		"project": ["./tsconfig.json", "./tsconfig.tests.json"]
	},
	"rules": {}
}
```

### Using the base configuration

The default configuration includes rules for React/JSX and RxJS. If a project does not use React or RxJS, you can opt to use the base configuration.

```json
{
	"extends": ["@imaginelearning/eslint-config/base"],
	"rules": {}
}
```

To use the base configuration, the following peer dependencies are required:

- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-config-airbnb-base`
- `eslint-config-prettier`
- `eslint-plugin-import`
- `eslint-plugin-prettier`
- `prettier`

You can also add just the rules for React or RxJS to the base configuration if you don't need both.
```json
{
	"extends": ["@imaginelearning/eslint-config/base", "@imaginelearning/eslint-config/react"],
	"rules": {}
}
```
Or
```json
{
	"extends": ["@imaginelearning/eslint-config/base", "@imaginelearning/eslint-config/rxjs"],
	"rules": {}
}
```

## Relaxing the rules

To maintain consistency across code bases, this configuration is intentionally very strict.
Most rules will produce an error if violated. If you need to relax the rules, such as when adding this config to an existing project, consider using the [`only-warn` plugin](https://github.com/bfanger/eslint-plugin-only-warn).

Install it with the following command:

```bash
npm i -D eslint-plugin-only-warn

# or

yarn add -D eslint-plugin-only-warn
```

Then add it to your `.eslintrc` file:

```json
{
	"extends": ["@imaginelearning"],
	"plugins": ["only-warn"],
	"rules": {}
}
```

Once all the warnings have been cleaned up, consider removing the plugin to better enforce consistency.

## Using with Storybook

Create React App uses [`eslint-webpack-plugin`](https://github.com/webpack-contrib/eslint-webpack-plugin) to display linting errors in the browser console.
To achieve this same functionality in Storybook, you can add the plugin to Storybook's webpack config.

First, install the plugin:

```bash
npm i -D eslint-webpack-plugin

# or

yarn add -D eslint-webpack-plugin
```

Then add it to Storybook's webpack config in the `.storybook/main.js` file:

```js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	// ...

	webpackFinal: async (config) => {
		// ...

		config.plugins = [
			...config.plugins,
			new ESLintPlugin({
				extensions: ['js', 'jsx', 'ts', 'tsx'],
			}),
		];

		return config;
	},
};
```

## Additional configuration

Refer to the [ESLint config docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.
