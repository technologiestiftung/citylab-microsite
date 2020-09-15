module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  // required to lint *.vue files
  plugins: ["vue", "jest", "prettier"],
  // add your custom rules here
  rules: {
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    semi: [2, "always"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    // "prettier/prettier": ["error", { semi: false }],
  },
};
