module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "plugin:import/recommended"], //
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "import"], //
  rules: {
    "prettier/prettier": ["error"],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: __dirname,
        alwaysTryTypes: true,
      },
    },
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
      ],
      rules: {
        "import/no-unresolved": [2, { commonjs: true, amd: true }],
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/member-delimiter-style": [
          "error",
          {
            multiline: {
              delimiter: "none", // 'none' or 'semi' or 'comma'
              requireLast: true,
            },
            singleline: {
              delimiter: "semi", // 'semi' or 'comma'
              requireLast: false,
            },
          },
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/prop-types": "off",
      },
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            project: __dirname,
            alwaysTryTypes: true,
          },
        },
      },
    },
  ],
};
