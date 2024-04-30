import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      'black': '#061103',
      'orange': '#EC6009',
      'white': '#e9fae5',
    },
    screens: {
      'sm': '568px',
      'md': '768px',
      'lg': '1068px',
      'xl': '1280px',
      //'2xl': '1536px',
   },
  },
  plugins: [],
};
export default config;
