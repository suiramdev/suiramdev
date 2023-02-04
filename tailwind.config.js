/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to bottom, rgba(0, 0, 0 , 0.8), transparent, transparent, transparent), url(/grid.svg)",
      },
    },
  },
  plugins: [],
};
