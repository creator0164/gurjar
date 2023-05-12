module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      xsm:'450' ,
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#3f5efb',
        accent: '#000000',
      },
      backgroundImage: {
        site: "url('./assets/')",
        about: "url('./assets/')",
        dashboard: "url('./assets/')",
      },
    },
  },
  plugins: [],
};
