/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#A63C06",
        text: "#EEBA0B",
        border: "#C36F09",
        buttonbg: "#C36F09",
        buttonhover: "#A63C06",
        paragraph: "#F4E409",
        accent: "#F4E409",
        // dark: "#710000",
      },
      backgroundImage: {
        dark: "linear-gradient(to bottom right, #111827, #1F2937)", // Equivalent to bg-gradient-to-br from-gray-900 to-gray-800
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
