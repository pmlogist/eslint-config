module.exports = {
  extends: [
    "./rules/es6",
    "./rules/base-practices",
    "./rules/imports",
    "./rules/variables",
  ].map(require.resolve),
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
};
