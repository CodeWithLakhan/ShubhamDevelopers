/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#548CA8",
        secondary: "#96CADC",
        accent: "#C9D6DF",
        background: "#F2EFE4",
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        'heartbeat': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

