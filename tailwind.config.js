/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily:{
      primary:'Gudea',
      secondary:'sans-serif',
    },
    container:{
      padding: {
        DEFAULT: '15px',
      },
    },
    screens:{
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1200px',
    },
    extend: {
      colors:{
        maincolor:'#3c7b8f',
        lightcolor:'#9DBDC7',
        darkcolor:'#1E3D47',
        verydarkcolor:'#12242A',
        inverse:'#C38470',
      },
    },
  },
  plugins: [],
};
