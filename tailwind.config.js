const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/pages/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    extend: {
      colors: {
        violet: '#5964E0',
        'light-violet': '#939BF4',
        'very-dark-blue': '#19202D',
        midnight: '#121721',
        'light-grey': '#F4F6F8',
        grey: '#9DAEC2',
        'dark-grey': '#6E8098',
      },
      opacity: {
        10: '0.1',
        35: '0.35',
      },
      spacing: {
        35: '8.75rem',
      },
      borderRadius: {
        button: '0.3125rem',
      },
      lineHeight: {
        button: '1.18rem',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        brand: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
