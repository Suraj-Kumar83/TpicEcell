/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#1E1E1E",
        lightBlue: "#87CEFA",
        blue: "#007FFF",
        base: "#f1f4f1",
        base2: "#FFFF00",
        base3: "#13eb98ff",
        base4:"#114b2c"
      },
      spacing: {},
      fontFamily: {
        Montserrat: "Montserrat",
        SFPro: "SF Pro",
        SFProDisplay: "SF Pro Display",
        Poppins: ["Poppins"],
        Inter: "Inter",
        Arimo: "Arimo",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        md: "20px",
        lg: "24px",
        xl: "28px",
        xxl: "32px",
        xxxl: "40px",
      },
      backgroundImage: {
        'magic-pattern': "url('./src/assets/magicpattern.png')",
      },
    },
  },
  plugins: [],
};
