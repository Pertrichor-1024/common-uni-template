module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript/recommended'],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'no-plusplus': 0,
    camelcase: 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'no-nested-ternary': 0,
    'class-methods-use-this': 0,
    'prefer-destructuring': 0,
    'no-undef': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-async-promise-executor': 0,
    'no-use-before-define': 0,
    'import/extensions': [
      'off',
      'always',
      {
        js: 'never',
        vue: 'never',
        json: 'never',
      },
    ],
    'import/no-unresolved': [
      0,
      {
        caseSensitive: false,
      },
    ],
  },

  globals: {
    uni: true,
    require: true,
    ROUTES: true,
  },
};
