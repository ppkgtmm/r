module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: "#E0F6F4",
      orange: "#FBE4D3",
      ygreen: "#EAF8DF", // yellow green
      mgreen: "#E6F5EF", // mint green
      yellow: "#FFF5D2",
      bgrey: "#E3E7F3", // blue grey
      grey: "#E5E5E5"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
