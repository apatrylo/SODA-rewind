/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/input{html,js,jsx,ts,tsx}",
    "./dist/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  darkMode: "class", // Enable dark mode with the 'dark' class

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
      },
    },
  },

  plugins: [
    require("flowbite/plugin"), // Added Flowbite plugin
  ],
  variants: {
    extend: {
      backgroundColor: ["active", "group-data-active"], // Extend variants for `data-active`
    },
  },
};
