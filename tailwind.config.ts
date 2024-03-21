import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        custom: "2500px",
      },
      rotate: {
        132: "132deg",
      },

      colors: {
        level: {
          primary: {
            0: "#dae8fc",
            1: "#d5e8d4",
            2: "#ffe6cc",
            3: "#e1d5e7",
          },
          secondary: {
            0: "#6c8ebf",
            1: "#82b366",
            2: "#d79b00",
            3: "#9673a6",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
