const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  plugins: [new Dotenv()],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
