const { environment } = require('@rails/webpacker');

environment.loaders.append('babel', {
  test: /\.js$/,
  use: [{
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-syntax-dynamic-import']
    }
  }]
});

module.exports = environment;
