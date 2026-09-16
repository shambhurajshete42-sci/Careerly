/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF8FF',
          100: '#F0ECFF', // Soft Lavender
          200: '#DDD5FF',
          300: '#C2B0FF',
          400: '#9E82FF',
          500: '#7B57FF',
          600: '#5B3FD6', // Primary Purple #5B3FD6
          700: '#4E34BF',
          800: '#4129A8',
          900: '#341E8F',
          950: '#231268',
          primary: '#5B3FD6',
        },
        lavender: {
          50: '#FAF8FF',
          100: '#F0ECFF', // Soft Lavender #F0ECFF
          200: '#E6DEFC',
          300: '#D7CBF9',
          400: '#C3B0F5',
          500: '#AB91EF',
        },
        beige: {
          50: '#FAF7F0',
          100: '#F7F3EA', // Warm Beige #F7F3EA
          200: '#EFE8DA',
          300: '#E4DAC6',
          400: '#D5C7AD',
          500: '#C2B090',
        },
        sage: {
          50: '#F5FAF7',
          100: '#E4F3EA', // Soft Mint #E4F3EA
          200: '#CEE8D8',
          300: '#B0D9C1',
          400: '#8FC5A5',
          500: '#6FAF8B', // Sage Green #6FAF8B
          600: '#5A9976',
          700: '#467F60',
          800: '#36644B',
          900: '#284B38',
        },
        mint: {
          50: '#F5FAF7',
          100: '#E4F3EA', // Soft Mint #E4F3EA
          200: '#CEE8D8',
          300: '#B0D9C1',
        },
        softblue: {
          50: '#F4F7FF',
          100: '#E6ECFF',
          200: '#D0DCFF',
          300: '#AFC3FF',
          400: '#8DA7FF',
          500: '#6C8CFF', // Soft Blue #6C8CFF
          600: '#5272E5',
          700: '#3D58C7',
        },
        charcoal: {
          DEFAULT: '#292631', // Charcoal Text #292631
          50: '#8E8A98',
          100: '#757080',
          200: '#5D5869',
          300: '#484453',
          400: '#363240',
          500: '#292631',
          600: '#221F29',
          700: '#1B1921',
          800: '#141219',
          900: '#0E0D12',
        },
        accent: {
          blue: '#6C8CFF',
          green: '#6FAF8B',
          gold: '#d97706',
          pink: '#db2777',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(41, 38, 49, 0.04), 0 1px 2px 0 rgba(41, 38, 49, 0.02)',
        'card': '0 4px 20px -2px rgba(91, 63, 214, 0.06), 0 2px 6px -1px rgba(41, 38, 49, 0.04)',
        'card-hover': '0 12px 28px -4px rgba(91, 63, 214, 0.12), 0 4px 10px -2px rgba(41, 38, 49, 0.05)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
