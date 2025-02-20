import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9b4819',
        secondary: '#9b4819',
        'light-background': '#d0cebe',
        'background': '#f4f1e8',
        'darkened-background': '#adaaa2',
        accent: '#e74c3c',
        text: '#333',
      },
    },
  },
  plugins: [],
} satisfies Config;
