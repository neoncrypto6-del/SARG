
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: '#0A1A3A',
        ocean: '#0E3A7A',
        aqua: '#4FC3E0',
        ice: '#F4F9FF',
        silver: '#C9D6E8',
        orange: '#FF8C42',
        green: '#4CAF50',
        brown: '#8B5A3C',
        chocolate: '#6B4423',
        yellow: '#FFB800',
        steel: '#8BA3B8',
        cherry: '#E91E63',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
