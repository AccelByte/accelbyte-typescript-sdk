const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const tailwindConfig = require('../../../packages/od-shared/tailwind.config.js')

module.exports = {
  plugins: [
    tailwindcss({
      ...tailwindConfig,
      // Disable preflight.
      corePlugins: {
        preflight: false
      },
      content: [
        './src/**/*.{ts,tsx}',
        '../../../packages/od-shared/src/**/*.{ts,tsx}*',
        '../../../packages/od-components/src/**/*.{ts,tsx}',
        '../../../packages/od-account/src/**/*.{ts,tsx}',
        '../../../packages/od-ecommerce/src/**/*.{ts,tsx}',
        '../../../packages/od-legal/src/**/*.{ts,tsx}'
      ]
    }),
    {
      postcssPlugin: 'internal:charset-removal',
      AtRule: {
        charset: atRule => {
          if (atRule.name === 'charset') {
            atRule.remove()
          }
        }
      }
    },
    autoprefixer
  ]
}
