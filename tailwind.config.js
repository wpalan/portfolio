/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { animation: {
      'pulse-slow': 'pulseColors 4s ease-in-out infinite',
    },
    keyframes: {
      pulseColors: {
        '0%, 100%': { backgroundColor: 'rgba(14, 165, 233, 1)' }, // Azul cielo
        '50%': { backgroundColor: 'rgba(236, 72, 153, 1)' }, // Rosa fuerte
      },
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
