module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
  overrides: [
   {
     files: [
       '**/*.js',
       '**/*.jsx'
     ],
     parser: '@typescript-eslint/parser',
     parserOptions: {
       project: './tsconfig.json'
     },
     plugins: [ '@typescript-eslint' ],
     rules: Object.assign(typescriptEslintRecommended.rules, {
       '@typescript-eslint/no-unused-vars': 'off',
       '@typescript-eslint/member-delimiter-style': 'none',
       '@typescript-eslint/explicit-function-return-type': 'off',
       'react/prop-types': 'off'
     })
   }
 ],
};
