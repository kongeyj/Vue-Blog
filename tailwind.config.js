/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-bg": "oklch(0.93 0.02 262.89)",
        "dark-bg": "oklch(0.25 0.02 280.46) ",
        "light-card-bg": "white",
        "dark-card-bg": "oklch(0.29 0.02 277.54)",
        "light-text": "oklch(0.42 0.05 255.84)",
        "dark-text": "oklch(0.98 0.01 0)",
        "dark-purple-bg": "oklch(74.2023% .148546 301.883095 / 1)",
        "dark-origin-bg": "oklch(83.3927% .124132 66.558491 / 1)",
        "light-purple-bg": "oklch(59.9398% .191515 335.171434 / 1)",
        "light-blue-bg": "oklch(42.5516% .161098 282.339433 / 1)",
      },
    },
  },
  plugins: [],
};
