import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  darkMode: ['class','.light'],
  theme: {
    extend: {
      fontFamily: {
        dalek: ["var(--font-dalek)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "xs": "450px",
        "xxs": "400px",
        "mmd": "920px",
        //card responsive
        "mw1200": "1200px",
        "card-xl": "1370px",
        "card-lg": "1125px",
        "card-md": "868px",      
        "card-sm": "500px"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
        charts: true,
    }),
    // ... other plugins
  ]
};
export default config;
