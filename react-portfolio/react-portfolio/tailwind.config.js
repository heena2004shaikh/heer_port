/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";


module.exports = ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'normal-screen': '1366px', // Custom screen size
        'desktop': '1280px',
      },
      
    },
  },
  plugins: [
    tailwindScrollbar,
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"], // DaisyUI themes
    base: false, // Disable DaisyUI's global styles
  },
});
