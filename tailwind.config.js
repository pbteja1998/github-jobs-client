const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
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
        logo: {
          1: '#DF6DAE',
          2: '#3DB3D1',
          3: '#3D3B94',
          4: '#F0B62A',
          5: '#E66D39',
          6: '#222121',
          7: '#5964E0',
          8: '#FB7E66',
          9: '#007CFF',
          10: '#492A29',
          11: '#60DCAD',
          12: '#FF585F',
        },
      },
      opacity: {
        10: '0.1',
        35: '0.35',
      },
      minHeight: {
        card: '14.25rem',
      },
      minWidth: {
        card: '20.4375rem',
      },
      spacing: {
        12.5: '3.125rem',
        35: '8.75rem',
        'card-width': '20.4375rem',
        'card-height': '14.25rem',
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
