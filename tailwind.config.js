/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      }
    },
    colors: {
      'blue': '#013EEE',
      'yellow': '#FEF200',
      'green': '#37DDA0',
      'pink': '#FF00A4',
      'black': '#000000',
      'white': '#FFFFFF',
      'gray': '#252525'
    },
    fontFamily: {
      devant: ['DEVANT', 'sans'],
      leiden: ['LEIDEN', 'sans'],
      article: ['ARTICLE', 'sans'],
      articleBold: ['ARTICLE-BOLD', 'sans'],
      articleLight: ['ARTICLE-LIGHT', 'sans'],
    },
  },
  plugins: [],
}

