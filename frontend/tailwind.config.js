module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01b266",
        secondary: "#01cd76",
        "primary-dark": "#2e504c",
        "primary-light": "#abe0c2",
      },
      fontFamily: {
        ibmp: ["IBM Plex Sans Thai", "sans-serif"],
      },
    },
  },
  plugins: [],
};
