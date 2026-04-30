/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: '#050505',
          900: '#0B0B0B',
          800: '#171717',
          700: '#242424',
          600: '#363636',
        },
        gold: {
          50: '#FFF9DB',
          100: '#F8E7A1',
          300: '#F4D03F',
          400: '#E0BC3E',
          500: '#D4AF37',
          600: '#B9932F',
          700: '#8F7022',
        },
        paper: '#FAF7F1',
        merlot: '#8A3E47',
        neutral: {
          50: '#FAFAFA',
          900: '#171717',
        }
      },
      fontFamily: {
        heading: ['"Oswald"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s linear infinite',
        'expandLine': 'expandLine 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        expandLine: {
      '0%': { transform: 'translateX(-50%) scaleX(0)' },
'100%': { transform: 'translateX(-50%) scaleX(1)' },
    },
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(245, 158, 11, 0.3)',
        'soft': '0 10px 30px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
