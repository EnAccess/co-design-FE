import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "col-span-5",
    "col-span-6",
    "col-span-7",
    "col-span-8",
    "col-span-9",
    "row-span-1",
    "row-span-2",
    "row-span-3",
    "row-span-4",
    "row-span-5",
    "row-span-6",
    "row-span-7",
    "row-span-8",
    "grid-rows-1",
    "grid-rows-2",
    "grid-rows-3",
    "grid-rows-4",
    "grid-rows-5",
    "grid-rows-6",
    "grid-rows-7",
    "grid-rows-8",
    "bg-level-primary-0",
    "bg-level-primary-1",
    "bg-level-primary-2",
    "bg-level-primary-3",
    "bg-level-primary-default",
    "border-level-secondary-0",
    "border-level-secondary-1",
    "border-level-secondary-2",
    "border-level-secondary-3",
    "border-level-secondary-default",
    "bg-black-900",
  ],
  theme: {
    extend: {
      maxWidth: {
        custom: "3500px",
      },
      colors: {
        black: {
          900: "#333333",
        },
        level: {
          primary: {
            0: "#dae8fc",
            1: "#d5e8d4",
            2: "#ffe6cc",
            3: "#e1d5e7",
            default: "#ffffff",
          },
          secondary: {
            0: "#6c8ebf",
            1: "#82b366",
            2: "#d79b00",
            3: "#9673a6",
            default: "#000000",
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
