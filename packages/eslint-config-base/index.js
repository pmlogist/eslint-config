module.exports = {
  extends: [
    "./rules/es6",
    "./rules/base-practices",
    "./rules/imports",
    "./rules/variables",
  ].map(require.resolve),
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 13,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  ],
  plugins: ["@typescript-eslint"],
  rules: {},
};
