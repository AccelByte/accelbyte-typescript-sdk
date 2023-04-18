const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const tailwindConfig = require('./tailwind.config.js')

module.exports = {
  plugins: [
    tailwindcss(tailwindConfig),
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
