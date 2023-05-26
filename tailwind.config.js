/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            'theme-blue': '#3761F5',
            'btn-blue-hover': '#1E4DF1',
        }
      },
    },
    plugins: [],
  }