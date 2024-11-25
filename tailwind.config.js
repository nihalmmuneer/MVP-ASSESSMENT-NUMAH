const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "rgba(255,247,218,1)",
        "custom-transparent": "rgba(255,255,255,0)",
        "custom-beige": "rgba(255, 252, 242, 1)",
        "custom-grey": "rgba(248,248,248,1)",
        "custom-purple": "rgba(235,222,255,1)",
        "custom-dark-grey": "rgba(135,135,135,1)",
        "custom-black": "rgba(10,20,47,1)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
