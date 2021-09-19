module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 2,
    'no-plusplus': 0,
    'no-extra-boolean-cast': 0,
    'no-loop-func': 0,
    'no-param-reassign': 0,
  },
};
