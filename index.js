
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', {allowTemplateLiterals: true}],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'key-spacing': 'error',
    'keyword-spacing': ['error', {'before': true, 'after': true}],
    'no-undef': 'error',
    'no-unused-vars': ['error', {'varsIgnorePattern': '_', 'argsIgnorePattern': '_'}],
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
    'object-curly-spacing': ['error', 'always'],
  }
};
