/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./about.html", "./pricing.html", "./credits.html"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      
      '3xl': '2000px',
      // => @media (min-width: 2000px) { ... }

      '4xl': '2560px',
      // => @media (min-width: 2560px) { ... }
      
      '6xl': '3440px',
      // => @media (min-width: 3440px) { ... }
    },
  },
  plugins: [require("daisyui")],
}
