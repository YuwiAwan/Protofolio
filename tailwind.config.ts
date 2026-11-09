import type { Config } from 'tailwindcss'

/**
 * Persona-inspired design tokens.
 *
 * `aqua`  — the bright underwater blue stage used by the home screen.
 * `deep`  — the darker navy used by the interior screens (projects / skills).
 * `ink`   — the single hard black used for every cut-out shape and card.
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // Composed at runtime as `ransom-${variant}`, so the scanner never sees them.
  safelist: ['ransom-plain', 'ransom-box', 'ransom-invert', 'ransom-accent'],
  theme: {
    extend: {
      colors: {
        aqua: {
          50: '#D7F4FF',
          100: '#9FE4FF',
          200: '#5CD1FF',
          300: '#22B8FF',
          400: '#0E96EE',
          500: '#0B6FD0',
          600: '#0A55AC',
          700: '#083F86',
          800: '#062C60',
          900: '#041C3F',
        },
        deep: {
          400: '#1C82D4',
          500: '#116BB8',
          600: '#0C4E8C',
          700: '#08315C',
          800: '#051F3D',
          900: '#020D1E',
        },
        ink: '#07080A',
        bone: '#FFFFFF',
        blood: '#E60012',
        volt: '#3DF07B',
        gold: '#FFC531',
      },
      fontFamily: {
        display: ['Anton', '"Archivo Black"', '"Arial Black"', 'sans-serif'],
        heavy: ['"Archivo Black"', '"Arial Black"', 'sans-serif'],
        cond: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      boxShadow: {
        cut: '8px 8px 0 rgba(7, 8, 10, 0.45)',
        'cut-sm': '5px 5px 0 rgba(7, 8, 10, 0.35)',
        'cut-lg': '14px 14px 0 rgba(7, 8, 10, 0.5)',
        glow: '0 0 0 2px #22B8FF, 12px 12px 0 rgba(7, 8, 10, 0.55)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-in': 'slideIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-left': 'slideLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pop-in': 'popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'screen-in': 'screenIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both',
        'wipe-in': 'wipeIn 0.5s cubic-bezier(0.7, 0, 0.2, 1) both',
        rays: 'rays 14s ease-in-out infinite',
        caustic: 'caustic 18s ease-in-out infinite',
        rise: 'rise linear infinite',
        sway: 'sway 9s ease-in-out infinite',
        blink: 'blink 1.4s steps(2, start) infinite',
        drift: 'drift 40s linear infinite',
        scan: 'scan 7s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-44px) skewX(-3deg)' },
          '100%': { opacity: '1', transform: 'translateX(0) skewX(-3deg)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(46px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.8)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        screenIn: {
          '0%': { opacity: '0', transform: 'translateY(18px) scale(0.985)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        wipeIn: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        rays: {
          '0%, 100%': { opacity: '0.25', transform: 'translateX(-2%) skewX(-12deg)' },
          '50%': { opacity: '0.55', transform: 'translateX(3%) skewX(-8deg)' },
        },
        caustic: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)', opacity: '0.35' },
          '50%': { transform: 'translate3d(-3%, 2%, 0) scale(1.12)', opacity: '0.6' },
        },
        rise: {
          '0%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-105vh) translateX(24px) scale(1.35)', opacity: '0' },
        },
        sway: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-1.2deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.15' },
        },
        drift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '600px 0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
