/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // keep your existing classnames, but drive them from CSS variables
        fregcy: {
          // Core Greens
          'primary-green': 'var(--primary-green)',
          'green-light': 'var(--primary-green-light)',
          'green-dark': 'var(--primary-green-dark)',

          // Saffron
          'saffron': 'var(--secondary-saffron)',
          'saffron-light': 'var(--secondary-saffron-light)',
          'saffron-dark': 'var(--secondary-saffron-dark)',

          // Turmeric
          'turmeric': 'var(--accent-turmeric)',
          'turmeric-light': 'var(--accent-turmeric-light)',
          'turmeric-dark': 'var(--accent-turmeric-dark)',

          // Support / neutrals
          'earth-brown': 'var(--earth-brown)',
          'terracotta': 'var(--earth-terracotta)',
          'earth-sage': 'var(--earth-sage)',
          'cream-white': 'var(--cream-white)',
          'warm-white': 'var(--warm-white)',
          'soft-beige': 'var(--soft-beige)',

          // Text helpers
          'h1': 'var(--h1-color)',
          'body': 'var(--body-text)',
          'body-light': 'var(--body-text-light)',
        },
      },
      backgroundImage: {
        // read from CSS variables so you can theme later
       'eucalyptus-mist': 'linear-gradient(to bottom right, #EBECCC, #CDD4B1, #EBECCC)',
        'peach-whisper': 'linear-gradient(to right, #FFF9E2, #FEECD0, #FFF9E2)',
        'clay-fade': 'linear-gradient(to top, #FEECD0, #DCA278, #FFF9E2)',
        'ivory-glow': 'linear-gradient(to bottom, #FFF9E2, #EBECCC)',
        'leaf-haze': 'linear-gradient(to bottom right, #CDD4B1, #EBECCC, #FEECD0)',
    
        'cta-gradient': 'var(--cta-bg)',
      },
    },
  },
  plugins: [],
};
