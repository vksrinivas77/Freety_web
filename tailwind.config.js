/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Fregcy Brand Colors
        fregcy: {
          sage: '#A1C298',
          blush: '#F2D7D9',
          leaf: '#58A96C',
          'leaf-hover': '#468756',
          tangerine: '#FF914D',
          'tangerine-hover': '#E76D28',
          charcoal: '#1E1E1E',
          tomato: '#E63946',
          beetroot: '#6A0572',
          carrot: '#FFA500',
          corn: '#FFD166',
          spinach: '#2E7D32',
          chickpea: '#FFF5E1',
        },
        // Fregacy Brand Colors
        fregacy: {
          // Primary Greens
          'brand-green': '#4A7C59',
          'light-green': '#7FB069',
          'soft-green': '#B7E4C7',
          // Oranges
          'primary-orange': '#FF6B35',
          'light-orange': '#FF8C42',
          'soft-orange': '#FFB68A',
          // Purples
          'primary-purple': '#6F4E7C',
          'light-purple': '#A084CA',
          'soft-purple': '#D4C5E8',
          // Backgrounds
          'off-white': '#FAFAFA',
          'light-gray': '#F5F5F5',
          'medium-gray': '#E8E8E8',
          'dark-gray': '#2C2C2C',
          'text-black': '#1A1A1A',
          // CTAs
          'primary-cta': '#FF6B35',
          'primary-cta-hover': '#E55A2B',
          'secondary-cta': '#2D5A27',
          'secondary-cta-hover': '#1F3E1A',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FAFAFA 0%, #B7E4C7 100%)',
        'about-gradient': 'linear-gradient(135deg, #2D5A27 0%, #4A7C59 100%)',
        'cta-gradient': 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
        'secondary-cta-gradient': 'linear-gradient(135deg, #2D5A27 0%, #4A7C59 100%)',
      }
    },
  },
  plugins: [],
};