import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hueso: {
          DEFAULT: '#F6F3EE',
          2: '#ECE7DD',
          3: '#E2DBCD',
        },
        tinta: {
          DEFAULT: '#0B2034',
          2: '#142C42',
        },
        maritimo: '#0E5C8C',
        azul: {
          DEFAULT: '#1FA9E0',
          light: '#5BC0EB',
        },
        cielo: {
          DEFAULT: '#7FD0EE',
          soft: '#BCE3F2',
        },
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(11, 32, 52, 0.04)',
        md: '0 8px 24px rgba(11, 32, 52, 0.08)',
        lg: '0 24px 48px rgba(11, 32, 52, 0.12)',
        xl: '0 32px 64px rgba(11, 32, 52, 0.16)',
      },
    },
  },
  plugins: [],
};

export default config;
