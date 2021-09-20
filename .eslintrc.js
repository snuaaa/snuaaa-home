const path = require('path');

module.exports = {
  root: true,
  extends: ["airbnb", "airbnb-typescript", "eslint-config-next", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 12,
    project: [path.resolve(__dirname, './tsconfig.json')],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "semi": ["error", "always"],
    "react/jsx-props-no-spreading": 0,
  }
}