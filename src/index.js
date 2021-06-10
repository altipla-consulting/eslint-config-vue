
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['vue'],
  ignorePatterns: ['*.css'],
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'key-spacing': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'no-undef': 'error',
    'no-unused-vars': ['error', { varsIgnorePattern: '_', argsIgnorePattern: '_' }],
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
    'object-curly-spacing': ['error', 'always'],

    'vue/mustache-interpolation-spacing': 'never',

    // Disable root validation until it adapts to Vue 3 where we can have multiple
    // of them. I guess this rule will disappear once that occurs.
    'vue/valid-template-root': ['off'],
    'vue/no-multiple-template-root': ['off'],
    'vue/no-v-for-template-key': ['off'],
  },
}
