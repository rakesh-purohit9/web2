module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        bluegray_50: "#eaecf0",
        blue_50: "#e0ecff",
        blue_51: "#e0ebff",
        black_900: "#000000",
        white_A700: "#ffffff",
        bluegray_200: "#bac1ce",
        colors: "#d0021b",
        blue_A700: "#0061ff",
        blue_200: "#a6c8ff",
        gray_50: "#f8f9fa",
        colors1: "#f8e71c",
        gray_400_3f: "#d0c8c83f",
        black_901: "#090b0d",
        bluegray_700: "#424c5d",
        colors2: "#4a90e2",
        bluegray_900: "#262b35",
        bluegray_400: "#74839d",
        gray_700_11: "#55555511",
      },
      borderRadius: {
        radius2: "2px",
        radius5: "5px",
        radius8: "8px",
        radius10: "10px",
        radius15: "15px",
        radius25: "25%",
        radius32: "32px",
        radius50: "50%",
        radius175: "17.5px",
      },
      boxShadow: {
        bs1: "1px 0px  50px 0px #d0c8c83f",
        bs: "0px 0px  10px 4px #55555511",
      },
      fontFamily: {
        roboto: "Roboto",
        gilroy: "Gilroy",
        inter: "Inter",
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
