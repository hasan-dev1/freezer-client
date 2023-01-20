/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#152A41",
          secondary: "#26405B",
          accent: "#6EB9F0",
          last: "#f3f4f7",
          "base-100": "#ffffff",
        },
        light: {
          primary: "#FFFFFF",
          secondary: "#F0F0F0",
          accent: "#656565",
          last: "#6f00ff",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
