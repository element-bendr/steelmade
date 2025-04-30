/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FFFFFF",
          secondary: "#FAFAFA",
        },
        text: {
          DEFAULT: "#111827",
          muted: "#6B7280",
        },
        accent: {
          DEFAULT: "#B91C1C",
          light: "#DC2626",
          dark: "#991B1B",
        },
        border: "#E5E7EB",
      },
      boxShadow: {
        'morphism': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        'morphism-lg': '0 12px 48px 0 rgba(0, 0, 0, 0.12)',
        'morphism-hover': '0 12px 40px 0 rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        'morphism': '10px',
      },
      backgroundImage: {
        'gradient-morphism': 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6))',
        'gradient-morphism-dark': 'linear-gradient(145deg, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.6))',
        'gradient-accent': `linear-gradient(145deg, rgba(185, 28, 28, 0.9), rgba(185, 28, 28, 0.6))`,
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.morphism': {
          'background': 'rgba(255, 255, 255, 0.7)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        },
        '.morphism-dark': {
          'background': 'rgba(17, 24, 39, 0.7)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
        },
        '.morphism-card': {
          'background': 'rgba(255, 255, 255, 0.7)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
          'transition': 'all 0.3s ease-in-out',
        },
        '.morphism-button': {
          'background': 'rgba(185, 28, 28, 0.9)',
          'backdrop-filter': 'blur(5px)',
          'border': '1px solid rgba(185, 28, 28, 0.2)',
          'transition': 'all 0.3s ease-in-out',
        },
      }
      addUtilities(newUtilities, ['hover'])
    }
  ],
}
