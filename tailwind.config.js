/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: 'Gudea',
      secondary: 'sans-serif',
    },
    extend: {
      colors: {
        lightcolor: '#9DBDC7',
        maincolor: '#3c7b8f',
        darkcolor: '#1E3D47',
        verydarkcolor: '#12242A',
        inverse: '#C38470',
      },
    },
  },
  plugins: [],
};
