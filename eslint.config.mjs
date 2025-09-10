import tsEslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tsEslint.config(
  {
    ignores: ['.yarn/'],
  },
  tsEslint.configs.recommended,
  {
    ...prettierConfig,
    files: ['**/*.{js,ts}'],
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'no-console': 'off',
      ...prettierConfig.rules,
      quotes: [1, 'single', 'avoid-escape'],
      'spaced-comment': ['error', 'always'],
      curly: ['error', 'all'],
    },
  }
);
