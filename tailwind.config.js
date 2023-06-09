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
        overlay: "url('/src/assets/Service/service-bg-overlay.png')",
      },
      colors: {
        primary: "#2a9df9",
        secondary: "#1167b9",
      },
      boxShadow: {
        custom: "0 0 10px 5px rgba(0, 0, 0, 0.05)",
        darkCustom: "-8px -12px 396px 1000px rgba(0,0,0,0.27)",
        searchCustom: "-1px 4px 400px 5500px rgb(0 0 0 / 50%)"
      },
      screens: {
        tablet: { max: "900px" },
        phone: { max: "450px" },


        laptopL: { max: "1200px" },
        laptop: { max: "1024px" },
        desktop: { max: "1440px" },
        desktop2: { max: "1350px" },
        custom: { max: "1080px" },
        phoneSe: {max: "360px"},
        xSmall: {max:"540px"}
      },
    },
  },
  plugins: [],
}
