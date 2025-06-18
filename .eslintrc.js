module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'prettier',
  ],
  rules: {
    // Security rules
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unsafe-optional-chaining': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-regex/no-unsafe-regex': 'error',
    'security/detect-object-injection': 'warn',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-non-literal-fs-filename': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-child-process': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-unsafe-regex': 'error',
    'security/detect-new-buffer': 'error',
    'security/detect-bidi-characters': 'error',
    
    // React specific rules
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    
    // Code quality rules
    'prettier/prettier': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx'],
      env: {
        jest: true,
      },
    },
  ],
};
