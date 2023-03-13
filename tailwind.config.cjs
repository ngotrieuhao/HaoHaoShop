/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        sky: '#3399FF',
        redLight: '#EF233C',
        pink: '#FF7C9C',
        redDark: '#D10024'
      },
      boxShadow: {
        '3xl': '0 0 20px -1px #dcf836',
        '4xl': '20px 20px 15px rgb(0 0 0 / 5%);',
        '5xl': '0 0 15px rgb(0 0 0 /15%);'
      },
      transitionProperty: {
        width: 'width'
      },
      keyframes: {
        shine: {
          '0%, 100%': {
            'background-position-x': '-200%'
          }
        }
      },
      animation: {
        shine: 'shine 1s linear infinite'
      },
      backgroundSize: {
        '200%': '200% 100%'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    }),
    require('@tailwindcss/line-clamp')
  ]
}
