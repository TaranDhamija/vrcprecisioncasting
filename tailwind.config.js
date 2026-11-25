/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        palladian: '#EEE9DF',
        oatmeal: '#C9C1B1',
        abyssal: '#1B2632',
        fantastic: '#2C3B4D',
        flame: '#FFB162',
        truffle: '#A35139',
      },
      fontFamily: {
        display: ['Manrope', 'Sora', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        technical: '0.18em',
      },
      maxWidth: {
        site: '1320px',
      },
    },
  },
  plugins: [],
};
