module.exports = {
  mode: 'jit',
  purge: [
    // list of your markup files
    './index.html'
  ],
  theme: {
    extend: {
      colors: require('daisyui/colors')
    },
  },
  daisyui: {
    styled: true, // set false if you only need the skeleton of components
    themes: true, // set false if you dont need DaisyUI themes
    rtl: false, // set true if your <body> has dir="rtl"
  },
  plugins: [
    require('daisyui'),
  ],
}
