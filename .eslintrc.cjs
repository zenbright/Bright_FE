module.exports = {
  // Environment settings
  env: {
    browser: true, // Enable browser environment
    es2021: true, // Support ES2021 syntax
  },
  // Extend ESLint configurations
  extends: [
    'eslint:recommended', // Use ESLint recommended rules
    'plugin:react/recommended', // Use recommended React rules
    'plugin:prettier/recommended', // Use recommended Prettier rules
    'google', // Use Google style guide
  ],
  // Overrides for specific files
  overrides: [
    {
      env: {
        node: true, // Enable Node.js environment
      },
      files: ['.eslintrc.{js,cjs}'], // Apply to ESLint configuration files
      parserOptions: {
        sourceType: 'script', // Use script parser for configuration files
      },
    },
  ],
  // Parser options
  parserOptions: {
    ecmaVersion: 'latest', // Support latest ECMAScript features
    sourceType: 'module', // Use ECMAScript modules
  },
  // Plugins used
  plugins: ['react', 'prettier'], // Use React and Prettier plugins
  // Rules configuration
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    'require-jsdoc': 'off', // Turn off Google style doc requirement
    'max-len': 'off', // Turn off max line length
    'prettier/prettier': 'error', // Treat prettier errors as ESLint errors
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@/features/*/*'], // Restrict certain import patterns
      },
    ],
    'react/prop-types': 'off', // Turn off prop-types requirement
  },
  // Settings
  settings: {
    react: {
      version: 'detect', // Auto-detect the react version
    },
  },
};
