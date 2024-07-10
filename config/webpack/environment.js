const { environment } = require('@rails/webpacker')
const path = require('path')

const babelLoader = environment.loaders.get('babel')
babelLoader.exclude = /node_modules\/(?!@hotwired\/turbo|@hotwired\/stimulus)/

babelLoader.include = [
  path.resolve(__dirname, '../../app/javascript'),
  path.resolve(__dirname, '../../node_modules/@hotwired/turbo'),
  path.resolve(__dirname, '../../node_modules/@hotwired/stimulus')
]

environment.config.merge({
  resolve: {
    alias: {
      'stimulus': '@hotwired/stimulus'
    }
  }
})

module.exports = environment
