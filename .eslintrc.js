module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'standard',
    'airbnb-base',
    'eslint:recommended'
  ],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': 0,
    'no-new': 0,
    'no-console': 'off',
    'import/extensions': ['never', {
      'js': 'never'
    }]
  }
}
