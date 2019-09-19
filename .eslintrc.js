module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ["@stellar/eslint-config"],
  rules: {
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-props-no-spreading": [
      {
        custom: "ignore",
      },
    ],
  },
  parserOptions: {
    sourceType: "module",
  },
};
