module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.html'],
    },
  darkMode: 'class', // or 'media' or 
  theme: {
    
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      fontFamily: {
        headline: ['Oswald']
    }
  

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
  }
}
