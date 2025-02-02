/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/JSX/TSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {  // Use colors instead of text
        TextPrimary: '#ffffff',
        TextSecondary: '#b3b3b3',
      }, 
    },
  },
  plugins: [],
};
