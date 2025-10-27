/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(204, 70%, 53%)',
          foreground: 'hsl(0, 0%, 100%)',
          dark: 'hsl(204, 70%, 43%)',
        },
        secondary: {
          DEFAULT: 'hsl(142, 47%, 49%)',
          foreground: 'hsl(0, 0%, 100%)',
          dark: 'hsl(142, 47%, 39%)',
        },
        accent: {
          DEFAULT: 'hsl(340, 82%, 52%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        background: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          dark: 'hsl(222, 47%, 11%)',
        },
        foreground: {
          DEFAULT: 'hsl(222, 47%, 11%)',
          dark: 'hsl(0, 0%, 100%)',
        },
        muted: {
          DEFAULT: 'hsl(210, 40%, 96%)',
          foreground: 'hsl(215, 16%, 47%)',
          dark: 'hsl(217, 33%, 17%)',
        },
        border: {
          DEFAULT: 'hsl(214, 32%, 91%)',
          dark: 'hsl(217, 33%, 17%)',
        },
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          dark: 'hsl(222, 47%, 11%)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.375rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}