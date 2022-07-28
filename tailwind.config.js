/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {},
      fontFamily: {
         cookie: ["Cookie", "cursive"],
         squarepeg: ['"Square Peg"', "cursive"],
         armatic: ['"Amatic SC"', "cursive"],
      },
   },
   plugins: [],
};
