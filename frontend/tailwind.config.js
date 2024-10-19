module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.7s ease-in-out forwards",
        slideIn: "slideIn 0.5s ease-out forwards",
        pop: "pop 0.5s ease-in-out forwards",
        rotate: "rotate 0.5s ease-in-out forwards",
      },
      roboto: ["Roboto", "sans-serif"],
      lora: ["Lora", "serif"],
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        pop: {
          "0%": { transform: "scale(0.9)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(10deg)" },
        },
      },
    },
  },
  plugins: [],
};
