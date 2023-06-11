module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xsm: "450px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "1600px",
    },
    extend: {
      colors: {
        primary: "#3f5efb",
        accent: "#3f5efb",
      },
      backgroundImage: {
        site: "url('./assets/')",
        about: "url('./assets/')",
        dashboard: "url('./assets/')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addComponents }) {
      addComponents({
        '.scrollable-tbody': {
          'tbody': {
            display: 'block',
            maxHeight: '30rem',
            overflowY: 'auto',
          },
          'thead, tbody tr': {
            display: 'table',
            width: '100%',
            tableLayout: 'fixed',
          },
        },
      });
    }
  ],
};
