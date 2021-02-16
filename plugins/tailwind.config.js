module.exports = ({ dev, rootDir, srcDir }) => ({
    theme: {
      darkSelector: '.dark-mode',
    },
    variants: {
      backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
      borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
      textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
    },
    plugins: [
      require('tailwindcss-dark-mode')()
    ],
    purge: {
      // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
      enabled: !dev,
      content: [
        `${srcDir}/components/**/*.{vue,js}`,
        `${srcDir}/layouts/**/*.vue`,
        `${srcDir}/pages/**/*.vue`,
        `${srcDir}/plugins/**/*.{js,ts}`,
        `${rootDir}/nuxt.config.{js,ts}`
      ]
    }
  })
  