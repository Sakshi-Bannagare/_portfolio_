/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: { keyframes: {
      pulse: {
        '0%': { boxShadow: '0 0 0 0px rgba(0, 0, 0, 0.5)' },
        '100%': { boxShadow: '0 0 0 30px rgba(0, 0, 0, 0)' },
      },
      arrow: {
        '0%': { color: '#3c6382' },
        '50%': { color: '#0a3d62' },
        '100%': { color: '#3c6382' },
      },
    },
    animation: {
      pulse: 'pulse 1s infinite',
      arrow: 'arrow 2s ease-in-out infinite',
    },},
  },
  plugins: [],
  corePlugins: {
    container: false, // Disable the container utility
  },
  utilities: {
    // Apply styles to all elements
    '*': {
      padding: '0',
      margin: '0',
      boxSizing: 'border-box',
    },
  },
}

