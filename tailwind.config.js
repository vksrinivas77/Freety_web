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
        'eucalyptus-mist': 'linear-gradient(to bottom right, #C5E1A5, #E8F5E9)',
        'peach-whisper': 'linear-gradient(to right, #FFF9E2, #FEECD0, #FFF9E2)',
        'clay-fade': 'linear-gradient(to top, #f4b248ff, #bcada1ff, #FFF9E2)',
        'ivory-glow': 'linear-gradient(to bottom, #ffffffff, #EBECCC)',
        'leaf-haze': 'linear-gradient(to bottom right, #CDD4B1, #EBECCC, #FEECD0)',

          'pistachio-mint': 'linear-gradient(to bottom right, #c3f18fff, #fdfdfdff)',
          'mint-breeze': 'linear-gradient(to top, #E8F5E9, #C5E1A5)',
          
          'olive-cream': 'linear-gradient(to bottom right, #D0CD5A, #EFDB9E)',
          'golden-leaf': 'linear-gradient(to top, #bbffaeff, #c5e6ccff)',
  

        /* --- Muted complementary pastels (balance your theme) --- */
        'mauve-haze': 'linear-gradient(to bottom right, #D0CD5A, #EFDB9E)',
        'soft-lavender': 'linear-gradient(to bottom, #ECE7FF, #E2DAFB)',
        'coconut-cloud': 'linear-gradient(to bottom right, #FFFFFF, #F2F7F7)',
        'blush-breeze': 'linear-gradient(to bottom right, #FFECEC, #FCEBF2)',
        'sage-wind': 'linear-gradient(to right, #E3EBD4, #F1F7E5)',


        'cta-gradient': 'var(--cta-bg)',
      },
    },
  },
  plugins: [],
};
