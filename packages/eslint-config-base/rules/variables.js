module.exports = {
  plugins: ["import"],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "memberLike",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "variableLike",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: ["camelCase", "snake_case", "PascalCase"],
        leadingUnderscore: "allowDouble",
      },
      {
        selector: "property",
        format: null,
        filter: {
          regex: "^__html$",
          match: true,
        },
      },
      {
        selector: "method",
        format: null,
        filter: {
          regex: "^UNSAFE_",
          match: true,
        },
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
  },
};
