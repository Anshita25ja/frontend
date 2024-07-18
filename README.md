npm create vite@latest

npm install -D tailwindcss
npx tailwindcss init


tailwind.config
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

index.css
@tailwind base;
@tailwind components;
@tailwind utilities;


dependencies
npm i @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

npm i eslint-plugin-simple-import-sort

npm i -D postcss autoprefixer
npx tailwindcss init -p