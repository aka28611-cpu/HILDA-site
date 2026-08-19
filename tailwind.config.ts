import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        h: {
          primary: '#1C1917',
          'on-primary': '#FFFFFF',
          secondary: '#44403C',
          accent: '#A16207',
          'accent-light': '#D4A574',
          background: '#FAFAF9',
          foreground: '#0C0A09',
          card: '#FFFFFF',
          muted: '#E8ECF0',
          'muted-foreground': '#475569',
          border: '#D6D3D1',
          cream: '#FAFAF9',
          blush: '#E8B4B8',
          rose: '#C9787C',
          wine: '#8B2252',
          burgundy: '#6B1D3A',
          gold: '#A16207',
          'gold-light': '#D4A574',
          charcoal: '#1C1917',
          dark: '#0C0A09',
        },
      },
      fontFamily: {
        serif: ['Cormorant', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['Cormorant', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'shimmer': 'shimmer-gold 3s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(161, 98, 7, 0.15)' },
          '50%': { boxShadow: '0 0 0 8px rgba(161, 98, 7, 0)' },
        },
        'shimmer-gold': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
