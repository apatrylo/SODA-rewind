/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, // Add !important to all Tailwind utilities
  content: [
    "./src/**/*.{html,js}",  // All HTML and JS files in the `src` directory and subdirectories.
    "./src/**/*.css",        // All CSS files in the `src` directory and subdirectories.
    "./dist/**/*.{html,js}", // All HTML and JS files in the `dist` directory.
    "./node_modules/flowbite/**/*.js", // Flowbite components.
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#f9fafb",
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#d1d5db",
          "400": "#9ca3af",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827",
          "950": "#030712"
        }
      },
      fontFamily: {
        // Override the default sans font
        sans: [
          'Nunito Sans',
          'system-ui',
          '-apple-system',
          'sans-serif'
        ],
        // Override the body font to match
        body: [
          'Nunito Sans',
          'system-ui',
          '-apple-system',
          'sans-serif'
        ]
      }
    }
  },

  plugins: [
    require('flowbite/plugin')
  ],
};