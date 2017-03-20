var express = require('express')
var router = express.Router()

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

module.exports = router
