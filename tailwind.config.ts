import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "analytics-dark": "#26282c",
        "analytics-dark-2": "#3a3f51",
        "analytics-dark-3": "#0d062d",
        "analytics-dark-4": "#22242c",
        "analytics-grey-1": "#dadddd",
        "analytics-grey-2": "#f5f5f5",
        "analytics-grey-3": "#525252",
        "analytics-green": "#34caa5",
        "analytics-green-2": "rgba(52, 202, 165, 0.12)",
        "analytics-red": "rgba(237, 84, 78, 0.12)"
      }
    },
  },
  plugins: [],
};
export default config;
