module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        arrive: 'arrive 200ms ease-in-out',
        preload: 'preload 800ms ease-in-out infinite',
      },
      keyframes: {
        arrive: {
          '0%': { opacity: '0', transform: 'rotateX(23deg) translateY(-13px)'},
          '100%': { opacity: '1', transform: 'rotateX(0deg) translateY(0px)'},
        },
        preload: {
          '0%':   { left: '-50%'},
          '100%': { left: '100%'},
        },
      },
      maxWidth: {
        'xxs': '60px', 
        'xsm': '170px', 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
