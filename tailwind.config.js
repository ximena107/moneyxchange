module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: '#05bcd8'
      },
      backgroundColor: {
        primary: '#434A6C',
        secondary: '#454D78',
        tertiary: '#05bcd8'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      textColor: ['active']
    }
  },
  plugins: []
};
