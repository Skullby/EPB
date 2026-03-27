/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        epb: {
          ink: '#0f172a',
          slate: '#475569',
          line: '#dbe4f0',
          soft: '#f8fafc',
          brand: '#b91c1c',
          brandDark: '#991b1b',
          brandLight: '#fca5a5',
          sand: '#fff7ed',
          accent: '#dc2626',
        },
      },
      boxShadow: {
        soft: '0 20px 40px rgba(15, 23, 42, 0.08)',
        lifted: '0 24px 48px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top right, rgba(185,28,28,0.12), transparent 35%), radial-gradient(circle at bottom left, rgba(220,38,38,0.06), transparent 40%)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'subtle-drift': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(12px, -8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'subtle-drift': 'subtle-drift 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
