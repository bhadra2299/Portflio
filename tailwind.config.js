/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        albert: ["var(--font-albert)", "sans-serif"],
        mono: ["var(--font-fragment)", "monospace"],
      },
    },
  },
  plugins: [],
};
