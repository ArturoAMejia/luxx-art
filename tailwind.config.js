/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#b6e86d",

          "secondary": "#c2b3ef",

          "accent": "#574bc6",

          "neutral": "#1B1E22",

          "base-100": "#F5F5FA",

          "info": "#287FF0",

          "success": "#1FD68D",

          "warning": "#F0AA14",

          "error": "#FA0553",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}