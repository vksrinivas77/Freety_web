/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fregcy: {
          // Core Greens
          'primary-green': '#2D5A27',
          'green-light': '#4A7C59',
          'green-dark': '#1C3A19',

          // Saffron (accent)
          'saffron': '#FF6B35',
          'saffron-light': '#FF8C69',
          'saffron-dark': '#E55A2B',

          // Turmeric
          'turmeric': '#F9CA24',
          'turmeric-light': '#FBD148',
          'turmeric-dark': '#E6B800',

          // Support & neutrals
          'earth-brown': '#8B4513',
          'terracotta': '#CD853F',
          'earth-sage': '#9CAF88',
          'cream-white': '#FAF5F0',
          'warm-white': '#FEFCF8',
          'soft-beige': '#F5F0E8',

          // Text helpers used in Home.tsx
          'h1': '#1C3A19',
          'body': '#2D3748',
          'body-light': '#4A5568',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FAF5F0 0%, #F5F0E8 50%, #E8F5E8 100%)',
        'cta-gradient': 'linear-gradient(45deg, #FF6B35 0%, #F9CA24 100%)',
      },
    },
  },
  plugins: [],
};
