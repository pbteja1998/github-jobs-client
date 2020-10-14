const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
        52: '13rem',
        35: '8.75rem',
      },
      maxWidth: {
        76: '19rem',
        183: '45.75rem',
      },
      spacing: {
        3.5: '0.875rem',
        10.5: '2.625rem',
        34: '8.5rem',
        35: '8.75rem',
        76: '19rem',
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
      flex: {
        4: '4 4 0%',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
