var connect = require('connect-assets');

module.exports = connect({
  paths: [
    'app/assets/css',
    'app/assets/js',
    'app/assets/img'
  ]
})
