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