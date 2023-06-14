/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}",],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#4EA8DE',
        'primary-grey-100': '#F2F2F2',
        'primary-grey-200': '#D9D9D9',
        'primary-grey-300': '#808080',
        'primary-grey-400': '#333333',
        'primary-grey-500': '#262626',
        "primary-grey-600": '#1A1A1A',
        'primary-grey-700': '#0D0D0D',
        'primary-purple': '#8284FA',
      },
      screens: {
        'mobile-lg': '425px',
        'mobile-sm': '320px'
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

