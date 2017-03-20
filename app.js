var express = require('express')
var bodyParser = require('body-parser')
var expressLayouts = require('express-ejs-layouts')

var app = module.exports = express()

app.listen(3000, function() {
  port = this.address().port
  hostname = this.address().address
  hostname = hostname === '::' ? 'localhost' : hostname
  console.log('[+] Listening on ' + hostname + ':' + port)
})

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views')
app.set('layout', 'layouts/application')
app.use(expressLayouts)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.connection = require('./config/db')
app.use(require('./config/routes'))
app.use(require('./config/assets'))
