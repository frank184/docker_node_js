var express = require('express')
var router = express.Router()
var path = require('path')

var controllers = require('require-all')({
  dirname     :  __dirname + '/../app/controllers',
  filter      :  /(.+_controller)\.js$/,
  excludeDirs :  /^\.(git|svn)$/,
  recursive   : true
});

// logging
router.use(function(req, res, next) {
  console.log("[+] " + req.connection.remoteAddress + " Requested " + req.url + "")
  next()
})

// root path
router.get('/', controllers.home_controller.index)
// 404
router.get('*', function(req, res) {
  file = path.resolve(__dirname + '/../public/404.html')
  res.sendFile(file)
})

module.exports = router
