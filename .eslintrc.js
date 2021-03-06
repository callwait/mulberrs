module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        'accessibility': 'explicit',
        'overrides': {
          'constructors': 'no-public',
        },
      },
    ],
    'indent': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'semi',
          'requireLast': true,
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-use-before-declare': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
      },
    ],
    '@typescript-eslint/semi': [
      'error',
      'always',
    ],
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    // 'arrow-body-style': 'error',
    'arrow-parens': [
      'off',
      'as-needed',
    ],
    'camelcase': 'error',
    'capitalized-comments': 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'complexity': 'off',
    'constructor-super': 'error',
    'curly': 'error',
    'dot-notation': 'off',
    'eol-last': 'error',
    'eqeqeq': [
      'error',
      'smart',
    ],
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
    ],
    'id-match': 'error',
    // 'ordered-imports': 'error',
    // 'import/order': ['error', {'alphabetize': true}],
    'max-classes-per-file': 'off',
    'max-len': [
      'error',
      {
        'code': 160,
      },
    ],
    'new-parens': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': [
      'error',
      {
        'allow': [
          'log',
          'warn',
          'dir',
          'timeLog',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'debug',
          'info',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context',
        ],
      },
    ],
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-multiple-empty-lines': 'error',
    'no-new-wrappers': 'error',
    'no-shadow': [
      'error',
      {
        'hoist': 'all',
      },
    ],
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': [
      'off',
    ],
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never',
    ],
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return',
      },
    ],
    'prefer-arrow/prefer-arrow-functions': 'off',
    'prefer-const': 'error',
    'quote-props': 'off',
    'radix': 'error',
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'always',
        'asyncArrow': 'always',
        'named': 'never',
      },
    ],
    'spaced-comment': [
      'off',
      'never',
    ],
    'use-isnan': 'error',
    'valid-typeof': 'off',
    'padded-blocks': ['error', 'never'],
    'space-in-parens': ['error'],
    'keyword-spacing': ['error', {'before': true, 'after': true}],
    'object-curly-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { "allowSingleLine": true }],
    // 'whitespace': ['error', 'check-preblock'],
    'no-multi-spaces': ['error'],
  },
};
