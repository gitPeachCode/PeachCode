import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "white": "#ffffff",
      "glacier-white": "#ECF0F9",
      "black": "#000000",
      "dark-cyan": "#001920",
      "dark-night": "#23383F",
      "azure": "#2F444B",
      "peach": "#F7DFCA",
      "paw-paw": "#FBD099",
      "zinnia": "#FD7752",
      "swift-red": "#C32731",
      "verdure-yellow": "#FFFA85",
      "creepy-green": "#79AA3C",
      "clover-green": "#187238"
    },
    screens: {
      "xs": "475px",
      ...defaultTheme.screens
    },
    extend: {
      maxWidth: {
        "app-content": "96rem"
      },
      height: {
        "100vh-h-12": "calc(100vh - 3rem)"
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
