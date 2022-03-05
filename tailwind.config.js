module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0000f5',
        secondary: '#f6c552',
        tertiary: '#eb345d',
        'grey-light-1': '#F6F8FB',
        'grey-light-2': '#e6e9ed',
        accents_0: '#f8f9fa',
        accents_1: '#f1f3f5',
        accents_2: '#e9ecef',
        accents_3: '#dee2e6',
        accents_4: '#ced4da',
        accents_5: '#adb5bd',
        accents_6: '#868e96',
        accents_7: '#495057',
        accents_8: '#343a40',
        accents_9: '#212529',
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
      },
      borderRadius: {
        circle: '50%',
      },
    },
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      lato: ['Lato', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },
  },
  plugins: [],
}
