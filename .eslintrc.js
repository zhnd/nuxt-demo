module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  rules: {
    'arrow-parens': 'off',
    'comma-dangle': ['error', 'never'],
    'comma-style': ['error', 'last'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'off',
    eqeqeq: ['error', 'allow-null'],
    'max-len': 0,
    'multiline-ternary': 'off',
    'no-console': 'off',
    'no-duplicate-imports': 'error',
    'no-empty': 'off',
    'no-trailing-spaces': 'off',
    'no-unused-vars': 'off',
    'object-shorthand': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'space-before-function-paren': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/order-in-components': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'node/handle-callback-err': 'off'
  }
}
