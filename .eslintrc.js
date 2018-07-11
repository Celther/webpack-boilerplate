module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "no-unused-vars": [1, { "vars": "local", "args": "none" }],
    "no-param-reassign": 0,
    "prefer-const": 1
  }
};
