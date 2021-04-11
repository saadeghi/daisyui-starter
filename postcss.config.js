module.exports = {
  plugins: [
      require('tailwindcss'),
      (process.env.NODE_ENV === 'production') ? require('autoprefixer') : null,
      (process.env.NODE_ENV === 'production') ? require('cssnano') : null,
  ]
}