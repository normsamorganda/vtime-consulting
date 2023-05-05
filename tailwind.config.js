/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'overlay': "url('/src/assets/Service/service-bg-overlay.png')",
      },
      colors:{
        'primary' : '#2a9df4',
        'secondary' : '#1167b1'
      }
    },
  },
  plugins: [],
}