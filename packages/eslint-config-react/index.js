module.exports = {
  extends: ["@hnktt/eslint-config-base"],
  plugins: ["react"],
  overrides : [
    {
        files: ["*.tsx"],
        parser: "@typescript-eslint/parser",
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    }
  ],
  rules: {
      "react/prop-types": 0,
      "react/display-name": 0
  },
};
