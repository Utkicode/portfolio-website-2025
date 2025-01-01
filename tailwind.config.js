module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#ff5722", // Default (Orange)
          dark: "#1f2937", // Dark
          blue: "#3b82f6", // Blue
        },
        accent: {
          default: "#ffc107",
          dark: "#d97706",
          blue: "#60a5fa",
        },
        background: {
          default: "#ffffff",
          dark: "#121212",
          blue: "#e0f2fe",
        },
      },
    },
  },
  plugins: [],
};
