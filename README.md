# eslint-config-js

A common ESLint Configuration for working with JavaScript projects.

## How to Use

Install the library: `yarn add --dev @craigmiller160/eslint-config-js`. Then, extend it in your `.eslintrc.js` file:

```
module.exports = {
    extends: [
        '@craigmiller160/eslint-config-js'
    ]
};
```

## Running ESLint

The NPM command `craig-lint` is provided by this library to run eslint with all necessary configuration.
