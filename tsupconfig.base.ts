import { defineConfig } from 'tsup'

const mapped = {
  '@accelbyte/validator': {
    name: 'abValidator',
    namedImports: [
      'validateDisplayName',
      'validateEmail',
      'validateForbiddenWords',
      'ValidateForbiddenWordsErrorType',
      'validateLength',
      'ValidateLengthErrorType',
      'validateNotEmpty',
      'validatePassword',
      'validateRegex',
      'ValidateRegexErrorType',
      'validateUserName'
    ]
  },
  axios: { name: 'axios' },
  buffer: { name: 'buffer', namedImports: ['Buffer'] },
  'crypto-js': { name: 'cryptojs' },
  platform: { name: 'platform' },
  uuid: { name: 'uuid', namedImports: ['v4'] },
  validator: { name: 'validator' },
  zod: { name: 'zod', namedImports: ['z'] }
}

export default defineConfig([
  {
    entry: ['src/index.ts', 'src/all-query-imports.ts'],
    format: ['cjs', 'esm'],
    dts: true,
  },
  {
    entry: {'global/index': 'src/index.global.ts'},
    format: ['iife'],
    platform: 'browser',
    minify: true,
    esbuildPlugins: [
      {
        name: 'replace-import-with-global-references',
        setup(build) {
          for (const key in mapped) {
            const { name, namedImports } = mapped[key]
            build.onResolve({ filter: new RegExp(`^${key}$`) }, args => {
              return { path: args.path, namespace: key }
            })
            build.onLoad({ filter: /.*/, namespace: key }, args => {
              return {
                contents: namedImports
                  ? `const { ${namedImports.join(',')} } = window.AccelByteSDKDependencies.${name}; export { ${namedImports.join(',')} };`
                  : `const exported = window.AccelByteSDKDependencies.${name}; export default exported;`,
                loader: 'js'
              }
            })
          }
        }
      }
    ],
  },
])
