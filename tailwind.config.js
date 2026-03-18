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
          brand: '#0f766e',
          brandDark: '#115e59',
          sand: '#fff7ed',
          accent: '#f97316',
        },
      },
      boxShadow: {
        soft: '0 20px 40px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(15,118,110,0.18), transparent 35%), linear-gradient(135deg, #f8fafc 0%, #ffffff 45%, #fff7ed 100%)',
      },
    },
  },
  plugins: [],
}
