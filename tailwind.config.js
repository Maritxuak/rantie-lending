/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'md_min': {'min': "769px"},
      'sm': {'max': '320px'},
      'sm_min': {'min': '321px'}
    },
    extend: {
      brightness: {
        30: '0.80',
        175: '1.75',
      }
    },
  },
  plugins: [],
}

