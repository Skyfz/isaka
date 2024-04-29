const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        darkGray: 'rgba(0, 0, 0, 0.5)', // Custom dark gray color with RGBA values
        dark: 'var(--aw-color-bg-page-dark)', // Custom dark color with --aw-color-bg-page-dark
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        shake: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(4deg)' },
          '20%': { transform: 'rotate(-2deg)' },
          '30%': { transform: 'rotate(4deg)' },
          '40%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2.5deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        header: {
          '0%': { opacity: 0 , transform: 'scaleY(0)'},
          '80%': { opacity: 0 ,transform: 'scaleY(0)'},
          '100%': { opacity: 1 ,transform: 'scaleY(1)'},
        },
        slide: {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '50%': { opacity: 0.2 },
          '100%': { opacity: 1,transform: 'translateX(0)' },
        },
        expand: {
          '0%': { opacity: 0, transform: 'scale(0)' },
          '20%': { opacity: 0,transform: 'scale(0)' },
          '100%': { opacity: 1,transform: 'scale(1)' },
        },
        open: {
          '0%': { opacity: 0, transform: 'rotateY(90deg)' },
          '50%': { opacity: 0.2 },
          '100%': { opacity: 1 , transform: 'rotateY(0deg)' },
        },
        droneSwoop: {
          '0%': { opacity: 0, transform: 'scale(0) translateX(200px) translateY(200px) rotateY(90deg) rotateX(90deg)' },
          '70%': { opacity: 0.5 },
          '100%': { opacity: 1 , transform: 'scale(1) translateX(0) translateY(0) rotateY(0deg) rotateX(0deg)' },
        },
        breathing: {
          '0%': { transform: 'scale(1) translateZ(0)', opacity: 1 },
          '50%': { transform: 'scale(0.95) translateZ(0)', opacity: 0.95 },
          '100%': { transform: 'scale(1) translateZ(0)', opacity: 1 },
        },
        reveal: {
          '0%': { maskSize: '100%', maskImage: 'linear-gradient(to right, transparent, #000)' },
          '100%': { maskSize: '0%', maskImage: 'linear-gradient(to right, transparent, #000)' },
        },
        spintheme: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
          '100% ': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        'shake': 'shake 1.2s linear infinite',
        'header': 'header 0.6s ease-out',
        'slide': 'slide 0.7s ease-in-out both',
        'expand': 'expand 1.3s ease-in-out both',
        'open': 'open 4s ease-in-out both',
        'drone': 'droneSwoop 0.8s ease-out both',
        'breathe': 'breathing 4s ease-in-out infinite',
        'reveal': 'reveal 10s',
        'spintheme': 'spintheme 10s ease-in-out infinite',
      },
      
    }
  },
    plugins: [require('@tailwindcss/typography')],
    darkMode: 'class',
  
}
