/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: "#3c354a",
        white: "#fff",
        darkviolet: "#a31cfb",
        darkslateblue: "#4a327b",
        silver: "#bfbfbf",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      "15xl": "34px",
      inherit: "inherit",
    },
    screens: {
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
