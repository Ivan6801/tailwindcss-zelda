module.exports = {
    purge: [
        './public/**/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: theme => ({
          'wave-pattern': "url('../assets/icons/wave-white.png')",
          'wave-pattern-dots': "url('../assets/icons/pattern-white-dots.png')",
          'pattern-characters-red': "url('../assets/icons/pattern-characters-red.png')",
          'character-zelda': "url('../assets/icons/NSwitch.png')",
          'wave-pink': "url('../assets/icons/wave-pink.png')",
          'yellow-dots': "url('../assets/icons/yellow-dots.png')",
          'zelda-gif': "url('../assets/icons/trifgif.gif')",
          'wave-zelda': "url('../assets/icons/wave-zelda.png')",
        }),
        screens:{
          'xsm': '320px'
        }
      },
    },
    variants: {
        extend: {},
    },
    plugins: [],
  }