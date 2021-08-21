module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    //"plugin:jest/recommended",
    // "plugin:json/recommended",
  ],
  plugins: ['import', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'memberLike',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'property',
        format: ['camelCase', 'snake_case', 'PascalCase'],
        leadingUnderscore: 'allowDouble',
      },
      {
        selector: 'property',
        format: null,
        filter: {
          regex: '^__html$',
          match: true,
        },
      },
      {
        selector: 'method',
        format: null,
        filter: {
          regex: '^UNSAFE_',
          match: true,
        },
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling'],
          ['index', 'object'],
        ],
        pathGroups: [
          {
            pattern: '@enclosure/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '~/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'desc',
          caseInsensitive: true,
        },
      },
    ],
    // 'max-len': ['error', { code: 100, ignoreUrls: true }],
    'prefer-template': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
        allowSeparatedGroups: true,
      },
    ],

    //   '@typescript-eslint/camelcase': 'off',

    //   '@typescript-eslint/no-use-before-define': [
    //     'error',
    //     { functions: false, variables: false },
    //   ],
    //   '@typescript-eslint/restrict-template-expressions': [
    //     'warn',
    //     { allowNullish: true },
    //   ],
    //   'import/no-internal-modules': [
    //     'error',
    //     {
    //       allow: ['dotenv*/*'],
    //     },
    //   ],

    //   'json/*': 'error',
    //   'no-console': 'error',
    //   'no-redeclare': 'off',
    //   'no-shadow': 'off',
    //   'prettier/prettier': 'error',
    //   'sort-keys': 'off',
    //   'consistent-return': 0,
    //   'implicit-arrow-linebreak': 0,
    //   'no-inferrable-types': 0,
    //   'no-await-in-loop': 0,
    //   'no-restricted-syntax': 0,

    //   // 'multiline-comment-style': ['error', 'starred-block'],
    //   'spaced-comment': [
    //     'error',
    //     'always',
    //     {
    //       line: {
    //         markers: ['/'],
    //         exceptions: ['-', '+'],
    //       },
    //       block: {
    //         markers: ['!'],
    //         exceptions: ['*'],
    //         balanced: true,
    //       },
    //     },
    //   ],
    //   radix: 0,
  },
};
