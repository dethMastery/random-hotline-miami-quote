const quote = require('./modules/quote')
const Index = require('./pages/index')
const About = require('./pages/about')

function Route(app, root) {
  app.get('/', (req, res) => {
    const Random = Math.floor(Math.random() * quote.length)

    res.send(Index(quote[Random]))
  })

  app.get('/about', (req, res) => {
    res.send(About)
  })

  app.get('/api/quotes', (req, res) => {
    const Random = Math.floor(Math.random() * quote.length)

    res.json(quote[Random])
  })
}

module.exports = Route
