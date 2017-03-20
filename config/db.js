var mysql = require('mysql')
var db_name = "docker_node_js"

module.exports = function() {
  var connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: 'root',
    database: db_name
  })

  connection.connect(function(err) {
    if (err) console.log("[-] Error connecting database " + db_name +": " + err)
    else console.log("[+] Connection established with database " + db_name)
  })

  return connection
}
