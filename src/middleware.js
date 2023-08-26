function Middleware(exp, app) {
  app.use(exp.static('static'))
}

module.exports = Middleware
