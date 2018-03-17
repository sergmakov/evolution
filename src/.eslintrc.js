module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  globals: {
    // Globals set by Webpack
    PLACE_ORDER_SETTING: false,
    DEBUG: false,
    VERSION: false,
    SITE_VERSION: false,
    SITE: false,
  },
  rules: {
    // TODO: Remove string refs and re-enable this rule.
    // This one is very important, as string refs will be removed in a future React version.
    'react/no-string-refs': 'off',

    'react/sort-comp': 'off',
    // Should remove the skipShapeProps property here once this bug is fixed:
    // https://github.com/yannickcr/eslint-plugin-react/issues/819
    'react/no-unused-prop-types': ['error', { skipShapeProps: true }],

    // TODO: Probably enable these rules
    'import/imports-first': 'off',
    'react/no-find-dom-node': 'off',
    'import/no-mutable-exports': 'off',
    'import/prefer-default-export': 'off',

    // These rules doesn't understand Webpack aliases.
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',

    // This rule presents an error if you want to export something individually
    // and as a property on the default export.
    'import/no-named-as-default-member': 'off',

    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',

    'jsx-a11y/label-has-for': 'off',

    // MemberExpression enforces consistent indentation for promise chains since we use
    // a lot of them.
    'indent': ['error', 2, {
      'MemberExpression': 1,
      'SwitchCase': 1,
    }],

    'quote-props': 'off',
    'sort-imports': 'error',
    'prefer-rest-params': 'off',
    'arrow-body-style': 'off',
    'func-names': 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off', // doesn't work well with chai
    'space-before-function-paren': ['error', { named: 'never', anonymous: 'never' }],
  },
};
