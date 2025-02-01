import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        'primary-50': "var(--color-primary-50)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        textColor: "var(--color-text)",
        textSecondaryColor: "var(--color-text-secondary)",
        customGreyColor: "var(--color-custom-grey)",
      },
      fontFamily: {
        lato: "Lato"
      }
    },
  },
  plugins: [],
} satisfies Config;
