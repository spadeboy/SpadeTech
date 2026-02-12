import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nothing-red": "#d71921",
        "nothing-black": "#0a0a0a",
        "nothing-white": "#ffffff",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-small": "20px 20px",
        "grid-medium": "50px 50px",
      },
      backdropBlur: {
        xl: "32px",
      },
      fontFamily: {
        "dot-matrix": ['"DotGothic16"', '"Share Tech Mono"', "monospace"],
        tech: ['"Share Tech Mono"', "monospace"],
        sans: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        "glass-lg": "0 20px 60px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(215, 25, 33, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(215, 25, 33, 0.8)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
