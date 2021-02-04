# @imaginelearning/prettier-config

This package includes the shareable [Prettier](https://prettier.io/) configuration used by the [Imagine Learning](https://www.imaginelearning.com/) engineering team.

## Installation

This package is hosted through [GitHub Package Registry (GPR)](https://github.com/features/packages).
Currently, [GPR requires an access token](https://github.community/t/download-from-github-package-registry-without-authentication/14407)
even if the package is publicly available.
Be sure you've properly [configured npm or Yarn with your personal access token](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages) before installing this package.

This package also (not surprisingly) requires `prettier` as a peer dependency.

Once your environment is properly configured, install the package and dependencies:

```bash
npm i -D @imaginelearning/prettier-config prettier

# or

yarn add -D @imaginelearning/prettier-config prettier
```

## Usage

To use this configuration in your project, you can add a `"prettier"` key to your `package.json` with the following contents:

```json
{
	// ...

	"prettier": "@imaginelearning/prettier-config"
}
```

Alternatively, you can create a `.prettierrc` file in your project root with the following contents:

```json
"@imaginelearning/prettier-config"
```

### Overriding settings

To override settings, you would need to create a `.prettierrc.js` file and export the modifications:

```js
module.exports = {
	...require('@imaginelearning/prettier-config'),
	printWidth: 140,
	// ...additional settings
};
```
