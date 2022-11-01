module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['warn'],
        '@typescript-eslint/no-unused-vars': 'off',
        'no-shadow': 'off',
        'eslint-disable-next-line': 'off',
        'react-native/no-inline-styles': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
