module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  // required to lint *.vue files
  plugins: ['vue', 'jest'],
  rules: {
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    // @dnsos You have to decide which it should be for consistency. Always or never
    'vue/this-in-template': ['off', 'always'],
    // the rule below needs some review. Classes with pettier
    'vue/html-self-closing': [
      'off',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
};
