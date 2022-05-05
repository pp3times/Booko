const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
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
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
        ibm: ["IBM Plex Sans Thai", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sukhumvit: ["Sukhumvit Set", "sans-serif"],
        // sukhumvit: ["Sukhumvit Set", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
  ],
};
