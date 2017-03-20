exports.index = function(req, res) {
  res.render('home/index', {
    title: "Welcome",
    header: "Welcome to the site"
  })
}
