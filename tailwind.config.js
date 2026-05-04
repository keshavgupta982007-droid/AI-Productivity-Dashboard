/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        // Warm dark backgrounds
        warm: {
          950: '#0c0a08',
          900: '#111009',
          850: '#16130e',
          800: '#1d1912',
          700: '#2a2318',
          600: '#3d3222',
        },
        // Warm accent — amber/gold
        gold: {
          300: '#f5d08a',
          400: '#e8b84b',
          500: '#d4921e',
          600: '#b8780f',
        },
        // Warm secondary — terracotta
        terra: {
          300: '#e8a98a',
          400: '#d4845a',
          500: '#b5622a',
          600: '#8f4a1a',
        },
        // Warm sage for success states
        sage: {
          400: '#8fad8a',
          500: '#6d9168',
        },
        // Warm rose for errors
        blush: {
          400: '#d4857a',
          500: '#b8604f',
        },
      },
      backgroundImage: {
        'gradient-warm':   'linear-gradient(135deg, #d4921e 0%, #b5622a 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #1d1912 0%, #16130e 100%)',
        'gradient-card':   'linear-gradient(145deg, rgba(212,146,30,0.06), rgba(181,98,42,0.03))',
        'gradient-hero':   'linear-gradient(160deg, #0c0a08 0%, #1d1912 50%, #0c0a08 100%)',
        'gradient-glow':   'radial-gradient(ellipse at center, rgba(212,146,30,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'warm-sm':  '0 2px 8px rgba(180,120,20,0.12)',
        'warm-md':  '0 4px 20px rgba(180,120,20,0.15)',
        'warm-lg':  '0 8px 40px rgba(180,120,20,0.18)',
        'warm-glow':'0 0 30px rgba(212,146,30,0.25)',
        'card':     '0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)',
        'inset-top':'inset 0 1px 0 rgba(255,220,120,0.08)',
      },
      borderColor: {
        warm: 'rgba(212,146,30,0.12)',
        'warm-hover': 'rgba(212,146,30,0.25)',
      },
      animation: {
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'slide-up':   'slideUp 0.4s ease-out forwards',
        'float':      'float 6s ease-in-out infinite',
        'pulse-warm': 'pulseWarm 2.5s ease-in-out infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn:    { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp:   { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        pulseWarm: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.5 } },
        shimmer:   { from: { backgroundPosition: '-200% 0' }, to: { backgroundPosition: '200% 0' } },
      },
    },
  },
  plugins: [],
}
