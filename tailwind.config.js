/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 18s linear infinite',
      },
      boxShadow: {
        glow: "0 0 30px rgba(16, 185, 129, 0.35)",
      },
      colors: {
        brand: {
          900: "#030305",
          800: "#080808",
          700: "#111111",
          600: "#141414",
          500: "#1f1f1f",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
