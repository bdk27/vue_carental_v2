const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: './src/main.js',
      template: './public/index.html',
    },
    carBooking: {
      entry: './src/pages/carBooking/carBooking.js',
      template: './public/carBooking.html',
      title: 'car_booking',
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vue_carental_v2/'
  : '/'
})
