/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        red: "#CC3B3B",
        yellow: "#FFCB05",
        lightYellow: "#FFCB053D",
        blue: "#2E6EB5",
        lightBlue: "#72ACFF",
        grayOne: "#6E6E6E",
        grayTwo: "#EBEDED",
        grayThree: "#A6ADB4",
        grayFour: "#A5A7A7",
        grayFive: "#676D74",
        graySix: "#2E6EB53C",
        dark: "#202124",
      },
    },
  },
  plugins: [],
};
