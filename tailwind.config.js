/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cl_blue-1': '#DCF9FB',
        'cl_blue-2': '#B4F3F6',
        'cl_blue-3': '#02B2BB',
        'cl_blue-4': '#028D94',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        noto: ['Noto Serif TC', 'serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    ["@babel/plugin-transform-react-jsx", { "throwIfNamespace": false }]
  ],
}
