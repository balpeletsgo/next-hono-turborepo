# Prettier Config

Shared Prettier configuration for the monorepo.

## Features

- Common code formatting rules
- TailwindCSS class sorting with `prettier-plugin-tailwindcss`
- Special handling for JSON/YAML files

## Usage

The root `.prettierrc.js` already extends this configuration.

To use it in other projects, install the package and create a `.prettierrc.js` file:

```js
module.exports = require("@workspace/prettier-config");
```

Or to override specific settings:

```js
module.exports = {
  ...require("@workspace/prettier-config"),
  semi: false,
};
```