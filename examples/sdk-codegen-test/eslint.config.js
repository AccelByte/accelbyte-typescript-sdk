import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
  files: ['src/generated-definitions/**'],
  rules: {
    '@typescript-eslint/no-empty-object-type': 'off'
  }
})
